import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/" className="link" >
                <li className="sidebarListItem active ">
                  <LineStyleIcon className="sidebarIcon" />
                  Home
                </li>
              </Link>

              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon" />
                Analytic
              </li>

              <li className="sidebarListItem">
                <TrendingUpIcon className="sidebarIcon" />
                Sales
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/users" className="link" >
                <li className="sidebarListItem">
                  <PermIdentityIcon className="sidebarIcon" />
                  Users
                </li>
              </Link>
              <Link to="/newUser" className="link" >
                <li className="sidebarListItem">
                  <StorefrontIcon className="sidebarIcon" />
                  New User
                </li>
              </Link>
              <Link to="/products" className="link" >
                
                <li className="sidebarListItem">
                  <AttachMoneyIcon className="sidebarIcon" />
                  Products
                </li>
              </Link>

              <li className="sidebarListItem">
                <BarChartIcon className="sidebarIcon" />
                Transaction
              </li>
              <li className="sidebarListItem">
                <MailOutlineIcon className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notification</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutlineIcon className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeedOutlinedIcon className="sidebarIcon" />
                Feedback
              </li>

              <li className="sidebarListItem">
                <MessageOutlinedIcon className="sidebarIcon" />
                Message
              </li>
            </ul>
          </div>

         
        </div>
      </div>
    </>
  );
}
