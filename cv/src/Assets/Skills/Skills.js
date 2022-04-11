import React, {useEffect, useRef} from 'react'
import classes from './Skills.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Skills = (props) => {

    const SkillsHeader = "Skills";

    return (
            <h1 className={`col ${classes.Skills}`}>
                {SkillsHeader}
                <div className={`col ${classes.SkillsInside}`}>
                <Tabs>
                <TabList>
                <Tab>
                    <p>Cloud</p>
                </Tab>
                <Tab>
                    <p>Containerization</p>
                </Tab>
                <Tab>
                    <p>IaaC</p>
                </Tab>
                <Tab>
                    <p>CI/CD</p>
                </Tab>
                <Tab>
                    <p>Monitoring</p>
                </Tab>
                <Tab>
                    <p>Data Base</p>
                </Tab>
                <Tab>
                    <p>Programing</p>
                </Tab>
                <Tab>
                    <p>Networking</p>
                </Tab>
                </TabList>

                <TabPanel>
                <div className="panel-content">
                    <h2>Cloud</h2>
                    <p>
                        AWS - Amazon Web Services
                    </p>
                </div>
                </TabPanel>
                <TabPanel>
                <div className="panel-content">
                    <h2>Containerization</h2>
                </div>
                </TabPanel>
                <TabPanel>
                <div className="panel-content">
                    <h2>IaaC</h2>
                </div>
                </TabPanel>
                <TabPanel>
                <div className="panel-content">
                    <h2>CI/CD</h2>
                </div>
                </TabPanel>
                <TabPanel>
                <div className="panel-content">
                    <h2>Monitoring</h2>
                </div>
                </TabPanel>
                <TabPanel>
                <div className="panel-content">
                    <h2>Data Base</h2>
                </div>
                </TabPanel>
                <TabPanel>
                <div className="panel-content">
                    <h2>Programing</h2>
                </div>
                </TabPanel>
                <TabPanel>
                <div className="panel-content">
                    <h2>Networking</h2>
                </div>
                </TabPanel>
            </Tabs>
                </div>
            </h1>
    );
};

export default Skills;