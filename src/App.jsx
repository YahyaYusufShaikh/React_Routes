/* eslint-disable no-unused-vars */
import React, { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const Dashboard = React.lazy(()=> import('./components/dashboard'));
const Landing = React.lazy(()=> import('./components/landing'));


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
      <Appbar></Appbar>
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={"loading"}><Dashboard></Dashboard></Suspense>}></Route>
        <Route path="/" element={<Suspense fallback={"loading"}><Landing></Landing></Suspense>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();

  return <div>
    <div style={{background: "black", color:"white"}}>
      <button style={{marginRight: "10px"}} onClick={()=>{navigate("/")}}>Landing Page</button>
      <button style={{marginLeft: "10px"}} onClick={()=>{navigate("/dashboard")}}>Dashboard Page</button>
    </div>
  </div>
}

export default App
