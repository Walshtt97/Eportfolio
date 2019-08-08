import React, { Component } from 'react';
import resumeImg from '../../media/resume.png';
import resume from '../../media/resume.pdf';

class Resume extends Component {
    render() {
        return (
            <div class="pagecontent">
                <h1>Resume</h1>
                <a className="resumeLink" href={resume} download>Download</a>
                <br />
                <form>
                    <img className="activityImage" src={resumeImg}></img>
                </form>
            </div >
        );
    };
}

export default Resume;