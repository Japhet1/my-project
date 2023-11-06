import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import { SiVercel } from "react-icons/si";

const Project = ({ projectData }) => {
  return (
    <main className="font-rajdhani md:py-10 lg:p-10 mt-10 border-b border-orange-200 lg:mx-10 md:mx-10 dark:border-orange-900">
        <div>
            <h1 className="text-orange-500 md:text-4xl lg:text-5xl font-bold">Projects</h1>
        </div>
        <div className="flex flex-wrap flex-grow justify-center lg:gap-20 my-16">
            <div className="md:max-w-lg lg:max-w-xl dark:text-white">
                <div className="md:max-w-lg lg:max-w-xl transition-all lg:hover:scale-110 shadow-md" style={{}}>
                    <img src="/devjob-app.jpg" alt="first project" />
                </div>
                <div className=" p-10">
                    <div><h1 className="text-black dark:text-white md:text-2xl lg:text-3xl my-5 font-bold">{projectData.devjobs.name}</h1></div>
                    <div>
                        <p className="md:text-lg lg:text-xl text-center leading-8">{projectData.devjobs.description}</p>
                    </div>
                    
                    <div className="flex p-2 mt-3 gap-2 justify-center md:text-lg lg:text-xl"><h1 className="font-bold">Stack:</h1><h1>{projectData.devjobs.stack}</h1></div>
                    <div className="flex justify-center items-bottom gap-5 mt-10">
                        <button><a className="flex py-2 px-4 gap-2 items-bottom bg-orange-500 hover:text-orange-500 hover:bg-orange-100 hover:shadow-md text-white md:text-lg transition-all lg:text-xl" href="https://github.com/Japhet1/devjobs-app" target="_blank" rel="noreferrer"><BsGithub className="text-2xl"/><h1>Source Code</h1><BsBoxArrowUpRight/></a></button>
                        <button><a  className="flex py-2 px-4 gap-2 items-bottom bg-orange-500 hover:text-orange-500 hover:bg-orange-100 hover:shadow-md text-white md:text-lg transition-all lg:text-xl" href="https://devjobs-web-app-seven.vercel.app/" target="_blank" rel="noreferrer"><SiVercel className="text-2xl"/><h1>Deploy link</h1><BsBoxArrowUpRight/></a></button>
                    </div>
                </div>
            </div>

            <div className="md:max-w-lg lg:max-w-xl dark:text-white">
                <div className="md:max-w-lg lg:max-w-xl transition-all lg:hover:scale-110 shadow-md" style={{}}>
                    <img src="/devjob-app.jpg" alt="first project" />
                </div>
                <div className=" p-10">
                    <div> <h1 className="text-black dark:text-white md:text-2xl lg:text-3xl my-5 font-bold">{projectData.attendance.name}</h1></div>
                    <div>
                        <p className="md:text-lg lg:text-xl text-center leading-8">{projectData.attendance.description}</p>
                    </div>
                    <div className="flex p-2 mt-3 gap-2 justify-center md:text-lg lg:text-xl"><h1 className="font-bold">Stack:</h1><h1>{projectData.attendance.stack}</h1></div>
                    <div className="flex justify-center items-bottom gap-5 mt-10">
                        <button><a className="flex py-2 px-4 gap-2 items-bottom bg-orange-500 hover:text-orange-500 hover:bg-orange-100 hover:shadow-md text-white md:text-lg transition-all lg:text-xl" href="https://github.com/Japhet1/KD-Horizon"><BsGithub className="text-2xl"/><h1>Source Code</h1><BsBoxArrowUpRight/></a></button>
                        <button><a  className="flex py-2 px-4 gap-2 items-bottom bg-orange-500 hover:text-orange-500 hover:bg-orange-100 hover:shadow-md text-white md:text-lg transition-all lg:text-xl" href="https://kd-horizon.vercel.app/"><SiVercel className="text-2xl"/><h1>Deploy link</h1><BsBoxArrowUpRight/></a></button>
                    </div>
                </div>
                
            </div>

            <div className="md:max-w-lg lg:max-w-xl dark:text-white">
                <div className="md:max-w-lg lg:max-w-xl transition-all lg:hover:scale-110 shadow-md" style={{}}>
                    <img src="/kd-horizon2.jpg" alt="first project" />
                </div>
                <div className="p-10">
                    <div><h1 className="text-black dark:text-white md:text-2xl lg:text-3xl my-5 font-bold">{projectData.horizon.name}</h1></div>
                    <div>
                        <p className="md:text-lg lg:text-xl text-center leading-8">{projectData.horizon.description}</p>
                    </div>
                    <div className="flex p-2 mt-3 gap-2 justify-center md:text-lg lg:text-xl"><h1 className="font-bold">Stack:</h1><h1>{projectData.horizon.stack}</h1></div>
                    <div className="flex justify-center items-bottom gap-5 mt-10">
                        <button><a className="flex py-2 px-4 gap-2 items-bottom bg-orange-500 hover:text-orange-500 hover:bg-orange-100 hover:shadow-md text-white md:text-lg transition-all lg:text-xl" href="https://github.com/Japhet1/KD-Horizon" target="_blank" rel="noreferrer"><BsGithub className="text-2xl"/><h1>Source Code</h1><BsBoxArrowUpRight/></a></button>
                        <button><a  className="flex py-2 px-4 gap-2 items-bottom bg-orange-500 hover:text-orange-500 hover:bg-orange-100 hover:shadow-md text-white md:text-lg transition-all lg:text-xl" href="https://kd-horizon.vercel.app/" target="_blank" rel="noreferrer"><SiVercel className="text-2xl"/><h1>Deploy link</h1><BsBoxArrowUpRight/></a></button>
                    </div>
                </div>
            </div>

            <div className="md:max-w-lg lg:max-w-xl dark:text-white">
                <div className="md:max-w-lg lg:max-w-xl transition-all lg:hover:scale-110 shadow-md" style={{}}>
                    <img src="/kd-horizon2.jpg" alt="first project" />
                </div>
                <div className="p-10">
                    <div><h1 className="text-black dark:text-white md:text-2xl lg:text-3xl my-5 font-bold">{projectData.horizon.name}</h1></div>
                    <div>
                        <p className="md:text-lg lg:text-xl text-center leading-8">{projectData.horizon.description}</p>
                    </div>
                    <div className="flex p-2 mt-3 gap-2 justify-center md:text-lg lg:text-xl"><h1 className="font-bold">Stack:</h1><h1>{projectData.horizon.stack}</h1></div>
                    <div className="flex justify-center items-bottom gap-5 mt-10">
                        <button><a className="flex py-2 px-4 gap-2 items-bottom bg-orange-500 hover:text-orange-500 hover:bg-orange-100 hover:shadow-md text-white md:text-lg transition-all lg:text-xl" href="https://github.com/Japhet1/KD-Horizon" target="_blank" rel="noreferrer"><BsGithub className="text-2xl"/><h1>Source Code</h1><BsBoxArrowUpRight/></a></button>
                        <button><a  className="flex py-2 px-4 gap-2 items-bottom bg-orange-500 hover:text-orange-500 hover:bg-orange-100 hover:shadow-md text-white md:text-lg transition-all lg:text-xl" href="https://kd-horizon.vercel.app/" target="_blank" rel="noreferrer"><SiVercel className="text-2xl"/><h1>Deploy link</h1><BsBoxArrowUpRight/></a></button>
                    </div>
                </div>
            </div>


        </div>
    </main>
  )
}

export default Project