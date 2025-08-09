package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	fmt.Println("hello Hussain ,Welcome to the Micoservice Backend")
	app := fiber.New()
	log.Fatal(app.Listen(":3000"))
}
