import { BsDot } from "react-icons/bs";

const Education = ({ educationData }) => {
  return (
    <main id="education" className="lg:text-center md:py-10 font-rajdhani lg:p-10 mt-10 border-b border-orange-200 md:mx-10 dark:border-orange-900 scroll-mt-28">
        <div>
            <h1 className="text-orange-500 text-3xl md:text-4xl lg:text-5xl font-bold">Education and Training</h1>
        </div>
        <div className="my-16">
            <div className="lg:grid grid-cols-12">
                {educationData.physical.map((education, index) => (
                    <div key={index} 
                        className={`
                        col-span-4 md:text-lg lg:text-xl 
                        ${education.company === "Amalitech" ?  "bg-orange-300"
                            : education.company === "Codecademy" ? "bg-orange-400"
                            : education.company === "Accra Institute of Technology" ? "bg-orange-100"
                            : education.company === "IPMC College of Technology" ? "bg-orange-500"
                            : ""
                        } 
                        text-left p-6 md:p-10 lg:p-10
                        `}>
                        <div>
                            <h1 className="md:text-xl lg:text-2xl font-bold mb-4">{education.name}</h1>
                        </div>
                        <div className="leading-8">
                            <p>{education.company}</p>
                            <p>{education.date}</p>
                            <p>{education.country}</p>
                            <a href="">{education.website}</a>
                        </div>
                    </div>
                ))}
                <div  className="col-span-8 md:text-lg lg:text-xl bg-orange-200 text-left p-6 md:p-10 lg:p-10">
                    <h1 className="md:text-xl lg:text-2xl font-bold mb-4">{educationData.online.name}</h1>
                    {educationData.online.content.map((education, index) => (
                        <div key={index} className="">
                            <div className=""><h1 className="md:text-lg lg:text-xl font-bold">{education.name}</h1></div>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                                {education.items.map((education, id) => <p key={id} className="flex items-center gap-2"><BsDot/>{education.label}</p>)}  
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