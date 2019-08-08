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
                        <b>DFIN </b>- I have worked for two semesters on the DFIN Data and 
                        Analytics Team gaining experience in Data Engineering, Software 
                        Engineering and Data Science. This hybrid role has both been 
                        enjoyable and allowed me to gain valuable experience about cloud 
                        computing and SQL Integration Services.
                    </div>
                    <img className="activityImage" src={siemens}></img>
                    <div className="caption">
                        <b>Siemens PLM </b>- Over the course of three semesters as a Software 
                        Engineering CO-OP I learned about client-server architecture, web 
                        development, version control, automated testing and software analytics
                    </div>
                    <h1>Other Experience</h1>
                    <img className="activityImage" src={kid}></img>
                    <div className="caption">
                        I volunteered to develop and lead a Raspberry Pi project for high school 
                        students. I taught the students about infrared motion detectors, RGB LED 
                        lights and buttons.
                    </div>
                    <img className="activityImage" src={technologies}></img>
                    <div className="caption">
                        Just some of the technologies I have worked with professionally.
                    </div>
                    <img className="activityImage" src={samsung}></img>
                    <div className="caption">
                        In 2013, I was 1 of 30 high school students from the Chicagoland 
                        area chosen to attend the Samsung Mobile App Academy. 
                    </div>
                </form>
            </div>
        );
    };
}

export default Experience;