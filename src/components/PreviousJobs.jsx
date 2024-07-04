import { useState } from "react"
import { history } from "../Data/history"
import EachJob from "./EachJob"


const company = history.map(item=> item.company)

const PreviousJobs = () => {
    const[index,setIndex]=useState(0)


    

  return (
    <section className="px-4 py-16">
        <div className="text-center space-x-4">
            {company.map((job,index)=>(
                <button onClick={()=> setIndex(index)} className="font-medium text-sm" key={index}>{`${job.toUpperCase()}`}</button>
            ))}
        </div>
        <hr className="bg-gray-300 mb-8 mt-8" />
        <div>
            <EachJob list={history} index={index} />
        </div>
    </section>
  )
}

export default PreviousJobs