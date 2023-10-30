import { StaticImageData } from "next/image"
import {
  UserIcon,
  SquaresPlusIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline"
import Card from "@/components/Card"

export type option = {
  id?: number
  icon?: any
  title?: string
  route?: string
}

const options: Array<option> = [
  {
    id: 1,
    icon: <UserIcon />,
    title: "Perfiles",
    route: "/user/profiles",
  },
  {
    id: 2,
    icon: <SquaresPlusIcon />,
    title: "Ingreso de datos",
    route: "/user/addProfile",
  },
  {
    id: 3,
    icon: <ArrowPathIcon />,
    title: "Actualizacion de datos",
    route: "/user/updateProfile",
  },
]

function Home() {
  return (
    <div className="w-full min-h-[calc(100dvh-5rem)] py-6 flex flex-col justify-center items-center gap-8 lg:gap-16">
      <header className="text-center">
        <h1 className="text-xl lg:text-5xl text-slate-200">
          Bienvenido a la base de datos de Coomofu
        </h1>
      </header>
      <main className=" flex justify-center items-center flex-col md:flex-row gap-16 lg:gap-12">
        {options.map((option: option) => {
          return <Card key={option.id} {...option} />
        })}
      </main>
    </div>
  )
}
export default Home
