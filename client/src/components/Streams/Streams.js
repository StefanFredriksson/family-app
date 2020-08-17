import React, { Component } from 'react'
import './Streams.css'
import MoviePoster from './MoviePoster/MoviePoster'

export default class Streams extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  async componentDidMount () {
    const response = await window.fetch('http://localhost:4000/movies')
    let movies = await response.json()
    movies = movies.message
    let count = 0
    const srcs = movies.map(movie => {
      return { src: { movie }, key: count++ }
    })

    this.setState({ movies: srcs })
  }

  showMovies () {
    let m = ''
    for (const movie of this.state.movies) {
      console.log(movie)
    }

    return m
  }

  render () {
    return (
      <div id='movie-selection'>
        {this.state.movies.map(movie => (
          <MoviePoster src={movie.src} />
        ))}
      </div>
    )
  }
}
