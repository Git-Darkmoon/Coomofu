import { option } from "@/app/user/home/page"
import Link from "next/link"

function Card({ icon, title, route }: option) {
  return (
    <Link
      href={`${route}`}
      className="flex flex-col justify-center items-center w-auto h-auto px-3 py-1.5 lg:px-6 lg:py-3 bg-primaryGreen-500 text-slate-100 hover:scale-105 rounded-md hover:text-secondaryYellow transition-all"
    >
      <div className="w-auto h-auto p-4">{icon}</div>
      <h1 className="text-center text-lg pt-2 text-slate-200">{title}</h1>
    </Link>
  )
}
export default Card
