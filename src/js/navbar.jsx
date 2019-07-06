import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import '../css/NavBar.css';
import Page from './page.jsx'
import logo from '../media/me.png';

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
                <StickyContainer>
                    <Sticky>
                        {({
                           style 
                        })=>(
                        <div className="navbar" style = {style}>
                            <ul>
                                <li className="nav-link" onClick={this.navClick} id="Resume">Resume</li>
                                <li className="nav-link" onClick={this.navClick} id="Activities">Activities</li>
                                <li className="nav-link" onClick={this.navClick} id="AboutMe">About Me</li>
                                <li className="nav-link" onClick={this.navClick} id="Experience">Experience</li>
                                <li className="nav-link" onClick={this.navClick} id="Contact">Contact</li>
                                <li className="nav-link" onClick={this.navClick} id="DevLinks">Projects</li>
                                <li ><img className="nav-img" src={logo}></img></li>
                            </ul>
                        </div>
                        )}
                    </Sticky>
                    <Page page={this.state.value}></Page>
                
                </StickyContainer>
            </div>
        );
    };

  /*   sticktothetop() {
        var window_top = $(window).scrollTop();
        var top = $('navbar').offset().top;
        if (window_top > top) {
            $('#stick-here').addClass('stick');
            $('#stick-here').height($('#navbar').outerHeight());
        } else {
            $('#stickThis').removeClass('stick');
            $('#stick-here').height(0);
        }
    }*/
}



export default NavBar;