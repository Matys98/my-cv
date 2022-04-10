import React, {useEffect, useRef} from 'react'
import classes from './Skills.module.css'

const Skills = (props) => {

    const SkillsHeader = "Skills";

    return (
        <h1 className={`col ${classes.Skills}`}>
            {SkillsHeader}
            <div className={`col ${classes.SkillsInside}`}>
                <p1>test</p1>
            </div>
        </h1>
        
    );
};

export default Skills;