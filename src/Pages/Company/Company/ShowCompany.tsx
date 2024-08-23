import { data } from "../../../Constants"
import UpdateCompany from "./UpdateCompany"

const ShowCompany = () => {

  const dataCompany = data?.Companies[0]
  return (
    <UpdateCompany data={dataCompany} />
  )
}

export default ShowCompany