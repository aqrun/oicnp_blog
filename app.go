package main

import (
	"github.com/gin-gonic/gin"

	"./backend"
	"./frontend"
)

func main() {
	r := gin.Default()

	r.Static("/public", "./public")
	r.LoadHTMLGlob("./views/*")

	fr := r.Group("/v1")
	{
		frontend.BindRouters(fr)
	}

	br := r.Group("/admin")
	{
		backend.BindRoutes(br)
	}

	r.Run(":8080")
}
