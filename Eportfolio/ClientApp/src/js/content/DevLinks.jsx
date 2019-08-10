import React, { Component } from 'react';
import '../../css/Content.css';

class DevLinks extends Component{
    render() {
        return (
            <div className="pagecontent">
                <h1>Links For Other Projects</h1>
                <div>
                    <ul>
                        <li><a href="https://github.com/Walshtt97?tab=repositories">Github Repositories</a></li>
                        <li><a href="https://www.mwrrs.org/">Midwest Referees Society</a></li>
                        <li><a href="https://www.phisigmakappauc.com/">Phi Sigma Kappa UC</a></li>
                    </ul>
                </div>
            </div>
        );
    };
}

export default DevLinks;