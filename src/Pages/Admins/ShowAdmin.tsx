import { images } from "../../Constants"
import UpdateAdmin from "./UpdateAdmin"

const ShowAdmin = () => {

  const data = {
    image: images?.person,
    name: "Zaki mohsen",
    email: "zakimohsen14@gmail.com",
    ID_Number: 435456,
    ID_Photo: images?.poster,
    mobile: 598723982,
    mobile_whatsApp: 598723999,
  }

  return (
    <UpdateAdmin data={data} />
  )
}

export default ShowAdmin