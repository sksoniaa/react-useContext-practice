import { useContext } from "react"
import { LoginContext } from "./App";

export default function SinglePost() {
  const login = useContext(LoginContext)
  console.log(login);
  return(
    <>
      <h1>singlepost</h1>
    </>
  )
}