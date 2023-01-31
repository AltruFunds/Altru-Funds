import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Utilities_Components/Navbar'

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}



