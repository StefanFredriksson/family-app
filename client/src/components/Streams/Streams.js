import React from 'react'

export default function Streams () {
  return (
    <div>
      <video width='320' height='240' controls>
        <source
          src='http://localhost:4000/movies/something.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  )
}
