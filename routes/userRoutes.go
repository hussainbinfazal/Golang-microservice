package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/hussainbinfazal/Golang-microservice/controllers"
)

func UserRoutes(app *fiber.App) {
	api := app.Group("/api/v1")
	
	api.Get("/users", controllers.GetUsers)
	api.Post("/users", controllers.CreateUser)
	api.Put("/users/:id", controllers.UpdateUser)
}