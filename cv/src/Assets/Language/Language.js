import React, {useEffect, useRef} from 'react'
import classes from './Language.module.css'

const Language = (props) => {

    const LanguageHeader = "Language";

    return (
        <h1 className={`col ${classes.Language}`}>
            {LanguageHeader}
            <div className={`col ${classes.LanguageInside}`}>
                <p1>test</p1>
            </div>
        </h1>
        
    );
};

export default Language;