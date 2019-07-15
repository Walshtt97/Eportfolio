import React, { Component } from 'react';
import '../css/Content.css';
import AboutMe from './content/AboutMe.jsx';
import Activities from './content/Activities.jsx';
import Contact from './content/Contact.jsx';
import Resume from './content/Resume.jsx';
import Experience from './content/Experience.jsx';
import DevLinks from './content/DevLinks.jsx';

class Page extends Component{

    switchPage(param){
        switch(param){
            case 'AboutMe':
                return <AboutMe></AboutMe>;
            case 'Activities':
                return <Activities></Activities>;
            
            case 'Contact':
                return <Contact></Contact>;
            
            case 'Resume':
                return <Resume></Resume>;
            
            case 'Experience':
                return <Experience></Experience>;
                
            case 'DevLinks':
                return <DevLinks></DevLinks>;

            default:
                return <AboutMe></AboutMe>;
        }
    }

    render(page){
        return (
            <div className="content" >
                {(this.switchPage(this.props.page))}
            </div> 
        );
    };
}

export default Page;