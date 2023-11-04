import { BsSun, BsMoon } from "react-icons/bs";


const Navbar = ({ toggleDarkMode, darkMode, navData }) => {
  return (
    <nav className="mx-20 bg-white font-rajdhani dark:bg-gray-900 sticky top-3 drop-shadow-lg">
      <div className="flex justify-between items-bottom px-6 py-4">
        <div>
          <a href=""><h1 className="text-4xl text-center items bottom text-orange-500 font-bold">{navData.name}</h1></a>  
        </div>
        <div className="flex items-bottom gap-10 text-black text-xl">
          <div className="flex items-center font-bold gap-10 dark:text-white">
            <a href="" className="hover:scale-110 hover:text-orange-500"><h1>{navData.menu.about}</h1></a>
            <a href="" className="hover:scale-110 hover:text-orange-500"><h1>{navData.menu.skill}</h1></a>
            <a href="" className="hover:scale-110 hover:text-orange-500"><h1>{navData.menu.project}</h1></a>
            <a href="" className="hover:scale-110 hover:text-orange-500"><h1>{navData.menu.education}</h1></a>
            <a href="" className="hover:scale-110 hover:text-orange-500"><h1>{navData.menu.interest}</h1></a>
            <a href="" className="hover:scale-110 hover:text-orange-500"><h1>{navData.menu.contact}</h1></a>
          </div>
          <div className="flex items-center text-2xl gap-10 bg-orange-50 p-2 dark:bg-gray-700" onClick={toggleDarkMode}>
            {darkMode ? <BsSun className="animate-pulse text-orange-500 hover:scale-110"/> : <BsMoon className="animate-pulse text-orange-500 hover:scale-110"/>}
          </div>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar