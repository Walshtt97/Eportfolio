import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import '../css/NavBar.css';
import logo from '../media/me.png';
import { NavLink } from 'react-router-dom';
import Page from './page'


class NavBar extends Component {
    constructor(params) {
        super(params);
        this.state = {
            value: params.value
        }

    }


    navClick = (e) => {
    }


    render() {
        return (
            <div >
                <StickyContainer>
                    <Sticky>
                        {({
                            style
                        }) => (
                                <div className="navbar" style={style}>
                                    <ul>
                                        <li className="nav-button"><a className="nav-link" href="/Resume">Resume</a></li>
                                        <li className="nav-button"><a className="nav-link" href="/Activities">Activities</a></li>
                                        <li className="nav-button"><a className="nav-link" href="/">About Me</a></li>
                                        <li className="nav-button"><a className="nav-link" href="/Experience">Experience</a></li>
                                        <li className="nav-button"><a className="nav-link" href="/Contact">Contact</a></li>
                                        <li className="nav-button"><a className="nav-link" href="/Projects">Projects</a></li>
                                    </ul>
                                    <div className="nav-border" />
                                </div>
                            )}
                    </Sticky>
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