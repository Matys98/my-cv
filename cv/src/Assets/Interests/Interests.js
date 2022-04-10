import React, {useEffect, useRef} from 'react'
import classes from './Interests.module.css'

const Interests = (props) => {

    const InterestsHeader = "Interests";

    return (
        <h1 className={`col ${classes.Interests}`}>
            {InterestsHeader}
            <div className={`col ${classes.InterestsInside}`}>
                <p1>Test</p1>
            </div>
        </h1>
        
    );
};

export default Interests;