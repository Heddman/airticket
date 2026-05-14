export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  createdAt: string
}

export interface Flight {
  id: string
  airline: string
  flightNumber: string
  departure: {
    airport: string
    time: string
    date: string
  }
  arrival: {
    airport: string
    time: string
    date: string
  }
  duration: string
  price: number
  seats: number
  availableSeats: number
}

export interface Booking {
  id: string
  userId: string
  flightId: string
  passengerName: string
  seatNumber: string
  status: 'confirmed' | 'pending' | 'cancelled'
  bookingDate: string
  bookingNumber: string
}

export interface AuthResponse {
  token: string
  user: User
}
