import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "@mui/material/Button"
import SignInX from "./SignInExample"
import SignIn from './SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignIn/>
    </>
  )
}

export default App
