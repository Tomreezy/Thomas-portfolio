import React from 'react'

const Categories = ({categories,handleClick}) => {


  return (
    <div className='my-8 space-x-4 text-center'>
        {categories.map((category,index)=>{
            return(
                <button key={index} onClick={()=> handleClick(index)} className='p-2 bg-green-400 rounded-md text-black'>{category}</button>
            )
        })}
    </div>
  )
}

export default Categories