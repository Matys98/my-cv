import React, {useEffect, useRef} from 'react'
import classes from './WorkExperience.module.css'

const WorkExperience = (props) => {

    const WorkExperienceHeader = "Work Experience";

    return (
        <h1 className={`col ${classes.WorkExperience}`}>
            {WorkExperienceHeader}
            <div className={`col ${classes.WorkExperienceInside}`}>
                <p1>test</p1>
            </div>
        </h1>
        
    );
};

export default WorkExperience;