import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Chat from './components/Chat/Chat'
import Streams from './components/Streams/Streams'
import Movie from './components/Streams/Movie/Movie'
import Header from './components/Header/Header'

function App () {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/chat'>
            <Chat />
          </Route>
          <Route path='/streams'>
            <Streams />
          </Route>
          <Route path='/movie/:movie'>
            <Movie />
          </Route>
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
