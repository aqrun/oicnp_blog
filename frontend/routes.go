package frontend

import (
	"github.com/gin-gonic/gin"

	"./controllers/site"
	"./controllers/article"

)

func BindRouters(r *gin.RouterGroup) {
	r.GET("/", site.Index)

	r.GET("/blog", article.Index)
}