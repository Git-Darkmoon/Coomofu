"use client"
import PersonSearchRoundedIcon from "@mui/icons-material/PersonSearchRounded"

function SearchForm({ data }: any) {
  const inputStyle: string =
    "bg-white px-3 flex items-center justify-between w-full rounded-md border-0 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primaryGreen-400 sm:text-sm sm:leading-6"

  return (
    <form className={`flex ${inputStyle}`}>
      <input
        type="text"
        role="search"
        className="w-full text-base px-3 rounded-md outline-none "
        placeholder="ex. Pedro Martinez "
      />
      <PersonSearchRoundedIcon className="text-slate-500" />
    </form>
  )
}
export default SearchForm

// focus-within:ring-2 focus-within:ring-inset focus-within:ring-primaryGreen-400
