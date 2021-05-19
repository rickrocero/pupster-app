import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="breedName">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.breedName}
          name="breedName"
          type="text"
          className="form-control"
          placeholder="Search by dog breed"
          id="breedName"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
