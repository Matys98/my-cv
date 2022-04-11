import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navigation from './Assets/Navigation/Navigation'
import AboutMe from './Assets/AboutMe/AboutMe'
import Certificates from './Assets/Certificates/Certificates'
import ContactMe from './Assets/ContactMe/ContactMe'
import Education from './Assets/Education/Education'
import Interests from './Assets/Interests/Interests'
import Langage from './Assets/Language/Language'
import Projects from './Assets/Projects/Projects'
import Skills from './Assets/Skills/Skills'
import WorkExperience from './Assets/WorkExperience/WorkExperience'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = 'row vh-100'>
          <Navigation></Navigation>

          <div class="row">
            <div class="column">
              <ContactMe></ContactMe> 
            </div>

            <div class="column">
              <AboutMe></AboutMe> 
            </div>
          </div>
          
          <WorkExperience></WorkExperience>
          <Projects></Projects>
          <Skills></Skills>

          <div class="row">
            <div class="column">
              <Education></Education>
            </div>

            <div class="column">
              <Certificates></Certificates>
            </div>
          </div>
          
          <div class="row">
            <div class="column">
              <Langage></Langage>
            </div>
            <div class="column">
              <Interests></Interests>
            </div>
          </div>
          
          
        </div>
      </header>
    </div>
  );
}

export default App;
