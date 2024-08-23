import images from "./images";
import { IoSettingsOutline } from "react-icons/io5";
import { PiWallet, PiFlagPennant, PiClipboardTextThin } from "react-icons/pi";
import { RiAdminLine, RiHome5Fill } from "react-icons/ri";
import { BsSignpost2 } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { LuBuilding } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const navLinks = [
  {
    title: "Home Dashboard",
    icon: <RiHome5Fill />,
    link: "/",
    accordion: false,
  },
  {
    title: "Orders",
    icon: <PiClipboardTextThin />,
    accordion: true,
    sub: [
      {
        title: "Personal",
        link: "/orders-personal",
      },
      {
        title: "Company",
        link: "/orders-company",
      }
    ]
  },
  {
    title: "Posters",
    icon: <BsSignpost2 />,
    link: "/posters",
    accordion: false,
  },
  {
    title: "Users",
    icon: <FaUsers />,
    link: "/users",
    accordion: false,
  },
  {
    title: "Admins",
    icon: <RiAdminLine />,
    link: "/admins",
    accordion: false,
  },
  {
    title: "Profile",
    icon: <PiFlagPennant />,
    accordion: true,
    sub: [
      {
        title: "Show Profile",
        link: "/show-profile",
      },
      {
        title: "Change password",
        link: "/change-password",
      }
    ]
  },
  {
    title: "Company",
    icon: <LuBuilding />,
    accordion: true,
    sub: [
      {
        title: "Company",
        link: "/all-companies",
      },
      {
        title: "Corporate products",
        link: "/corporate-products",
      },
      {
        title: "Add product",
        link: "/add-product",
      },
    ]
  },
  {
    title: "Setting",
    icon: <IoSettingsOutline />,
    accordion: true,
    sub: [
      {
        title: "Language",
        link: "/language",
      },
      {
        title: "Supported cities",
        link: "/supported-cities",
      },
      {
        title: "Social media",
        link: "/social-media",
      },
      {
        title: "Terms and conditions",
        link: "/terms-and-conditions",
      },
      {
        title: "Introduction pages",
        link: "/introduction-pages",
      },
      {
        title: "Application download links",
        link: "/application-download-links",
      },
    ]
  },
  {
    title: "Notifications",
    icon: <IoIosNotificationsOutline />,
    accordion: true,
    sub: [
      {
        title: "Send",
        link: "/send-notification",
      },
      {
        title: "View",
        link: "/all-notifications",
      },
    ]
  },
  {
    title: "Payment type",
    icon: <MdPayment />,
    link: "/all-payments",
    accordion: false,
  },
  {
    title: "Wallet",
    icon: <PiWallet />,
    link: "/wallet",
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

const homeData = {
  statistics: {
    users: {
      number: 1342,
      icon: <FaUsers />,
      percentage: 90,
      up: true
    },
    company: {
      number: 200,
      icon: <LuBuilding />,
      percentage: 97,
      up: false
    },
    order: {
      number: 800,
      icon: <PiClipboardTextThin />,
      percentage: 70,
      up: true
    },
    delivered: {
      number: 200,
      icon: <TbTruckDelivery />,
      percentage: 90,
      up: false
    }
  },
  charts: {
    chart1: {
      label: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      data: [30, 41, 15, 80, 49, 84, 69, 91, 60]
    },
    chart2: {
      label: [1, 2, 3, 4, 5],
      data: {
        line1: [300, 800, 500, 1000, 600],
        line2: [800, 150, 950, 100, 700],
      }
    },
  },
  currentOrders: [
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      location: "Riyadh",
      status: "pending"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      location: "Riyadh",
      status: "pending"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      location: "Riyadh",
      status: "pending"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      location: "Riyadh",
      status: "pending"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      location: "Riyadh",
      status: "pending"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      location: "Riyadh",
      status: "pending"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      location: "Riyadh",
      status: "pending"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      location: "Riyadh",
      status: "pending"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      location: "Riyadh",
      status: "pending"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      location: "Riyadh",
      status: "pending"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      location: "Riyadh",
      status: "pending"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      location: "Riyadh",
      status: "pending"
    },
  ],
}

const Orders = {
  Personal: [
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      postName: "Zaki",
      taskerName: "Moshen",
      services: "booking",
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
  ],
  Company: [
    {
      id: 121212,
      username: "Zaki-mohsen",
      photo_product: images?.product,
      taskerName: "Moshen",
      quantity: 20,
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      photo_product: images?.product,
      taskerName: "Moshen",
      quantity: 20,
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      photo_product: images?.product,
      taskerName: "Moshen",
      quantity: 20,
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      photo_product: images?.product,
      taskerName: "Moshen",
      quantity: 20,
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      photo_product: images?.product,
      taskerName: "Moshen",
      quantity: 20,
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      photo_product: images?.product,
      taskerName: "Moshen",
      quantity: 20,
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      photo_product: images?.product,
      taskerName: "Moshen",
      quantity: 20,
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      photo_product: images?.product,
      taskerName: "Moshen",
      quantity: 20,
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      photo_product: images?.product,
      taskerName: "Moshen",
      quantity: 20,
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
    {
      id: 121212,
      username: "Zaki-mohsen",
      photo_product: images?.product,
      taskerName: "Moshen",
      quantity: 20,
      date: "Thursday, 14 mar, 10 AM",
      day: "16/4/1999",
      time: "10: 20 AM",
      location: "Riyadh",
      status: "pending",
      receiving_location: "Riyadh",
      delivery_location: "Riyadh"
    },
  ]
}

const Users = [
  {
    username: "zaki-mohsen",
    name: "Zaki mohsen",
    image: images?.person,
    email: "zakimohsen14@gmail.com",
    mobile: 548989333,
    whatsAppp: 548989333,
    idNumber: 1233433,
    idPhoto: images?.person,
    location: "Riyadh",
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "zaki-mohsen",
    name: "Zaki mohsen",
    image: images?.person,
    email: "zakimohsen14@gmail.com",
    mobile: 548989333,
    whatsAppp: 548989333,
    idNumber: 1233433,
    idPhoto: images?.person,
    location: "Riyadh",
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "zaki-mohsen",
    name: "Zaki mohsen",
    image: images?.person,
    email: "zakimohsen14@gmail.com",
    mobile: 548989333,
    whatsAppp: 548989333,
    idNumber: 1233433,
    idPhoto: images?.person,
    location: "Riyadh",
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "zaki-mohsen",
    name: "Zaki mohsen",
    image: images?.person,
    email: "zakimohsen14@gmail.com",
    mobile: 548989333,
    whatsAppp: 548989333,
    idNumber: 1233433,
    idPhoto: images?.person,
    location: "Riyadh",
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "zaki-mohsen",
    name: "Zaki mohsen",
    image: images?.person,
    email: "zakimohsen14@gmail.com",
    mobile: 548989333,
    whatsAppp: 548989333,
    idNumber: 1233433,
    idPhoto: images?.person,
    location: "Riyadh",
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "zaki-mohsen",
    name: "Zaki mohsen",
    image: images?.person,
    email: "zakimohsen14@gmail.com",
    mobile: 548989333,
    whatsAppp: 548989333,
    idNumber: 1233433,
    idPhoto: images?.person,
    location: "Riyadh",
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "zaki-mohsen",
    name: "Zaki mohsen",
    image: images?.person,
    email: "zakimohsen14@gmail.com",
    mobile: 548989333,
    whatsAppp: 548989333,
    idNumber: 1233433,
    idPhoto: images?.person,
    location: "Riyadh",
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "zaki-mohsen",
    name: "Zaki mohsen",
    image: images?.person,
    email: "zakimohsen14@gmail.com",
    mobile: 548989333,
    whatsAppp: 548989333,
    idNumber: 1233433,
    idPhoto: images?.person,
    location: "Riyadh",
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "zaki-mohsen",
    name: "Zaki mohsen",
    image: images?.person,
    email: "zakimohsen14@gmail.com",
    mobile: 548989333,
    whatsAppp: 548989333,
    idNumber: 1233433,
    idPhoto: images?.person,
    location: "Riyadh",
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "zaki-mohsen",
    name: "Zaki mohsen",
    image: images?.person,
    email: "zakimohsen14@gmail.com",
    mobile: 548989333,
    whatsAppp: 548989333,
    idNumber: 1233433,
    idPhoto: images?.person,
    location: "Riyadh",
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "zaki-mohsen",
    name: "Zaki mohsen",
    image: images?.person,
    email: "zakimohsen14@gmail.com",
    mobile: 548989333,
    whatsAppp: 548989333,
    idNumber: 1233433,
    idPhoto: images?.person,
    location: "Riyadh",
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "zaki-mohsen",
    name: "Zaki mohsen",
    image: images?.person,
    email: "zakimohsen14@gmail.com",
    mobile: 548989333,
    whatsAppp: 548989333,
    idNumber: 1233433,
    idPhoto: images?.person,
    location: "Riyadh",
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
]

const Payments = [
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
  {
    image: images?.master_card,
    name: "Master card",
    id: 233324234,
    users_number: 150,
    city: "Riyadh"
  },
]

const Notifications = [
  {
    id: 32333434,
    user: "All",
    city: "city1",
    english_title: "Test",
    arabic_title: "تست",
    english_body: "This notification is about user Zaki",
    arabic_body: "هذا الاشعار بخصوص المستخدم زكي",
  },
  {
    id: 32333434,
    user: "All",
    city: "Riyadh",
    english_title: "Test",
    arabic_title: "تست",
    english_body: "This notification is about user Zaki",
    arabic_body: "هذا الاشعار بخصوص المستخدم زكي",
  },
  {
    id: 32333434,
    user: "All",
    city: "Riyadh",
    english_title: "Test",
    arabic_title: "تست",
    english_body: "This notification is about user Zaki",
    arabic_body: "هذا الاشعار بخصوص المستخدم زكي",
  },
  {
    id: 32333434,
    user: "All",
    city: "Riyadh",
    english_title: "Test",
    arabic_title: "تست",
    english_body: "This notification is about user Zaki",
    arabic_body: "هذا الاشعار بخصوص المستخدم زكي",
  },
  {
    id: 32333434,
    user: "All",
    city: "Riyadh",
    english_title: "Test",
    arabic_title: "تست",
    english_body: "This notification is about user Zaki",
    arabic_body: "هذا الاشعار بخصوص المستخدم زكي",
  },
  {
    id: 32333434,
    user: "All",
    city: "Riyadh",
    english_title: "Test",
    arabic_title: "تست",
    english_body: "This notification is about user Zaki",
    arabic_body: "هذا الاشعار بخصوص المستخدم زكي",
  },
  {
    id: 32333434,
    user: "All",
    city: "Riyadh",
    english_title: "Test",
    arabic_title: "تست",
    english_body: "This notification is about user Zaki",
    arabic_body: "هذا الاشعار بخصوص المستخدم زكي",
  },
  {
    id: 32333434,
    user: "All",
    city: "Riyadh",
    english_title: "Test",
    arabic_title: "تست",
    english_body: "This notification is about user Zaki",
    arabic_body: "هذا الاشعار بخصوص المستخدم زكي",
  },
  {
    id: 32333434,
    user: "All",
    city: "Riyadh",
    english_title: "Test",
    arabic_title: "تست",
    english_body: "This notification is about user Zaki",
    arabic_body: "هذا الاشعار بخصوص المستخدم زكي",
  },
  {
    id: 32333434,
    user: "All",
    city: "Riyadh",
    english_title: "Test",
    arabic_title: "تست",
    english_body: "This notification is about user Zaki",
    arabic_body: "هذا الاشعار بخصوص المستخدم زكي",
  },
  {
    id: 32333434,
    user: "All",
    city: "Riyadh",
    english_title: "Test",
    arabic_title: "تست",
    english_body: "This notification is about user Zaki",
    arabic_body: "هذا الاشعار بخصوص المستخدم زكي",
  },
  {
    id: 32333434,
    user: "All",
    city: "Riyadh",
    english_title: "Test",
    arabic_title: "تست",
    english_body: "This notification is about user Zaki",
    arabic_body: "هذا الاشعار بخصوص المستخدم زكي",
  },
  {
    id: 32333434,
    user: "All",
    city: "Riyadh",
    english_title: "Test",
    arabic_title: "تست",
    english_body: "This notification is about user Zaki",
    arabic_body: "هذا الاشعار بخصوص المستخدم زكي",
  },
]

const Companies = [
  {
    username: "saudi-dutch",
    name_en: "Saudi dutch",
    name_ar: "زكي محسن",
    image: images?.person,
    email: "saudidutch@gmail.com",
    idPhoto: images?.person,
    idNumber: 1233433,
    location: "Riyadh",
    whatsAppp: 548989333,
    cr_number: 548989333,
    products_num: 2505,
    mobile: 548989333,
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "saudi-dutch",
    name_en: "Saudi dutch",
    name_ar: "زكي محسن",
    image: images?.person,
    email: "saudidutch@gmail.com",
    idPhoto: images?.person,
    idNumber: 1233433,
    location: "Riyadh",
    whatsAppp: 548989333,
    cr_number: 548989333,
    products_num: 2505,
    mobile: 548989333,
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "saudi-dutch",
    name_en: "Saudi dutch",
    name_ar: "زكي محسن",
    image: images?.person,
    email: "saudidutch@gmail.com",
    idPhoto: images?.person,
    idNumber: 1233433,
    location: "Riyadh",
    whatsAppp: 548989333,
    cr_number: 548989333,
    products_num: 2505,
    mobile: 548989333,
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "saudi-dutch",
    name_en: "Saudi dutch",
    name_ar: "زكي محسن",
    image: images?.person,
    email: "saudidutch@gmail.com",
    idPhoto: images?.person,
    idNumber: 1233433,
    location: "Riyadh",
    whatsAppp: 548989333,
    cr_number: 548989333,
    products_num: 2505,
    mobile: 548989333,
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "saudi-dutch",
    name_en: "Saudi dutch",
    name_ar: "زكي محسن",
    image: images?.person,
    email: "saudidutch@gmail.com",
    idPhoto: images?.person,
    idNumber: 1233433,
    location: "Riyadh",
    whatsAppp: 548989333,
    cr_number: 548989333,
    products_num: 2505,
    mobile: 548989333,
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "saudi-dutch",
    name_en: "Saudi dutch",
    name_ar: "زكي محسن",
    image: images?.person,
    email: "saudidutch@gmail.com",
    idPhoto: images?.person,
    idNumber: 1233433,
    location: "Riyadh",
    whatsAppp: 548989333,
    cr_number: 548989333,
    products_num: 2505,
    mobile: 548989333,
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "saudi-dutch",
    name_en: "Saudi dutch",
    name_ar: "زكي محسن",
    image: images?.person,
    email: "saudidutch@gmail.com",
    idPhoto: images?.person,
    idNumber: 1233433,
    location: "Riyadh",
    whatsAppp: 548989333,
    cr_number: 548989333,
    products_num: 2505,
    mobile: 548989333,
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "saudi-dutch",
    name_en: "Saudi dutch",
    name_ar: "زكي محسن",
    image: images?.person,
    email: "saudidutch@gmail.com",
    idPhoto: images?.person,
    idNumber: 1233433,
    location: "Riyadh",
    whatsAppp: 548989333,
    cr_number: 548989333,
    products_num: 2505,
    mobile: 548989333,
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "saudi-dutch",
    name_en: "Saudi dutch",
    name_ar: "زكي محسن",
    image: images?.person,
    email: "saudidutch@gmail.com",
    idPhoto: images?.person,
    idNumber: 1233433,
    location: "Riyadh",
    whatsAppp: 548989333,
    cr_number: 548989333,
    products_num: 2505,
    mobile: 548989333,
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "saudi-dutch",
    name_en: "Saudi dutch",
    name_ar: "زكي محسن",
    image: images?.person,
    email: "saudidutch@gmail.com",
    idPhoto: images?.person,
    idNumber: 1233433,
    location: "Riyadh",
    whatsAppp: 548989333,
    cr_number: 548989333,
    products_num: 2505,
    mobile: 548989333,
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "saudi-dutch",
    name_en: "Saudi dutch",
    name_ar: "زكي محسن",
    image: images?.person,
    email: "saudidutch@gmail.com",
    idPhoto: images?.person,
    idNumber: 1233433,
    location: "Riyadh",
    whatsAppp: 548989333,
    cr_number: 548989333,
    products_num: 2505,
    mobile: 548989333,
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
  {
    username: "saudi-dutch",
    name_en: "Saudi dutch",
    name_ar: "زكي محسن",
    image: images?.person,
    email: "saudidutch@gmail.com",
    idPhoto: images?.person,
    idNumber: 1233433,
    location: "Riyadh",
    whatsAppp: 548989333,
    cr_number: 548989333,
    products_num: 2505,
    mobile: 548989333,
    totalEarning: 2505,
    wallet: 2505,
    workingHours: 2505
  },
]

const CorporateProducts = [
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
  {
    id: 24325,
    name: "Chair",
    photo_product: images?.chair,
    quantity: 20,
    product_section: "Clothing",
    price: 30,
    description: "Classfied according to clothing"
  },
]

const Wallet = [
  {
    id: 121212,
    date: "Thursday, 14 mar, 10 AM",
    value: 30,
    account_number: 2049383554,
    location: "Riyadh",
    status: "pending",
    day: "16/4/1999",
    time: "10: 20 AM",
    quantity: 20,
    payment_method: 98928393422,
  },
  {
    id: 121212,
    date: "Thursday, 14 mar, 10 AM",
    value: 30,
    account_number: 2049383554,
    location: "Riyadh",
    status: "pending",
    day: "16/4/1999",
    time: "10: 20 AM",
    quantity: 20,
    payment_method: 98928393422,
  },
  {
    id: 121212,
    date: "Thursday, 14 mar, 10 AM",
    value: 30,
    account_number: 2049383554,
    location: "Riyadh",
    status: "pending",
    day: "16/4/1999",
    time: "10: 20 AM",
    quantity: 20,
    payment_method: 98928393422,
  },
  {
    id: 121212,
    date: "Thursday, 14 mar, 10 AM",
    value: 30,
    account_number: 2049383554,
    location: "Riyadh",
    status: "pending",
    day: "16/4/1999",
    time: "10: 20 AM",
    quantity: 20,
    payment_method: 98928393422,
  },
  {
    id: 121212,
    date: "Thursday, 14 mar, 10 AM",
    value: 30,
    account_number: 2049383554,
    location: "Riyadh",
    status: "pending",
    day: "16/4/1999",
    time: "10: 20 AM",
    quantity: 20,
    payment_method: 98928393422,
  },
  {
    id: 121212,
    date: "Thursday, 14 mar, 10 AM",
    value: 30,
    account_number: 2049383554,
    location: "Riyadh",
    status: "pending",
    day: "16/4/1999",
    time: "10: 20 AM",
    quantity: 20,
    payment_method: 98928393422,
  },
  {
    id: 121212,
    date: "Thursday, 14 mar, 10 AM",
    value: 30,
    account_number: 2049383554,
    location: "Riyadh",
    status: "pending",
    day: "16/4/1999",
    time: "10: 20 AM",
    quantity: 20,
    payment_method: 98928393422,
  },
  {
    id: 121212,
    date: "Thursday, 14 mar, 10 AM",
    value: 30,
    account_number: 2049383554,
    location: "Riyadh",
    status: "pending",
    day: "16/4/1999",
    time: "10: 20 AM",
    quantity: 20,
    payment_method: 98928393422,
  },
  {
    id: 121212,
    date: "Thursday, 14 mar, 10 AM",
    value: 30,
    account_number: 2049383554,
    location: "Riyadh",
    status: "pending",
    day: "16/4/1999",
    time: "10: 20 AM",
    quantity: 20,
    payment_method: 98928393422,
  },
  {
    id: 121212,
    date: "Thursday, 14 mar, 10 AM",
    value: 30,
    account_number: 2049383554,
    location: "Riyadh",
    status: "pending",
    day: "16/4/1999",
    time: "10: 20 AM",
    quantity: 20,
    payment_method: 98928393422,
  },
  {
    id: 121212,
    date: "Thursday, 14 mar, 10 AM",
    value: 30,
    account_number: 2049383554,
    location: "Riyadh",
    status: "pending",
    day: "16/4/1999",
    time: "10: 20 AM",
    quantity: 20,
    payment_method: 98928393422,
  },
]

const Cities = [
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
  {
    id: 233324234,
    name: "Riyadh",
    users_number: 20,
  },
]

const IntroductionPages = [
  {
    id: 654,
    num: 1,
    address: "Help Dot App provides these terms and conditions to inform you of the site’s legal policy and practices. Please review these terms and conditions carefully on this website and welcome to our store.",
    text: "Help Dot App provides these terms and conditions to inform you of the site’s legal policy and practices. Please review these terms and conditions carefully on this website and welcome to our store."
  },
  {
    id: 654,
    num: 2,
    address: "Help Dot App provides these terms and conditions to inform you of the site’s legal policy and practices. Please review these terms and conditions carefully on this website and welcome to our store.",
    text: "Help Dot App provides these terms and conditions to inform you of the site’s legal policy and practices. Please review these terms and conditions carefully on this website and welcome to our store."
  },
  {
    id: 654,
    num: 3,
    address: "Help Dot App provides these terms and conditions to inform you of the site’s legal policy and practices. Please review these terms and conditions carefully on this website and welcome to our store.",
    text: "Help Dot App provides these terms and conditions to inform you of the site’s legal policy and practices. Please review these terms and conditions carefully on this website and welcome to our store."
  },
]

const TermsAndCondition = [
  {
    id: 654,
    title: "Text title",
    conditions: [
      "Help Dot App provides these terms and conditions to inform you of the site’s legal policy and practices. Please review these terms and conditions carefully on this website and welcome to our store.",
      "Help Dot App provides these terms and conditions to inform you of the site’s legal policy and practices. Please review these terms and conditions carefully on this website and welcome to our store."
    ]
  },
  {
    id: 654,
    title: "Text title",
    conditions: [
      "Help Dot App provides these terms and conditions to inform you of the site’s legal policy and practices. Please review these terms and conditions carefully on this website and welcome to our store.",
      "Help Dot App provides these terms and conditions to inform you of the site’s legal policy and practices. Please review these terms and conditions carefully on this website and welcome to our store.",
      "Help Dot App provides these terms and conditions to inform you of the site’s legal policy and practices. Please review these terms and conditions carefully on this website and welcome to our store."
    ]
  },
  {
    id: 654,
    title: "Text title",
    conditions: [
      "Help Dot App provides these terms and conditions to inform you of the site’s legal policy and practices. Please review these terms and conditions carefully on this website and welcome to our store.",
      "Help Dot App provides these terms and conditions to inform you of the site’s legal policy and practices. Please review these terms and conditions carefully on this website and welcome to our store.",
    ]
  },
]


const data = {
  navLinks,
  Orders,
  Notifications,
  homeData,
  Users,
  Payments,
  Companies,
  CorporateProducts,
  Wallet,
  Cities,
  IntroductionPages,
  TermsAndCondition,
  Tasks
};

export default data;

export { navLinks }
