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
        isOpen ? "opacity-0" : "opacity-100"
      } fixed w-16 lg:w-32 left-0 h-screen bg-primaryGreen-500 transition-all z-10`}
    >
      <nav className="flex flex-col items-center gap-8">
        <Image
          src={Logo}
          alt=""
          width={150}
          height={150}
          className="bg-primaryGreen-100 lg:px-4 lg:py-2"
          priority
        />
        <Link href={"/user/home"} className={iconStyles}>
          <HomeIcon />
        </Link>
        <Link href={"/"} className={iconStyles}>
          <ArrowLeftOnRectangleIcon />
        </Link>
      </nav>
    </aside>
  )
}
export default Sidebar
