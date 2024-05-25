import { FaReact, FaFigma } from "react-icons/fa";
// import { BsPersonFillCheck } from "react-icons/bs";
import { SiTypescript, SiJavascript, SiNextdotjs, SiAngular, SiTailwindcss,
    SiBootstrap,
    SiExpress,
    SiMongodb,
    SiRedux
 } from "react-icons/si";

const Skill = () => {
  return (
    <main id="skill" className=" lg:text-center md:py-10 font-poppins md:p-10 mt-10 md:mx-10 scroll-mt-28 scroll-smooth drop-shadow-2xl">
        <div className="">
            <h1 className="text-[#003285] text-3xl md:text-4xl lg:text-6xl font-bold dark:text-slate-400">Stacks</h1>
        </div>
        {/* <div className="my-16 text-black dark:text-white ">
            <div className="lg:grid grid-cols-12 gap-x-5">
                {skillData.map((skill,index) => (
                    <div key={index} className="col-span-4 mb-10 p-5 rounded-xl  dark:border-none dark:bg-yellow-700">
                        <div>
                            <img src="/test.png" alt="" />
                        </div>
                        <div className="flex text-2xl md:text-3xl lg:text-4xl items-end gap-4">
                            {skill.name === 'Frontend' ? <FaReact className="animate-pulse text-[#003285] dark:text-white"/> 
                            : skill.name === 'Backend' ? <FaNodeJs className="animate-pulse text-[#003285] dark:text-white"/>  
                            : skill.name === 'Database' ? <FaDatabase className="animate-pulse text-[#003285] dark:text-white"/>
                            : skill.name === 'Design' ? <FaFigma className="animate-pulse text-[#003285] dark:text-white"/>
                            : skill.name === 'Professional Skills' ? <BsPersonFillCheck className="animate-pulse text-[#003285] dark:text-white"/>
                            : '' }
                            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold dark:text-white">{skill.name}</h1>
                        </div>
                        <div className=" border rounded-lg">
                            <img src="/test.png" alt="" />
                            <div className="flex flex-wrap gap-5 p-3 bg-slate-50 md:text-lg lg:text-md text-black dark:text-white font-normal">
                                {skill.stack.map((stack, id) => <div className="flex items-end font-bold px-4 py-2" key={id}>
                                    <BsDot className="md:text-lg lg:text-2xl"/>
                                    <h1>{stack}</h1></div>  
                                )}
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>  
        </div> */}
        <div className="flex flex-wrap justify-center items-center text-8xl gap-32 my-20 ">
            <SiTypescript className="hover:scale-110 hover:bg-white hover:text-blue-500 text-slate-700"/>
            <SiJavascript className="hover:scale-110 hover:bg-white hover:text-yellow-500 text-slate-700"/>
            <FaReact className="hover:scale-110 hover:text-cyan-500 text-slate-700"/>
            <SiRedux className="hover:scale-110 hover:text-purple-800 text-slate-700"/>
            <SiNextdotjs className="hover:scale-110 hover:text-black text-slate-700"/>
            <SiAngular  className="hover:scale-110 hover:text-red-500 text-slate-700"/>
            <SiTailwindcss className="hover:scale-110 hover:text-cyan-500 text-slate-700"/>
            <SiBootstrap className="hover:scale-110 hover:text-purple-500 text-slate-700"/>
            <SiExpress className="hover:scale-110 hover:text-slate-500 text-slate-700"/>
            <SiMongodb className="hover:scale-110 hover:text-green-700 text-slate-700"/>
            <FaFigma className="hover:scale-110 hover:text-pink-500 text-slate-700"/>
        </div>
    </main>
  )
}

export default Skill