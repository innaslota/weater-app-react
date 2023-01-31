import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="Search-input"
          autofocus="on"
          autocomplete="off"
        />
        <input type="image" src="images/search.png" class="Search-icon" />
      </form>
    </div>
  );
}
