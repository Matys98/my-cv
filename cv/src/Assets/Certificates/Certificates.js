import React, {useEffect, useRef} from 'react'
import classes from './Certificates.module.css'

const Certificates = (props) => {
    const AWS_Cert = "Certificates";

    return (
        <h1 className={`col ${classes.Certificates}`}>
            {AWS_Cert}
            <div className={`col ${classes.CertificatesInside}`}>
                <p1>test</p1>
            </div>
        </h1>
        
    );
};

export default Certificates;