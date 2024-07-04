import { faCircleRight } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



const EachJob = ({list,index}) => {
    
    const eachJob=list[index]
    const{company,title,duration,duties}=eachJob
    
  return (
    <article>
        <p className="text-2xl py-4">{title}</p>
        <p className="text-lg  p-2">{company}</p>
        <p className="py-4">{duration}</p>
        <ul className="space-y-2">
            {duties.map((duty,index)=>{
                return (
                    <li className="flex items-center text-slate-500" key={index} > <FontAwesomeIcon className="text-green-400" icon={faCircleRight} /><span className="ml-4 ">{duty}</span></li>
                )
            })}
        </ul>
    </article>
  )
}

export default EachJob