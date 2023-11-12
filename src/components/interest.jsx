

const Interest = ({ interestData }) => {
  return (
    <main id="interest" className="text-center font-gruppo md:py-10 lg:p-10 my-10 border-b border-gray-200 md:mx-10 lg:mx-20 dark:border-gray-900 scroll-mt-28 scroll-smooth">
        <div  className="">
            <h1 className="text-blue-950 text-3xl md:text-4xl lg:text-5xl font-bold dark:text-blue-100">Language & Hobby</h1>
        </div>
        <div className="grid grid-cols-12 my-5 p-5">
            {interestData.map((interest, index) => (
                <div key={index} className="col-span-6 py-5 dark:text-white">
                    <div className="md:text-xl lg:text-2xl font-bold my-5"><h1>{interest.name}:</h1></div>
                    {interest.content.map((content, id) => <div key={id} className="md:text-lg lg:text-xl"><strong>{content.name}</strong><span className="ms-4">{content.item}</span></div>)}
                </div>
            ) )} 
        </div>
    </main>
  )
}

export default Interest