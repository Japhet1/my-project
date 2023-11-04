import { FaReact, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import { BsDot, BsPersonFillCheck } from "react-icons/bs";

const Skill = ({ skillData }) => {
  return (
    <main className="text-center font-rajdhani p-10 mt-10 border-b border-orange-200 mx-20">
        <div>
            <h1 className="text-orange-500 text-5xl font-bold">Skills</h1>
        </div>
        <div className="my-16 text-black dark:text-white">
            <div className="grid grid-cols-12 grid-flow-row">
                <div className="col-span-8 hover:bg-orange-100 dark:hover:text-black hover:shadow-md px-10 py-5 gap-2">
                    <div className="flex text-4xl items-end gap-2"><FaReact className="animate-spin text-orange-500"/><h1 className="text-2xl font-bold">{skillData.frontEnd.name}</h1></div>
                    <div className="flex items-center ms-8 gap-5 my-5">
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1>{skillData.frontEnd.html}</h1></div>
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1>{skillData.frontEnd.css}</h1></div>
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1>{skillData.frontEnd.typescript}</h1></div>
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1>{skillData.frontEnd.javascript}</h1></div>
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1>{skillData.frontEnd.react}</h1></div>
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1>{skillData.frontEnd.next}</h1></div>
                    </div>

                    <div className="flex items-center ms-8 gap-5 my-5">
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1>{skillData.frontEnd.tailwind}</h1></div>
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1>{skillData.frontEnd.bootstrap}</h1></div>
                    </div>
                </div>

                <div className="col-span-4  hover:bg-orange-100 dark:hover:text-black hover:shadow-md px-10 py-5 gap-2">
                    <div className="flex text-4xl items-end gap-2"><FaDatabase className="animate-pulse text-orange-500"/><h1 className="text-2xl font-bold">{skillData.database.name}</h1></div>
                    <div className="my-5 ms-8">
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1></h1>{skillData.database.mongo}</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12">
                <div className="col-span-8  hover:bg-orange-100 dark:hover:text-black hover:shadow-md px-10 py-5 gap-4">
                    <div className="flex text-4xl items-end gap-2"><FaNodeJs className="animate-pulse text-orange-500"/><h1 className="text-2xl font-bold">{skillData.backEnd.name}</h1></div>
                    <div className="flex items-center ms-8 gap-5 my-5">
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1></h1>{skillData.backEnd.node}</div>
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1></h1>{skillData.backEnd.express}</div>
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1></h1>{skillData.backEnd.rest}</div>
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1></h1>{skillData.backEnd.json}</div>
                    </div>
                </div>

                <div className="col-span-4 hover:bg-orange-100 dark:hover:text-black hover:shadow-md px-10 py-5 gap-4">
                    <div className="flex text-4xl items-end gap-2"><FaFigma className="animate-pulse text-orange-500"/><h1 className="text-2xl font-bold">{skillData.design.name}</h1></div>
                    <div className="my-5 ms-8">
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1>{skillData.design.figma}</h1></div>
                    </div>
                </div>
            </div>

            
            <div className="grid grid-cols-12">
                <div className="col-span-12 hover:bg-orange-100 dark:hover:text-black hover:shadow-md mt-10 px-10 py-5 gap-4">
                    <div className="flex text-4xl items-end gap-2"><BsPersonFillCheck className="animate-pulse text-orange-500"/><h1 className="text-2xl font-bold">{skillData.professional.name}</h1></div>
                    <div className="flex items-center ms-8 gap-5 my-5">
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1>{skillData.professional.first}</h1></div>
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1>{skillData.professional.second}</h1></div>
                        <div className="flex text-xl"><BsDot className="text-2xl"/><h1>{skillData.professional.third}</h1></div>
                    </div>
                </div>
            </div>
            
        </div>
    </main>
  )
}

export default Skill