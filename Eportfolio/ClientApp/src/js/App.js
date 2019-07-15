import React, { Component } from 'react';
import '../css/App.css';
import Header from './header.jsx'
import NavBar from './navbar.jsx'
import Footer from './Footer.jsx'

class App extends Component {
  render() {
    return (
      <div className="page">
        <Header/>
          <NavBar/>
        <Footer/>
      </div>
    );
  }
}

export default App;
