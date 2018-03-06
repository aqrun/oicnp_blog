package site

import (
	"github.com/gin-gonic/gin"
)

func Index(c *gin.Context){
	c.HTML(200, "frontend_site_index.tmpl", gin.H{
		"title": "test title",
	})
}