import React, {useEffect, useRef} from 'react'
import classes from './Education.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Education = (props) => {

    const EducationHeader = "Education";

    const masterUniversty = "Silesian University of Technology - Master";
    const masterSubject = "Informatics (CS)";
    const masterYears = "Mar 2021 - Now";
    const masterSpecialization = "Internet i technologie sieciowe";

    const bachelorUniversty = "Silesian University of Technology - Bachelor";
    const bachelorSubject = "Engineer Automatic control and Robotics";
    const bachelorYears = "Jan 2017 - Feb 2021";
    const bachelorSpecialization = "Technologie informacyjne w Automatyce i Robotyce";

    return (
        <div>
            <h1 className={`col ${classes.Education}`}>
                {EducationHeader}
            </h1>

            <div className={`col ${classes.EducationInside}`}>
            <Tabs>
                <TabList>
                {/* <Tab>
                    <p>Title 1</p>
                </Tab> */}
                <Tab>
                    <p>Master</p>
                </Tab>
                <Tab>
                    <p>Bachelor</p>
                </Tab>
                </TabList>

                {/* <TabPanel>
                <div className="panel-content">
                    <h2>Any content 1</h2>
                </div>
                </TabPanel> */}
                <TabPanel>
                <div className="panel-content">
                    <p>{masterUniversty}</p>
                    <p>{masterSubject}</p>
                    <p>{masterYears}</p>
                    <p>Specialization: {masterSpecialization}</p>
                </div>
                </TabPanel>
                <TabPanel>
                <div className="panel-content">
                    <p>{bachelorUniversty}</p>
                    <p>{bachelorSubject}</p>
                    <p>{bachelorYears}</p>
                    <p>Specialization: {bachelorSpecialization}</p>
                </div>
                </TabPanel>
            </Tabs>
            </div>
        </div> 
    );
};

export default Education;