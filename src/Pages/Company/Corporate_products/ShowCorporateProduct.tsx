import { data } from "../../../Constants"
import UpdateProduct from "./UpdateProduct"

const ShowCorporateProduct = () => {

  const dataProduct = data?.CorporateProducts[0]

  return (
    <UpdateProduct data={dataProduct} />
  )
}

export default ShowCorporateProduct