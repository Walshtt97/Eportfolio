import React, { Component } from 'react';
import DFIN from '../../media/DFin.png';
import siemens from '../../media/Siemens.jfif';
import kid from '../../media/bykwd.jpg';
import samsung from '../../media/SamsungBootCamp.jpg';
import java from '../../media/java.jpg';

class Experience extends Component{
    render() {
        return (
            <div>
                <h1>Work Experience</h1>
                <form>
                    <img className="activityImage" src={DFIN}></img>
                    <div className="caption">
                        I spent 2 semesters with DFIN Solutions in Chicago. Working on the 
                        Data and Analytics Team I have gained experience as a CO-OP in Data 
                        Engineering and Data Science. Using my experience in Software Engineering 
                        I Enjoyed this somewhat hybrid role and learned a lot about cloud 
                        computing and SQL Integration Services.
                    </div>
                    <img className="activityImage" src={siemens}></img>
                    <div className="caption">
                        Over the course of my 3 semesters with at Siemens PLM in a Software 
                        Engineering CO-OP I  learned about Client-Server Architecture, 
                        Web Development, Version Control, Automated Testing and Software 
                        Analytics.
                    </div>
                    <h1>Other Experience</h1>
                    <img className="activityImage" src={kid}></img>
                    <div className="caption">
                        I was asked to develop and lead a Raspberry Pi project for high 
                        school students on bring your kid to work day. I got to teach 
                        them about infrared motion detectors, RGB LED lights and buttons.
                    </div>
                    <img className="activityImage" src={samsung}></img>
                    <div className="caption">
                        In 2013, I was honored to have been chosen to attend the Samsung 
                        Mobile App Academy. A summer learning opportunity that gave 
                        me the chance to learn the fundamentals of application design 
                        from industry professionals.
                    </div>
                    <img className="activityImage" src={java}></img>
                    <div className="caption">
                        I learned a lot about Java through my AP Computer Science course 
                        in high school. As my personal favorite language it is my reason 
                        for falling in love with programming in the first place. After 
                        taking the course I was chosen to be a teachers assistant for 
                        the next 2 years in high school. My strengths in the language 
                        made me easily adapt to other languages like C and C++, furthermore 
                        it led me to my first CO-OP with Siemens writing auto tests.
                    </div>
                </form>
            </div>
        );
    };
}

export default Experience;