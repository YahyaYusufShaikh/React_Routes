/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/dashboard'
import { Landing } from './components/landing'

function App() {
  return (
    <div>
      {/* <div style={{background: "black", color : "white",}}>
        <button style={{marginRight:"10px"}}
          onClick={()=>{
          window.location.href = "/"
          }}>Landing Page
        </button>

        <button style={{paddingRight: "10px"}}
          onClick={()=>{
          window.location.href = "/dashboard"
          }}>Dashboard Page
        </button>
      </div> */}
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/" element={<Landing></Landing>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
