"use client"

import Sidebar from "@/components/Sidebar"
import { useState } from "react"

function Landinglayout({ children }: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <button
        className="bg-cyan-300"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        Open / Close
      </button>
      <Sidebar isOpen={isSidebarOpen} />
      {children}
    </>
  )
}
export default Landinglayout
