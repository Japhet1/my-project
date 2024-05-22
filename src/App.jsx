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
import Experience from './components/experience'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const navData = data.nav
  const headerData = data.header
  const skillData = data.skill
  const experienceData = data.experience
  const projectData = data.project
  const educationData = data.education
  const interestData = data.interest
  const contactData = data.contact

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
      <main className={`${darkMode ? "dark" : ""} font-poppins`}>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} navData={navData}/>
        <Header headerData={headerData}/>
        <Skill skillData={skillData}/>
        <Experience experienceData={experienceData}/>
        <Project projectData={projectData}/>
        <Education educationData={educationData}/>
        <Interest interestData={interestData}/>
        <Contact contactData={contactData} navData={navData}/>
      </main>
  )
}

export default App
