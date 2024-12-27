import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    
    handleLogin(email, password)

    setEmail('')
    setPassword('')

  }



  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form className='flex flex-col items-center justify-center' onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required  className='outline-none  bg-transparent border-2 border-emerald-600
          text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />

          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          className='outline-none  bg-transparent border-2 border-emerald-600
          text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter your password' />

          <button required className='mt-5
          text-white border-none outline-none   bg-emerald-600
          text-xl py-3 px-5 rounded-full placeholder:text-white'>Log in</button>

        </form>
      </div>
    </div>
  )
}

export default Login