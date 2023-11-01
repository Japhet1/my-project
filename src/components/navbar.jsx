

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center font-bahnshrift p-6">
      <div>
        <h1 className="text-4xl text-center text-red-500 font-bold">Gunstein.dev</h1>
      </div>
      <div className="flex items-center font-bold gap-10 text-black text-xl">
        <h1>About</h1>
        <h1>Skills</h1>
        <h1>Project</h1>
        <h1>Education</h1>
        <h1>Interest</h1>
        <h1>Contact</h1>
      </div>
    </nav>
  )
}

export default Navbar