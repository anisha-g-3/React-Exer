import React, { useState } from 'react';
import './home.css';

const MovieCard = ({ title, image }) => (
  <div className="movie-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <button className="book-button">Book Now</button>
  </div>
);

const FeatureCard = ({ title, description }) => (
  <div className="feature-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const HomePage = () => {
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
              <MovieCard key={index} title={movie.title} image={movie.image} />
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

export default HomePage;
