import { fetchUsers } from "@/app/utils"
import Image from "next/image"
import Link from "next/link"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"
import Inputs from "@/components/Inputs"

const API_URL = "https://reqres.in/api/users"

async function page({ params }: any) {
  const { id, email, first_name, last_name, avatar } = await fetchUsers(
    `${API_URL}/${params.userId}`
  )

  return (
    <main className="w-full flex flex-col gap-4 px-12 py-6 lg:px-44">
      <Link
        href={"/user/profiles"}
        className="flex items-center justify-end gap-5 max-md:pb-4 text-secondaryYellow group"
      >
        <h1 className="group-hover:text-yellow-400">Volver</h1>
        <ArrowBackRoundedIcon className="group-hover:-translate-x-1 transition-transform group-hover:text-yellow-400" />
      </Link>
      <article className="w-full flex flex-col md:flex-row items-center gap-3 lg:gap-8 text-slate-200 ">
        <Image
          src={avatar}
          alt={`Person called ${first_name}`}
          width={200}
          height={200}
          priority
          className="rounded-sm"
        />
        <div>
          <h1 className="leading-10 text-3xl">
            {first_name} {last_name}
          </h1>
          <h2 className="text-base text-slate-200/50">Identificacion: {id} </h2>
        </div>
      </article>

      <Inputs
        first_name={first_name}
        last_name={last_name}
        email={email}
        initialState={true}
      />
    </main>
  )
}
export default page
