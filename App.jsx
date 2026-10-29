import { useState } from "react";
import { useTravel, TravelProvider } from "./TravelContext";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import "./App.css";
import DestinationCard from "./DestinationCard"
const destinations = [
  {
    id: 1,
    name: "Doha",
    country: "Qatar",
    category: "International",
    price: 60000,
    days: 4,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=1000&q=85",
    description:
      "Explore modern architecture, traditional markets and waterfront views.",
  },
  {
    id: 2,
    name: "Hanoi",
    country: "Vietnam",
    category: "International",
    price: 45000,
    days: 5,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=1000&q=85",
    description:
      "Discover vibrant streets, local cuisine and Vietnamese culture.",
  },
  {
    id: 3,
    name: "Reykjavik",
    country: "Iceland",
    category: "International",
    price: 130000,
    days: 6,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1000&q=85",
    description:
      "Experience dramatic landscapes, waterfalls and the Northern Lights.",
  },
  {
    id: 4,
    name: "Paris",
    country: "France",
    category: "International",
    price: 85000,
    days: 5,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85",
    description:
      "Discover the Eiffel Tower, charming cafes and beautiful city streets.",
  },
  {
    id: 5,
    name: "Bali",
    country: "Indonesia",
    category: "International",
    price: 55000,
    days: 6,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85",
    description:
      "Relax on tropical beaches and explore temples and green rice terraces.",
  },
  {
    id: 6,
    name: "Dubai",
    country: "United Arab Emirates",
    category: "International",
    price: 65000,
    days: 4,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
    description:
      "Experience luxury shopping, iconic skyscrapers and desert adventures.",
  },
  {
    id: 7,
    name: "Manali",
    country: "India",
    category: "Domestic",
    price: 18000,
    days: 4,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85",
    description:
      "Enjoy mountain views, pine forests and the beauty of the Himalayas.",
  },
  {
    id: 8,
    name: "Tokyo",
    country: "Japan",
    category: "International",
    price: 95000,
    days: 6,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=85",
    description:
      "Explore Japanese culture, exciting city streets and amazing food.",
  },
  {
    id: 9,
    name: "Santorini",
    country: "Greece",
    category: "International",
    price: 110000,
    days: 5,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1000&q=85",
    description:
      "Admire whitewashed houses, blue domes and spectacular sea sunsets.",
  },
];

function Navbar() {
  const { darkMode, setDarkMode, favorites } = useTravel();
  const location = useLocation();
  const links = [
    { label: "Home", path: "/" },
    { label: "Destinations", path: "/destinations" },
    { label: "Bookings", path: "/booking" },
    { label: "Budget Planner", path: "/budget" },
    { label: "Expense Tracker", path: "/expense" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Travel<span>Sphere.</span>
      </Link>
      <div className="nav-links">
        {links.slice(0, 3).map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={
              location.pathname === link.path ? "active" : ""
            }
          >
            {link.label}
          </Link>
        ))}
        {favorites.length > 0 && (
          <Link
            to="/favorites"
            className={
              location.pathname === "/favorites" ? "active" : ""
            }
          >
            Favorites ♥ ({favorites.length})
          </Link>
        )}

        {links.slice(3).map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={
              location.pathname === link.path ? "active" : ""
            }
          >
            {link.label}
          </Link>
        ))}
        <button
          className="theme-button"
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">YOUR JOURNEY BEGINS HERE</p>
          <h1>
            Explore the world.
            <br />
            <span>Find your escape.</span>
          </h1>
          <p className="hero-description">
            Discover amazing experiences, plan unforgettable journeys
            and make memories that last a lifetime.
          </p>
          <Link to="/destinations" className="primary-button">
            Explore Destinations →
          </Link>
        </div>
      </section>
      <section className="home-intro">
        <p className="eyebrow">TRAVEL YOUR WAY</p>
        <h2>Your next adventure awaits.</h2>
        <p>
          Plan your trips, manage your travel budget and organize
          your travel expenses in one place.
        </p>
        <div className="feature-grid">
          <article className="feature-card">
            <span>🌍</span>
            <h3>Explore</h3>
            <p>Discover new places and exciting experiences.</p>
            <Link to="/destinations">Explore places →</Link>
          </article>
          <article className="feature-card">
            <span>🧳</span>
            <h3>Plan Your Trip</h3>
            <p>Choose your destination and plan your holiday.</p>
            <Link to="/booking">Plan your trip →</Link>
          </article>
          <article className="feature-card">
            <span>💰</span>
            <h3>Manage Budget</h3>
            <p>Keep your travel budget and expenses organized.</p>
            <Link to="/budget">Plan your budget →</Link>
          </article>
        </div>
      </section>
    </main>
  );
}
function Destinations() {
  const { favorites, toggleFavorite } = useTravel();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = destinations.filter((destination) => {
    const matchesSearch =
      `${destination.name} ${destination.country}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesCategory =
      category === "All" || destination.category === category;
    return matchesSearch && matchesCategory;
  });
  return (
    <main className="destinations-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">EXPLORE THE WORLD</p>
          <h1>Popular Destinations</h1>
          <p>Discover some of the world's most beautiful places.</p>
        </div>
        <div className="destination-controls">
          <input
            type="search"
            placeholder="Search destinations..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search destinations"
          />
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            aria-label="Filter destinations"
          >
            <option value="All">All destinations</option>
            <option value="Domestic">Domestic</option>
            <option value="International">International</option>
          </select>
        </div>
      </div>
      <div className="destination-grid">
  {filtered.map((destination) => (
    <DestinationCard
      key={destination.id}
      place={destination}
      isFavorite={favorites.includes(destination.id)}
      onToggleFavorite={toggleFavorite}
    />
  ))}
</div>
      {filtered.length === 0 && (
        <p className="empty-message">No destinations found.</p>
      )}
    </main>
  );
}
function Favorites() {
const { favorites, toggleFavorite } = useTravel();
  const savedDestinations = destinations.filter((destination) =>
    favorites.includes(destination.id)
  );
  return (
    <main className="destinations-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">YOUR SAVED PLACES</p>
          <h1>My Favorites ♥</h1>
          <p>Your favorite destinations in one place.</p>
        </div>
      </div>
      {savedDestinations.length === 0 ? (
        <div className="empty-panel">
          <h2>No favorites yet</h2>
          <p>Click a heart on any destination to save it here.</p>
          <Link to="/destinations" className="primary-button">
            Explore Destinations →
          </Link>
        </div>
      ) : (
        <div className="destination-grid">
  {savedDestinations.map((destination) => (
    <DestinationCard
      key={destination.id}
      place={destination}
      isFavorite={true}
      onToggleFavorite={toggleFavorite}
      showCategory={false}
    />
  ))}
</div>
      )}
    </main>
  );
}
function Booking() {
  const [searchParams] = useSearchParams();
const { bookings, addBooking } = useTravel();
  const [name, setName] = useState("");
  const [destination, setDestination] = useState(
    searchParams.get("destination") || ""
  );
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);
  const [message, setMessage] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    addBooking({
      id: Date.now(),
      name,
      destination,
      date,
      people: Number(people),
    });
    setMessage("Your trip has been saved successfully!");
    setName("");
    setDate("");
    setPeople(1);
  }
  return (
    <main className="simple-page">
      <p className="eyebrow">YOUR NEXT ADVENTURE</p>
      <h1>Plan Your Trip</h1>
      <p>Enter your travel details below.</p>
      <form className="travel-form" onSubmit={handleSubmit}>
        <label>
          Full name
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
          />
        </label>
        <label>
          Destination
          <select
            required
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          >
            <option value="">Choose a destination</option>
            {destinations.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Travel date
          <input
            required
            type="date"
            min={new Date().toISOString().slice(0, 10)}
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <label>
          Number of travellers
          <input
            required
            type="number"
            min="1"
            max="20"
            value={people}
            onChange={(event) => setPeople(event.target.value)}
          />
        </label>
        <button type="submit" className="primary-button">
          Save Trip →
        </button>
      </form>
      {message && <p className="success-message">{message}</p>}
      <section className="saved-bookings">
        <h2>My Bookings</h2>
        {bookings.length === 0 ? (
          <p>No trips booked yet.</p>
        ) : (
          bookings.map((booking) => (
            <article className="booking-card" key={booking.id}>
              <h3>{booking.destination}</h3>
              <p>Traveller: {booking.name}</p>
              <p>Date: {booking.date}</p>
              <p>Travellers: {booking.people}</p>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
function Budget() {
  const [days, setDays] = useState(5);
  const [hotel, setHotel] = useState(3000);
  const [food, setFood] = useState(1000);
  const [transport, setTransport] = useState(2000);
  const [activities, setActivities] = useState(2000);
  const total =
    Number(days) *
    (Number(hotel) +
      Number(food) +
      Number(transport) +
      Number(activities));
  return (
    <main className="simple-page">
      <p className="eyebrow">TRAVEL SMARTER</p>
      <h1>Budget Planner</h1>
      <p>Calculate your estimated travel expenses.</p>
      <div className="travel-form">
        <label>
          Number of days
          <input
            type="number"
            min="1"
            value={days}
            onChange={(event) =>
              setDays(Math.max(1, Number(event.target.value)))
            }
          />
        </label>
        <label>
          Hotel per day (₹)
          <input
            type="number"
            min="0"
            value={hotel}
            onChange={(event) =>
              setHotel(Math.max(0, Number(event.target.value)))
            }
          />
        </label>
        <label>
          Food per day (₹)
          <input
            type="number"
            min="0"
            value={food}
            onChange={(event) =>
              setFood(Math.max(0, Number(event.target.value)))
            }
          />
        </label>
        <label>
          Transport per day (₹)
          <input
            type="number"
            min="0"
            value={transport}
            onChange={(event) =>
              setTransport(Math.max(0, Number(event.target.value)))
            }
          />
        </label>
        <label>
          Activities per day (₹)
          <input
            type="number"
            min="0"
            value={activities}
            onChange={(event) =>
              setActivities(Math.max(0, Number(event.target.value)))
            }
          />
        </label>
        <div className="budget-result">
          <p>Total estimated budget</p>
          <h2>₹{total.toLocaleString("en-IN")}</h2>
          <p>Estimated cost for {days} day(s).</p>
        </div>
      </div>
    </main>
  );
}
function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);
  function addExpense(event) {
    event.preventDefault();
    setExpenses((previous) => [
      ...previous,
      {
        id: Date.now(),
        title,
        amount: Number(amount),
        category,
      },
    ]);
    setTitle("");
    setAmount("");
  }
  return (
    <main className="simple-page">
      <p className="eyebrow">TRACK YOUR SPENDING</p>
      <h1>Expense Tracker</h1>
      <div className="budget-result">
        <p>Total expenses</p>
        <h2>₹{total.toLocaleString("en-IN")}</h2>
      </div>
      <form className="travel-form" onSubmit={addExpense}>
        <label>
          Expense name
          <input
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. Dinner"
          />
        </label>
        <label>
          Amount (₹)
          <input
            required
            type="number"
            min="1"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter amount"
          />
        </label>
        <label>
          Category
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>Food</option>
            <option>Hotel</option>
            <option>Transport</option>
            <option>Activities</option>
            <option>Shopping</option>
            <option>Other</option>
          </select>
        </label>
        <button type="submit" className="primary-button">
          Add Expense +
        </button>
      </form>
      <section className="expense-list">
        <h2>Your Expenses</h2>
        {expenses.length === 0 && <p>No expenses added yet.</p>}
        {expenses.map((item) => (
          <article className="expense-row" key={item.id}>
            <div>
              <strong>{item.title}</strong>
              <p>{item.category}</p>
            </div>
            <strong>₹{item.amount.toLocaleString("en-IN")}</strong>
            <button
              className="delete-button"
              type="button"
              onClick={() =>
                setExpenses((previous) =>
                  previous.filter((expense) => expense.id !== item.id)
                )
              }
            >
              Delete
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main className="simple-page">
      <p className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</p>
      <h1>Contact Us</h1>
      <p>Have a question? Send us a message.</p>
      <form
        className="travel-form"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
        <label>
          Your name
          <input required placeholder="Enter your name" />
        </label>
        <label>
          Email address
          <input
            required
            type="email"
            placeholder="Enter your email"
          />
        </label>
        <label>
          Message
          <textarea
            required
            rows="5"
            placeholder="Write your message..."
          />
        </label>
        <button type="submit" className="primary-button">
          Send Message →
        </button>
      </form>
      {sent && (
        <p className="success-message">
          Your message has been submitted successfully.
        </p>
      )}
    </main>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="logo">
        Travel<span>Sphere.</span>
      </Link>
      <p>Discover the world, one journey at a time.</p>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <p>
        © {new Date().getFullYear()} TravelSphere. All rights reserved.
      </p>
    </footer>
  );
}
function AppLayout() {
  const { darkMode } = useTravel();
  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main className="simple-page">
              <h1>Page not found</h1>
              <Link to="/" className="primary-button">
                Back to Home
              </Link>
            </main>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <TravelProvider>
        <AppLayout />
      </TravelProvider>
    </BrowserRouter>
  );
}