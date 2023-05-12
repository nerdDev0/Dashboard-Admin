
import routes from "./routes"
import { useRoutes } from "react-router-dom"
//import Topbar from "./Components/topbar/Topbar"
//import './App.css'
//import './module.css'
//import Sidebar from "./Components/sidebar/Sidebar"
import NavbarSidebar from "./Components/Navbar-Sidebar/NavbarSidebar"
export default function App() {
  let router=useRoutes(routes)
  return (
    <>
     <NavbarSidebar>
   
   {router}
   </NavbarSidebar>
    </>
  )
}
