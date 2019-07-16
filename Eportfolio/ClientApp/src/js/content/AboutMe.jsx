import React, { Component } from 'react';
import '../../css/Content.css';

class AboutMe extends Component{
    render() {
        return (
            <div class="pagecontent">
                <h1>About Me</h1>
                <p>
                    Welcome to my E-Portfolio! I am currently in my final year at the 
                    University of Cincinnati (UC). I will be graduting Bachelor of 
                    Engineering in Computer Science and a Minor in Mathematics in 
                    the spring of 2020. Through my Cooperative Education program 
                    I have gained experience in many areas, but I am proudest of 
                    the skills I have developed in web design and application design.
                    <br/>
                    <br/>
                    Outside of academics I try to stay involved through several different 
                    campus organizations and charitable groups. I held executive offices 
                    in both my Fraternity and the Rugby Club.
                    <br/>
                    <br/>
                    Thank you for viewing my portfolio! I hope you enjoy learning more
                    about my engagements and experiences. <b>Please look at 
                    some of my other web design work on the projects page.
                    </b>
                </p>
            </div>
        );
    };
}

export default AboutMe;