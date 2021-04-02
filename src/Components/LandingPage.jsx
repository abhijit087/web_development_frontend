import React from "react";
import Lottie from "react-lottie";
import animationData from "../Components/animations/41545-software-development.json";
import { makeStyles } from "@material-ui/styles";
import theme from "../Components/Theme";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../Components/5.1 ButtonArrow";
import CustomSoftwareDevelopment from "../Components/icons/code.svg";
import WebApps from "../Components/icons/computer.svg";
import MobileApps from "../Components/icons/user-interface-apps.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
  },
  icon: {
    marginLeft: "2em",
  },
  estimateButton: {
    ...theme.button.estimate,
    backgroundColor: theme.palette.common.Orange,
    borderRadius: 50,
    hegiht: 45,
    width: 145,
    marginRight: 40,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: theme.palette.secondary,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    borderColor: theme.palette.common.Blue,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontWeight: "bold",
    fontColor: "white",
    fontSize: "0.9rem",
  },
  specialText: {
    color: theme.palette.common.Orange,
    fontWeight: "bold",
  },
  lefTtext: {
    marginLeft: "3em",
    marginTop: "0.15em",
  },
  LearnButtonService: {
    color: theme.palette.common.Blue,
    backgroundColor: theme.palette.common.Orange,
    borderColor: theme.palette.common.Blue,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontWeight: "bold",
    fontColor: "white",
    fontSize: "0.9rem",
    marginLeft: "5em",
    marginTop: "0.15em",
  },
  ServicesBlock: {
    marginTop: "12em",
  },
  webdicon: {
    marginRight: "5em",
    marginTop: "15em",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        {/* --------------------Hero Block-------*/}
        <Grid container alignItems="center" justify="center">
          <Grid item>
            <Typography variant="h2">
              Bringing the west technology{" "}
              <Grid item>
                <Typography variant="h2"> to the South Asia</Typography>
              </Grid>
            </Typography>
            <Grid
              container
              justify="center"
              direction="row"
              alignItems="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow fill="red" width="15" height="15"></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item>
            <Lottie
              options={defaultOptions}
              Height={"105%"}
              width={"105%"}
              className={classes.animation}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item></Grid>
      {/*------services block-------*/}
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justify="flex-start"
        className={classes.ServicesBlock}
      >
        <Grid item>
          <Typography variant="h4" className={classes.icon}>
            Custom Software Development
          </Typography>
          <Typography variant="subtitle1" className={classes.lefTtext}>
            Save Energy. Save Time. Save Money
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.common.Blue}
            className={classes.lefTtext}
          >
            Complete Digital Solutions from Investigation to
            <span className={classes.specialText}> Celebrations</span>
          </Typography>

          <Button variant="contained" className={classes.LearnButtonService}>
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow
              height={15}
              width={15}
              fill={theme.palette.common.Blue}
            ></ButtonArrow>
          </Button>
        </Grid>
        <Grid item>
          <img
            alt="custom software development"
            src={CustomSoftwareDevelopment}
            height={150}
            width={150}
            className={classes.icon}
          ></img>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row-reverse"
        justify="flex-start"
        alignItems="flex-end"
        className={classes.webdicon}
      >
        <Grid item style={{ marginRight: "3em" }}>
          <Typography variant="h4">Web Development</Typography>
          <Typography variant="subtitle1" style={{ marginTop: "0.15em" }}>
            What if you could watch every move <br />
            your <span className={classes.specialText}> competitors</span> are
            making here in web development World
          </Typography>
          <Button variant="contained" className={classes.LearnButtonService}>
            <span style={{ marginRight: 5 }}>Learn More</span>
            <ButtonArrow
              height={15}
              width={15}
              fill={theme.palette.common.Blue}
            ></ButtonArrow>
          </Button>
        </Grid>
        <Grid item style={{ marginRight: "2em" }}>
          <img
            alt="Web Development"
            src={WebApps}
            height={150}
            width={150}
          ></img>
        </Grid>
      </Grid>{" "}
      {/*mobile app development */}
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justify="flex-start"
        className={classes.ServicesBlock}
        style={{ marginTop: "12em", marginBottom: "12em" }}
      >
        <Grid item>
          <Typography variant="h4" className={classes.icon}>
            ios / Android App Development
          </Typography>
          <Typography variant="subtitle1" className={classes.lefTtext}>
            Extend Functionality, Extend Access, Increase engagement.
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.common.Blue}
            className={classes.lefTtext}
          >
            Integrate your app experience or create standalone app with eiter
            <span className={classes.specialText}> Android/ iOS</span>
          </Typography>

          <Button variant="contained" className={classes.LearnButtonService}>
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow
              height={15}
              width={15}
              fill={theme.palette.common.Blue}
            ></ButtonArrow>
          </Button>
        </Grid>
        <Grid item>
          <img
            alt="custom software development"
            src={MobileApps}
            height={150}
            width={150}
            className={classes.icon}
          ></img>
        </Grid>
      </Grid>
    </Grid>
  );
}
