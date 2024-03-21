// useContext - is used to manage flobal data in react applications
// -- Global state
// -- Services
// -- Themes
// -- user settings


// TO CREATE CONTEXT:
// 1. Creating the context
// 2. Providing the context
// 3. Consuming the context



import { createContext } from "react"
import MainComponent from "./MainComponent"
import LoginContextProvider from "./context/LoginContextProvider";

export const LoginContext = createContext();
function App() {

  return (
    <LoginContextProvider>
        <MainComponent />
    </LoginContextProvider>
  )
}

export default App
