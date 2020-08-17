import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MoviePoster.css'

export default class MoviePoster extends Component {
  constructor (props) {
    super(props)
    this.movie = props.src.movie
    this.title = this.movie.substr(0, this.movie.length - 4)
    this.l = `/movie/${this.title}`
    this.handleClick = this.handleClick.bind(this)
    this.url = `http://localhost:4000/img/${this.movie}`
  }

  componentDidMount () {
    console.log(this.props)
  }

  handleClick (event) {
    console.log(this.title)
  }

  render () {
    return (
      <div onClick={this.handleClick} className='movie-poster'>
        <Link to={this.l}>
          <img src={this.url} alt='Movie poster' />
          <label>{this.title}</label>
        </Link>
      </div>
    )
  }
}
