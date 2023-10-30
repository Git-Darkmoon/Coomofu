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
    <div className="w-full h-[calc(100vh-4rem)] flex flex-col justify-center items-center gap-28">
      <header className="text-center ml-44">
        <h1 className="text-5xl">Bienvenido a la base de datos de Coomofu</h1>
      </header>
      <main className="ml-44 flex justify-center items-center flex-col md:flex-row gap-12">
        {options.map((option: option) => {
          return <Card key={option.id} {...option} />
        })}
      </main>
    </div>
  )
}
export default Home
