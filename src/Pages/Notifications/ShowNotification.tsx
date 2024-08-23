import { data } from "../../Constants"
import UpdateNotification from "./UpdateNotification"

const ShowNotification = () => {

  const dataNotification = data?.Notifications[0]

  return (
    <UpdateNotification data={dataNotification} />
  )
}

export default ShowNotification