import { data } from "../../../Constants"
import UpdateTerm from "./UpdateTerm"

const ShowTerm = () => {

  const dataTerm = data?.TermsAndCondition[0]

  return (
    <UpdateTerm data={dataTerm} />
  )
}

export default ShowTerm