import { BsInstagram, BsTwitter, BsGithub, BsLinkedin, BsTiktok } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
function Header({ headerData }) {
  return (
    <main className="flex justify-center font-rajdhani items-center gap-10 px-32 py-36 border-b border-orange-200 mx-20">
      <div className="shadow-xl shadow-orange-300 "  style={{width:300, height:300}}>
        <img className="" src="/image.jpg" alt="my picture" />
      </div>
      <div className="">
        <h1 className="text-5xl text-orange-500 font-bold my-5">{headerData.welcome}</h1>
        <h1 className="text-3xl font-bold my-4 dark:text-white">{headerData.position}</h1>
        <div className="flex justify-center text-2xl gap-6 my-5 dark:text-white">
          <div className=""><BsTiktok/></div>
          <div className=""><BsInstagram/></div>
          <div className=""><BsTwitter/></div>  
          <div className=""><BsLinkedin/></div>        
        </div>
        <div className="max-w-2xl text-center">
          <p className="text-xl loading-8 dark:text-white">{headerData.summary}</p>
        </div>
        
        <div className="flex justify-center items-center mt-5 p-5 gap-10">
          <div><button className="flex justify-center items-bottom gap-4 px-10 py-2 text-lg bg-orange-500 hover:bg-orange-100 hover:shadow-lg text-white hover:text-orange-500 transition-all"><BsGithub className="text-2xl"/>Repository</button></div>
          <div><button className="flex justify-center items-bottom gap-4 px-10 py-2 text-lg bg-orange-500 hover:bg-orange-100 hover:shadow-lg text-white hover:text-orange-500 transition-all">Resume<BsDownload className="text-2xl"/></button></div>
        </div>
      </div>
    </main>
  )
}

export default Header