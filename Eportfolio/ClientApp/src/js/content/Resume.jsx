import React, { Component } from 'react';
import resumeImg from '../../media/resume.png';
import resume from '../../media/resume.pdf';

class Resume extends Component{
    render() {
        return (
            <div class="pagecontent">
            <h1>Resume</h1>
            <ul><li><a href={resume} download>Download</a></li></ul>
            <form>
            <img className="activityImage" src={resumeImg}></img> 
            </form>
            </div>
        );
    };
}

export default Resume;