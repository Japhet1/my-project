// import { IoCheckbox } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";

const Experience = ({ experienceData }) => {

    // console.log(experienceData[0].description)
  return (
    <main id="experience" className=" md:py-10 font-poppins md:p-10 mt-10 md:mx-10 scroll-mt-28 scroll-smooth drop-shadow-2xl">
        <div className="">
            <h1 className="text-[#003285] text-3xl md:text-4xl lg:text-6xl font-bold dark:text-slate-400">Experience</h1>
        </div>
        <div className="my-16 text-black dark:text-white">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-[#2A629A] dark:text-slate-400">
                <li>
                    <div className="timeline-middle">
                    <FaCircleCheck className="my-2"/>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">{experienceData[0].year}</time>
                        <div className="flex justify-end space-x-2">
                            <h1>{experienceData[0].company},</h1>
                            <h1>{experienceData[0].location}</h1>
                        </div>
                    
                        <div className="text-lg font-black">{experienceData[0].title}</div>
                        <div className="text-black dark:text-white leading-8">
                            
                            {experienceData[0].description.map((data, id) => (
                                <h1 key={id}>{data}</h1>
                            ))}
                        </div>
                    </div>
                    <hr/>
                </li>
                {/* <li>
                    <div className="timeline-middle">
                        <FaCircleCheck className="my-2"/>
                    </div>
                    <div className="timeline-end md:text-start mb-10">
                        <time className="font-mono italic">{experienceData[0].year}</time>
                        <div className="flex justify-start space-x-2">
                            <h1>{experienceData[0].company},</h1>
                            <h1>{experienceData[0].location}</h1>
                        </div>
                    
                        <div className="text-lg font-black">{experienceData[0].title}</div>
                        <div className="text-black dark:text-white leading-8">
                            
                            {experienceData[0].description.map((data, id) => (
                                <h1 key={id}>{data}</h1>
                            ))}
                        </div>
                    </div>
                    <hr/>
                </li> */}
                {/* <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end md:text-start mb-10">
                    <time className="font-mono italic">1998</time>
                    <div className="text-lg font-black">iMac</div>
                    iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apples consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
                    </div>
                    <hr />
                </li> */}
            </ul>
        </div>
    </main>
  )
}

export default Experience