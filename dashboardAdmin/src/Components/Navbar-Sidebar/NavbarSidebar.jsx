import * as React from "react";
import "./NavbarSidebar.css";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SettingsIcon from "@mui/icons-material/Settings";
import Badge from "@mui/material/Badge";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { useState } from "react";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

let drawerWidth = 220;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function NavbarSidebar({ children }) {
  const [dashboardItem, setDashboardItem] = useState([
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "Analytic", href: "/" },
    { id: 3, text: "Sales", href: "/" },
  ]);
  const [quickMenu, setQuickMenu] = useState([
    { id: 1, text: "Users", href: "/users" },
    { id: 2, text: "New User", href: "/newUser" },
    { id: 3, text: "Products", href: "/products" },
    { id: 4, text: "Transaction", href: "/" },
    { id: 5, text: "Reports", href: "/" },
  ]);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar sx={{ backgroundColor: "#37474f" }} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <section className="toolbarNav">
            <Typography variant="h6" noWrap component="div">
              Amir
            </Typography>
            <section className={open ? `HideAppBar` : ""}>
              <IconButton>
                <SettingsIcon sx={{ color: "#fff" }} />
              </IconButton>
              <IconButton>
                <Badge badgeContent={100} color="secondary">
                  <NotificationsIcon sx={{ color: "#fff" }} />
                </Badge>
              </IconButton>

              <IconButton>
                <Badge badgeContent={40} color="secondary">
                  <EmailIcon sx={{ color: "#fff" }} />
                </Badge>
              </IconButton>
            </section>
          </section>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
           
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <h4 className="titleSidebar">Dashboard</h4>
          {dashboardItem.map((item, index) => (
            <ListItem className="listItemAppBar" key={item.id} disablePadding>
              <ListItemButton>
                <Link className="linkSidebar" to={item.href}>
                  <ListItemIcon>
                    {index === 0 && <LineStyleIcon />}
                    {index === 1 && <TimelineIcon />}
                    {index === 2 && <TrendingUpIcon />}
                  </ListItemIcon>

                  <ListItemText primary={item.text} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <h4 className="titleSidebar">Quick Menu</h4>

          {quickMenu.map((item, index) => (
            <ListItem className="listItemAppBar" key={item.id} disablePadding>
              <ListItemButton>
                <Link className="linkSidebar" to={item.href}>
                  <ListItemIcon>
                    {index === 0 && <PermIdentityIcon />}
                    {index === 1 && <StorefrontIcon />}
                    {index === 2 && <AttachMoneyIcon />}
                    {index === 3 && <BarChartIcon />}
                    {index === 4 && <SummarizeIcon />}
                  </ListItemIcon>

                  <ListItemText primary={item.text} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
