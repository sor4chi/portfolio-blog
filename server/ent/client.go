// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"log"

	"github.com/sor4chi/portfolio-blog/server/ent/migrate"

	"entgo.io/ent"
	"entgo.io/ent/dialect"
	"entgo.io/ent/dialect/sql"
	"github.com/sor4chi/portfolio-blog/server/ent/blog"
)

// Client is the client that holds all ent builders.
type Client struct {
	config
	// Schema is the client for creating, migrating and dropping schema.
	Schema *migrate.Schema
	// Blog is the client for interacting with the Blog builders.
	Blog *BlogClient
	// additional fields for node api
	tables tables
}

// NewClient creates a new client configured with the given options.
func NewClient(opts ...Option) *Client {
	cfg := config{log: log.Println, hooks: &hooks{}, inters: &inters{}}
	cfg.options(opts...)
	client := &Client{config: cfg}
	client.init()
	return client
}

func (c *Client) init() {
	c.Schema = migrate.NewSchema(c.driver)
	c.Blog = NewBlogClient(c.config)
}

type (
	// config is the configuration for the client and its builder.
	config struct {
		// driver used for executing database requests.
		driver dialect.Driver
		// debug enable a debug logging.
		debug bool
		// log used for logging on debug mode.
		log func(...any)
		// hooks to execute on mutations.
		hooks *hooks
		// interceptors to execute on queries.
		inters *inters
	}
	// Option function to configure the client.
	Option func(*config)
)

// options applies the options on the config object.
func (c *config) options(opts ...Option) {
	for _, opt := range opts {
		opt(c)
	}
	if c.debug {
		c.driver = dialect.Debug(c.driver, c.log)
	}
}

// Debug enables debug logging on the ent.Driver.
func Debug() Option {
	return func(c *config) {
		c.debug = true
	}
}

// Log sets the logging function for debug mode.
func Log(fn func(...any)) Option {
	return func(c *config) {
		c.log = fn
	}
}

// Driver configures the client driver.
func Driver(driver dialect.Driver) Option {
	return func(c *config) {
		c.driver = driver
	}
}

// Open opens a database/sql.DB specified by the driver name and
// the data source name, and returns a new client attached to it.
// Optional parameters can be added for configuring the client.
func Open(driverName, dataSourceName string, options ...Option) (*Client, error) {
	switch driverName {
	case dialect.MySQL, dialect.Postgres, dialect.SQLite:
		drv, err := sql.Open(driverName, dataSourceName)
		if err != nil {
			return nil, err
		}
		return NewClient(append(options, Driver(drv))...), nil
	default:
		return nil, fmt.Errorf("unsupported driver: %q", driverName)
	}
}

// Tx returns a new transactional client. The provided context
// is used until the transaction is committed or rolled back.
func (c *Client) Tx(ctx context.Context) (*Tx, error) {
	if _, ok := c.driver.(*txDriver); ok {
		return nil, errors.New("ent: cannot start a transaction within a transaction")
	}
	tx, err := newTx(ctx, c.driver)
	if err != nil {
		return nil, fmt.Errorf("ent: starting a transaction: %w", err)
	}
	cfg := c.config
	cfg.driver = tx
	return &Tx{
		ctx:    ctx,
		config: cfg,
		Blog:   NewBlogClient(cfg),
	}, nil
}

// BeginTx returns a transactional client with specified options.
func (c *Client) BeginTx(ctx context.Context, opts *sql.TxOptions) (*Tx, error) {
	if _, ok := c.driver.(*txDriver); ok {
		return nil, errors.New("ent: cannot start a transaction within a transaction")
	}
	tx, err := c.driver.(interface {
		BeginTx(context.Context, *sql.TxOptions) (dialect.Tx, error)
	}).BeginTx(ctx, opts)
	if err != nil {
		return nil, fmt.Errorf("ent: starting a transaction: %w", err)
	}
	cfg := c.config
	cfg.driver = &txDriver{tx: tx, drv: c.driver}
	return &Tx{
		ctx:    ctx,
		config: cfg,
		Blog:   NewBlogClient(cfg),
	}, nil
}

// Debug returns a new debug-client. It's used to get verbose logging on specific operations.
//
//	client.Debug().
//		Blog.
//		Query().
//		Count(ctx)
func (c *Client) Debug() *Client {
	if c.debug {
		return c
	}
	cfg := c.config
	cfg.driver = dialect.Debug(c.driver, c.log)
	client := &Client{config: cfg}
	client.init()
	return client
}

// Close closes the database connection and prevents new queries from starting.
func (c *Client) Close() error {
	return c.driver.Close()
}

// Use adds the mutation hooks to all the entity clients.
// In order to add hooks to a specific client, call: `client.Node.Use(...)`.
func (c *Client) Use(hooks ...Hook) {
	c.Blog.Use(hooks...)
}

// Intercept adds the query interceptors to all the entity clients.
// In order to add interceptors to a specific client, call: `client.Node.Intercept(...)`.
func (c *Client) Intercept(interceptors ...Interceptor) {
	c.Blog.Intercept(interceptors...)
}

// Mutate implements the ent.Mutator interface.
func (c *Client) Mutate(ctx context.Context, m Mutation) (Value, error) {
	switch m := m.(type) {
	case *BlogMutation:
		return c.Blog.mutate(ctx, m)
	default:
		return nil, fmt.Errorf("ent: unknown mutation type %T", m)
	}
}

// BlogClient is a client for the Blog schema.
type BlogClient struct {
	config
}

// NewBlogClient returns a client for the Blog from the given config.
func NewBlogClient(c config) *BlogClient {
	return &BlogClient{config: c}
}

// Use adds a list of mutation hooks to the hooks stack.
// A call to `Use(f, g, h)` equals to `blog.Hooks(f(g(h())))`.
func (c *BlogClient) Use(hooks ...Hook) {
	c.hooks.Blog = append(c.hooks.Blog, hooks...)
}

// Intercept adds a list of query interceptors to the interceptors stack.
// A call to `Intercept(f, g, h)` equals to `blog.Intercept(f(g(h())))`.
func (c *BlogClient) Intercept(interceptors ...Interceptor) {
	c.inters.Blog = append(c.inters.Blog, interceptors...)
}

// Create returns a builder for creating a Blog entity.
func (c *BlogClient) Create() *BlogCreate {
	mutation := newBlogMutation(c.config, OpCreate)
	return &BlogCreate{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// CreateBulk returns a builder for creating a bulk of Blog entities.
func (c *BlogClient) CreateBulk(builders ...*BlogCreate) *BlogCreateBulk {
	return &BlogCreateBulk{config: c.config, builders: builders}
}

// Update returns an update builder for Blog.
func (c *BlogClient) Update() *BlogUpdate {
	mutation := newBlogMutation(c.config, OpUpdate)
	return &BlogUpdate{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// UpdateOne returns an update builder for the given entity.
func (c *BlogClient) UpdateOne(b *Blog) *BlogUpdateOne {
	mutation := newBlogMutation(c.config, OpUpdateOne, withBlog(b))
	return &BlogUpdateOne{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// UpdateOneID returns an update builder for the given id.
func (c *BlogClient) UpdateOneID(id int) *BlogUpdateOne {
	mutation := newBlogMutation(c.config, OpUpdateOne, withBlogID(id))
	return &BlogUpdateOne{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// Delete returns a delete builder for Blog.
func (c *BlogClient) Delete() *BlogDelete {
	mutation := newBlogMutation(c.config, OpDelete)
	return &BlogDelete{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// DeleteOne returns a builder for deleting the given entity.
func (c *BlogClient) DeleteOne(b *Blog) *BlogDeleteOne {
	return c.DeleteOneID(b.ID)
}

// DeleteOneID returns a builder for deleting the given entity by its id.
func (c *BlogClient) DeleteOneID(id int) *BlogDeleteOne {
	builder := c.Delete().Where(blog.ID(id))
	builder.mutation.id = &id
	builder.mutation.op = OpDeleteOne
	return &BlogDeleteOne{builder}
}

// Query returns a query builder for Blog.
func (c *BlogClient) Query() *BlogQuery {
	return &BlogQuery{
		config: c.config,
		ctx:    &QueryContext{Type: TypeBlog},
		inters: c.Interceptors(),
	}
}

// Get returns a Blog entity by its id.
func (c *BlogClient) Get(ctx context.Context, id int) (*Blog, error) {
	return c.Query().Where(blog.ID(id)).Only(ctx)
}

// GetX is like Get, but panics if an error occurs.
func (c *BlogClient) GetX(ctx context.Context, id int) *Blog {
	obj, err := c.Get(ctx, id)
	if err != nil {
		panic(err)
	}
	return obj
}

// Hooks returns the client hooks.
func (c *BlogClient) Hooks() []Hook {
	return c.hooks.Blog
}

// Interceptors returns the client interceptors.
func (c *BlogClient) Interceptors() []Interceptor {
	return c.inters.Blog
}

func (c *BlogClient) mutate(ctx context.Context, m *BlogMutation) (Value, error) {
	switch m.Op() {
	case OpCreate:
		return (&BlogCreate{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpUpdate:
		return (&BlogUpdate{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpUpdateOne:
		return (&BlogUpdateOne{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpDelete, OpDeleteOne:
		return (&BlogDelete{config: c.config, hooks: c.Hooks(), mutation: m}).Exec(ctx)
	default:
		return nil, fmt.Errorf("ent: unknown Blog mutation op: %q", m.Op())
	}
}

// hooks and interceptors per client, for fast access.
type (
	hooks struct {
		Blog []ent.Hook
	}
	inters struct {
		Blog []ent.Interceptor
	}
)
