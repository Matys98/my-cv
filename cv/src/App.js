import logo from './logo.svg';
import './App.css';
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
            <AboutMe></AboutMe>
            </div>
      </header>
    </div>
  );
}

export default App;
