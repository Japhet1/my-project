import { BsSunFill, BsMoonFill } from "react-icons/bs";
//import { Link } from "react-router-dom";
import { Link } from 'react-scroll';


const Navbar = ({ toggleDarkMode, darkMode, navData }) => {
  return (
    <nav className="mx-auto md:mx-5 lg:mx-10 top-0 lg:top-3 rounded-md drop-shadow-2xl">
      <div className="flex justify-between items-bottom md:py-4 lg:py-4">
        <div>
          <a href=""><h1 className="text-xl md:text-2xl lg:text-3xl text-center items bottom text-[#003285] dark:text-white px-3 py-2 rounded-xl font-bold">{navData.name}</h1></a>  
        </div>
        <div className="lg:flex items-bottom md:gap-5 lg:space-x-10 text-[#2A629A] md:text-lg lg:text-xl">
          <div className="hidden lg:flex items-center font-bold md:gap-5 lg:gap-10 text-[#2A629A] dark:text-white px-5 py-2 rounded-xl">
            {navData.menu.map((menu, index) => <Link key={index} smooth={true} duration={800} to={menu.href} className="hover:scale-110 hover:font-bold hover:text-xl dark:hover:text-white dark:border-white transition-colors cursor-pointer"><h1>{menu.link}</h1></Link>)} 
          </div>
          <div className="flex items-center md:text-2xl text-md lg:text-2xl space-x-10 text-[#2A629A] px-3 py-2 rounded-xl" onClick={toggleDarkMode}>
            {darkMode ? <BsSunFill className="animate-pulse dark:text-white hover:scale-110"/> : <BsMoonFill className="animate-pulse text-[#2A629A] hover:scale-110"/>}
          </div>
        </div>
      </div>      
    </nav>
  )
}

export default Navbar