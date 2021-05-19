import React, { Component } from "react";
import API from '../../utils/API';
import ResultList from '../ResultList';
import SearchForm from '../SearchForm';

class Search extends Component {
  // Setting the component's initial state
  state = {
    breedName: "",
    results: []
  };

  searchDog = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.searchDog(this.state.breedName);
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <SearchForm
          breedName={this.state.breedName}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default Search;
