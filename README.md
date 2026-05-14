# AirTicket - Flight Ticketing Application

A modern flight ticketing application built with React, Node.js, and PostgreSQL.

## Project Overview

AirTicket is a full-stack flight booking platform that allows users to:
- Search for flights with flexible filters
- Book tickets with secure payment processing
- Manage their itineraries and bookings
- View flight details and pricing information

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Axios** for API calls
- **React Router** for navigation

### Backend
- **Node.js** with Express
- **PostgreSQL** for data persistence
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Joi** for data validation

### Development Tools
- **Docker** for containerization
- **Git** for version control

## Project Structure

```
airticket/
├── frontend/              # React application
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   ├── hooks/        # Custom React hooks
│   │   ├── types/        # TypeScript types
│   │   ├── store/        # State management (Redux/Zustand)
│   │   └── App.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── backend/               # Express API server
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Express middleware
│   │   ├── services/     # Business logic
│   │   ├── utils/        # Utility functions
│   │   ├── config/       # Configuration files
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── docs/                  # Documentation
│   ├── API.md            # API documentation
│   ├── DATABASE.md       # Database schema
│   └── SETUP.md          # Setup instructions
│
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 13+
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The backend API will run on `http://localhost:3000`

### Database Setup

1. Create a PostgreSQL database:
```bash
createdb airticket
```

2. Run migrations:
```bash
cd backend
npm run migrate
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript
- `npm run start` - Run compiled JavaScript
- `npm run migrate` - Run database migrations
- `npm run test` - Run tests

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh JWT token
- `POST /api/auth/logout` - Logout user

### Flights
- `GET /api/flights` - Search flights
- `GET /api/flights/:id` - Get flight details
- `POST /api/flights` - Create flight (admin only)

### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/:id` - Get booking details
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -m 'Add your feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please open an issue on GitHub.
