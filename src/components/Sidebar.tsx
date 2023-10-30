import Image from "next/image"
import Logo from "@/assets/Coomofu_logo.webp"
import Link from "next/link"
import { HomeIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline"

const iconStyles: string =
  "w-12 h-12 text-slate-100 hover:text-secondaryYellow transition-colors"

function Sidebar({ isOpen }: any) {
  return (
    <aside
      className={` ${
        isOpen ? "hidden" : "block"
      } fixed w-64 lg:w-96 left-0 h-screen bg-primaryGreen-500 transition-all z-10`}
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
  )
}
export default Sidebar
