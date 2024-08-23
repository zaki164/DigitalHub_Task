import { images } from "../../Constants"
import UpdatePayment from "./UpdatePayment"

const ShowPayment = () => {

  const data = {
    image: images?.master_card,
    name: "Master card",
    city: "city1"
  }

  return (
    <UpdatePayment data={data} />
  )
}

export default ShowPayment