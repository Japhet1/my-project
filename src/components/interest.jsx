

const Interest = () => {
  return (
    <main className="text-center font-bahnschrift p-10 my-10 border-b border-red-500">
        <div  className="">
            <h1 className="text-red-500 text-5xl font-bold">Language & Hobby</h1>
        </div>
        <div className="grid grid-cols-12 my-5 p-5">
            <div className="col-span-6 hover:bg-red-100 py-5">
                <div className=" text-2xl font-bold my-5"><h1>Languages:</h1></div>
                <div  className="text-xl"><strong>English:</strong><span className="ms-4">Advance</span></div>
                <div className="text-xl"><strong>French:</strong><span className="ms-4">Advance</span></div>
                <div className="text-xl"><strong>German:</strong><span className="ms-4">Beginner</span></div>
            </div>
            <div className="col-span-6 hover:bg-red-100 py-5">
                <div className="text-2xl font-bold my-5"><h1>Hobbies:</h1></div>
                <div className="text-xl"><p>Movies</p></div>
                <div className="text-xl"><p>Music</p></div>
                <div className="text-xl"><p>Football</p></div>

            </div>
        </div>
    </main>
  )
}

export default Interest