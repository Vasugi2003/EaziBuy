import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import BottomBar from './components/BottomBar'
function App()
{
  return (
    <>
          <Header />
          <Outlet/>
          <BottomBar/>
          
    </>
  )

}
export default App