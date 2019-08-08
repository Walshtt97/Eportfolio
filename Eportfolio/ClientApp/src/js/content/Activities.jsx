import React, { Component } from 'react';
import rugby from '../../media/rugbyteam.png';
import board from '../../media/PhiSigEboard.png';
import phisig from '../../media/phisigmakappa.png';
import habitat from '../../media/Habitat.jpeg';
import tough from '../../media/toughmudder.jpg';



class Activities extends Component{
    render() {
        return (
            <div class="pagecontent">
                <h1>Activities</h1>
                <form>
                    <img className="activityImage" src={rugby}></img>
                    <div className="caption">
                        <b>UC Rugby Football Club</b> - I picked up the amazing sport of rugby 
                        in 6th grade when I was to following in my father's footsteps. I hold 2 
                        state championships in Illinois and I am proud to say UC’s team took 3rd 
                        in D1AA nationals my sophomore year.
                    </div>
                    <img className="activityImage" src={board}></img>
                    <div className="caption">
                        <b>Phi Sigma Kappa </b>- Beginning my freshman year at UC I helped found 
                        the Phi Sigma Kappa chapter on campus. Our UC Phi Sigma Kappa chapter has 
                        helped serve the Cincinnati community and I am honored to have been its 
                        Vice President. Below are some of our recent accomplishments.
                    </div>
                    <img className="activityImage" src={phisig}></img>
                    <div className="caption">
                        <b>Polar Plunge </b>- Special Olympics has been an important cause to me 
                        ever since I started working with special needs swimmers as a freshman in 
                        high school. Partaking in two polar plunges with my fraternity has been 
                        very gratifying. Our team was one of the top five donors in the Greater 
                        Cincinnati Polar Plunge in February 2018 and helped to raise over $6,000.
                    </div>
                    <img className="activityImage" src={habitat}></img>
                    <div className="caption">
                        <b>Habitat For Humanity </b>- Through Phi Sigma Kappa I have now gotten 
                        to work on two separate habitat for humanity projects. It is always 
                        fulfilling to help those in need.
                    </div>
                    <img className="activityImage" src={tough}></img>
                    <div className="caption">
                        <b>Tough Mudder </b>- I lost my shoes during electroshock therapy, but 
                        loved doing Tough Mudder with two of my Phi Sigma Kappa brothers
                    </div>
                </form>
            </div>
        );
    };
}

export default Activities;