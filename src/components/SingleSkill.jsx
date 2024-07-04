import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJs } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"


const SingleSkill = ({skill,text,image}) => {
  return (
    <div className="mt-4 space-y-2">
        <FontAwesomeIcon className="text-green-500 text-7xl mb-4"  icon={image} />
        <p className="font-semibold">{skill}</p>
        <p className="text-slate-500">{text}</p>
    </div>
  )
}

export default SingleSkill