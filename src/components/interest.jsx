

const Interest = ({ interestData }) => {
  return (
    <main className="text-center font-rajdhani md:py-10 lg:p-10 my-10 border-b border-orange-200 md:mx-10 lg:mx-20 dark:border-orange-900">
        <div  className="">
            <h1 className="text-orange-500 md:text-4xl lg:text-5xl font-bold">Language & Hobby</h1>
        </div>
        <div className="grid grid-cols-12 my-5 p-5">
            <div className="col-span-6 hover:bg-orange-100 py-5 dark:text-white dark:hover:text-white dark:hover:bg-orange-900">
                <div className="md:text-xl lg:text-2xl font-bold my-5"><h1>{interestData.languages.name}:</h1></div>
                <div  className="md:text-lg lg:text-xl"><strong>{interestData.languages.first.name}:</strong><span className="ms-4">{interestData.languages.first.level}</span></div>
                <div className="md:text-lg lg:text-xl"><strong>{interestData.languages.second.name}:</strong><span className="ms-4">{interestData.languages.second.level}</span></div>
                <div className="md:text-lg lg:text-xl"><strong>{interestData.languages.third.name}:</strong><span className="ms-4">{interestData.languages.third.level}</span></div>
            </div>
            <div className="col-span-6 hover:bg-orange-100 py-5 dark:text-white dark:hover:text-white dark:hover:bg-orange-900">
                <div className="md:text-xl lg:text-2xl font-bold my-5"><h1>{interestData.hobbies.name}:</h1></div>
                <div className="md:text-lg lg:text-xl"><p>{interestData.hobbies.movie}</p></div>
                <div className="md:text-lg lg:text-xl"><p>{interestData.hobbies.music}</p></div>
                <div className="md:text-lg lg:text-xl"><p>{interestData.hobbies.football}</p></div>
            </div>
        </div>
    </main>
  )
}

export default Interest