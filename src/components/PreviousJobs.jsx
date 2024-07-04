import { useState } from "react"
import { history } from "../Data/history"
import EachJob from "./EachJob"


const company = history.map(item=> item.company)

const PreviousJobs = () => {
    const[index,setIndex]=useState(0)


    

  return (
    <section className="px-4 py-16">
        <div className="text-center space-x-2">
            {company.map((job,index)=>(
                <button onClick={()=> setIndex(index)} className="font-medium text-sm" key={index}>{`${job.toUpperCase()}`}</button>
            ))}
        </div>
        <div>
            <EachJob list={history} index={index} />
        </div>
    </section>
  )
}

export default PreviousJobs