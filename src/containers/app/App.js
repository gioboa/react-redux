import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import './App.css';

const App = () => (
  <div className="container">
    <header className="sideBar">
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>
    <main className="main">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
