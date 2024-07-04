import { useEffect, useState } from "react"
import { portfolio } from "../Data/projects"
import Categories from "./Categories"
import EachProfile from "./EachProfile"

const categories = portfolio.map(item=> item.category)

const categoriesUnique = ["all",...new Set(categories)]

const Jobs = () => {
    const[list,setList]=useState(portfolio)

    
   function handleClick(getButton){

    
    const categoryName = categoriesUnique[getButton]

    if(categoryName==="all"){
      return setList(portfolio)
    }

    const filteredArray= portfolio.filter(item=>item.category===categoryName)

    setList(filteredArray)

/*
    const categoryName=categoriesUnique[getButton]
    const flteredList = list.filter(item=>item.category===categoryName)
    return setList(flteredList)
  
  */
    }

    

  return (
    <section>
        <Categories categories={categoriesUnique} handleClick={handleClick} />
        <div className="max-w-5xl mx-auto">
            <EachProfile list={list} />
        </div>
    </section>
  )
}

export default Jobs