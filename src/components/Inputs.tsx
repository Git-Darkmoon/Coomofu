"use client"

import { useState } from "react"

function Inputs({ first_name, last_name, email }: any) {
  const [isReadOnly, setIsReadOnly] = useState(true)

  const inputStyles: string = `bg-gray-50 border ${
    isReadOnly
      ? "cursor-not-allowed outline-none"
      : "cursor-default border-gray-300"
  }  text-gray-900 text-sm rounded-md block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white `

  return (
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
            className={inputStyles}
            placeholder={`${first_name} ${last_name}`}
            readOnly={isReadOnly}
            autoComplete="off"
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
            className={inputStyles}
            placeholder={crypto.randomUUID().slice(0, 8)}
            readOnly={isReadOnly}
            autoComplete="off"
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
            className={inputStyles}
            placeholder="+57 309 387 6691"
            readOnly={isReadOnly}
            autoComplete="off"
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
            className={inputStyles}
            placeholder="21/04/1998"
            pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
            readOnly={isReadOnly}
            autoComplete="off"
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
            className={inputStyles}
            placeholder="Cll 97 #4-05 apartamento 901"
            readOnly={isReadOnly}
            required
            autoComplete="off"
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
            className={inputStyles}
            placeholder={email}
            readOnly={isReadOnly}
            autoComplete="off"
            required
          />
        </div>
        <div className="flex gap-3">
          <button
            className="text-slate-100 rounded-md px-2 py-3 hover:text-secondaryYellow hover:bg-primaryGreen-600 bg-primaryGreen-400 transition-colors"
            onClick={() => {
              isReadOnly
                ? alert("Estas en modo edicion")
                : alert("Datos guardados correctamente")

              setIsReadOnly(!isReadOnly)
            }}
          >
            {isReadOnly ? "Editar Informacion" : "Guardar Cambios"}
          </button>
          <button
            onClick={() => confirm("Estas seguro de borrar a ese usuario ?")}
            className={`text-slate-100 rounded-md px-2 py-3 hover:text-secondaryYellow hover:bg-red-700 bg-red-500 transition-colors ${
              isReadOnly ? "visible" : "invisible"
            }`}
          >
            Borrar Usuario
          </button>
        </div>
      </div>
    </article>
  )
}
export default Inputs
