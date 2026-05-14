import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-bold text-primary">AirTicket</h1>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Routes>
            <Route path="/" element={<div className="text-center"><h2 className="text-3xl font-bold mb-4">Welcome to AirTicket</h2><p className="text-gray-600">Search and book your flights</p></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
