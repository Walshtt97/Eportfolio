import React, { Component } from 'react';
import header from '../media/Eportfolio Header.png'
import '../css/Header.css';

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