import React, { Component } from 'react';
import '../css/NavBar.css';
import Page from './page.jsx'

class NavBar extends Component{
    constructor(params){
        super(params);
        this.state= {
            value:params.value
            
        }
    }

    navClick = (e) =>{
        this.setState({value:e.target.id});
    }

    render(){
        return (
        <div >
            <div className ="navbar">
                <ul>
                    <li onClick={this.navClick} id="Resume">Resume</li>
                    <li onClick={this.navClick} id="Activities">Activities</li>
                    <li onClick={this.navClick} id="AboutMe">About Me</li>
                    <li onClick={this.navClick} id="Experience">Experience</li>
                    <li onClick={this.navClick} id="Contact">Contact</li>
                    <li onClick={this.navClick} id="DevLinks">Projects</li>
                </ul>
            </div>
            <Page page={this.state.value}></Page>

        </div>
        );
    };
}

export default NavBar;