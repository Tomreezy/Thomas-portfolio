import React from 'react'

const Categories = ({categories}) => {
  return (
    <div className='my-8 space-x-4 text-center'>
        {categories.map((category,index)=>{
            return(
                <button className='p-2 bg-green-400 rounded-md text-black'>{category}</button>
            )
        })}
    </div>
  )
}

export default Categories