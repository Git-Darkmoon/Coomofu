import { fetchUsers } from "@/app/utils"
import Image from "next/image"
import Link from "next/link"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"

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
          <h2>Identificacion: {id} </h2>
          <h2>
            {first_name} {last_name}
          </h2>
        </div>
      </article>

      <article>
        <div className="grid gap-6 mb-6 md:grid-cols-2 ">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`${first_name} ${last_name}`}
              readOnly
              required
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cedula
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={crypto.randomUUID().slice(0, 8)}
              readOnly
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Telefono
            </label>
            <input
              type="tel"
              id="last_name"
              className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+57 309 387 6691"
              readOnly
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Fecha de Nacimiento
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="21/04/1998"
              pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
              readOnly
              required
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Direccion
            </label>
            <input
              type="text"
              id="website"
              className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cll 97 #4-05 apartamento 901"
              readOnly
              required
            />
          </div>
          <div>
            <label
              htmlFor="visitors"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="visitors"
              className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={email}
              readOnly
              required
            />
          </div>
          <div className="flex gap-3">
            <button className="text-slate-100 px-1.5 py-1 rounded-sm hover:text-secondaryYellow bg-primaryGreen-400">
              Editar Informacion
            </button>
            <button className="text-slate-100 px-1.5 py-1 rounded-sm hover:text-secondaryYellow bg-red-500">
              Borrar Usuario
            </button>
          </div>
        </div>
      </article>
    </main>
  )
}
export default page
