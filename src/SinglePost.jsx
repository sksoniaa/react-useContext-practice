import { useContext } from "react"
import { LoginContext } from "./context/LoginContextProvider";

export default function SinglePost() {
  const login = useContext(LoginContext)
  console.log(login);
  return(
    <>
      <h1>singlepost</h1>
    </>
  )
}