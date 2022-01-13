import ApplicationIcon from "../../../assets/Icon/ApplicationIcon"
import InvoiceIcon from "../../../assets/Icon/InvoiceIcon"
import MaintenanceIcon from "../../../assets/Icon/MaintenanceIcon"
// import PropertiesIcon from "../../../assets/Icon/PropertiesIcon"
import RentIcon from "../../../assets/Icon/RentIcon"
import SquareBox from "../../../assets/Icon/SquareBox"
import Facilitycon from "../../../assets/Icon/Facilitycon"
import VisitorsIcon from "../../../assets/Icon/VisitorsIcon"
import RolesIcon from "../../../assets/Icon/RolesIcon"
import SettingIcon from "../../../assets/Icon/SettingIcon"
import LogoutIcon from "../../../assets/Icon/LogoutIcon"

export const sidebarNavItem = () =>  [
  {
    icon: <SquareBox />,
    path: "/home",
    navName: "Dashboard",
  },
  {
    icon: <SquareBox />,
    path: "",
    navName: "Properties",
    dropDownItem: [
      {items: "Property", path: "/dashboard/properties"},
      {items: "Units", path: "/dashboard/units"},
    ],
  },
  {
    icon: <ApplicationIcon/>,
    path: "/application",
    navName: "Applications",
  },
  {
    icon: <RentIcon />,
    path: "/rent-leases",
    navName: "Rent & Leases",
  },
  {
    icon: <InvoiceIcon />,
    path: "/invoice",
    navName: "Payments",
  },
  {
    icon: <MaintenanceIcon />,
    path: "/maintenance",
    navName: "Maintenance",
  },
  {
    icon: <Facilitycon/>,
    path: "/facility",
    navName: "Facility Management",
  },
  {
    icon: <VisitorsIcon />,
    path: "/visitors",
    navName: "Visitors",
  }
]

export const sideBarBottomItems = [
  {
    icon: <RolesIcon/>,
    path: "/roles",
    navName: "Roles",
  },
  {
    icon: <SettingIcon/>,
    path: "/settings",
    navName: "Settings"
  },
  {
    icon: <LogoutIcon />,
    path: "",
    navName: "Log out" 
  }
]
