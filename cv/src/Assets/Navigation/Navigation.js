import React, {useEffect, useRef} from 'react'
import classes from './Navigation.module.css'

const Navigation = (props) => {

    const NavigationHeader = "Nav bar";

    return (
        <h1 className={`col ${classes.Navigation}`}>
            {NavigationHeader}
            <div className={`col ${classes.NavigationInside}`}>
                <nav>Home</nav>
                <nav>ContactMe</nav>
                <nav>AboutMe</nav>
                <nav>Work Experience</nav>
                <nav>Projects</nav>
                <nav>Skills</nav>
                <nav>Education</nav>
                <nav>Certificates</nav>
                <nav>Langage</nav>
                <nav>Interests</nav>
            </div>
        </h1>
        
    );
};

export default Navigation;