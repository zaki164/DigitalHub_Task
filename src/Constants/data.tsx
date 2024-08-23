import { RiHome5Fill } from "react-icons/ri";

export type Link = {
  title: string,
  link: string,
}
export type LinkAccordion = {
  title: string,
  icon: any,
  accordion: boolean,
  link?: string,
  sub?: Link[]
}
const navLinks: LinkAccordion[] = [
  {
    title: "Home",
    icon: <RiHome5Fill />,
    link: "/",
    accordion: false,
  },
];

const Tasks =
  [
    {
      id: "1",
      status: "Not Started",
      name: "frond-end",
      description: "loreLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    },
    {
      id: "2",
      status: "Finished",
      name: "back-end",
      description: "loreLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    },
    {
      id: "3",
      status: "In Progress",
      name: "Android",
      description: "loreLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    },
    {
      id: "4",
      status: "Finished",
      name: "flutter",
      description: "loreLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    },
  ]


const data = {
  navLinks,
  Tasks
};

export default data;

export { navLinks }
