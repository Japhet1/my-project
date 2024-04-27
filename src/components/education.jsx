import { BsDot, BsBoxArrowUpRight } from "react-icons/bs";

const Education = ({ educationData }) => {
  return (
    <main id="education" className="lg:text-center md:py-10 mt-10 md:mx-10 scroll-mt-28 scroll-smooth">
        <div>
            <h1 className="text-dark font-bold text-3xl md:text-4xl lg:text-6xl dark:text-yellow-700">Education and Training</h1>
        </div>
        <div className="my-16">
            <div className="lg:grid grid-cols-12 gap-2 dark:text-white">
                {educationData.physical.map((education, index) => (
                    <div key={index} 
                        className={`
                        col-span-4 lg:hover:shadow-2xl
                        ${education.company === "Amalitech" ?  "bg-yellow-100 dark:bg-yellow-700"
                            : education.company === "Codecademy" ? "bg-yellow-200 dark:bg-yellow-800"
                            : education.company === "Accra Institute of Technology" ? "bg-yellow-100 dark:bg-yellow-700"
                            : education.company === "IPMC College of Technology" ? "bg-yellow-200 dark:bg-yellow-800"
                            : ""
                        } 
                        text-left p-6 md:p-10 rounded-xl
                        `}>
                        <div>
                            <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-4 text-black dark:text-white">{education.name}</h1>
                        </div>
                        <div className="leading-8 text-lg md:text-lg lg:text-lg font-normal text-black dark:text-white space-y-2">
                            <p>{education.company}</p>
                            <p>{education.date}</p>
                            <p>{education.country}</p>
                            <a className="flex flex-wrap items-center gap-2" href="">{education.website}<BsBoxArrowUpRight/></a>
                        </div>
                    </div>
                ))}
                <div  className="col-span-8 bg-yellow-100 dark:bg-yellow-700 text-left p-6 md:p-10 lg:p-10 rounded-xl lg:hover:shadow-2xl">
                    <h1 className="text-xl md:text-2xl lg:text-2xl text-black dark:text-white font-semibold mb-4">{educationData.online.name}</h1>
                    {educationData.online.content.map((education, index) => (
                        <div key={index} className="">
                            <div className=""><h1 className="text-lg md:text-xl lg:text-xl font-semibold text-black dark:text-white">{education.name}</h1></div>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                                {education.items.map((education, id) => <p key={id} className="flex items-center text-md md:text-lg lg:text-lg gap-2 font-normal text-black dark:text-white"><BsDot/>{education.label}</p>)}  
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