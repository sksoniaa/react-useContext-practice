// useContext - is used to manage flobal data in react applications
// -- Global state
// -- Services
// -- Themes
// -- user settings


// TO CREATE CONTEXT:
// 1. Creating the context
// 2. Providing the context
// 3. Consuming the context



import { useState, createContext } from "react"
import MainComponent from "./MainComponent"

export const LoginContext = createContext();
function App() {

  return (
    <LoginContext.Provider value={true}>
      <div>
        <MainComponent />
      </div>
    </LoginContext.Provider>
  )
}

export default App
