import { BsBoxArrowUpRight } from "react-icons/bs";

const Project = ({ projectData }) => {
  return (
    <main id="project" className="font-gruppo md:py-10 mt-10 md:mx-10 scroll-mt-28 scroll-smooth">
        <div>
            <h1 className="text-[#003285] text-3xl md:text-4xl lg:text-6xl dark:text-slate-400 font-bold">Personal Projects</h1>
        </div>
        <div className="flex flex-wrap my-16 justify-center space-x-5 md:text-center drop-shadow-xl">
            {projectData.map((project, index) => (
                <div key={index} className="mb-10 md:mb-16 lg:mb-0 dark:text-white bg-[#2A629A] dark:bg-slate-800 rounded-lg">
                   
                    <div className="grid ">
                        <div className="col-span-6">
                            <div className="md:max-w-lg lg:w-full transition-all bg-inherit" style={{}}>
                                <img className=" lg:w-full lg:h-72 " src={`/${project.src}`} alt="first project" />
                            </div>
                        </div>
                        
                 
                        <div className="col-span-6 items-center py-5 lg:h-28">
                            {/* <div><h1 className="text-white dark:text-white text-xl md:text-2xl lg:text-2xl font-poppins font-semibold">{project.name}</h1></div> */}
                            {/* <div className="">
                                <p className="text-md md:text-lg lg:text-lg text-black dark:text-white text-center leading-8 font-medium">{project.description}</p>
                            </div> */}
                            
                            {/* <div className="flex flex-wrap md:my-10 lg:my-10 px-4 gap-2 justify-center items-center md:text-sm lg:text-sm">
                                <div className="font-bold text-xl"><h1>Stack:</h1></div>
                                {project.stack.map((project, id) => <h1 key={id} className="py-1 px-2 text-white dark:text-white rounded-md font-semibold">{project.item}</h1>)}
                            </div> */}
                            <div className="flex md:flex lg:flex justify-center space-x-5 my-5">
                                <button><a className="py-2 px-4 space-x-2 flex md:p-2 lg:px-4 items-bottom rounded-lg text-white font-semibold dark:text-white md:text-md transition-all lg:text-md" href={project.code} target="_blank" rel="noreferrer"><h1>Source Code</h1><BsBoxArrowUpRight/></a></button>
                                <button><a  className="py-2 px-4 space-x-2 flex md:p-2 lg:px-4 items-bottom rounded-lg text-white font-semibold dark:text-white md:text-md transition-all lg:text-md" href={project.link}
                                target="_blank" rel="noreferrer"><h1>Deploy link</h1><BsBoxArrowUpRight/></a></button>
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