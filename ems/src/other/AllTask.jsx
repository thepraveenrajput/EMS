import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function AllTask() {
  const[userData , setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded '>
      
      {/* Header Row */}
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h3 className='text-lg font-medium w-1/5 '>Employee Name</h3>
        <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
      </div>

      {/* Employee Tasks List */}
      <div className=' '>
        {userData && userData.length > 0 ? (
          userData.map((elem, index) => (
            <div key={index} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
              <h3 className='text-lg font-medium w-1/5 '>{elem.firstName}</h3>
              <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCount.newTask}</h3>
              <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount.active}</h5>
              <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCount.completed}</h5>
              <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
            </div>
          ))
        ) : (
          <div className="text-white">No employees found.</div>
        )}
      </div>

    </div>
  )
}

export default AllTask
