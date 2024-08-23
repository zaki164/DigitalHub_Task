import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ActionModal } from "../Components";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import SelectReact from 'react-select';
import SelectColors from "../config/SelectColors";
import Task from "../Components/Task";
import { useTasksData } from "../Modules/TaskContext";
import { TaskType } from "../config/types";
import { Slide, toast } from "react-toastify";

const Home = () => {
  const { t, i18n } = useTranslation()
  const { Tasks, setTasks } = useTasksData()
  const [openDialog, setOpenDialog] = useState(false);
  const [stateObject, setStateObject] = useState({});
  const pageSize = 5;
  const handleOpenAction = () => {
    setOpenDialog(true);
  };

  type stateType = {
    page: number,
    sorting: string
    filter: string,
    filterdData: TaskType[]
  }

  const [pageState, setPageState] = useState<stateType>({
    page: 1,
    sorting: "",
    filter: "",
    filterdData: Tasks
  })

  const Option1 = [
    { value: "Not Started", label: 'Not Started' },
    { value: "In Progress", label: 'In Progress' },
    { value: "Finished", label: 'Finished' },
  ]

  const Option2 = [
    { value: "Ascending", label: 'Ascending' },
    { value: "Descending", label: 'Descending' },
  ]

  const QueryData = () => {
    const data = pageState?.filter ? Tasks.filter((ele) => ele?.status === pageState?.filter) : Tasks;
    const newData = pageState?.sorting ? pageState?.sorting === "Ascending" ? data?.sort((a, b) => a.name.localeCompare(b.name)) : data?.sort((a, b) => b.name.localeCompare(a.name)) : data;
    setPageState(prev => ({
      ...prev,
      filterdData: newData
    }))
  }

  useEffect(() => {
    QueryData()
  }, [pageState?.filter, pageState?.sorting])

  useEffect(() => {
    setPageState(prev => ({
      ...prev,
      filterdData: Tasks
    }))
    localStorage?.setItem("Tasks_List", JSON?.stringify(Tasks))
  }, [Tasks])

  const deleteTask = (id: string) => {
    setTasks(prev => prev?.filter(ele => ele?.id !== id))
    toast.success("Data deleted successfully", {
      position: i18n.language === "en" ? "top-right" : "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      className="flex flex-col gap-4 md:gap-6 content-container p-container">
      <ActionModal open={openDialog} setOpenDialog={setOpenDialog} {...stateObject} own={t("Task")} />
      <section className="flex items-center flex-wrap gap-2 md:gap-3 gap-y-3 mb-6">
        <p className="page-header">{t("All tasks")}</p>
        <div className="w-full md:flex-1 justify-end flex flex-wrap gap-6 md:gap-8">
          <div className="max-sm:w-full sm:flex-1 xl:flex-none xl:w-[230px]">
            <SelectReact
              noOptionsMessage={() => t('No option')}
              loadingMessage={() => t('Loading...')}
              isClearable
              options={Option1}
              styles={SelectColors}
              placeholder={t('Filter')}
              onChange={(newValue: any) => {
                setPageState(prev => ({
                  ...prev,
                  page: 1,
                  filter: newValue ? newValue?.value : ''
                }))
              }}
            />
          </div>
          <div className="max-sm:w-full sm:flex-1 xl:flex-none xl:w-[230px]">
            <SelectReact
              noOptionsMessage={() => t('No option')}
              loadingMessage={() => t('Loading...')}
              isClearable
              options={Option2}
              styles={SelectColors}
              placeholder={t('Sorting')}
              onChange={(newValue: any) => {
                setPageState(prev => ({
                  ...prev,
                  page: 1,
                  sorting: newValue ? newValue?.value : ''
                }))
              }}
            />
          </div>
          <Link
            to="/add-task"
            className={`max-xs:w-full custom-button hover-button1 text-sm-base bg-mainColor px-8 md:px-10 py-2`}
          >
            {t("Add task")}
          </Link>
        </div>
      </section>
      {
        pageState?.filterdData?.length === 0 ? <p className="text-xl-2xl font-bold text-center my-10 text-mainColor">{t("Empty data")}</p> :
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            key={pageState?.filterdData?.length}
            className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {
              pageState?.filterdData?.slice(pageSize * (pageState?.page - 1), pageSize * pageState?.page)?.map((ele, i: number) => (
                <Task data={ele} key={i} setStateObject={setStateObject} handleOpenAction={handleOpenAction} deleteTask={deleteTask} />
              ))
            }
          </motion.section>
      }
      {
        pageState?.filterdData?.length > pageSize &&
        <div className="flex max-sm:flex-col max-sm:items-end sm:justify-end sm:items-center gap-4 p-4">
          <span>{t('Rows Per Page:')} {pageSize}</span>
          {
            [... new Array(Math.ceil(pageState?.filterdData?.length / 5))]?.map((_, i) =>
              <button
                onClick={() =>
                  setPageState(prev => ({
                    ...prev,
                    page: i + 1,
                  }))}
                className={`flex_center w-4 h-4 p-4 rounded-xl text-base-l duration-300 ${pageState?.page === i + 1 ? 'bg-[#00f] text-white' : 'bg-blueColor/20 text-blueColor'}`} key={i}>
                {i + 1}
              </button>
            )
          }
        </div>
      }
    </motion.section>
  )
};

export default Home;