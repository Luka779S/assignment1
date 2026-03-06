import React from "react";
import "./FilmCard.css";

/**
 * FilmCard component displays individual film details in a card layout.
 * @param {Object} film - The film object containing its details.
 * @param {string} film.naziv - Name of the film.
 * @param {number} film.ocena - Rating of the film.
 * @param {string} film.reziser - Director of the film.
 * @param {boolean} film.is3D - Whether the film is in 3D or not.
 * @param {string} film.slika - URL of the film's image/poster.
 */
const FilmCard = ({ film }) => {
  if (!film) return null; // Return nothing if no film is provided

  return (
    <div className="film-card">
      {/* Film poster/image */}
      <img src={film.slika} alt={film.naziv} />

      {/* Film title */}
      <h4>{film.naziv}</h4>

      {/* Film details */}
      <p>Rating: {film.ocena}</p>
      <p>Director: {film.reziser}</p>
      <p>{film.is3D ? "3D" : "2D"}</p>
    </div>
  );
};

export default FilmCard;