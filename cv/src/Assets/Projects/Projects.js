import React, {useEffect, useRef} from 'react'
import classes from './Projects.module.css'

const Projects = (props) => {
    
    const World4EV = "WIP";
    const Ma1000 = "WIP";
    const MyCv = "This";
    const BadAir = "";
    const TicTacToe = "";
    const SmartBlainds = "";

    return (
        <h1 className={`col ${classes.Projects}`}>
            Projects
            <div className={`col ${classes.ProjectsInside}`}>
                <p1>{MyCv}</p1>
            </div>
        </h1>
    );
};

export default Projects;