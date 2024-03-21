import { createContext, useState } from "react"

export const LoginContext = createContext()

export default function LoginContextProvider({children}) {
  const [userDetails, setUserDetails] = useState(true)

  return(

    <LoginContext.Provider value={userDetails}>
      {children}
      </LoginContext.Provider>
  )
}