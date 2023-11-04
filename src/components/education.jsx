import { BsDot } from "react-icons/bs";

const Education = ({ educationData }) => {
  return (
    <main className="text-center font-rajdhani p-10 mt-10 border-b border-orange-200 mx-20">
        <div>
            <h1 className="text-orange-500 text-5xl font-bold">Education and Training</h1>
        </div>
        <div className="my-16">
            <div className="grid grid-cols-12 text">
                <div className="col-span-4 text-xl bg-orange-300 text-left p-10">
                    <h1 className="text-2xl font-bold mb-4">{educationData.first.name}</h1>
                    <div className="leading-8">
                        <p>{educationData.first.company}</p>
                        <p>{educationData.first.date}</p>
                        <p>{educationData.first.country}</p>
                        <a href="">{educationData.first.website}</a>
                    </div>
                </div>
                
                <div className="col-span-4 text-xl bg-orange-400 text-left p-10">
                    <h1 className="text-2xl font-bold mb-4">{educationData.second.name}</h1>
                    <div className="leading-8">
                        <p>{educationData.second.company}</p>
                        <p>{educationData.second.date}</p>
                        <p>{educationData.second.country}</p>
                        <a href="">{educationData.second.website}</a>
                    </div>
                </div>

                <div className="col-span-4 text-xl bg-orange-100 text-left p-10">
                    <h1 className="text-2xl font-bold mb-4">{educationData.third.name}</h1>
                    <div className="leading-8">
                        <p>{educationData.third.company}</p>
                        <p>{educationData.third.date}</p>
                        <p>{educationData.third.country}</p>
                        <a href="">{educationData.third.website}</a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12  ">
                <div className="col-span-4 text-xl bg-orange-500 text-left p-10">
                    <h1 className="text-2xl font-bold mb-4">{educationData.fourth.name}</h1>
                    <div className="leading-8">
                        <p>{educationData.fourth.company}</p>
                        <p>{educationData.fourth.date}</p>
                        <p>{educationData.fourth.country}</p>
                        <a href="">{educationData.fourth.website}</a>
                    </div>
                </div>

                <div className="col-span-8 text-xl bg-orange-200 text-left p-10">
                    <h1 className="text-2xl font-bold mb-4">{educationData.fifth.name}</h1>
                    <div className="mb-4">
                        <h1 className="text-xl font-bold">{educationData.fifth.netNinja.name}</h1>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2"><BsDot/>{educationData.fifth.netNinja.pointOne}</p>
                            <p className="flex items-center gap-2"><BsDot/>{educationData.fifth.netNinja.pointTwo}</p>
                            <p className="flex items-center gap-2"><BsDot/>{educationData.fifth.netNinja.pointThree}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2"><BsDot/>{educationData.fifth.netNinja.pointFour}</p>
                            <p className="flex items-center gap-2"><BsDot/>{educationData.fifth.netNinja.pointFive}</p>
                            <p className="flex items-center gap-2"><BsDot/>{educationData.fifth.netNinja.pointSix}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2"><BsDot/>{educationData.fifth.netNinja.pointSeven}</p>                         
                        </div>
                    </div>

                    <div className="">
                        <h1 className="text-xl font-bold">{educationData.fifth.codevolution.name}</h1>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2"><BsDot/>{educationData.fifth.codevolution.pointOne}</p>
                            <p className="flex items-center gap-2"><BsDot/>{educationData.fifth.codevolution.pointTwo}</p>
                            <p className="flex items-center gap-2"><BsDot/>{educationData.fifth.codevolution.pointThree}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Education