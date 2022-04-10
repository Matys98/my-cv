import React, {useEffect, useRef} from 'react'
import classes from './Rodo.module.css'

const Rodo = (props) => {

    const RodoHeader = "RODO";

    return (
        <h1 className={`col ${classes.Rodo}`}>
            {RodoHeader}
            <div className={`col ${classes.RodoInside}`}>
                <p1>test</p1>
            </div>
        </h1>
        
    );
};

export default Rodo;