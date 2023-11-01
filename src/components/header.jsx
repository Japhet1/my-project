import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
function Header() {
  return (
    <main className="flex justify-center font-bahnschrift items-center gap-10 p-28 border-b border-red-500">
      <div className="rounded-full"  style={{width:400, height:400}}>
        <img className="rounded-full" src="/image.jpg" alt="my picture" />
      </div>
      <div className="">
        <h1 className="text-5xl text-red-500 font-bold my-">Hello! i m Japhet Passah</h1>
        <h1 className="text-3xl font-bold my-4">Software Developer.</h1>
        <div className="max-w-2xl text-center">
          <p className="text-xl loading-8">I am an enthusiastic and detail-oriented Junior Software Developer who is eager to contribute to
            dynamic projects and learn from experienced mentors in the software development
            industry.
          </p>

        </div>
        
        <div className="flex justify-center text-2xl gap-6 mt-10">
          <div className=""><BsGithub/></div>
          <div className=""><BsInstagram/></div>
          <div className=""><BsTwitter/></div>  
          <div className=""><BsLinkedin/></div>        
        </div>
      </div>
    </main>
  )
}

export default Header