import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import { SiVercel } from "react-icons/si";

const Project = ({ projectData }) => {
  return (
    <main id="project" className="font-rajdhani md:py-10 mt-10 border-b border-orange-200 mx-6 md:mx-10 dark:border-orange-900 scroll-mt-28">
        <div>
            <h1 className="text-orange-500 text-3xl md:text-4xl lg:text-5xl font-bold">Projects</h1>
        </div>
        <div className="lg:grid grid-cols-12 my-16 gap-5 md:p-10 md:text-center">
            {projectData.map((project, index) => (
                <div key={index} className="col-span-4 mb-10 md:mb-16 lg:mb-0 dark:text-white lg:bg-orange-100 dark:lg:bg-orange-900">
                    <div className="">
                        <div className="flex justify-start md:justify-center items-start">
                            <div className="md:max-w-lg lg:w-full transition-all" style={{}}>
                                <img className="lg:w-full lg:h-72" src={`/${project.src}`} alt="first project" />
                            </div>
                        </div>
                        <div className="my-4 px-4">
                            <div><h1 className="text-black dark:text-white md:text-2xl lg:text-2xl font-bold">{project.name}</h1></div>
                            <div className="mt-4">
                                <p className="md:text-lg lg:text-lg text-center leading-8">{project.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap my-5 md:my-10 lg:my-10 px-4 gap-2 justify-center md:text-lg lg:text-md">
                        {project.stack.map((project, id) => <h1 key={id} className="p-2 bg-orange-50 md:bg-orange-50 md:dark:bg-orange-950 dark:bg-orange-950">{project.item}</h1>)}
                    </div>
                    <div className="grid grid-flow-row md:flex lg:flex justify-center gap-5 my-5">
                        <button><a className="py-2 px-4 space-x-2 flex md:p-2 lg:px-4 items-bottom bg-orange-500 hover:text-orange-500 hover:bg-orange-100 hover:shadow-md text-white md:text-md transition-all lg:text-lg" href="https://github.com/Japhet1/devjobs-app" target="_blank" rel="noreferrer"><BsGithub className="text-lg md:text-xl lg:text-xl"/><h1>Source Code</h1><BsBoxArrowUpRight/></a></button>
                        <button><a  className="py-2 px-4 space-x-2 flex md:p-2 lg:px-4 items-bottom bg-orange-500 hover:text-orange-500 hover:bg-orange-100 hover:shadow-md text-white md:text-md transition-all lg:text-lg" href="https://devjobs-web-app-seven.vercel.app/" target="_blank" rel="noreferrer"><SiVercel className="text-lg md:text-xl lg:text-xl"/><h1>Deploy link</h1><BsBoxArrowUpRight/></a></button>
                    </div>
                </div>
            ))}
        </div>
    </main>
  )
}

export default Project