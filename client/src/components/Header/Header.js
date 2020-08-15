import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header () {
  return (
    <header>
      <nav id='navbar'>
        <ul>
          <li>
            <Link to='/'>Homepage</Link>
          </li>
          <li>
            <Link to='/chat'>Chat</Link>
          </li>
          <li>
            <Link to='/streams'>Streams</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
