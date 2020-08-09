import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>Hello this is a movie</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src='http://ojsfile.ohmynews.com/STD_IMG_FILE/2014/1202/IE001778581_STD.jpg'/>
    )
  }
}

export default Movie;
