import CommuteRoundedIcon from "@mui/icons-material/CommuteRounded"
import CarRentalRoundedIcon from "@mui/icons-material/CarRentalRounded"

import Card from "@/components/Card"

export type option = {
  id?: number
  icon?: any
  title?: string
  route?: string
}

const iconSize: number = 100

const options: Array<option> = [
  {
    id: 1,
    icon: <CommuteRoundedIcon sx={{ fontSize: iconSize }} />,
    title: "Automoviles",
    route: "/user/profiles",
  },
  {
    id: 2,
    icon: <CarRentalRoundedIcon sx={{ fontSize: iconSize }} />,
    title: "Añadir automovil",
    route: "/user/addUser",
  },
]

function CarHome() {
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
export default CarHome
