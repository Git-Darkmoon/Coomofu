"use client"

import Sidebar from "@/components/Sidebar"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

function Landinglayout({ children }: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const sidebarIconStyles: string = "w-16 lg:w-32 h-10 text-slate-100"

  return (
    <>
      {isSidebarOpen || (
        <div className="w-full h-full absolute top-0 left-0 bg-slate-950/70 "></div>
      )}
      <button
        className="bg-primaryGreen-500 relative w-16 lg:w-32 h-16 z-10"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <Bars3Icon className={sidebarIconStyles} />
        ) : (
          <XMarkIcon className={sidebarIconStyles} />
        )}
      </button>
      <Sidebar isOpen={isSidebarOpen} />
      {children}
    </>
  )
}
export default Landinglayout
