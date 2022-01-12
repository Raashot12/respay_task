import Application from "../../components/DashBoard/Application";
import Facilities from "../../components/DashBoard/Facilities";
import Home from "../../components/DashBoard/Home";
import Invoice from "../../components/DashBoard/Invoice";
import Maintenance from "../../components/DashBoard/Maintenance";
import ProductDetails from "../../components/DashBoard/ProductDetails";
import Properties from "../../components/DashBoard/Properties";
import Rent from "../../components/DashBoard/Rent";
import Units from "../../components/DashBoard/Units";
import Visitor from "../../components/DashBoard/Visitor";

 const pageList = [
  {
    component: Home,
    path: "/home",
    name: "Dashboard",
  },
  {
    component: Properties,
    path: "/dashboard/properties",
    name: "Messages",
  },
  {
    component: Application,
    path: "/application",
    name: "Application",
  },
  {
    component: Rent,
    path: "/rent-leases",
    name: "Rent"
  },
  {
    component: Invoice,
    path: "/invoice",
    name: "Invoice"
   },
   {
     component: Units,
     path: "/dashboard/units",
     name: "Units"
   },
  {
    component: Maintenance,
    path: "/maintenance",
    name: "Manintenance",
  },
  {
    component: Facilities,
    path: "/facility",
    name: "facility",
  },
  {
    component: Visitor,
    path: "/visitors",
    name: "Visitors",
   },
   {
     component: ProductDetails,
     path: "/property/:propertyId",
     name: "PropertyDetails",
   },
]
export default pageList