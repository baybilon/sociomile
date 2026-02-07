package controllers

import (
	"sociomile/database"
	"sociomile/models"

	"github.com/gofiber/fiber/v2"
)

func GetTenants(c *fiber.Ctx) error {
    var tenants []models.Tenant
    database.DB.Find(&tenants)
    return c.JSON(tenants)
}

func TenantRegister(c *fiber.Ctx) error {
	var data map[string]string
	
	if err := c.BodyParser(&data); err != nil {
		return err
	}

	tenant := models.Tenant{
		Name: data["name"],
		Email: data["email"],
		Phone: data["phone"],
	}

	database.DB.Create(&tenant)

	return c.JSON(tenant)
}

func TenantUpdate(c *fiber.Ctx) error {
	id := c.Params("id")
	var tenant models.Tenant

	if err := database.DB.First(&tenant, id).Error; err != nil {
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"message": "Tenant not found",
		})
	}

	var data map[string]interface{}
	if err := c.BodyParser(&data); err != nil {
		return err
	}

	result := database.DB.Model(&tenant).Updates(data)

	if result.Error != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "Update failed",
			"error":   result.Error.Error(),
		})
	}

	database.DB.First(&tenant, id)

	return c.JSON(tenant)
}

func TenantDelete(c *fiber.Ctx) error {
	id := c.Params("id")
	var tenant models.Tenant

	if err := database.DB.First(&tenant, id).Error; err != nil {
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"message": "Tenant not found",
		})
	}

	database.DB.Delete(&tenant)

	return c.JSON(fiber.Map{
		"message": "Tenant deleted successfully",
	})
}
