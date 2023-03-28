package model

import (
	"fmt"

	"github.com/sor4chi/portfolio-blog/server/entity"
)

func NewTagFromEntity(e *entity.Tag) *Tag {
	return &Tag{
		ID:        fmt.Sprintf("%d", e.ID),
		Slug:      e.Slug,
		Name:      e.Name,
		CreatedAt: e.CreatedAt.String(),
		UpdatedAt: e.UpdatedAt.String(),
	}
}
