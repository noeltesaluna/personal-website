import React from 'react'

function Project({title, img, children}) {
  return (
    <div className='bg-gray-200 p-4 rounded-xl'>
        <div className='flex flex-col'>
            <img src={img} alt={title} className="mb-2 w-auto rounded-xl"></img>
        </div>
        <h2 className="text-base text-gray-700 font-semibold">{title}</h2>
        {children}
    </div>

  )
}

export default Project