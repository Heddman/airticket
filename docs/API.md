# AirTicket API Documentation

## Base URL

```
http://localhost:3000/api
```

## Authentication

All authenticated endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Register
- **POST** `/auth/register`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe"
  }
  ```
- **Response:** `{ token, user }`

#### Login
- **POST** `/auth/login`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:** `{ token, user }`

### Flights

#### Search Flights
- **GET** `/flights`
- **Query Parameters:**
  - `departureAirport` (required)
  - `arrivalAirport` (required)
  - `departureDate` (required)
  - `returnDate` (optional)
  - `passengers` (optional, default: 1)
- **Response:** Array of flights

#### Get Flight Details
- **GET** `/flights/:id`
- **Response:** Flight object

### Bookings

#### Create Booking
- **POST** `/bookings`
- **Auth:** Required
- **Body:**
  ```json
  {
    "flightId": "flight-id",
    "passengerName": "John Doe",
    "seatNumber": "12A"
  }
  ```

#### Get User Bookings
- **GET** `/bookings`
- **Auth:** Required
- **Response:** Array of user bookings

#### Get Booking Details
- **GET** `/bookings/:id`
- **Auth:** Required

#### Cancel Booking
- **DELETE** `/bookings/:id`
- **Auth:** Required
