export async function fetchUsers(API: string) {
  const res = await fetch(API)
  const data = await res.json()
  return data.data
}
