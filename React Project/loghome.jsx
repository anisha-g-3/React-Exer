import React, { useState } from 'react';
import './home.css';
import './login.css';

const LogHome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(); 
  };

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

  const featuredMovies = [
    { title: "Interstellar", image: "https://m.media-amazon.com/images/I/91NC2t4Hd2L._AC_UF1000,1000_QL80_.jpg" },
    { title: "The Dark Knight", image: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL5PRK/image?locale=en-ie&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg" },
    { title: "Inception", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjcWDp93KQFtMwrvoCvDAmG6GDNKZulbmtQ&s" },
  ];
  

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <div className="login-container">
          <div className="video-background">
            <video src="path/to/your/video.mp4" autoPlay muted loop></video>
          </div>
          <div className="motion-background"></div>
          <div className="login-box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <p>Username</p>
                <input 
                  type="text" 
                  value={username} 
                  onChange={handleUsernameChange} 
                  placeholder="Enter your username"
                />
              </div>
              <div className="input-group">
                <p>Password</p>
                <input 
                  type="password" 
                  value={password} 
                  onChange={handlePasswordChange} 
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="login-button">Login</button>
            </form>
          </div>
        </div>
      ) : (
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
              <div className="feature-card">
                <h3>Wide Selection</h3>
                <p>Choose from hundreds of movies</p>
              </div>
              <div className="feature-card">
                <h3>Easy Booking</h3>
                <p>Simple and fast ticket reservation</p>
              </div>
              <div className="feature-card">
                <h3>Multiple Showtimes</h3>
                <p>Find a time that suits you</p>
              </div>
            </section>

            <section id="movies">
              <h2>Featured Movies</h2>
              <div className="movies-container">
                {featuredMovies.map((movie, index) => (
                  <div className="movie-card" key={index}>
                    <img src={movie.image} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <button className="book-button">Book Now</button>
                  </div>
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
      )}
    </div>
  );
};

export default LogHome;
