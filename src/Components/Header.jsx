import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import theme from "../Components/Theme";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 20 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    background:
      "linear-gradient(90deg, rgba(97,67,133,1) 0%, rgba(81,99,149,1) 57%)",

    fontWeight: 300,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 200,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    textTransform: "none",
    fontWeight: 700,
    fontSize: "1rem",
    minWidth: 15,
    marginLeft: "25px",
  },
  h3: {
    fontWeight: 25,
  },
  button: {
    ...theme.button.estimate,
    fontFamily: "Helvetica",
    textTransform: "none",
    fontSize: "1rem",
  },
  Menu: {
    backgroundColor: theme.palette.common.Blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    color: "white",
  },
  drawer: {
    backgroundColor: theme.palette.common.Blue,
  },
  drawerItem: { ...theme.typography.tab, color: "white", opacity: 0.7 },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.Orange,
  },
  drawerItemSelected: {
    color: "white",
    opacity: 1,
    ...theme.typography.tab,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [OpenDrawer, setOpenDrawer] = useState(false);
  const [OpenServices, setOpenServices] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [OpenMenu, setOpenMenu] = useState(false);
  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "CustomSoftwareDevelopment",
      link: "/customSoftware",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "MobileAppsDevelopment",
      link: "/mobileApps",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "WebsiteDevelopment",
      link: "/WebDevelopment",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              props.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.selectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="secondary"
      >
        {routes.map((route, index) => (
          <Tab
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          ></Tab>
        ))}
      </Tabs>
      <Button
        className={classes.button}
        variant="text"
        component={Link}
        to="/Login"
      >
        Login{" "}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={OpenMenu}
        onClose={handleClose}
        classes={{ paper: classes.Menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {" "}
        {menuOptions.map((options, i) => (
          <MenuItem
            key={options}
            component={Link}
            to={options.link}
            classes={{ root: classes.menuItem }}
            onCLick={(event) => {
              handleMenuItemClick(event, i);
              props.setValue(1);
              handleClose();
            }}
            selected={i === props.selectedIndex && props.value === 1}
          >
            {options.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={OpenDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          {routes.map((route) => {
            <ListItem
              onCLick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
              divider
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
            >
              <ListItemText
                className={
                  props.value === 0
                    ? [classes.drawerItemSelected, classes.menuItem]
                    : classes.drawerItem
                }
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>;
          })}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={props.value === 0}
          >
            <ListItemText
              disableTypography
              className={
                props.value === 0
                  ? classes.drawerItemSelected
                  : classes.drawerItem
              }
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/services"
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(1);
            }}
            selected={props.value === 1}
          >
            <ListItemText
              disableTypography
              className={
                props.value === 1
                  ? classes.drawerItemSelected
                  : classes.drawerItem
              }
            >
              services
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/revolution"
            selected={props.value === 2}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(2);
            }}
          >
            <ListItemText
              disableTypography
              className={
                props.value === 2
                  ? classes.drawerItemSelected
                  : classes.drawerItem
              }
            >
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/about"
            selected={props.value === 3}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(3);
            }}
          >
            <ListItemText
              disableTypography
              className={
                props.value === 3
                  ? classes.drawerItemSelected
                  : classes.drawerItem
              }
            >
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/contact"
            selected={props.value === 4}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(4);
            }}
          >
            <ListItemText
              disableTypography
              className={
                props.value === 4
                  ? classes.drawerItemSelected
                  : classes.drawerItem
              }
            >
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/login"
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            selected={props.value === 5}
            className={classes.drawerItemEstimate}
          >
            <ListItemText
              disableTypography
              className={
                props.value === 5
                  ? classes.drawerItemSelected
                  : classes.drawerItem
              }
            >
              Login
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!OpenDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
        className={classes.drawerIcon}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              NBlik
            </Typography>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
