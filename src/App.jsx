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
      <div style={{background: "black"}}>
        Hi this is topBar
      </div>
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
