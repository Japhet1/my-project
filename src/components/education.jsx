import { BsDot, BsBoxArrowUpRight } from "react-icons/bs";

const Education = ({ educationData }) => {
  return (
    <main id="education" className="lg:text-center md:py-10 font-gruppo lg:p-10 mt-10 border-b border-green-200 md:mx-10 dark:border-green-900 scroll-mt-28 scroll-smooth">
        <div>
            <h1 className="text-green-950 text-3xl md:text-4xl lg:text-5xl font-bold dark:text-green-100">Education and Training</h1>
        </div>
        <div className="my-16">
            <div className="lg:grid grid-cols-12 gap-2 dark:text-white">
                {educationData.physical.map((education, index) => (
                    <div key={index} 
                        className={`
                        col-span-4 lg:hover:shadow-2xl
                        ${education.company === "Amalitech" ?  "bg-green-50 dark:bg-cyan-700"
                            : education.company === "Codecademy" ? "bg-green-100 dark:bg-cyan-800"
                            : education.company === "Accra Institute of Technology" ? "bg-green-50 dark:bg-cyan-700"
                            : education.company === "IPMC College of Technology" ? "bg-green-100 dark:bg-cyan-800"
                            : ""
                        } 
                        text-left p-6 md:p-10 rounded-md
                        `}>
                        <div>
                            <h1 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">{education.name}</h1>
                        </div>
                        <div className="leading-8 text-lg md:text-lg lg:text-lg font-normal text-green-950 dark:text-slate-300">
                            <p>{education.company}</p>
                            <p>{education.date}</p>
                            <p>{education.country}</p>
                            <a className="flex flex-wrap items-center gap-2" href="">{education.website}<BsBoxArrowUpRight/></a>
                        </div>
                    </div>
                ))}
                <div  className="col-span-8 bg-green-50 dark:bg-cyan-700 text-left p-6 md:p-10 lg:p-10 rounded-md lg:hover:shadow-2xl">
                    <h1 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">{educationData.online.name}</h1>
                    {educationData.online.content.map((education, index) => (
                        <div key={index} className="">
                            <div className=""><h1 className="text-lg md:text-xl lg:text-xl font-bold">{education.name}</h1></div>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                                {education.items.map((education, id) => <p key={id} className="flex items-center text-md md:text-lg lg:text-lg gap-2 font-normal text-green-950 dark:text-slate-300"><BsDot/>{education.label}</p>)}  
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