import { BsSun, BsMoon } from "react-icons/bs";


const Navbar = ({ toggleDarkMode, darkMode, navData }) => {
  return (
    <nav className="md:mx-10 lg:mx-10 bg-white font-rajdhani dark:bg-gray-900 sticky top-3 drop-shadow-lg">
      <div className="flex justify-between items-bottom px-6 py-4">
        <div>
          <a href=""><h1 className="md:text-2xl lg:text-4xl text-center items bottom text-orange-500 font-bold">{navData.name}</h1></a>  
        </div>
        <div className="flex items-bottom md:gap-5 lg:space-x-10 text-black md:text-lg lg:text-xl">
          <div className="flex items-center font-bold md:gap-5 lg:gap-10 dark:text-white">
            {navData.menu.map((menu, index) => <a key={index} href={menu.href} className="hover:scale-110 hover:text-orange-500 transition-colors "><h1>{menu.link}</h1></a>)}
            
          </div>
          <div className="flex items-center text-2xl space-x-10 bg-orange-50 p-2 dark:bg-gray-700" onClick={toggleDarkMode}>
            {darkMode ? <BsSun className="animate-pulse text-orange-500 hover:scale-110"/> : <BsMoon className="animate-pulse text-orange-500 hover:scale-110"/>}
          </div>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar