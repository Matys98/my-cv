import React, {useEffect, useRef} from 'react'
import classes from './Education.module.css'

const Education = (props) => {

    const EducationHeader = "Education";

    return (
        <h1 className={`col ${classes.Education}`}>
            {EducationHeader}
            <div className={`col ${classes.EducationInside}`}>
                <p1>test</p1>
            </div>
        </h1>
        
    );
};

export default Education;