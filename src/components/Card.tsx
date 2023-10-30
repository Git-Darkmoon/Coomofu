import { option } from "@/app/user/home/page"
import Link from "next/link"

function Card({ icon, title, route }: option) {
  return (
    <Link
      href={`${route}`}
      className="w-48 h-48 lg:max-w-xs bg-primaryGreen-500 text-slate-100 hover:scale-105 rounded-md hover:text-secondaryYellow transition-all"
    >
      <div className="w-auto h-auto p-4">{icon}</div>
      <h1 className="text-center text-lg pt-2 text-slate-800">{title}</h1>
    </Link>
  )
}
export default Card
