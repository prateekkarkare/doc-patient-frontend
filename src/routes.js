// @material-ui/icons
import {
  Notifications,
  Dashboard,
  Healing,
  LibraryBooks,
  Person
} from "@material-ui/icons";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
//import UserProfile from "views/UserProfile/UserProfile.jsx";
import PatientList from "views/PatientList/PatientList.js";
//import Typography from "views/Typography/Typography.jsx";
//import Icons from "views/Icons/Icons.jsx";
//import Maps from "views/Maps/Maps.jsx";
//import NotificationsPage from "views/Notifications/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/treatments",
    name: "Treatments",
    icon: Healing,
    //component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/patients",
    name: "Patient List",
    icon: Person,
    component: PatientList,
    layout: "/admin"
  },
  {
    path: "/reading",
    name: "Reading",
    icon: LibraryBooks,
    //component: Typography,
    layout: "/admin"
  },
  /*{
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    // component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    // component: Maps,
    layout: "/admin"
  },*/
  {
    path: "/conversations",
    name: "Conversations",
    icon: Notifications,
    //component: NotificationsPage,
    layout: "/admin"
  }
];

export default dashboardRoutes;
