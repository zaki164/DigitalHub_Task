import { data } from "../../../Constants"
import UpdateIntroductionPage from "./UpdateIntroductionPage"

const ShowIntroductionPage = () => {

  const dataPage = data?.IntroductionPages[0]

  return (
    <UpdateIntroductionPage data={dataPage} />
  )
}

export default ShowIntroductionPage