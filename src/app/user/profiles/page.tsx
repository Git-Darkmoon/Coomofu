import { fetchUsers } from "@/app/utils"
import ProfileCard, { User } from "@/components/ProfileCard"

const API_URL = "https://reqres.in/api/users?page=1"

async function Profiles() {
  const users = await fetchUsers(API_URL)

  return (
    <main className="px-10 lg:px-20 py-5 lg:py-10">
      <header className="w-full h-8 flex items-center justify-center">
        <h1 className="text-4xl">Perfiles</h1>
      </header>
      <section className="mt-6 ml-44 flex flex-wrap gap-6">
        {users.map((user: User) => {
          return <ProfileCard key={user.id} {...user} />
        })}
      </section>
    </main>
  )
}
export default Profiles
