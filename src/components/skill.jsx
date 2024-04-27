import { FaReact, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import { BsPersonFillCheck } from "react-icons/bs";

const Skill = ({ skillData }) => {
  return (
    <main id="skill" className=" lg:text-center lg:mx-10 md:py-10 font-poppins dark:bg-black md:p-10 mt-10 md:mx-10 scroll-mt-28 scroll-smooth">
        <div className="">
            <h1 className="text-black text-3xl md:text-4xl lg:text-6xl font-bold dark:text-yellow-700">Skills</h1>
        </div>
        <div className="my-16 text-black dark:text-white ">
            <div className="lg:grid grid-cols-12 gap-x-5">
                {skillData.map((skill,index) => (
                    <div key={index} className="col-span-4 mb-10 p-5 rounded-xl border border-yellow-500 dark:border-none dark:bg-yellow-700">
                        <div className="flex text-2xl md:text-3xl lg:text-4xl items-end gap-4">
                            {skill.name === 'Frontend' ? <FaReact className="animate-pulse text-yellow-500 dark:text-white"/> 
                            : skill.name === 'Backend' ? <FaNodeJs className="animate-pulse text-yellow-500 dark:text-white"/>  
                            : skill.name === 'Database' ? <FaDatabase className="animate-pulse text-yellow-500 dark:text-white"/>
                            : skill.name === 'Design' ? <FaFigma className="animate-pulse text-yellow-500 dark:text-white"/>
                            : skill.name === 'Professional Skills' ? <BsPersonFillCheck className="animate-pulse text-yellow-500 dark:text-white"/>
                            : '' }
                            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold dark:text-white">{skill.name}</h1>
                        </div>
                        <div className="flex flex-wrap gap-10 my-5 ms-4 md:text-lg lg:text-md text-black dark:text-white font-normal">
                            {skill.stack.map((stack, id) => <div className="flex items-end" key={id}>
                                {/* <BsDot className="md:text-lg lg:text-2xl"/> */}
                                <h1>{stack}</h1></div>  
                            )}
                        </div>
                    </div>
                ))}
            </div>  
        </div>
    </main>
  )
}

export default Skill