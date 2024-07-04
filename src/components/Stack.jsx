
import { stack } from "../Data/skills"
import SingleSkill from "./SingleSkill"

const Stack = () => {


  return (
    <section className="bg-slate-100 px-4 py-10">
      <div className="max-w-7xl mx-auto">
         <h2 className=" text-3xl  py-5" >Tech Stack</h2>
         <hr className="bg-gray-300 mb-8" />
         <div className="md:grid-cols-2 grid-cols-1  grid ">
        {stack.map((eachSkill,index)=>{
            

            return (
                <article className=" " key={index}>
                 <SingleSkill {...eachSkill}  />
                 </article>
            )
        })}
        </div>
        </div>
    </section>
  )
}

export default Stack