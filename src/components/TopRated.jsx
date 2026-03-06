import React from "react";
import FilmCard from "./FilmCard";
import "./TopRated.css";

/**
 * TopRated.jsx
 * Component that displays the top 3 highest-rated movies.
 * Props:
 *  - films: array of movie objects
 */
const TopRated = ({ films }) => {
  // Return null if no films are provided
  if (!films || films.length === 0) return null;

  // Sort the films by rating in descending order and take the top 3
  const top3 = [...films]
    .sort((a, b) => b.ocena - a.ocena)
    .slice(0, 3);

  return (
    <div className="top-rated-container">
      {/* Section title */}
      <h3>Top 3 Highest Rated Movies</h3>

      {/* Container for the movie cards */}
      <div className="top-rated-cards">
        {top3.map((film) => (
          // Render a FilmCard for each of the top 3 movies
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;


