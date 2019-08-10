import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import '../css/NavBar.css';
import Page from './page'


class NavBar extends Component {
    constructor(params) {
        super(params);
        this.state = {
            value: params.value
        }

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
                                    <div className="ul">
                                        <a className="nav-link" href="/Resume">Resume</a>
                                        <a className="nav-link" href="/Activities">Activities</a>
                                        <a className="nav-link" href="/">About Me</a>
                                        <a className="nav-link" href="/Experience">Experience</a>
                                        <a className="nav-link" href="/Contact">Contact</a>
                                        <a className="nav-link" href="/Projects">Projects</a>
                                    </div>
                                    <div className="nav-border" />
                                </div>
                            )}
                    </Sticky>

                    <Page />
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