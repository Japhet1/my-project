import { BsSun, BsMoon } from "react-icons/bs";
//import { Link } from "react-router-dom";


const Navbar = ({ toggleDarkMode, darkMode, navData }) => {
  return (
    <nav className="mx-auto md:mx-10 lg:mx-10 bg-white dark:bg-gray-900 sticky top-0 lg:top-3 drop-shadow-lg font-rajdhani">
      <div className="flex justify-between items-bottom px-6 py-2 md:py-4 lg:py-4">
        <div>
          <a href=""><h1 className="md:text-2xl lg:text-4xl text-center items bottom text-orange-500 font-bold">{navData.name}</h1></a>  
        </div>
        <div className="lg:flex items-bottom md:gap-5 lg:space-x-10 text-black md:text-lg lg:text-xl">
          <div className="hidden lg:flex items-center font-bold md:gap-5 lg:gap-10 dark:text-white">
            {navData.menu.map((menu, index) => <a key={index} href={menu.href} className="hover:scale-110 hover:text-orange-500 transition-colors"><h1>{menu.link}</h1></a>)} 
          </div>
          <div className="flex items-center md:text-2xl text-md lg:text-2xl space-x-10 bg-orange-50 p-2 dark:bg-gray-700" onClick={toggleDarkMode}>
            {darkMode ? <BsSun className="animate-pulse text-orange-500 hover:scale-110"/> : <BsMoon className="animate-pulse text-orange-500 hover:scale-110"/>}
          </div>
        </div>
      </div>      
    </nav>
  )
}

export default Navbar