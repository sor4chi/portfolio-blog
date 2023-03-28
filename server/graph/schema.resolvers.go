package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.27

import (
	"context"
	"fmt"

	"github.com/sor4chi/portfolio-blog/server/graph/model"
)

// CreateBlog is the resolver for the createBlog field.
func (r *mutationResolver) CreateBlog(ctx context.Context, input model.BlogInput) (*model.Blog, error) {
	panic(fmt.Errorf("not implemented: CreateBlog - createBlog"))
}

// UpdateBlog is the resolver for the updateBlog field.
func (r *mutationResolver) UpdateBlog(ctx context.Context, id string, input model.BlogInput) (*model.Blog, error) {
	panic(fmt.Errorf("not implemented: UpdateBlog - updateBlog"))
}

// DeleteBlog is the resolver for the deleteBlog field.
func (r *mutationResolver) DeleteBlog(ctx context.Context, id string) (*model.Blog, error) {
	panic(fmt.Errorf("not implemented: DeleteBlog - deleteBlog"))
}

// Blogs is the resolver for the blogs field.
func (r *queryResolver) Blogs(ctx context.Context) ([]*model.Blog, error) {
	panic(fmt.Errorf("not implemented: Blogs - blogs"))
}

// Blog is the resolver for the blog field.
func (r *queryResolver) Blog(ctx context.Context, slug string) (*model.Blog, error) {
	panic(fmt.Errorf("not implemented: Blog - blog"))
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
