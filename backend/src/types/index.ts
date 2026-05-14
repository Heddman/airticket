export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  passwordHash: string
  createdAt: Date
  updatedAt: Date
}

export interface Flight {
  id: string
  airline: string
  flightNumber: string
  departureAirport: string
  arrivalAirport: string
  departureTime: Date
  arrivalTime: Date
  totalSeats: number
  availableSeats: number
  price: number
  createdAt: Date
  updatedAt: Date
}

export interface Booking {
  id: string
  userId: string
  flightId: string
  passengerName: string
  seatNumber: string
  status: 'confirmed' | 'pending' | 'cancelled'
  bookingNumber: string
  createdAt: Date
  updatedAt: Date
}

export interface JwtPayload {
  userId: string
  email: string
  iat: number
  exp: number
}
