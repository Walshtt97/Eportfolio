import React, { Component } from 'react';
import '../../css/Content.css';

class AboutMe extends Component {
    render() {
        return (
            <div className="pagecontent">
                <h1>About Me</h1>
                <p>
                    I am currently in the final year of my five year cooperative education
                    program (CO-OP) at the University of Cincinnati (UC) and will graduate
                    in the spring of 2020 with a Bachelor of Engineering in Computer Science
                    and a Minor in Mathematics. Through my five CO-OP semesters I have gained
                    valuable experience and honed my skills in many areas including two areas
                    of focus - web design and application design.
                    <br />
                    <br />
                    Outside of academics I have stayed involved with the UC and Cincinnati
                    communities through several campus organizations and charitable groups
                    while holding executive offices in both my fraternity and rugby club.
                    <br />
                    <br />
                    Thank you for viewing my E-Portfolio! I hope that you enjoy learning more
                    about me and my experiences by viewing the remainder of my site
                    <b> including my other web design work on the Projects page.
                    </b>
                </p>
            </div>
        );
    };
}

export default AboutMe;