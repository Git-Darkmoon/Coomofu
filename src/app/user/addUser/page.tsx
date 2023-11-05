"use client"

import Image from "next/image"
import Link from "next/link"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"
import Inputs from "@/components/Inputs"
import Swal from "sweetalert2"
import { useState } from "react"

function AddUserPage() {
  const [isImgUploaded, setIsImgUploaded] = useState<boolean>(false)
  const [imgSrc, setImgSrc] = useState<any>()

  return (
    <main className="w-full flex flex-col gap-4 px-12 py-6 lg:px-44">
      <Link
        href={"/user/profiles"}
        className="flex items-center justify-end gap-5 max-md:pb-4 text-secondaryYellow group"
      >
        <h1 className="group-hover:text-yellow-400">Volver</h1>
        <ArrowBackRoundedIcon className="group-hover:-translate-x-1 transition-transform group-hover:text-yellow-400" />
      </Link>
      <article className="w-full flex flex-col justify-center gap-3 lg:gap-8 text-slate-200 ">
        <div>
          <h1 className="leading-3 text-3xl">Nuevo Usuario</h1>
        </div>
        {!imgSrc ? (
          <button
            onClick={async () => {
              const { value: file } = await Swal.fire({
                title: "Select image",
                input: "file",
                inputAttributes: {
                  accept: "image/*",
                  "aria-label": "Upload your profile picture",
                },
              })

              if (file) {
                const reader: any = new FileReader()
                reader.onload = (e: any) => {
                  Swal.fire({
                    title: "Foto de perfil escogida",
                    imageUrl: e?.target?.result,
                    imageAlt: "The uploaded picture",
                  })
                  setImgSrc(e?.target?.result)
                }
                reader.readAsDataURL(file)
                setIsImgUploaded(true)
              }
            }}
            className={`text-slate-800 rounded-md ${
              isImgUploaded ? "invisible" : "visible"
            } px-12 py-3 hover:text-primaryGreen-400 hover:bg-yellow-500 bg-secondaryYellow transition-colors`}
          >
            Subir imagen de usuario (jpg,png *)
          </button>
        ) : (
          <Image
            src={imgSrc}
            alt={`File uploaded by the user`}
            width={650}
            height={250}
            priority
            className="rounded-sm"
          />
        )}
      </article>

      <Inputs first_name={""} last_name={""} email={""} initialState={false} />
    </main>
  )
}
export default AddUserPage
