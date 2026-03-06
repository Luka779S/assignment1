import React, { useState, useEffect } from "react";
import filmService from "../services/filmServices";
import FilmTable from "../components/FilmTable";
import FilmForm from "../components/FilmForm";
import TopRated from "../components/TopRated";
import "./Home.css";

/**
 * Home.jsx
 * Main page of the movie management application.
 * Features:
 *  - Add new movies
 *  - Display movies in a table
 *  - Delete movies
 *  - Show top 3 highest rated movies
 */
const Home = () => {
  // State to store all movies
  const [films, setFilms] = useState([]);

  /**
   * useEffect runs once when the component mounts
   * Loads all movies from filmService
   */
  useEffect(() => {
    setFilms(filmService.getAll());
  }, []);

  /**
   * handleDeleteFilm
   * Deletes a movie by ID and updates the state
   * @param {number} id - ID of the movie to delete
   */
  const handleDeleteFilm = (id) => {
    filmService.remove(id);
    setFilms(filmService.getAll());
  };

  /**
   * handleAddFilm
   * Adds a new movie to the list and updates the state
   * @param {object} film - The new movie object
   */
  const handleAddFilm = (film) => {
    filmService.add(film);
    setFilms(filmService.getAll());
  };

  return (
    <div className="home-container">
      {/* Header section */}
      <header className="header">
        <h1>My Movie List</h1>
      </header>

      {/* Section for adding new movies */}
      <section className="film-form-section">
        <FilmForm onAdd={handleAddFilm} />
      </section>

      {/* Section for displaying the movie table */}
      <section className="film-table-section">
        <FilmTable films={films} onDelete={handleDeleteFilm} />
      </section>

      {/* Section for displaying top 3 highest rated movies */}
      <section className="top-rated-section">
        <TopRated films={films} />
      </section>

      {/* Footer section */}
      <footer className="footer">
        &copy; 2026 My Movies
      </footer>
    </div>
  );
};

export default Home;


