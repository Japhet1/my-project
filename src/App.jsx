import NavBar from './components/navbar'
import Header from './components/header'
import './App.css'
import Skill from './components/skill'
import Project from './components/project'
import Education from './components/education'
import Interest from './components/interest'
import Contact from './components/contact'

function App() {

  return (

      <main className='bg-white'>
        <NavBar />
        <Header />
        <Skill/>
        <Project/>
        <Education/>
        <Interest/>
        <Contact/>
      </main>

  )
}

export default App
