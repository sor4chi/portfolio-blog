// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type Blog struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Slug        string `json:"slug"`
	Description string `json:"description"`
	Content     string `json:"content"`
	CreatedAt   string `json:"createdAt"`
	UpdatedAt   string `json:"updatedAt"`
	PublishedAt string `json:"publishedAt"`
}

type BlogInput struct {
	Title       string `json:"title"`
	Slug        string `json:"slug"`
	Description string `json:"description"`
	Content     string `json:"content"`
	PublishedAt string `json:"publishedAt"`
}
