import { BsSunFill, BsMoonFill } from "react-icons/bs";
//import { Link } from "react-router-dom";


const Navbar = ({ toggleDarkMode, darkMode, navData }) => {
  return (
    <nav className="mx-auto md:mx-5 lg:mx-10 bg-white dark:bg-cyan-900 sticky top-0 lg:top-3 drop-shadow-lg font-gruppo rounded-md">
      <div className="flex justify-between items-bottom px-6 py-2 md:py-4 lg:py-4">
        <div>
          <a href=""><h1 className="text-xl md:text-2xl lg:text-3xl text-center items bottom text-green-800 dark:text-green-50 font-bold">{navData.name}</h1></a>  
        </div>
        <div className="lg:flex items-bottom md:gap-5 lg:space-x-10 text-black md:text-lg lg:text-xl">
          <div className="hidden lg:flex items-center font-bold md:gap-5 lg:gap-10 dark:text-white">
            {navData.menu.map((menu, index) => <a key={index} href={menu.href} className="hover:scale-110 hover:text-green-800 dark:hover:text-white hover:border-b-2 border-green-800 dark:border-white transition-colors"><h1>{menu.link}</h1></a>)} 
          </div>
          <div className="flex items-center md:text-2xl text-md lg:text-2xl space-x-10 bg-green-50 p-2 dark:bg-green-700 rounded-md" onClick={toggleDarkMode}>
            {darkMode ? <BsSunFill className="animate-pulse text-green-50 hover:scale-110"/> : <BsMoonFill className="animate-pulse text-green-800 hover:scale-110"/>}
          </div>
        </div>
      </div>      
    </nav>
  )
}

export default Navbar