import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {};
  componentDidMount() {
    this._getMovies();
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title_english} 
      poster={movie.medium_cover_image}       
      key={index} 
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
    })
    return movies;
  }
  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  }
  _callApi = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://yts.ag/api/v2/list_movies.json?sort_by=rating'; // site that doesn’t send Access-Control-*
    return fetch(proxyurl + url)
    .then((resp) => resp.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }
  render() {
    console.log("render");
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
