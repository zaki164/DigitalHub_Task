import { images } from "../../Constants"
import UpdateUser from "./UpdateUser"

const ShowUser = () => {

  const data = {
    image: images?.person,
    name: "Zaki mohsen",
    email: "zakimohsen14@gmail.com",
    ID_Number: 435456,
    ID_Photo: images?.poster,
    mobile: 598723982,
    mobile_whatsApp: 598723999,
    location: 'test',
  }

  return (
    <UpdateUser data={data} />
  )
}

export default ShowUser