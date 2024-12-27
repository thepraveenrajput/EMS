import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5'>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
      <h4 className='text-sm'>{data.date}</h4>

    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className='mt-2 text-sm'>{data.description}</p>
    <div className='mt-4'>
      <button className='bg-blue-500 px-2'>Accept Task</button>
    </div>
  </div>
  
  )
}

export default NewTask