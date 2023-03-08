export const blogData = `こんにちは、monicaです。
この度、ウルシステムズ株式会社さん主催の[UTE-1](https://uteone.jp/)というイベントに参加してきました。
UTE-1とは、学生を対象にしたGoアプリケーション開発のビジネスタスク力・パフォーマンスチューニング力を競うコンテストです。
ISUCONの学生向け、Goに特化したバージョンといった感じです。

## 私たちについて

### なぜUTE-1に参加したのか

私のいる某大学で昨年度の夏に新しく「Web研究会」を立ち上げました。
(正式には競プロサークルMaximumの子サークルという立ち位置です。)

未経験の学生がWebアプリケーション開発の基礎を学べる基盤を作りたいという目的で実務経験のある私(monica)と競プロサークルの代表(Asa)の２人で立ち上げました。
ISUCONに参加することを目標にして人材育成に励んでいたところ、ウルシステムズさんからUTE-1の招待をいただき、せっかくの機会なので参加してみようということになりました。

### メンバー構成

- 私（monica）: フルスタックエンジニア、Go初心者、実務経験者
- Asa: フルスタックエンジニア、Go初心者、Atcoderがつよいひと
- Through: Web未経験、一年前に競プロでプログラミングデビューをしたひと
- Kasa: Web未経験、一年前に競プロでプログラミングデビューをしたひと

### 事前準備

学期末が終わった2/9から毎晩3時間ほどあつまり、ISUCONの過去問をといて主に「パフォーマンスチューニング」について勉強しました[^1]。
本番が2/25日なので15日間と約二週間という短い期間で基礎をがん詰めするということになりました。

## 本番

UTE-1運営の意向により、問題内容やコードは公開しないとのことなので、ここでは私たちの取り組みについてのみ記載します。

### 流れ

|時間|内容|
|:--|:--|
|10:00|開会式|
|10:30|リポジトリの配布、本番環境の公開、開発スタート|
|17:00|本番環境の停止、開発終了、最終採点スタート|
|17:40|最終採点終了、結果発表、閉会式|
|18:00|終了|
|...|(優勝者だけが参加できる領域)|

### 開発環境

- リポジトリ: 事前にUTE-1のGithub Organizationへ招待され、各チームに1つ配布されます
- 環境:
  - ローカル: docker, docker-compose, devcontainer
  - 本番: k8s, GKE(GCP)
  - CI/CD: Github Actions
  - DB: MongoDB, MySQL

### チームの役割分担

|メンバー|役割|
|:--|:--|
|Through, Kasa| バグ洗い出し、Issue立て（仕様書を熟読してドメインリーダーになってもらう目的）|
|自分, Asa| Issue解決、バグ修正|

なるべく初心者の2人の開発負担を軽くしたいということで、このような役割分担をしました。

### バグの発見と修正

私たちはIssue Templateを事前に用意して、初心者でもGitFlowがうまく運用できるようにしておいたため、バグの発見から共有、タスクマネジメントはとてもスムーズでした。

![issue template](/images/117a84653f69a7/issue_template.png)

まずは、仕様書を読み、バグを洗い出しました。想定外[^2]のバグFixタスクなのでとても苦戦しました。
特にIO(Req,Res)のバリデーションやクエリ修正等のシンプルなものが多かったですが、トランザクション系のアプリ故になかなか読み慣れない書き方が多く、発見と修正に時間がかかりました。

![issue list](/images/117a84653f69a7/issue_list.png)

### パフォーマンスチューニング

[^1]のとおり、パフォーマンススコアを上げるためには、先にある程度のバグを修正する必要がありました。
自分たちのチームはバグで想定以上につまづいてしまったのでほとんどパフォーマンスチューニングに取り組めませんでした。
MongoDBやMysqlへのスキーマはSQLで定義せず、Go上のマイグレーション（？）から定義していました、しかしISUCON対策で未経験二人にSQLを教えていたため本番では詰んでいました...
（先見の明があれば...もっと実務的なことをやっておけばよかった...と反省しています）

## 結果

初動はかなり順調で、開始二時間半の時点で5/30位にランクインしました。
![result](/images/117a84653f69a7/result_max.png)

しかし、バグ修正と仕様書の解釈ミスが重なりに重なった結果、中盤以降のスコアが停滞してしまい（同じバグで3時間ほど悩んでしまいました...）、最終的には22/30位にとどまる結果となりました。
![result](/images/117a84653f69a7/result_final.png)

## 反省

結果を踏まえて当日中に感想会という形で振り返りを行いました。

- 仕様書の解釈ミスが目立った
  - 仕様書を読む担当とバグ修正担当で疎通がうまく取れず、解釈ミスがバグ改善の時間にも影響してしまったので、**ビジネスタスク力**や**読解力**がより重要になると感じました。
- バグ修正の時間がかかった
  - 適宜**テスト**を書くべきだった（時間的な焦りからテストを書くという選択肢に踏み出せなかった）
  - ローカル開発環境の立ち上げで詰まってしまった（dockerの立ち上げで30分ほどかかり、さらにローカルでの改修後反映の方法がわからず、結局本番でログを見ながら修正した）
  - ベンチマークをより積極的に使うべきだった（点数からできる問題推測やログを見ることも重要だと感じた）
- 人的リソースのマネジメント
  - 30分ごとにチーム全員へ進捗を聞くという形で被っているタスクをしていないか、同じ問題に詰まりすぎていないかを確認していたつもりだったが、結局口頭での毎回の確認が目立ち、時間がかかってしまった
  - 例えばIssue Flowを強固にしたり、リアルタイムタスク共有ツールを使ったりするなど、チーム全体のコミュニケーションをよりスムーズにする方法があると感じた
- 十分な事前学習ができていなかった
  - これは参加が決まって学期末が終わってからの対策で、効果があまり出なかった
  - 次回(ISUCONに参加する予定)はより長めの対策と過去問分析をしたい

## まとめ

ISUCONに参加して、自分とサークルとしての課題を見つけることができました。
<!-- textlint-disable -->
今回見つけた課題を今後のサークルの講義で活かし、より実践的な講義をしていきたいと思います。
<!-- textlint-enable -->

さいごに運営の方々、チームの皆さん、応援してくれた皆さん、ありがとうございました！

[^1]: ISUCONの過去問を事前勉強として解いていましたが、問題の仕様上Performanceチューニングの問題へ取り組む前にバグを見つけ修正しないとならなかったため、結局あまり役に立ちませんでした..。
[^2]: 見つけたバグを可能な限り修正していくものだと当時勘違いしていましたが、実際はベンチマーカーが吐いたバグ修正リストを元に修正していくものでした。気づくのに時間がかかったので、初動でベンチマークを走らせてみたチームほど点数が高かったと感じています。`
