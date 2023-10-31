"use client"

import Image from "next/image"
import Logo from "@/assets/Coomofu_logo.webp"
import Link from "next/link"
import {
  HomeIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { useState } from "react"

const iconStyles: string =
  "w-12 h-12 text-slate-100 hover:text-secondaryYellow transition-colors"

const sidebarIconStyles: string = "w-16 lg:w-32 h-10 text-slate-100"

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <button
        className={`bg-primaryGreen-500 relative ${
          isSidebarOpen ? "w-16 lg:w-32" : "w-64 lg:w-96"
        } h-16 z-10 flex items-center justify-end transition-all absolute ${
          isSidebarOpen ? "absolute" : "sticky"
        } top-0 left-0`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <Bars3Icon className={sidebarIconStyles} />
        ) : (
          <XMarkIcon className={sidebarIconStyles} />
        )}
      </button>
      {isSidebarOpen || (
        <div className="w-full h-full fixed top-0 left-0 bg-slate-950/70 "></div>
      )}
      <aside
        className={` ${
          isSidebarOpen ? "hidden" : "block"
        } fixed w-64 lg:w-96 left-0 h-screen bg-primaryGreen-500 transition-all z-30`}
      >
        <nav className="flex flex-col items-center gap-8">
          <Image
            src={Logo}
            alt=""
            width={150}
            height={150}
            className="bg-primaryGreen-100 w-full px-4 lg:px-16 lg:py-4"
            priority
          />
          <Link
            href={"/user/home"}
            className="w-full hover:bg-primaryGreen-300 py-4 flex items-center justify-center text-slate-200 gap-4 transition-colors"
          >
            <HomeIcon className={iconStyles} />
            Home
          </Link>
          <Link
            href={"/"}
            className="w-full hover:bg-primaryGreen-300 py-4 flex items-center justify-center text-slate-200 gap-4 transition-colors"
          >
            <ArrowLeftOnRectangleIcon className={iconStyles} />
            Salir
          </Link>
        </nav>
      </aside>
    </>
  )
}
export default Sidebar
