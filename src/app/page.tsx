"use client"

import Image from "next/image"
import Logo from "@/assets/Coomofu_logo.webp"
import { useRouter } from "next/navigation"
import { useState } from "react"

const handleSubmit = (e: any) => {
  e.preventDefault()
}

function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [pw, setPw] = useState("")

  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-primaryGreen-500 ">
      <article className="flex max-w-md min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 rounded-sm bg-slate-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-32 w-auto"
            src={Logo}
            alt="Your Company"
            width={400}
            height={400}
            priority
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-slate-900">
            Inicia sesion en tu cuenta
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryGreen-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-slate-900"
                >
                  Contraseña
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-primaryGreen-400 hover:text-primaryGreen-500"
                  >
                    Olvidaste la contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={pw}
                  onChange={(e) => {
                    setPw(e.target.value)
                  }}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryGreen-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primaryGreen-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primaryGreen-500 transition-colors"
                onClick={() => {
                  if (email === "admin@example.com" && pw === "admin") {
                    router.push("/home")
                  } else {
                    alert("Datos invalidos")
                  }
                }}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No tienes cuenta?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-primaryGreen-400 hover:text-primaryGreen-500"
            >
              Crea una cuenta
            </a>
          </p>
        </div>
      </article>
    </main>
  )
}
export default Login
