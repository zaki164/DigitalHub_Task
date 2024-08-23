import { data } from "../../../Constants"
import UpdateCity from "./UpdateCity"

const ShowCity = () => {

  const dataCity = data?.Cities[0]

  return (
    <UpdateCity data={dataCity} />
  )
}

export default ShowCity