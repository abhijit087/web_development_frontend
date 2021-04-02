import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import black_slash from "../Components/icons/style-sheet.svg";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import facebook from "../Components/icons/facebook.svg";
import whatsapp from "../Components/icons/whatsapp.svg";
import twitter from "../Components/icons/twitter.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#FC7307",
    width: "300%",
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    ...theme.typography.tab,
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "3em",
    width: "3em",
    right: "1.5em",
  },
  socialContainer: {
    position: "absolute",
  },
  slash: {
    height: "10em",
    marginTop: "2em",
    marginLeft: "2em",
    marginBottom: "2em",
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.link} className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                to="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/services"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/CustomSoftwareDevelopment"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                to="/mobileApps"
                className={classes.link}
              >
                Mobile Apps Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/WebDevelopment"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                className={classes.link}
              >
                Web Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid item component={Link} to="vision" className={classes.link}>
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/technology"
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/process"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => props.setValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/history"
                className={classes.link}
                onClick={() => props.setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/team"
                className={classes.link}
                onClick={() => props.setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/contact"
                classsName={classes.link}
                onClick={() => props.setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid item>
          <img
            alt="facebook logo"
            src={facebook}
            className={classes.icon}
            spacing={2}
          />
        </Grid>
        <Grid item>
          <img
            alt="whatsapp logo"
            src={whatsapp}
            className={classes.icon}
            spacing={2}
          />
        </Grid>
        <Grid item>
          <img
            alt="twitter logo"
            src={twitter}
            className={classes.icon}
            spacing={2}
          />
        </Grid>
      </Grid>
      <img alt="black_slash" src={black_slash} className={classes.slash}></img>
    </footer>
  );
}
