import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Logo } from '../logo';

import * as styles from './menu.css';

import { MENU_ITEM_ENTRY } from '@/constant/menu';
import { clientEnv } from '@/env/client';
import { Button } from '@/ui/foundation/button';

export const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    const res = await fetch(clientEnv.NEXT_PUBLIC_GQL_ENDPOINT.replace('/query', '/logout'), {
      credentials: 'include',
      method: 'POST',
    });

    if (res.ok) {
      router.push('/login');
    } else {
      console.error('logout failed');
    }
  };

  return (
    <>
      <aside className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <Logo />
          Monica.log
        </div>
        <div className={styles.menu}>
          {MENU_ITEM_ENTRY.map(([label, { ActiveIcon, DefaultIcon, isActive, link }]) => (
            <Link className={styles.menuItem[isActive(pathname) ? 'active' : 'default']} key={label} href={link}>
              {isActive(pathname) ? <ActiveIcon /> : <DefaultIcon />}
              <span>{label}</span>
            </Link>
          ))}
        </div>
        <div className={styles.logout}>
          <Button variant="secondary" onClick={logout}>
            Logout
          </Button>
        </div>
      </aside>
    </>
  );
};
