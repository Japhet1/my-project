import { BsDot, BsBoxArrowUpRight } from "react-icons/bs";

const Education = ({ educationData }) => {
  return (
    <main id="education" className="lg:text-center md:py-10 mt-10 md:mx-10 scroll-mt-28 scroll-smooth drop-shadow-2xl">
        <div>
            <h1 className="text-[#003285] font-bold text-3xl md:text-4xl lg:text-6xl dark:text-slate-400">Education and Training</h1>
        </div>
        <div className="my-16 ">
            <div className="lg:grid grid-cols-12 gap-2 dark:text-white">
                {educationData.physical.map((education, index) => (
                    <div key={index} 
                        className={`
                        col-span-4
                        ${education.company === "Amalitech" ?  "bg-slate-100 dark:bg-slate-800"
                            : education.company === "Codecademy" ? "bg-slate-200 dark:bg-slate-800"
                            : education.company === "Accra Institute of Technology" ? "bg-slate-100 dark:bg-slate-800"
                            : education.company === "IPMC College of Technology" ? "bg-slate-200 dark:bg-slate-800"
                            : ""
                        } 
                        text-left p-6 md:p-10 rounded-lg text-black
                        `}>
                        <div>
                            <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-4  dark:text-white">{education.name}</h1>
                        </div>
                        <div className="leading-8 text-lg md:text-lg lg:text-lg font-normal  dark:text-white space-y-2">
                            <p>{education.company}</p>
                            <p>{education.date}</p>
                            <p>{education.country}</p>
                            <a className="flex flex-wrap items-center gap-2" href="">{education.website}<BsBoxArrowUpRight/></a>
                        </div>
                    </div>
                ))}
                <div  className="col-span-8 text-black bg-slate-100 dark:bg-slate-800 text-left p-6 md:p-10 lg:p-10 rounded-xl">
                    <h1 className="text-xl md:text-2xl lg:text-2xl  dark:text-white font-semibold mb-4">{educationData.online.name}</h1>
                    {educationData.online.content.map((education, index) => (
                        <div key={index} className="">
                            <div className=""><h1 className="text-lg md:text-xl lg:text-xl font-semibold  dark:text-white">{education.name}</h1></div>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                                {education.items.map((education, id) => <p key={id} className="flex items-center text-md md:text-lg lg:text-lg gap-2 font-normal dark:text-white"><BsDot/>{education.label}</p>)}  
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </main>
  )
}

export default Education