import React, { Component } from 'react';
import rugby from '../../media/rugbyteam.png';
import board from '../../media/PhiSigEboard.png';
import phisig from '../../media/phisigmakappa.png';
import habitat from '../../media/Habitat.jpeg';
import tough from '../../media/toughmudder.jpg';



class Activities extends Component{
    render() {
        return (
            <div>
                <h1>Activities</h1>
                <form>
                    <img className="activityImage" src={rugby}></img>
                    <div className="caption">
                        UCRFC - I picked up the amazing sport of rugby in 6th grade 
                        when I was trying to follow in my fathers foot steps. I hold 
                        2 state championships in Illinois and I am proud to say our 
                        college team took 3rd in D1AA nationals my sophomore year.
                    </div>
                    <img className="activityImage" src={board}></img>
                    <div className="caption">
                        In my second semester of college I chose to start a fraternity on 
                        UC's campus. Our local chapter of Phi Sigma Kappa has helped to 
                        serve the Cincinnati community and I am proud to serve as our current 
                        Vice President. Below are some of our recent accomplishments.
                    </div>
                    <img className="activityImage" src={phisig}></img>
                    <div className="caption">
                        Polar Plunge - The Special Olympics has been an important cause 
                        to me ever since I started working with special needs swimmers. 
                        I am proud to have now partaken in two polar plunges with my fraternity. 
                        We as a team were one of the top 5 donors in the Greater Cincinnati 
                        Polar Plunge in February 2018, and helped to raise over $6,000.
                    </div>
                    <img className="activityImage" src={habitat}></img>
                    <div className="caption">
                        Through Phi Sigma Kappa I have now gotten to work on 2 separate 
                        habitat for humanity projects. It is always an honor to help out 
                        the less fortunate.
                    </div>
                    <img className="activityImage" src={tough}></img>
                    <div className="caption">
                        Lost my shoes during electroshock therapy, but I loved doing Tough 
                        Mudder with two of my brothers from Phi Sigma Kappa.
                    </div>
                </form>
            </div>
        );
    };
}

export default Activities;