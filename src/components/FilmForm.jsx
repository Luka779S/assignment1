import React, { useState } from "react";

/**
 * FilmForm component allows users to add a new film.
 * @param {function} onAdd - Callback function to add a new film to the list
 */
const FilmForm = ({ onAdd }) => {
  // State for each form input
  const [naziv, setNaziv] = useState("");        // Film name
  const [ocena, setOcena] = useState("");        // Rating
  const [reziser, setReziser] = useState("");    // Director
  const [trajanje, setTrajanje] = useState("");  // Duration in minutes
  const [is3D, setIs3D] = useState(false);      // 3D film checkbox
  const [slika, setSlika] = useState("");        // Image URL

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct a new film object
    const noviFilm = {
      naziv,
      ocena: Number(ocena),
      reziser,
      trajanje: Number(trajanje),
      is3D,
      slika,
    };

    // Call the parent callback to add the new film
    onAdd(noviFilm);

    // Reset form fields
    setNaziv("");
    setOcena("");
    setReziser("");
    setTrajanje("");
    setIs3D(false);
    setSlika("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Film</h3>

      <input
        type="text"
        placeholder="Name"
        value={naziv}
        onChange={(e) => setNaziv(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating"
        value={ocena}
        onChange={(e) => setOcena(e.target.value)}
        required
        min="0"
        max="10"
      />
      <input
        type="text"
        placeholder="Director"
        value={reziser}
        onChange={(e) => setReziser(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Duration (min)"
        value={trajanje}
        onChange={(e) => setTrajanje(e.target.value)}
        required
        min="1"
      />
      <label>
        3D:
        <input
          type="checkbox"
          checked={is3D}
          onChange={(e) => setIs3D(e.target.checked)}
        />
      </label>
      <input
        type="text"
        placeholder="Image URL"
        value={slika}
        onChange={(e) => setSlika(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default FilmForm;


