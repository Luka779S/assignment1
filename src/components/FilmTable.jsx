import React, { useState, useMemo } from "react";
import "./FilmTable.css";

const FilmTable = ({ films, onDelete }) => {
  // State for filtering by name
  const [filterText, setFilterText] = useState("");
  
  // State for sorting: which field and order ('asc' or 'desc')
  const [sortField, setSortField] = useState("naziv"); 
  const [sortOrder, setSortOrder] = useState("asc");   
  
  // State for filtering 3D films (All / Yes / No)
  const [filter3D, setFilter3D] = useState("Sve");
  
  // State for filtering by minimum rating
  const [minOcena, setMinOcena] = useState("");

  // Filter films based on name, minimum rating, and 3D filter
  const filteredFilms = useMemo(() => {
    return films.filter(film => {
      const nameMatch = film.naziv.toLowerCase().includes(filterText.toLowerCase());
      const ratingMatch = minOcena === "" || film.ocena >= Number(minOcena);
      const is3DMatch = filter3D === "Sve"
        || (filter3D === "DA" && film.is3D)
        || (filter3D === "NE" && !film.is3D);
      return nameMatch && ratingMatch && is3DMatch;
    });
  }, [films, filterText, minOcena, filter3D]);

  // Sort filtered films based on the selected field and order
  const sortedFilms = useMemo(() => {
    return [...filteredFilms].sort((a, b) => {
      let valueA = a[sortField];
      let valueB = b[sortField];

      // Convert strings to lowercase for case-insensitive sorting
      if (typeof valueA === "string") {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }

      if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
      if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredFilms, sortField, sortOrder]);

  // Handle sorting when clicking on table headers
  const handleSort = (field) => {
    if (sortField === field) {
      // Toggle sort order if the same field is clicked
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Set new field and default order to ascending
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="film-table-container">
      {/* Filter inputs */}
      <div className="filters">
        <input
          type="text"
          className="filter-input"
          placeholder="Search by name"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <input
          type="number"
          className="filter-input"
          placeholder="Minimum rating"
          value={minOcena}
          onChange={(e) => setMinOcena(e.target.value)}
          min="0"
          max="10"
        />
        <select
          value={filter3D}
          onChange={(e) => setFilter3D(e.target.value)}
          className="filter-select"
        >
          <option value="Sve">ALL</option>
          <option value="DA">YES</option>
          <option value="NE">NO</option>
        </select>
      </div>

      {/* Film table */}
      <table className="film-table">
        <thead>
          <tr>
            <th
              className={sortField === "naziv" ? `sorted ${sortOrder}` : ""}
              onClick={() => handleSort("naziv")}
            >
              Name
            </th>
            <th
              className={sortField === "ocena" ? `sorted ${sortOrder}` : ""}
              onClick={() => handleSort("ocena")}
            >
              Rating
            </th>
            <th>Director</th>
            <th>Duration</th>
            <th>3D</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {sortedFilms.map((film) => (
            <tr key={film.id}>
              <td>{film.naziv}</td>
              <td>{film.ocena}</td>
              <td>{film.reziser}</td>
              <td>{film.trajanje}</td>
              <td>{film.is3D ? "Yes" : "No"}</td>
              <td>
                <img src={film.slika} alt={film.naziv} width="80" />
              </td>
              <td>
                <button className="delete-button" onClick={() => onDelete(film.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilmTable;


