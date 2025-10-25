# 🇰🇪 TaxEase Kenya

A comprehensive web-based application that simplifies tax compliance for Kenyan business owners by automating tax filing, educating users about tax obligations, and managing invoicing and record-keeping.

## 🎯 Project Overview

TaxEase Kenya empowers small businesses and freelancers to:
- Understand their tax obligations easily
- File and manage taxes correctly and on time
- Learn tax literacy in an interactive, localized way
- Manage invoices and receipts seamlessly

## 🏗️ Project Structure

```
clip-trade/
├── backend/                 # Go backend API
│   ├── cmd/api/            # Application entry point
│   ├── internal/          # Internal packages
│   │   ├── auth/          # Authentication & authorization
│   │   ├── calculator/    # Tax calculation engines
│   │   ├── dashboard/     # Dashboard analytics
│   │   ├── invoice/       # Invoice management
│   │   ├── notification/  # SMS/Email/WhatsApp notifications
│   │   ├── chatbot/    # AI chatbot for tax guidance
│   │   ├── expense/       # Expense tracking & OCR
│   │   └── integration/   # External API integrations
│   ├── pkg/               # Shared packages
│   ├── api/               # API routes and handlers
│   └── migrations/        # Database migrations
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── services/     # API services
│   │   ├── store/        # State management
│   │   └── utils/        # Utility functions
│   └── public/           # Static assets
├── database/             # Database related files
│   ├── migrations/       # SQL migration files
│   ├── seeds/           # Database seed data
│   └── schemas/          # Database schemas
├── docs/                 # Documentation
├── tests/                # Test files
├── deployment/           # Deployment configurations
└── scripts/             # Utility scripts
```

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Go 1.21+ (for local development)
- Node.js 18+ (for local development)

### Using Docker (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd clip-trade
```

2. Copy environment variables:
```bash
cp env.example .env
```

3. Start the services:
```bash
docker-compose up -d
```

4. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080
- Database: localhost:5432

### Local Development

#### Backend Setup
```bash
cd backend
go mod download
go run cmd/api/main.go
```

#### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## 🧩 Core Features

### 1. 🧮 Automated Tax Calculator
- VAT, PAYE, Withholding Tax, Turnover Tax, Corporate Tax calculations
- Current KRA tax rates integration
- Tax liability summaries and deadline tracking

### 2. 📥 Invoice & Receipt Management
- KRA-compliant invoice generation
- Auto-tracking of paid/unpaid invoices
- PDF export and email/WhatsApp integration

### 3. 📊 Tax Dashboard
- Sales, expenses, and tax due overview
- Monthly/quarterly compliance tracking
- Graphical breakdowns of tax components

### 4. 🧾 Filing Assistant
- KRA iTax integration/simulation
- Auto-generate Excel/XML return files
- KRA acknowledgment storage

### 5. 🧠 Tax Literacy Chatbot
- AI-powered guidance in Swahili & English
- Tax glossary and FAQs
- Gamified "Tax Challenge" quizzes

### 6. 🔔 Smart Notifications
- SMS, WhatsApp, email alerts for deadlines
- Penalty warnings and custom settings

### 7. 🧾 Expense Tracking
- Business expense categorization
- Receipt OCR and PDF uploads
- Deductible expense calculations

### 8. 👩🏽‍💼 Multi-Role Support
- Sole Trader/Freelancer workflows
- SME Owner comprehensive tax management
- Accountant multi-business management

## 🛠️ Technology Stack

- **Backend**: Go, Gin framework, PostgreSQL, Redis
- **Frontend**: React, TailwindCSS, TypeScript
- **Database**: PostgreSQL with Redis caching
- **Authentication**: JWT-based auth
- **AI Chatbot**: OpenAI GPT API
- **Integrations**: M-Pesa API, Africa's Talking, KRA APIs
- **Deployment**: Docker, Nginx

## 📱 User Flow (MVP)

1. **Sign Up** → Enter KRA PIN and business type
2. **Add Data** → Input sales & expense data
3. **Auto-Calculate** → System calculates tax liability
4. **Dashboard** → View "Your VAT due this month: KES 14,500"
5. **Generate Returns** → Export XML for iTax upload
6. **AI Guidance** → Chatbot explains next steps and deadlines

## 🔧 Development

### Running Tests
```bash
# Backend tests
cd backend
go test ./...

# Frontend tests
cd frontend
npm test
```

### Database Migrations
```bash
# Run migrations
go run cmd/migrate/main.go up

# Rollback migrations
go run cmd/migrate/main.go down
```

## 📚 Documentation

- [API Documentation](docs/api/)
- [User Guide](docs/user-guide/)
- [Developer Guide](docs/developer-guide/)
- [Deployment Guide](docs/deployment/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Impact

TaxEase Kenya promotes a culture of compliance, transparency, and financial literacy — supporting Kenya's Vision 2030 goals of a formalized SME sector.
