package main

import (
	"sociomile/database"
	"sociomile/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {

	database.Connect()

	app := fiber.New()

	app.Use(func(c *fiber.Ctx) error {
		println("method: ", c.Method(), " path: ", c.Path())
		return c.Next()
	})

	app.Use(cors.New(cors.Config{
		AllowOrigins:"http://localhost:5173,http://localhost:3000",
		AllowCredentials: true,
		AllowMethods: "GET,POST,PUT,DELETE,OPTIONS",
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
	}))

	routes.Setup(app)

	app.Listen(":8000")
}