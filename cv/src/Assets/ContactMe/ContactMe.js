import React, {useEffect, useRef} from 'react'
import classes from './ContactMe.module.css'

const ContactMe = (props) => {

    const ContactMeHeader = "Contact Me";

    return (
        <h1 className={`col ${classes.ContactMe}`}>
            {ContactMeHeader}
            <div className={`col ${classes.ContactMeInside}`}>
                <p1>test</p1>
            </div>
        </h1>
        
    );
};

export default ContactMe;