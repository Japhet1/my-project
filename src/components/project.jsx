// import { BsBoxArrowUpRight } from "react-icons/bs";
import { SiVercel, SiGithub } from "react-icons/si";


const Project = ({ projectData }) => {
  return (
    <main id="project" className="font-gruppo md:py-10 mt-10 md:mx-10 scroll-mt-28 scroll-smooth drop-shadow-2xl">
        <div>
            <h1 className="text-[#003285] text-3xl md:text-4xl lg:text-6xl dark:text-slate-400 font-bold">Personal Projects</h1>
        </div>
        <div className="grid grid-cols-12 my-16 gap-10 md:text-center">
            {projectData.map((project, index) => (
                <div key={index} className="relative col-span-4 group mb-10 md:mb-16 lg:mb-0 dark:text-white p-2 bg-slate-200 dark:bg-slate-800 rounded-xl">
                <div className="">
                    <div className="">
                        <div className="md:max-w-lg lg:max-w-lg lg:w-full transition-all bg-inherit">
                            <img className="lg:w-full lg:h-72 rounded-xl" src={`/${project.src}`} alt="first project" />
                        </div>
                    </div>
                    <div className=" items-center py-5 lg:h-64">
                        <div>
                            <h1 className="text-slate-950 dark:text-white text-xl md:text-2xl lg:text-2xl font-poppins font-semibold">{project.name}</h1>
                        </div>
                        <div className="md:max-w-lg lg:max-w-lg lg:w-full">
                            <p className="text-md md:text-lg lg:text-lg text-slate-500 dark:text-white text-center leading-8 font-medium">{project.description}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2 hidden-item absolute inset-0 bg-black bg-opacity-50 rounded-xl opacity-0 invisible transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible">
                            <a className=" md:p-2 lg:px-4 items-bottom rounded-lg text-white font-semibold dark:text-white md:text-md transition-all lg:text-md" href={project.code} target="_blank" rel="noreferrer">
                                <div className="text-white border border-white shadow-2xl dark:bg-slate-800 dark:text-white p-2 rounded-full"><SiGithub className="text-4xl" /></div>
                            </a>
                            <a className=" md:p-2 lg:px-4 items-bottom rounded-lg text-white font-semibold dark:text-white md:text-md transition-all lg:text-md" href={project.link} target="_blank" rel="noreferrer">
                                <div className="text-white border border-white shadow-2xl dark:bg-slate-800 dark:text-white p-2 rounded-full"><SiVercel className="text-4xl" /></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            ))}
        </div>
    </main>
  )
}

export default Project