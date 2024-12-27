import React from 'react'


function TaskListNumber({data}) {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>

      <div className='rounded-xl w-[45%] px-9 py-6 bg-blue-400'>
        <h2 className='text-3xl font-bold '>{data.taskCount.newTask}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
      </div>
      

      <div className='rounded-xl px-9 py-6 w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completetd Task</h3>
      </div>

      <div className='rounded-xl px-9 py-6 w-[45%] bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>

      <div className='rounded-xl px-9 py-6 w-[45%] bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumber