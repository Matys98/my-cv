import React, {useEffect, useRef} from 'react'
import classes from './AboutMe.module.css'

const AboutMe = (props) => {
    const AboutMeText = "I am student of Computer Science on master degree.\n I like new technologies, challenging tasks, traveling around the world, playing curling and motorization. ";
    const AboutMeHeader = "About Me";

    return (
        <h1 className={`col ${classes.AboutMe}`}>
            {AboutMeHeader}
            <div className={`col ${classes.AboutMeInside}`}>
                <p1>{AboutMeText}</p1>
            </div>
        </h1>
        
    );
};

export default AboutMe;