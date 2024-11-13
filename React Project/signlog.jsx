import React, { createContext, useState, useContext } from 'react';
import './App.css';
import './sign.css';
import './home.css';
import './booking.css';
import './login.css'; 
import axios from 'axios';

// Theme Context
const ThemeContext = createContext();

const SignUpForm = ({ onSignUp }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.post('http://localhost:3001/users', formData);
        onSignUp(); // Call the function to transition to the login page
      } catch (error) {
        console.error('Error saving user:', error);
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#333', color: '#fff' }}>
      <div className="signup-container">
        <div className="signup-form">
          <h3>MOVIE TICKET BOOKING SYSTEM</h3>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputbox">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="inputbox">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="inputbox">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <input type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </div>
  );
};

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;

      const user = users.find(u => u.email === username && u.password === password);
      if (user) {
        onLogin();
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#333', color: '#fff' }}>
      <div className="login-container">
        <div className="login-box">
          <center>
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <p>Username</p>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="input-group">
                <p>Password</p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="login-button">Login</button>
            </form>
          </center>
        </div>
      </div>
    </div>
  );
};

const MovieCard = ({ title, image, onBookNow }) => (
  <div className="movie-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <button className="book-button" onClick={onBookNow}>Book Now</button>
  </div>
);

const FeatureCard = ({ title, description }) => (
  <div className="feature-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const HomePage = ({ onBookNow }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const featuredMovies = [
    { title: "Interstellar", image: "https://m.media-amazon.com/images/I/91NC2t4Hd2L.AC_UF1000,1000_QL80.jpg" },
    { title: "The Dark Knight", image: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL5PRK/image?locale=en-ie&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg" },
    { title: "Inception", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjcWDp93KQFtMwrvoCvDAmG6GDNKZulbmtQ&s" },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      setSuggestions(["Inception", "Interstellar", "The Dark Knight"].filter(movie =>
        movie.toLowerCase().includes(value.toLowerCase())
      ));
    } else {
      setSuggestions([]);
    }
  };

  const styles = {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
    dark: {
      backgroundColor: '#333333',
      color: '#ffffff',
    },
  };

  return (
    <div style={theme === 'light' ? styles.light : styles.dark}>
      <header className="header">
        <div className="header-content">
          <h1>Movie Ticket Booking</h1>
          <button onClick={toggleTheme} className="theme-toggle">Toggle Theme</button>
          <nav className="navigation">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#movies">Movies</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <form onSubmit={handleSearch} className="search-form">
          <input 
            type="text" 
            placeholder="Search for movies..." 
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          )}
        </form>

        <section id="features" className="features-container">
          <FeatureCard 
            title="Wide Selection" 
            description="Choose from hundreds of movies"
          />
          <FeatureCard 
            title="Easy Booking" 
            description="Simple and fast ticket reservation"
          />
          <FeatureCard 
            title="Multiple Showtimes" 
            description="Find a time that suits you"
          />
        </section>

        <section id="movies">
          <h2>Featured Movies</h2>
          <div className="movies-container">
            {featuredMovies.map((movie, index) => (
              <MovieCard 
                key={index} 
                title={movie.title} 
                image={movie.image} 
                onBookNow={() => onBookNow(movie.title)}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Movie Ticket Booking. All rights reserved.</p>
          <nav className="footer-navigation">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </nav>
          <section id="contact" className="contact-section">
            <h3>Contact Us</h3>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" className="contact-button">Send Message</button>
            </form>
          </section>
        </div>
      </footer>
    </div>
  );
};

const BookingPage = ({ onBack, selectedMovie }) => {
  const [ticketCount, setTicketCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [seatingChoice, setSeatingChoice] = useState('Standard');
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = () => {
    setShowSummary(true);
  };

  const handleConfirmBooking = () => {
    alert(`You have booked ${ticketCount} ticket(s) for "${selectedMovie}" on ${selectedDate} in ${seatingChoice} seating.`);
  };

  return (
    <div>
      <h1 style={{color:'black'}}>Book Your Movie Tickets</h1>
      <p className="tt">Select the number of tickets:</p>
      <input
        className="count"
        type="number"
        min="1"
        max="10"
        value={ticketCount}
        onChange={(e) => setTicketCount(e.target.value)}
      />

      <p>Select the date:</p>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        required
      />

      <p>Select seating type:</p>
      <select value={seatingChoice} onChange={(e) => setSeatingChoice(e.target.value)}>
        <option value="Standard">Standard</option>
        <option value="Premium">Premium</option>
        <option value="VIP">VIP</option>
      </select>

      {showSummary ? (
        <div className="booking-summary">
          <h2>Booking Summary</h2>
          <p>Movie: {selectedMovie}</p>
          <p>Date: {selectedDate}</p>
          <p>Tickets: {ticketCount}</p>
          <p>Seating: {seatingChoice}</p>
          <button className="button" onClick={handleConfirmBooking}>Confirm Booking</button>
          <button className="button" onClick={() => setShowSummary(false)}>Edit Booking</button>
        </div>
      ) : (
        <>
          <button className="button" onClick={handleSubmit}>Show Summary</button>
          <button className="button" onClick={onBack}>Back to Home</button>
        </>
      )}
    </div>
  );
};

const ProCC = () => {
  const [page, setPage] = useState('signup');
  const [selectedMovie, setSelectedMovie] = useState('');

  const handleSignUp = () => {
    setPage('login'); // Redirect to login page on sign up
  };

  const handleLogin = () => {
    setPage('home'); // Redirect to home page on login
  };

  const handleBookNow = (movieTitle) => {
    setSelectedMovie(movieTitle);
    setPage('booking'); // Redirect to booking page
  };

  const useThemeContext = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    return { theme, toggleTheme };
  };

  const themeContextValue = useThemeContext();

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className="App" style={themeContextValue.theme === 'light' ? { backgroundColor: '#88e4eb', color: '#000000' } : { backgroundColor: '#333333', color: '#88e4eb' }}>
        {page === 'signup' && <SignUpForm onSignUp={handleSignUp} />}
        {page === 'login' && <Login onLogin={handleLogin} />}
        {page === 'home' && <HomePage onBookNow={handleBookNow} />}
        {page === 'booking' && <BookingPage onBack={() => setPage('home')} selectedMovie={selectedMovie} />}
      </div>
    </ThemeContext.Provider>
  );
};

export default ProCC;
