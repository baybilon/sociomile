package database

import (
	"log"
	"sociomile/models"

	"golang.org/x/crypto/bcrypt"
)

func Seeder() error {
	tenants := []models.Tenant{
		{
			Name:  "PT. Dibawah UMR",
			Email: "umr@mail.com",
			Phone: "08123456789",
		},
		{
			Name:  "PT. Mencari Cinta Sejati",
			Email: "cinta@mail.com",
			Phone: "08123456789",
		},
		{
			Name:  "PT. Santai Saja Kawan",
			Email: "santai@mail.com",
			Phone: "08123456789",
		},
	}

	DB.Create(&tenants)

		users := []struct{
			Name string
			Email string
			Role string
			Password string
		}{
			{Name: "Atang", Email: "atang@mail.com", Role: "Admin", Password: "123"},
			{Name: "Asep", Email: "asep@mail.com", Role: "Admin", Password: "123"},
		}

		hashedUser := make([]models.User, 0, len(users))
		for _, hash := range users {
			hashed, err := bcrypt.GenerateFromPassword([]byte(hash.Password), 14)
			if err != nil {
				return err
			}
			hashedUser = append(hashedUser, models.User{
				Name: hash.Name,
				Email: hash.Email,
				Role: hash.Role,
				Password: hashed,
			})
		}

		if len(hashedUser) > 0 {
			DB.Create(&hashedUser)
		}

	log.Println("Database seeded successfully!")
    return nil
}