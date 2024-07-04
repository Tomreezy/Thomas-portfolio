

const Navbar = () => {


    

  return (
    <div className=" absolute bg-transparent ">
        <nav className=" p-4 md:flex space-y-4 md:space-x-36 items-center">
        <p className="text-3xl text-black font-bold cursor-pointer">Web<span className="text-green-300">Dev</span> </p>
        
        <ul className="list-none md:space-x-6 text-black font-medium cursor-pointer flex space-x-3">
            <li>Home</li>
            <li>Skills</li>
            <li>About</li>
            <li>Projects</li>
        </ul>    
        </nav>
    </div>
  )
}

export default Navbar