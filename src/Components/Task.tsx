import { FaPen, FaTrash } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Task = ({ data, setStateObject, handleOpenAction, deleteTask }: any) => {

  return (
    <figure className="relative p-6 bg-grayColor3/20 rounded-xl pb-16">
      <div className="flex items-center justify-between flex-wrap gap-3 md:gap-5 gap-y-3 mb-4">
        <p className="text-base-l font-semibold capitalize">{data?.name}</p>
        <div className="flex_center gap-3 md:gap-4">
          <Link to={`/update-task/${data?.id}`}
            state={{ data }}
            className="hvr-icon-pulse-shrink flex_center rounded-full bg-grayColor3 text-goldColor p-3 md:p-4"
          >
            <FaPen className='text-l-xl hvr-icon' />
          </Link>
          <button
            onClick={() => {
              handleOpenAction()
              setStateObject({
                actionAPi: () => deleteTask(data?.id),
              })
            }}
            className="hvr-icon-pulse-shrink flex_center rounded-full bg-grayColor3 text-redColor p-3 md:p-4"
          >
            <FaTrash className='text-l-xl hvr-icon' />
          </button>
        </div>
      </div>
      <div className="text-base-l p-4">{data?.description}</div>
      <div className="bottom-0 end-0 mb-4 me-4 absolute">
        <div className={`w-full xs:max-w-[150px] custom_widget ${data?.status === "In Progress" ? "bg-yellowColor/20 text-yellowColor" : data?.status === "Finished" ? "bg-greenColor/30 text-greebg-greenColor" : "bg-redColor/30 text-redColor"} text-sm-base`}>
          {data?.status}
        </div>
      </div>
    </figure>
  )
}

export default Task