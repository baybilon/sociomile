package controllers

import (
	"sociomile/database"
	"sociomile/models"

	"github.com/gofiber/fiber/v2"
)

func AgentRegister(c *fiber.Ctx) error {
	
	type RegisterReq struct {
		Name      string `json:"name"`
        Email     string `json:"email"`
        Phone     string `json:"phone"`
        TenantIDs []uint `json:"tenant_id"`
	}

	var req RegisterReq
	
	if err := c.BodyParser(&req); err != nil {
		return err
	}

	var tenants []models.Tenant
	for _, id := range req.TenantIDs {
        tenants = append(tenants, models.Tenant{Id: id})
	}
	
	agent := models.Agent{
		Name:      req.Name,
        Email:     req.Email,
        Phone:     req.Phone,
        Tenant_id: tenants,
	}

	if err := database.DB.Create(&agent).Error; err != nil {
		return err
	}

	return c.JSON(agent)
}
