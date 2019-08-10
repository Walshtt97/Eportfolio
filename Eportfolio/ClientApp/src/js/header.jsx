import React, { Component } from 'react';
import '../css/Header.css';
import header from '../media/header.png'

class Header extends Component{
render(){
    return (
        <div className="header">
            <img className="headerImg" src={header}></img>
        </div> 
    );
    };
}

export default Header;