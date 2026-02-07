## Front-end Installation

Use the node package manager to install Next.JS

```bash
npm install
```

## Back-end Installation

Use the golang package manager to install GoFiber and Gorm

Gofiber

```
go get github.com/gofiber/fiber/v3
```

Gorm

```
go get -u gorm.io/gorm
go get -u gorm.io/driver/mysql
```

## Config .env

```
DB_USER=root
DB_PASSWORD=root
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=sociomile
JWT_SECRET=secret
```

## Port

```
# frontend
localhost:3000

# backend
localhost:8000
```

## API End Point

```
POST/api/user/register
POST/api/agent/register
GET/api/tenant
POST/api/tenant/register
POST/api/tenant/update/:id
POST/api/tenant/delete/:id
POST/api/login
GET/api/user
POST/api/logout
```
