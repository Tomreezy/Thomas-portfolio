import { useState } from "react"
import { history } from "../Data/history"
import EachJob from "./EachJob"


const company = history.map(item=> item.company)

const PreviousJobs = () => {
    const[indexC,setIndex]=useState(0)


    

  return (
    <section className="px-4 py-16  md:h-[90vh] ">
        <div className="max-w-7xl mx-auto">
        <h2 className=" text-3xl  py-5" >Previous Employment</h2>
        <hr className="bg-gray-300 mb-8" />
        <div className="md:flex" >
        <div className="md:text-left md:flex md:text-sm flex  md:flex-col items-center   md:w-1/4  gap-4 ">
            {company.map((job,index)=>(
                <button onClick={()=> setIndex(index)} className={index===indexC?"md:border-l-green-400 w-full  transition text-center md:border-l-2 border-b-2  md:border-b-0 md:hover:border-l-2  hover:border-b-green-300 border-b-green-300 hover:text-green-400  font-medium" :"w-full md:border-l-green-400 p-2 hover:border-b-green-300  md:hover:border-l-2 hover:text-green-400 font-medium md:border-b-0 border-b-2 border-b-transparent  text-center"} key={index}>{`${job.toUpperCase()}`}</button>
            ))}
        </div>
        
        <div>
            <EachJob list={history} index={indexC} />
        </div>
        </div>
        </div>
    </section>
  )
}

export default PreviousJobs