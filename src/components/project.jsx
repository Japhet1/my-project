import { BsBoxArrowUpRight } from "react-icons/bs";

const Project = ({ projectData }) => {
  return (
    <main id="project" className="font-rajdhani md:py-10 mt-10 border-b border-blue-200 mx-6 md:mx-10 dark:border-blue-900 scroll-mt-28 scroll-smooth">
        <div>
            <h1 className="text-blue-500 text-3xl md:text-4xl lg:text-5xl font-bold">Projects</h1>
        </div>
        <div className="lg:grid grid-cols-12 my-16 gap-5 md:p-10 md:text-center">
            {projectData.map((project, index) => (
                <div key={index} className="col-span-4 mb-10 md:mb-16 lg:mb-0 dark:text-white lg:bg-blue-100 dark:lg:bg-blue-900 rounded-md">
                    <div className="">
                        <div className="flex justify-start md:justify-center items-start">
                            <div className="md:max-w-lg lg:w-full transition-all" style={{}}>
                                <img className="lg:w-full lg:h-72" src={`/${project.src}`} alt="first project" />
                            </div>
                        </div>
                        <div className="my-4 px-4">
                            <div><h1 className="text-black dark:text-white md:text-2xl lg:text-2xl font-bold">{project.name}</h1></div>
                            <div className="mt-4 px-4">
                                <p className="md:text-lg lg:text-base text-center leading-8">{project.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap my-4 md:my-10 lg:my-4 px-4 gap-2 justify-center md:text-sm lg:text-sm">
                        {project.stack.map((project, id) => <h1 key={id} className="py-1 px-2 bg-blue-200 dark:bg-red-800  md:bg-blue-200 md:dark:bg-blue-800 lg:bg-blue-50 lg:dark:bg-blue-950 rounded-md">{project.item}</h1>)}
                    </div>
                    <div className="grid grid-flow-row md:flex lg:flex justify-center my-5">
                        <button><a className="py-2 px-4 space-x-2 flex md:p-2 lg:px-4 items-bottom text-blue-500 font-semibold dark:text-white md:text-md transition-all lg:text-md" href="https://github.com/Japhet1/devjobs-app" target="_blank" rel="noreferrer"><h1>Source Code</h1><BsBoxArrowUpRight/></a></button>
                        <button><a  className="py-2 px-4 space-x-2 flex md:p-2 lg:px-4 items-bottom text-blue-500 font-semibold dark:text-white md:text-md transition-all lg:text-md" href="https://devjobs-web-app-seven.vercel.app/" target="_blank" rel="noreferrer"><h1>Deploy link</h1><BsBoxArrowUpRight/></a></button>
                    </div>
                </div>
            ))}
        </div>
    </main>
  )
}

export default Project