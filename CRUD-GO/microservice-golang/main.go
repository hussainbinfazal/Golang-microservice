package main

import (
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/hussainbinfazal/Golang-microservice/config"
	"github.com/hussainbinfazal/Golang-microservice/routes"
)

func main() {
	fmt.Println("🚀 Starting Microservice Backend...")

	// Connect to MongoDB
	config.ConnectDB()

	app := fiber.New()

	// Health check route
	app.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"status":  "OK",
			"message": "Microservice is running",
		})
	})
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Welcome to the Golang CRUD Service by Hussain!")
	})

	// Setup routes
	routes.UserRoutes(app)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Printf("🌐 Server running on port %s\n", port)
	log.Fatal(app.Listen(":" + port))
}
