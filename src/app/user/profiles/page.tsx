import { fetchUsers } from "@/app/utils"
import ProfileCard, { User } from "@/components/ProfileCard"
import SearchForm from "@/components/SearchForm"

const API_URL = "https://reqres.in/api/users?page=1"

async function Profiles() {
  const users = await fetchUsers(API_URL)

  return (
    <main className="px-10 lg:px-20 py-5 lg:py-10">
      <header className="w-full h-8 flex gap-4 flex-col items-center justify-center">
        <h1 className="text-4xl text-slate-200 ">Perfiles</h1>
        <SearchForm data={users} />
      </header>
      <section className="w-full mt-2 pt-12 lg:mt-5 flex flex-wrap justify-center gap-6">
        {users.map((user: User) => {
          return <ProfileCard key={user.id} {...user} />
        })}
      </section>
    </main>
  )
}
export default Profiles
