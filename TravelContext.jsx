import { createContext, useContext, useState } from "react";

const TravelContext = createContext(null);
export function TravelProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [bookings, setBookings] = useState([]);
  function toggleFavorite(id) {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }
  function addBooking(booking) {
    setBookings((previous) => [...previous, booking]);
  }
  const value = {
    favorites,
    toggleFavorite,
    darkMode,
    setDarkMode,
    bookings,
    addBooking,
  };
  return (
    <TravelContext.Provider value={value}>
      {children}
    </TravelContext.Provider>
  );
}
export function useTravel() {
  const context = useContext(TravelContext);
  if (context === null) {
    throw new Error(
      "useTravel must be used inside TravelProvider"
    );
  }
  return context;
}