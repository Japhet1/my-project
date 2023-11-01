import { BsDot } from "react-icons/bs";

const Education = () => {
  return (
    <main className="text-center font-bahnschrift p-10 mt-10 border-b border-red-500">
        <div>
            <h1 className="text-red-500 text-5xl font-bold">Education and Training</h1>
        </div>
        <div className="my-16">
            <div className="grid grid-cols-12 text">
                <div className="col-span-4 text-xl bg-red-300 text-left p-10">
                    <h1 className="text-2xl font-bold mb-4">Certificate of participation <br/> in Software Development Graduate Programme</h1>
                    <div className="leading-8">
                        <p>Amalitech</p>
                        <p>June 2022 - March 2023</p>
                        <p>Accra, Ghana</p>
                        <a href="">https://amalitech.org/</a>
                    </div>
                </div>
                
                <div className="col-span-4 text-xl bg-red-400 text-left p-10">
                    <h1 className="text-2xl font-bold mb-4">Certificate <br/> in Comprehensive JavaScript</h1>
                    <div className="leading-8">
                        <p>Codecademy</p>
                        <p>August 2022</p>
                        <p>Accra, Ghana</p>
                        <a href="">https://www.codecademy.com/</a>
                    </div>
                </div>

                <div className="col-span-4 text-xl bg-red-100 text-left p-10">
                    <h1 className="text-2xl font-bold mb-4">BSc <br/> Information Technology</h1>
                    <div className="leading-8">
                        <p>Accra Institute of Technology</p>
                        <p>September 2016 - December 2021</p>
                        <p>Accra, Ghana</p>
                        <a href="">https://www.ait.edu.gh/</a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12  ">
                <div className="col-span-4 text-xl bg-red-500 text-left p-10">
                    <h1 className="text-2xl font-bold mb-4">Diploma <br/> in Database Technology</h1>
                    <div className="leading-8">
                        <p>IPMC College of Technology</p>
                        <p>May 2013 - November 2014</p>
                        <p>Accra, Ghana</p>
                        <a href="">https://www.ipmctraining.com/</a>
                    </div>
                </div>

                <div className="col-span-8 text-xl bg-red-200 text-left p-10">
                    <h1 className="text-2xl font-bold mb-4">Youtube channels Tutorial</h1>
                    <div className="mb-4">
                        <h1 className="text-xl font-bold">Net Ninja:</h1>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2"><BsDot/>MERN Stack</p>
                            <p className="flex items-center gap-2"><BsDot/>MERN Athentication</p>
                            <p className="flex items-center gap-2"><BsDot/>Complete MongoDB</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2"><BsDot/>Node.Js Crash Course</p>
                            <p className="flex items-center gap-2"><BsDot/>TypeScript</p>
                            <p className="flex items-center gap-2"><BsDot/>Next.Js Masterclass</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2"><BsDot/>React Reuter</p>                         
                        </div>
                    </div>

                    <div className="">
                        <h1 className="text-xl font-bold">Codevolution:</h1>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2"><BsDot/>Redux Toolkit</p>
                            <p className="flex items-center gap-2"><BsDot/>React Testing</p>
                            <p className="flex items-center gap-2"><BsDot/>Material UI</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Education