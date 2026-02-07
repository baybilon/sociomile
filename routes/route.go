package routes

import (
	"sociomile/controllers"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App){

	app.Post("/api/user/register", controllers.UserRegister)
	app.Post("/api/agent/register", controllers.AgentRegister)
	app.Get("/api/tenant/", controllers.GetTenants)
	app.Post("/api/tenant/register/", controllers.TenantRegister)
	app.Post("/api/tenant/update/:id", controllers.TenantUpdate)
	app.Post("/api/tenant/delete/:id", controllers.TenantDelete)
	app.Post("/api/login", controllers.Login)
	app.Get("/api/user", controllers.User)
	app.Post("/api/logout", controllers.Logout)

}