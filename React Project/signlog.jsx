import React, { useState } from 'react';
import './App.css';
import './sign.css';
import './home.css';
import './booking.css';

// SignUpForm Component
const SignUpForm = ({ onSignUp }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      onSignUp();
    }
  };

  return (
    <div>
      <video className="video-background" autoPlay loop muted>
        <source src="path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="motion-background"></div>
      <div className="signup-container">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputbox">
              <label htmlFor="name">
                <i className="fas fa-user"></i> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="inputbox">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="inputbox">
              <label htmlFor="password">
                <i className="fas fa-lock"></i> Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <input type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </div>
  );
};

// MovieCard Component
const MovieCard = ({ title, image, onBookNow }) => (
  <div className="movie-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <button className="book-button" onClick={onBookNow}>Book Now</button>
  </div>
);

// FeatureCard Component
const FeatureCard = ({ title, description }) => (
  <div className="feature-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// HomePage Component
const HomePage = ({ onBookNow }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const featuredMovies = [
    { title: "Interstellar", image: "https://m.media-amazon.com/images/I/91NC2t4Hd2L._AC_UF1000,1000_QL80_.jpg" },
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

  return (
    <div className="home-page">
      <header className="header">
        <div className="header-content">
          <h1>Movie Ticket Booking</h1>
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

// BookingPage Component
const BookingPage = ({ onBack }) => {
  const [ticketCount, setTicketCount] = useState(1);

  const handleSubmit = () => {
    alert(`You have booked ${ticketCount} ticket(s).`);
  };

  return (
    <div>
      <h1>Book Your Movie Tickets</h1>
      <p className="tt">Select the number of tickets:</p>
      <input
      className="count"
        type="number"
        min="1"
        max="10"
        value={ticketCount}
        onChange={(e) => setTicketCount(e.target.value)}
      />
      <br /><br />
      <button className="button" onClick={handleSubmit}>Confirm Booking</button>
      <button className="button" onClick={onBack}>Back to Home</button>
    </div>
  );
};

// Main Component
const App = () => {
  const [page, setPage] = useState('signup');

  const handleSignUp = () => {
    setPage('home');
  };

  const handleBookNow = () => {
    setPage('booking');
  };

  return (
    <div className="App">
      {page === 'signup' && <SignUpForm onSignUp={handleSignUp} />}
      {page === 'home' && <HomePage onBookNow={handleBookNow} />}
      {page === 'booking' && <BookingPage onBack={() => setPage('home')} />}
    </div>
  );
};

export default App;
