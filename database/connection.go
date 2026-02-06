package database

import (
	"fmt"
	"os"
	"sociomile/models"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect(){

	err := godotenv.Load() 
    if err != nil {
        fmt.Println("Warning: Error loading .env file")
    }

	user := os.Getenv("DB_USER")
    pass := os.Getenv("DB_PASSWORD")
    host := os.Getenv("DB_HOST")
    port := os.Getenv("DB_PORT")
    name := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=true&loc=Local",user, pass, host, port, name)
	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil{
		panic("Failed to connect database")
	}

	DB = connection

	connection.AutoMigrate(
		&models.User{},
		&models.Agent{},
		&models.Tenant{},
		&models.Customer{},
		&models.Ticket{},
	)

if err := Seeder(); err != nil {
    panic(err)
}

}