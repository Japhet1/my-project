import NavBar from './components/navbar'
import Header from './components/header'
import './App.css'
import Skill from './components/skill'
import Project from './components/project'
import Education from './components/education'
import Interest from './components/interest'
import Contact from './components/contact'
import { useState } from 'react'
import data from './data.json'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const navData = data.nav
  const headerData = data.header
  const skillData = data.skill
  const projectData = data.project
  const educationData = data.education
  const interestData = data.interest
  const contactData = data.contact

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
      <main className={`${darkMode ? "dark" : ""}`}>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} navData={navData}/>
        <Header headerData={headerData}/>
        <Skill skillData={skillData}/>
        <Project projectData={projectData}/>
        <Education educationData={educationData}/>
        <Interest interestData={interestData}/>
        <Contact contactData={contactData}/>
      </main>
  )
}

export default App
