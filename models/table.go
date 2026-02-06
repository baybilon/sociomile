package models

import (
	"time"
)

type User struct {
	Id       uint   `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email" gorm:"unique"`
	Role     string `json:"role"`
	Password []byte `json:"-"`
}

type Agent struct {
	Id    uint   `json:"id"`
	Name  string `json:"name"`
	Tenant_id []Tenant `json:"tenant_id" gorm:"many2many:agent_tenant"`
	Email string `json:"email" gorm:"unique"`
	Phone string `json:"phone"`
}

type Tenant struct {
	Id    uint   `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email" gorm:"unique"`
	Phone string `json:"phone"`
}

type Customer struct {
	Id    uint   `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email" gorm:"unique"`
	Phone string `json:"phone"`
}

type Ticket struct {
	Id                uint   `json:"id"`
	Title             string `json:"name"`
	Description       string `json:"description"`
	Status            string `json:"status"`
	Priority          string `json:"priority"`
	Assigned_agent_id string `json:"assigned_agent_id"`
	Customer_id       string `json:"customer_id"`
	Tenant_id         string `json:"tenant_id"`
	Created_id        time.Time `json:"created_id" gorm:"date"`
	Updated_at        time.Time `json:"updated_at" gorm:"date"`
}