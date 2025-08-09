package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/hussainbinfazal/Golang-microservice/models"
)

func GetUsers(c *fiber.Ctx) error {
	users := models.GetAllUsers()
	return c.JSON(fiber.Map{
		"success": true,
		"data":    users,
	})
}

func CreateUser(c *fiber.Ctx) error {
	var user models.User

	if err := c.BodyParser(&user); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"success": false,
			"message": "Invalid request body",
		})
	}

	newUser := models.CreateUser(user)
	return c.Status(201).JSON(fiber.Map{
		"success": true,
		"data":    newUser,
	})
}
func UpdateUser(c *fiber.Ctx) error {
	// Get ID from URL parameter
	id, err := c.ParamsInt("id")
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"success": false,
			"message": "Invalid user ID",
		})
	}

	// Parse request body
	var user models.User
	if err := c.BodyParser(&user); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"success": false,
			"message": "Invalid request body",
		})
	}

	// Update user via model
	updatedUser := models.UpdateUser(id, user)
	if updatedUser.ID == 0 {
		return c.Status(404).JSON(fiber.Map{
			"success": false,
			"message": "User not found",
		})
	}

	return c.JSON(fiber.Map{
		"success": true,
		"data":    updatedUser,
	})
}

func DeleteUser(c *fiber.Ctx) error { // Implement DeleteUser
	id, err := c.ParamsInt("id")
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"success": false,
			"message": "Invalid user ID",
		})
	}

	models.DeleteUser(id)
	return c.JSON(fiber.Map{
		"success": true,
		"message": "User deleted successfully",
	})

}
func GetUserById(c *fiber.Ctx) error { // Implement DeleteUser
	id, err := c.ParamsInt("id")
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"success": false,
			"message": "Invalid user ID",
		})
	}

	userById := models.GetUserById(id)
	return c.JSON(fiber.Map{
		"success": true,
		"message": "User deleted successfully",
		"data":    userById,
	})

}
