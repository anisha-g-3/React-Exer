import React, { useState } from 'react';
import './booking.css';

function Booking() {
  const [page, setPage] = useState('home');

  const goToBookingPage = () => {
    setPage('booking');
  };

  const goToHomePage = () => {
    setPage('home');
  };

  return (
    <div className="App">
      {page === 'home' && (
        <HomePage onBookNow={goToBookingPage} />
      )}
      {page === 'booking' && (
        <BookingPage onBack={goToHomePage} />
      )}
    </div>
  );
}

function HomePage({ onBookNow }) {
  return (
    <div>
      <h1>Welcome to Movie Ticket Booking</h1>
      <button className="button" onClick={onBookNow}>Book Now</button>
    </div>
  );
}

function BookingPage({ onBack }) {
  const [ticketCount, setTicketCount] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatType, setSeatType] = useState('Regular');
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = () => {
    alert(`You have booked ${ticketCount} ticket(s) for seats: ${selectedSeats.join(', ')} as ${seatType} seats.`);
    setShowSummary(true);
  };

  const handleSeatSelection = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter(seat => seat !== seatId) : [...prev, seatId]
    );
  };

  const seatingArrangement = [
    ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'],
    ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10'],
    ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10'],
    ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
    ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10'],
  ];

  const renderSeating = () => {
    return (
      <div className="seating-arrangement">
        {seatingArrangement.map((row, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {row.map((seatId) => {
              const isSelected = selectedSeats.includes(seatId);
              return (
                <button
                  key={seatId}
                  className={`seat ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSeatSelection(seatId)}
                >
                  {isSelected ? '✔' : seatId}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="back">
      <h1 style={{ color: 'black' }}>Book Your Movie Tickets</h1>
      <p style={{ color: 'black' }}>Select the number of tickets:</p>
      <input
      className="box"
        type="number"
        min="1"
        max="10"
        value={ticketCount}
        onChange={(e) => setTicketCount(e.target.value)}
      />
      <br /><br />
      
      <h2 style={{color:"black"}}>Select Your Seats:</h2>
      {renderSeating()}
      <div>
        <h3 style={{color:"black"}}>Selected Seats: {selectedSeats.join(', ')}</h3>
      </div>

      <h2 style={{color:"black"}}>Select Seat Type:</h2>
      <select value={seatType} onChange={(e) => setSeatType(e.target.value)}>
        <option value="Regular">Regular</option>
        <option value="Premium">Premium</option>
      </select>
      <br /><br />
      
      <button className="button" onClick={handleSubmit}>Confirm Booking</button>
      <button className="button" onClick={onBack}>Back to Home</button>

      {showSummary && (
        <div className="summary">
          <h2>Booking Summary</h2>
          <p>Tickets: {ticketCount}</p>
          <p>Seats: {selectedSeats.join(', ')}</p>
          <p>Seat Type: {seatType}</p>
          <button onClick={() => setShowSummary(false)}>Edit Booking</button>
        </div>
      )}
    </div>
  );
}

export default Booking;
