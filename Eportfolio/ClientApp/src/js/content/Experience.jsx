import React, { Component } from 'react';
import DFIN from '../../media/DFin.png';
import siemens from '../../media/Siemens.jfif';
import kid from '../../media/bykwd.jpg';
import samsung from '../../media/SamsungBootCamp.jpg';
import technologies from '../../media/technologies.png';

class Experience extends Component{
    render() {
        return (
            <div class="pagecontent">
                <h1>Work Experience</h1>
                <form>
                    <img className="activityImage" src={DFIN}></img>
                    <div className="caption">
                        <b>DFIN </b>- I spent 8 months working on the Data and Analytics Team at DFIN. I 
                        gained experience as a Data Engineering, Software Engineering and Data Science. 
                        I Enjoy this hybrid role and gamed valuable experience about cloud computing and 
                        SQL Integration Services.
                    </div>
                    <img className="activityImage" src={siemens}></img>
                    <div className="caption">
                        <b>Siemens PLM </b>- Over the course of my 3 semesters as a Software 
                        Engineering CO-OP I learned about Client-Server Architecture, 
                        Web Development, Version Control, Automated Testing and Software 
                        Analytics.
                    </div>
                    <h1>Other Experience</h1>
                    <img className="activityImage" src={kid}></img>
                    <div className="caption">
                        I volunteered to develop and lead a Raspberry Pi project for high 
                        school students on bring your kid to work day. I got to teach 
                        them about infrared motion detectors, RGB LED lights and buttons.
                    </div>
                    <img className="activityImage" src={technologies}></img>
                    <div className="caption">
                        Just some of the technologies I have worked with professionally.
                    </div>
                    <img className="activityImage" src={samsung}></img>
                    <div className="caption">
                        In 2013, I was honored to have been 1 of 30 high school students in the 
                        Chicagoland area chosen to attend the Samsung Mobile App Academy. 
                    </div>
                </form>
            </div>
        );
    };
}

export default Experience;