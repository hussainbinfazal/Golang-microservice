# 🚀 Golang Microservice

<div align="center">
  <img src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" alt="Go">
  <img src="https://img.shields.io/badge/Microservice-Architecture-blue?style=for-the-badge" alt="Microservice">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</div>

<p align="center">
  A high-performance microservice built with Go for scalable and efficient backend operations.
</p>

---

## 📋 Prerequisites

- 🐹 **Go 1.21** or higher
- 🔧 **Git**

## 🛠️ Installation

1. **Clone the repository:**
```bash
git clone https://github.com/hussainbinfazal/Golang-microservice.git
cd Golang-microservice/CRUD-GO
```

2. **Install dependencies:**
```bash
go mod tidy
```

3. **Run the application:**
```bash
go run microservice-golang/main.go
```

4. **Run with live reload (Air):**
```bash
air
```

## 📁 Project Structure

```
📦 Golang-microservice
├── 📁 AUTH-NODE/        # Node.js authentication service
├── 📁 CRUD-GO/          # Go CRUD microservice
│   ├── 📁 config/       # Database configuration
│   │   └── db.go
│   ├── 📁 controllers/  # HTTP request handlers
│   │   └── userController.go
│   ├── 📁 models/       # Data models
│   │   └── user.go
│   ├── 📁 routes/       # API route definitions
│   │   └── userRoutes.go
│   ├── 📁 microservice-golang/
│   │   └── 🚀 main.go   # Application entry point
│   ├── 📄 go.mod        # Go module file
│   ├── 🔒 go.sum        # Go dependencies checksum
│   ├── ⚡ air.toml      # Live reload configuration
│   └── 🙈 .gitignore    # Git ignore rules
└── 📖 README.md         # Project documentation
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | ❤️ Health check endpoint |
| `GET` | `/api/v1/users` | 👥 Get all users |
| `POST` | `/api/v1/users` | ➕ Create new user |
| `GET` | `/api/v1/users/:id` | 👤 Get user by ID |
| `PUT` | `/api/v1/users/:id` | ✏️ Update user |
| `DELETE` | `/api/v1/users/:id` | 🗑️ Delete user |

## 🔧 Development

### 🧪 Running Tests
```bash
go test ./...
```

### 🏗️ Building
```bash
go build -o bin/app microservice-golang/main.go
```

### 🔥 Live Reload Development
```bash
air  # Automatically restarts on file changes
```

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add some amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔄 Open a Pull Request

## 📄 License

This project is licensed under the **MIT License**. 📜