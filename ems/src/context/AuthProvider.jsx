import React, { createContext } from 'react'
import { getLocalStorage } from '../utils/localStorage'
import { useState, useEffect } from 'react'
import { setLocalStorage } from '../utils/localStorage'


export const AuthContext = createContext()
// localStorage.clear()


const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)


  useEffect(() => {
    setLocalStorage()
    const { employees } = getLocalStorage()
    setUserData(employees);

  }, []);







  return (
    <div>
      <AuthContext.Provider value={[userData , setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )

}


export default AuthProvider
