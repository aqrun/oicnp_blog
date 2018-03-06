package backend

import (
	"github.com/gin-gonic/gin"

	"./controllers/site"
)

func BindRoutes(r *gin.RouterGroup){
	r.GET("/", site.Index)
}