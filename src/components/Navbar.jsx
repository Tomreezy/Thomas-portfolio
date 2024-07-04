import { NavLink } from "react-router-dom"

const Navbar = () => {


    

  return (
    <div className=" absolute w-full bg-green-500 ">
        <nav className=" p-4 md:flex space-y-4 md:space-x-36 items-center">
        <p className="text-3xl text-black font-bold cursor-pointer"><NavLink to={"/"}>Web</NavLink><span className="text-green-300">Dev</span> </p>
        
        <ul className="list-none md:space-x-6 text-black font-medium cursor-pointer flex space-x-3">
            <li><NavLink to="/">Home</NavLink></li>
            <li>Skills</li>
            <li>About</li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        </ul>    
        </nav>
    </div>
  )
}

export default Navbar