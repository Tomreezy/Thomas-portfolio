import { useState } from "react"
import { NavLink } from "react-router-dom"

const Tags = ({label,to}) => {
  const[marghin,setMarghin]=useState(false)
    
  console.log(label,to)

  return (
    <div>
        <p onMouseLeave={()=> setMarghin(false)} onMouseOver={()=> setMarghin(true)} className="relative "><NavLink to={to}>{label}</NavLink>
            <span  className={marghin?"transition absolute linksAnimate w-full bottom-0 bg-black left-0 h-1":"absolute rounded-md w-0 bottom-0 bg-black left-0 h-1"}></span>
            </p>
            
    </div>
  )
}

export default Tags