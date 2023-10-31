import Sidebar from "@/components/Sidebar"

function Landinglayout({ children }: any) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}
export default Landinglayout
