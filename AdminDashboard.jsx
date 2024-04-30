import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Fetch reservations data from backend API
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await fetch('/api/reservations');
      const data = await response.json();
      setReservations(data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  return (
    <div>
      <h1>Restaurant Admin Dashboard</h1>
      <div>
        <h2>Recent Reservations</h2>
        <ul>
          {reservations.map(reservation => (
            <li key={reservation._id}>
              {reservation.customerName} - {reservation.date} - {reservation.numberOfGuests}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
