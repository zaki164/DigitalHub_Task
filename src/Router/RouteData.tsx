import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { usePageDate } from "../Modules/PageDate"

const RouteData = ({ title }: { title: string }) => {
  const { setTitle } = usePageDate()
  useEffect(() => {
    if (title) {
      setTitle(title)
    }
    return () => {
      setTitle('')
    }
  }, [title])

  return <Outlet />
}

export default RouteData