

const Interest = ({ interestData }) => {
  return (
    <main id="interest" className="text-center font-gruppo md:py-10 lg:p-10 my-10 border-b border-green-200 md:mx-10 lg:mx-20 dark:border-green-900 scroll-mt-28 scroll-smooth">
        <div  className="">
            <h1 className="text-green-950 text-3xl md:text-4xl lg:text-5xl font-bold dark:text-green-100">Language & Hobby</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-20 my-5 p-5">
            {interestData.map((interest, index) => (
                <div key={index} className="text-start lg:flex lg:flex-wrap items-center lg:py-5 dark:text-white">
                    <div className="text-lg md:text-xl lg:text-2xl font-bold my-5"><h1>{interest.name}:</h1></div>
                    {interest.content.map((content, id) => <div key={id} className="text-md md:text-lg lg:text-xl font-normal text-slate-600 dark:text-slate-300"><h1 className="ms-4">{content.item}</h1></div>)}
                </div>
            ) )} 
        </div>
    </main>
  )
}

export default Interest