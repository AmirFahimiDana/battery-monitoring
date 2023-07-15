import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/projects' element={<Projects />} />
        {/* <Route path='/add-new-project' element={<New_project />} />
        <Route path='/users' element={<Users />} /> */}
      </Routes>

    </>
  )
}

export default App
