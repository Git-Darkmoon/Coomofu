"use client"

import PersonSearchRoundedIcon from "@mui/icons-material/PersonSearchRounded"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import ProfileCard, { User } from "@/components/ProfileCard"

const API_URL: string = "https://reqres.in/api/users?page=1"

const inputStyle: string =
  "bg-white px-3 flex items-center justify-between w-full rounded-md border-0 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primaryGreen-400 sm:text-sm sm:leading-6"

const headerStyle: string =
  "w-full h-8 flex gap-4 flex-col items-center justify-center text-2xl text-slate-300"

function Profiles() {
  const [searchTerm, setSearchTerm] = useState("")
  const [myData, setMyData]: any = useState()

  const { data, isLoading, isError } = useQuery({
    queryKey: ["profiles"],
    queryFn: async () => {
      const res = await fetch(API_URL)
      const users = await res.json()
      setMyData(users)
      return users
    },
  })

  if (isLoading)
    return (
      <header className={headerStyle}>
        <h2>Loading Content...</h2>
      </header>
    )

  if (isError)
    return (
      <header className={headerStyle}>
        <h2>Something Went Wrong...</h2>
      </header>
    )

  return (
    <main className="px-10 lg:px-20 py-5 lg:py-10">
      <header className="w-full h-8 flex gap-4 flex-col items-center justify-center">
        <h1 className="text-4xl text-slate-200 ">Perfiles</h1>
        <form className={`flex ${inputStyle}`}>
          <PersonSearchRoundedIcon className="text-slate-500" />

          <input
            id="searchTerm"
            type="text"
            role="search"
            className="w-full text-base px-3 rounded-md outline-none "
            placeholder="ex. Pedro Martinez "
            autoComplete="off"
            value={searchTerm}
            onChange={(e) => {
              console.log(searchTerm)
              setSearchTerm(e.target.value)
            }}
          />
          <div className="flex gap-4 ">
            <button
              className="hover:text-primaryGreen-300 transition-colors"
              type="button"
              onClick={() =>
                setMyData(
                  myData?.filter((user: User) =>
                    user.first_name.includes(searchTerm)
                  )
                )
              }
            >
              Search
            </button>
            <button
              type="reset"
              className="hover:text-primaryGreen-300 transition-colors"
              onClick={() => setSearchTerm("")}
            >
              Reset
            </button>
          </div>
        </form>
      </header>
      <section className="w-full mt-2 pt-12 lg:mt-5 flex flex-wrap justify-center gap-6">
        {myData?.data?.map((user: User) => {
          return <ProfileCard key={user.id} {...user} />
        })}
      </section>
    </main>
  )
}
export default Profiles
