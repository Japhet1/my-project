import { BsInstagram, BsTwitter, BsGithub, BsLinkedin, BsTiktok } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
function Header({ headerData }) {
  return (
    <main className="text-center font-rajdhani items-center md:py-10 lg:px-32 lg:py-14 border-b border-orange-200 md:mx-10 dark:border-orange-900">
      <div className="flex justify-center items-center">
        <div className="md:w-52 md:rounded-full lg:w-52 shadow-md shadow-orange-300 text-center"  style={{}}>
          <img className="md:rounded-full" src="/image.jpg" alt="my picture" />
        </div>
      </div>
      <div className="md:mt-5 lg:mt-10">
        <h1 className="md:text-4xl lg:text-5xl text-orange-500 font-bold my-5">{headerData.welcome}</h1>
        <h1 className="md:text-2xl lg:text-3xl font-bold my-4 dark:text-white">{headerData.position}</h1>
        <div className="flex justify-center md:text-xl lg:text-2xl gap-6 my-5 dark:text-white">
          <div className=""><BsTiktok/></div>
          <div className=""><BsInstagram/></div>
          <div className=""><BsTwitter/></div>  
          <div className=""><BsLinkedin/></div>        
        </div>
        <div className="md:px-20 lg:px-40 text-center">
          <p className="md:text-lg lg:text-xl loading-8 dark:text-white">{headerData.summary}</p>
        </div>
        
        <div className="flex justify-center items-center mt-5 p-5 gap-10">
          <div><button className="flex justify-center items-bottom gap-4 px-10 py-2 md:text-md lg:text-lg bg-orange-500 hover:bg-orange-100 hover:shadow-lg text-white hover:text-orange-500 transition-all"><BsGithub className="text-2xl"/>Repository</button></div>
          <div><button className="flex justify-center items-bottom gap-4 px-10 py-2 md:text-md lg:text-lg bg-orange-500 hover:bg-orange-100 hover:shadow-lg text-white hover:text-orange-500 transition-all">Resume<BsDownload className="text-2xl"/></button></div>
        </div>
      </div>
    </main>
  )
}

export default Header