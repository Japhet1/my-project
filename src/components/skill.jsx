import { FaReact, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import { BsDot, BsPersonFillCheck } from "react-icons/bs";

const Skill = () => {
  return (
    <main className="text-center font-bahnschrift p-10 mt-10 border-b border-red-500">
        <div>
            <h1 className="text-red-500 text-5xl font-bold">Skills</h1>
        </div>
        <div className="my-16 text-black">
            <div className="grid grid-cols-12">
                <div className="col-span-8 hover:bg-red-100 hover:shadow-md px-10 py-5 gap-2">
                    <div className="flex text-4xl items-end text-black gap-2"><FaReact/><h1 className="text-2xl font-bold">Front-end</h1></div>
                    <div className="flex items-center gap-5 my-5">
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>Html</p>
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>CSS</p>
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>TypeScript</p>
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>JavaScript</p>
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>React</p>
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>Next JS</p>
                    </div>

                    <div className="flex items-center gap-5 my-5">
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>Tailwind CSS</p>
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>Bootstrap</p>
                    </div>
                </div>

                <div className="col-span-4  hover:bg-red-100 hover:shadow-md px-10 py-5 gap-2">
                    <div className="flex text-4xl items-end text-black gap-2"><FaDatabase/><h1 className="text-2xl font-bold">Database</h1></div>
                    <div className="my-5">
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>MongoDB</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12">
                <div className="col-span-8  hover:bg-red-100 hover:shadow-md px-10 py-5 gap-4">
                    <div className="flex text-4xl items-end text-black gap-2"><FaNodeJs/><h1 className="text-2xl font-bold">Back-end</h1></div>
                    <div className="flex items-center gap-5 my-5">
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>Node JS</p>
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>Express JS</p>
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>Rest API</p>
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>Json</p>
                    </div>
                </div>

                <div className="col-span-4  hover:bg-red-100 hover:shadow-md px-10 py-5 gap-4">
                    <div className="flex text-4xl items-end text-black gap-2"><FaFigma/><h1 className="text-2xl font-bold">Design</h1></div>
                    <div className="my-5">
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>Figma</p>
                    </div>
                </div>
            </div>

            
            <div className="grid grid-cols-12">
                <div className="col-span-12 hover:bg-red-100 hover:shadow-md mt-10 px-10 py-5 gap-4">
                    <div className="flex text-4xl items-end text-black gap-2"><BsPersonFillCheck/><h1 className="text-2xl font-bold">Professional Skills</h1></div>
                    <div className="flex items-center gap-5 my-5">
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>Adaptability</p>
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>Teamwork</p>
                        <p className="flex items-center"><span className="text-2xl"><BsDot/></span>Collaboration</p>
                    </div>
                </div>

            </div>
            
        </div>
    </main>
  )
}

export default Skill