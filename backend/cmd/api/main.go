package main

import (
	"log"
	"os"

	"taxease-kenya/internal/auth"
	"taxease-kenya/internal/calculator"
	"taxease-kenya/internal/dashboard"
	"taxease-kenya/internal/invoice"
	"taxease-kenya/internal/notification"
	"taxease-kenya/internal/chatbot"
	"taxease-kenya/internal/expense"
	"taxease-kenya/internal/integration"
	"taxease-kenya/pkg/config"
	"taxease-kenya/pkg/database"
	"taxease-kenya/pkg/logger"
	"taxease-kenya/api/v1"

	"github.com/gin-gonic/gin"
)

func main() {
	// Load configuration
	cfg := config.Load()

	// Initialize logger
	logger := logger.New(cfg.LogLevel, cfg.LogFormat)

	// Initialize database
	db, err := database.New(cfg.DatabaseURL)
	if err != nil {
		logger.Fatal("Failed to connect to database", err)
		os.Exit(1)
	}

	// Initialize Redis
	redis, err := database.NewRedis(cfg.RedisURL)
	if err != nil {
		logger.Fatal("Failed to connect to Redis", err)
		os.Exit(1)
	}

	// Initialize services
	authService := auth.NewService(db, redis, cfg.JWTSecret)
	calcService := calculator.NewService(db, logger)
	dashboardService := dashboard.NewService(db, logger)
	invoiceService := invoice.NewService(db, logger)
	notificationService := notification.NewService(cfg, logger)
	chatbotService := chatbot.NewService(cfg.OpenAIKey, logger)
	expenseService := expense.NewService(db, logger)
	integrationService := integration.NewService(cfg, logger)

	// Initialize API routes
	router := gin.Default()
	api := v1.NewAPI(
		authService,
		calcService,
		dashboardService,
		invoiceService,
		notificationService,
		chatbotService,
		expenseService,
		integrationService,
		logger,
	)

	// Setup routes
	api.SetupRoutes(router)

	// Start server
	port := cfg.Port
	if port == "" {
		port = "8080"
	}

	logger.Info("Starting server on port " + port)
	if err := router.Run(":" + port); err != nil {
		logger.Fatal("Failed to start server", err)
		os.Exit(1)
	}
}
