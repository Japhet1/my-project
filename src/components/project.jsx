import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import { SiVercel } from "react-icons/si";

const Project = () => {
  return (
    <main className="font-bahnschrift p-10 mt-10 border-b border-red-500">
        <div>
            <h1 className="text-red-500 text-5xl font-bold">Projects</h1>
        </div>
        <div className="my-16">
            <div className="flex justify-center items-center">
                <div className="max-w-2xl" style={{}}>
                    <img src="/devjob-app.jpg" alt="first project" />
                </div>
                <div className="p-10">
                    <div><h1 className="text-black text-3xl my-5 font-bold">Devjobs Web App</h1></div>
                    <div>
                        <p className="text-xl text-center leading-8">Devjobs-app is a web application where someone can search for different developer and 
                            engineer jobs. You can search by filtering base on company, position, and country.
                        </p>
                    </div>
                    
                    <div className="flex p-2 mt-3 gap-2 justify-center text-xl"><h1 className="font-bold">Stack:</h1><h1>Html, CSS, JavaScript, React, Bootstrap, Json</h1></div>
                    <div className="flex justify-center items-bottom gap-5 mt-10">
                        <button><a className="flex py-2 px-4 gap-2 items-bottom bg-red-500 hover:text-red-500 hover:bg-red-100 hover:shadow-md text-white text-xl" href="https://github.com/Japhet1/devjobs-app" target="_blank" rel="noreferrer"><BsGithub className="text-2xl"/><h1>Repository</h1><BsBoxArrowUpRight/></a></button>
                        <button><a  className="flex py-2 px-4 gap-2 items-bottom bg-red-500 hover:text-red-500 hover:bg-red-100 hover:shadow-md text-white text-xl" href="https://devjobs-web-app-seven.vercel.app/" target="_blank" rel="noreferrer"><SiVercel className="text-2xl"/><h1>Deploy link</h1><BsBoxArrowUpRight/></a></button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-10">
                <div className="p-10">
                    <div> <h1 className="text-black text-3xl my-5 font-bold">Attendance App</h1></div>
                    <div>
                        <p className="text-xl text-center leading-8">Devjobs-app is a web application where someone can search for different developer and 
                            engineer jobs. You can search by filtering base on company, position, and country.
                        </p>
                    </div>
                    <div className="flex p-2 mt-3 gap-2 justify-center text-xl"><h1 className="font-bold">Stack:</h1><h1>Html, CSS, JavaScript, React, Bootstrap, Node JS and Express JS, MongoDB</h1></div>
                    <div className="flex justify-center items-bottom gap-5 mt-10">
                        <button><a className="flex py-2 px-4 gap-2 items-bottom bg-red-500 hover:text-red-500 hover:bg-red-100 hover:shadow-md text-white text-xl" href="https://github.com/Japhet1/KD-Horizon"><BsGithub className="text-2xl"/><h1>Repository</h1><BsBoxArrowUpRight/></a></button>
                        <button><a  className="flex py-2 px-4 gap-2 items-bottom bg-red-500 hover:text-red-500 hover:bg-red-100 hover:shadow-md text-white text-xl" href="https://kd-horizon.vercel.app/"><SiVercel className="text-2xl"/><h1>Deploy link</h1><BsBoxArrowUpRight/></a></button>
                    </div>
                </div>
                <div className="max-w-xl" style={{}}>
                    <img src="/project1.jpg" alt="first project" />
                </div>
            </div>

            <div className="flex justify-center items-center mt-10">
                <div className="max-w-2xl" style={{}}>
                    <img src="/kd-horizon2.jpg" alt="first project" />
                </div>
                <div className="p-10">
                    <div><h1 className="text-black text-3xl my-5 font-bold">KD Horizon</h1></div>
                    <div>
                        <p className="text-xl text-center leading-8">Devjobs-app is a web application where someone can search for different developer and 
                            engineer jobs. You can search by filtering base on company, position, and country.
                        </p>
                    </div>
                    <div className="flex p-2 mt-3 gap-2 justify-center text-xl"><h1 className="font-bold">Stack:</h1><h1>Html, CSS, Next JS, Tailwind CSS</h1></div>
                    <div className="flex justify-center items-bottom gap-5 mt-10">
                        <button><a className="flex py-2 px-4 gap-2 items-bottom bg-red-500 hover:text-red-500 hover:bg-red-100 hover:shadow-md text-white text-xl" href="https://github.com/Japhet1/KD-Horizon" target="_blank" rel="noreferrer"><BsGithub className="text-2xl"/><h1>Repository</h1><BsBoxArrowUpRight/></a></button>
                        <button><a  className="flex py-2 px-4 gap-2 items-bottom bg-red-500 hover:text-red-500 hover:bg-red-100 hover:shadow-md text-white text-xl" href="https://kd-horizon.vercel.app/" target="_blank" rel="noreferrer"><SiVercel className="text-2xl"/><h1>Deploy link</h1><BsBoxArrowUpRight/></a></button>
                    </div>
                </div>
                
            </div>


        </div>
    </main>
  )
}

export default Project