import { useEffect, useState } from "react"
import { portfolio } from "../Data/projects"
import Categories from "./Categories"
import EachProfile from "./EachProfile"

const categories = portfolio.map(item=> item.category)

const categoriesUnique = ["all",...new Set(categories)]

const Jobs = () => {
    const[list,setList]=useState(portfolio)

    
   

    

  return (
    <section>
        <Categories categories={categoriesUnique} />
        <div className="max-w-5xl mx-auto">
            <EachProfile list={list} />
        </div>
    </section>
  )
}

export default Jobs