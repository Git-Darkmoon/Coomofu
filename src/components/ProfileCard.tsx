import Image from "next/image"
import Link from "next/link"

export type User = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

function ProfileCard({ id, first_name, last_name, avatar }: User) {
  return (
    <div className="max-w-sm w-full border-none border rounded-lg shadow-sm hover:shadow-md hover:scale-105 bg-primaryGreen-700 flex transition-all">
      <Image src={avatar} width={120} height={120} alt="User picture" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {first_name} {last_name}
        </h5>
        <Link
          href={`/user/profiles/${id}`}
          className="inline-flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium text-center bg-secondaryYellow "
        >
          Detalles
        </Link>
      </div>
    </div>
  )
}
export default ProfileCard
