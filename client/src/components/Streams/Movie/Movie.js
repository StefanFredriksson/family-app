import React from 'react'
import './Movie.css'
import { useParams } from 'react-router-dom'

export default function Movie () {
  const { movie } = useParams()
  const src = `http://localhost:4000/stream/${movie}`
  return (
    <div id='movie-container'>
      <video controls autoplay>
        <source src={src} />
      </video>
    </div>
  )
}
