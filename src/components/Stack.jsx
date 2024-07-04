
import { stack } from "../Data/data"
import SingleSkill from "./SingleSkill"

const Stack = () => {


  return (
    <section className="bg-slate-100 px-4 py-10">
         <h2 className=" text-3xl  py-5" >Tech Stack</h2>
         <hr className="bg-gray-300 mb-8" />
        {stack.map((eachSkill,index)=>{
            

            return (
                <article className=" " key={index}>
                 <SingleSkill {...eachSkill}  />
                 </article>
            )
        })}
    </section>
  )
}

export default Stack