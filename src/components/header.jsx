import { BsInstagram, BsTwitter, BsGithub, BsLinkedin, BsTiktok } from "react-icons/bs";
import { BsDownload, } from "react-icons/bs";
import 'animate.css';

function Header({ headerData }) {
  return (
    <main id="about" className=" text-center font-gruppo items-center py-10 md:py-10 lg:px-32 lg:py-16 border-b border-green-200 md:mx-10 dark:border-green-900 scroll-mt-28 scroll-smooth">
      <div className="flex justify-center items-center">
        <div className="w-28 rounded-full md:w-52 lg:w-52 shadow-md text-center"  style={{}}>
          <img className="rounded-full" src="/image.jpg" alt="my picture" />
        </div>
      </div>
      <div className="md:mt-5 lg:mt-10">
        <h1 className="text-2xl md:text-4xl lg:text-4xl text-green-800 font-extrabold my-2 md:my-2 lg:my-2 dark:text-cyan-50">{headerData.welcome}</h1>
        <h1 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2 md:my-2 lg:my-2 dark:text-white">{headerData.position}</h1>
        <div className="flex justify-center text-lg md:text-xl lg:text-xl gap-3 md:gap-4 lg:gap-4 my-4 dark:text-white">
          <div className=""><BsTiktok/></div>
          <div className=""><BsInstagram/></div>
          <div className=""><BsTwitter/></div>  
          <div className=""><BsLinkedin/></div>        
        </div>
        <div className="px-8 md:px-20 lg:px-40 text-center">
          <div className="flex gap-5 text-md md:text-lg lg:text-xl font-semibold leading-8 dark:text-white"><h1 className="w-48 hidden text-3xl">{`{ /**`}</h1><p>{headerData.summary}</p><h1 className="text-3xl hidden">{`*/}`}</h1></div>
        </div>
        
        <div className="flex justify-center items-center mt-5 p-5 gap-10">
          <button><a className="flex justify-center items-bottom gap-4 md:px-10 md:py-2 p-2 text-md md:text-lg lg:text-xl bg-green-800 lg:hover:bg-cyan-100 hover:shadow-lg text-white hover:text-green-800 transition-all rounded-md font-semibold" href="https://github.com/Japhet1" target="_blank" rel="noreferrer"><BsGithub className="text-xl md:text-2xl lg:text-2xl"/>Repository</a></button>
          <button><a className="flex justify-center items-bottom gap-4 md:px-10 md:py-2 p-2 text-md md:text-lg lg:text-xl bg-green-800 lg:hover:bg-cyan-100 hover:shadow-lg text-white hover:text-green-800 transition-all rounded-md font-semibold" href="/CV-Passah_Japhet.pdf" download="CV-Passah_Japhet.pdf">Resume<BsDownload className="text-xl md:text-2xl lg:text-2xl"/></a></button>
        </div>
      </div>
    </main>
  )
}

export default Header