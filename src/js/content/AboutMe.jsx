import React, { Component } from 'react';
import '../../css/Content.css';

class AboutMe extends Component{
    render() {
        return (
            <div class="pagecontent">
                <h1>About Me</h1>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Welcome to my E-Portfolio! I am in my last year at the University 
                    of Cincinnati (UC). I am currently seeking a Bachelors of 
                    Engineering in Computer Science and a Minor in Mathematics. 
                    I plan to graduate in the spring of 2020. Through my Cooperative 
                    Education program I have gained experience in many areas, but 
                    I am especially happy with all it has taught me about web design 
                    and application design.
                    <br></br>
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Outside of academics I try to stay connected to involve myself 
                    with several different campus organizations and charitable groups. 
                    I held executive offices in both my Fraternity and the Rugby 
                    Club on campus.
                    <br></br>
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Thank you for viewing my portfolio! I hope you enjoy learning 
                    more about my engagements and experiences. <b>Please Take a 
                    look at some of my other web design work on the projects page.
                    </b>
                </p>
            </div>
        );
    };
}

export default AboutMe;