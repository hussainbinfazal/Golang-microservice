# Golang Microservice

A microservice built with Go for scalable and efficient backend operations.

## Prerequisites

- Go 1.21 or higher
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/hussainbinfazal/Golang-microservice.git
cd Golang-microservice
```

2. Install dependencies:
```bash
go mod tidy
```

3. Run the application:
```bash
go run main.go
```

## Project Structure

```
├── main.go          # Application entry point
├── go.mod           # Go module file
├── go.sum           # Go dependencies checksum
└── README.md        # Project documentation
```

## API Endpoints

- `GET /health` - Health check endpoint

## Development

### Running Tests
```bash
go test ./...
```

### Building
```bash
go build -o bin/app main.go
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.