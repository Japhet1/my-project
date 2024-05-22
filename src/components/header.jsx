import { BsGithub, } from "react-icons/bs";
import { BsDownload, } from "react-icons/bs";
import 'animate.css';

function Header({ headerData }) {
  return (
    <main id="about" className=" text-center font-poppins items-center py-10 md:py-10 lg:px-32 lg:py-40 md:mx-10 scroll-mt-28 scroll-smooth">
      

      <div className="hero">
        <div className="hero-content flex lg:flex-row items-center drop-shadow-2xl">
          {/* <img src="/hero.png" className="max-w-lg bg-transparent" /> */}
          {/* <video className="max-w-md rounded-xl bg-yellow-200">
            <source src="Ai.mp4" type="video/mp4" />
          </video> */}
          <div className="space-y-10">
            <div className="space-y-5">
              <h1 className="text-2xl md:text-4xl lg:text-6xl text-[#003285] font-extrabold my-2 md:my-2 lg:my-2 dark:text-slate-500">{headerData.welcome}</h1>
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 text-black md:my-2 lg:my-2 dark:text-white">{headerData.position}</h1>
            </div>
            {/* <div className="flex justify-center text-lg md:text-xl lg:text-xl gap-3 md:gap-4 lg:gap-4 my-4 dark:text-white">
              <div className=""><BsTiktok/></div>
              <div className=""><BsInstagram/></div>
              <div className=""><BsTwitter/></div>  
              <div className=""><BsLinkedin/></div>        
            </div> */}
            <div className="px-8 md:px-20 lg:px-20 text-center text-black">
              <div className="flex gap-5 text-md md:text-lg lg:text-xl dark:text-white font-normal"><p className="leading-8">{headerData.summary}</p></div>
            </div>
            <div className="flex justify-center items-center mt-5 p-5 gap-5 font-normal">
              <button><a className="flex justify-center items-bottom gap-4 md:px-10 md:py-2 p-2 text-md md:text-lg lg:text-xl bg-[#2A629A] dark:text-white dark:bg-slate-500 lg:hover:bg-slate-700 hover:shadow-lg text-white hover:text-[#FFC470] transition-all rounded-xl font-semibold" href="https://github.com/Japhet1" target="_blank" rel="noreferrer"><BsGithub className="text-xl md:text-2xl lg:text-2xl"/>Repository</a></button>
              <button><a className="flex justify-center items-bottom gap-4 md:px-10 md:py-2 p-2 text-md md:text-lg lg:text-xl bg-[#2A629A] dark:text-white dark:bg-slate-500 lg:hover:bg-slate-700 hover:shadow-lg text-white hover:text-[#FFC470] transition-all rounded-xl font-semibold" href="/CV-Passah_Japhet.pdf" download="CV-Passah_Japhet.pdf">Resume<BsDownload className="text-xl md:text-2xl lg:text-2xl"/></a></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Header