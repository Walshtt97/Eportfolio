import React, { Component } from 'react';
import resumeImg from '../../media/resume.png';
import resume from '../../media/resume.pdf';

class Resume extends Component{
    render() {
        return (
            <div>
            <h1>Resume</h1>
            <ul><li><a href={resume} download>Download</a></li></ul>
            <img className="activityImage" src={resumeImg}></img> 
            </div>
        );
    };
}

export default Resume;