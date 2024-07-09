import React from 'react'

function Project({title, img, year, children}) {
  return (
    <div className='bg-gray-200 p-4 rounded-xl mb-4'>
        <div className='flex flex-col'>
            <img src={img} alt={title} className="w-auto rounded-xl"></img>
        </div>
        
        <h2 className="mt-2 text-base text-gray-700 font-semibold">{title}</h2>
        <p className='mb-2'><b className='font-semibold'>Year:</b> {year}</p>
        {children}
    </div>

  )
}

export default Project