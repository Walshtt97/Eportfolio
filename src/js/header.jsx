import React, { Component } from 'react';
import logo from '../media/me.png';
import '../css/Header.css';
class Header extends Component{
render(){
    return (
        <div className="header">
            <h1>Timothy Walsh</h1>
            <img className="headerImg" src={logo}></img>
        </div> 
    );
    };
}

export default Header;