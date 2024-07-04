import { portfolio } from "../Data/projects"
import EachProfile from "./EachProfile"



const WebCreations = () => {

    const filteredList = portfolio.slice(1,5)

  return (
    <section className="bg-slate-100 p-4">

        <p className="py-4 text-3xl">Web Creations</p>
        <hr className="bg-gray-300 mb-8" />

        <EachProfile list={filteredList} />
        
    </section>
  )
}

export default WebCreations