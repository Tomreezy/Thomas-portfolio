import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import Tags from "./Tags"


const Navbar = () => {
  
    
  const links = [{label:"Home",to:"/"},{label:"Skills",to:null},{label:"About",to:null},{label:"Portfolio",to:"/portfolio"}]

  return (
    <div className=" absolute w-full bg-green-500 ">
        <nav className="sm:mx-auto p-4  sm:flex space-y-4 sm:space-x-36 items-center">
        <p className="text-3xl text-black font-bold cursor-pointer"><NavLink to={"/"}>Web</NavLink><span className="text-green-300">Dev</span> </p>
        
        <div className="list-none md:space-x-6 text-black font-medium cursor-pointer flex space-x-3">
           {links.map((link,index)=>{
      

            return(
              <Tags {...link} key={index}/>
            )
           })}
        </div>    
        </nav>
    </div>
  )
}

export default Navbar