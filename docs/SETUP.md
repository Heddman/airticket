# AirTicket Setup Guide

## Prerequisites

- Node.js 18.0.0 or higher
- PostgreSQL 13.0 or higher
- npm or yarn

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Heddman/airticket.git
cd airticket
```

### 2. Setup Database

#### Create PostgreSQL Database

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE airticket;

# Exit psql
\q
```

#### Run Migrations

```bash
cd backend
npm install
npm run migrate
```

### 3. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Update .env with your configuration
# DB_USER=postgres
# DB_PASSWORD=your_password
# DB_NAME=airticket
# JWT_SECRET=your_secret_key

# Start development server
npm run dev
```

Backend will run at: `http://localhost:3000`

### 4. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run at: `http://localhost:5173`

## Environment Variables

### Backend (.env)

```
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=airticket
DB_USER=postgres
DB_PASSWORD=password
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:5173
```

## Verification

1. Check backend health: `curl http://localhost:3000/api/health`
2. Frontend should load without errors at `http://localhost:5173`
3. Try registering a new user account
4. Search for flights

## Troubleshooting

### Database Connection Error
- Verify PostgreSQL is running
- Check DB credentials in .env
- Ensure database exists

### Port Already in Use
- Change PORT in backend .env
- Or kill process using the port

### CORS Errors
- Verify CORS_ORIGIN in .env matches frontend URL
- Check frontend proxy configuration in vite.config.ts
