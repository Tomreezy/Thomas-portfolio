import React from 'react'

const EachProfile = ({list}) => {
  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
        {list.map((profile,index)=>{
            const{image,category}=profile
            return(
                <article key={index} className='bg-white shadow-md overflow-hidden rounded-tl-md rounded-tr-md'>
                    <div className=' h-2/3'>
                    <img className='w-full h-full' src={image} />
                    </div>
                    <p className='m-4'>{category}</p>
                </article>
            )
        })}
    </div>
  )
}

export default EachProfile