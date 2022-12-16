import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
// import { makeStyles } from '@mui/styles/makeStyles';
import { ClassNames } from '@emotion/react';
import { Tab, Tabs, Button } from '@mui/material';
import logo from '../../assets/logo.svg';
import Theme from './Theme';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

// useStyles below is depreceated, you need to use Emotion or create an object with styles

// const useStyles = makeStyles(theme => ({
//   toolbarMargin: {
//     ...theme.mixins.toolbar,
//     marginBottom: "3em"
//   },
//   logo: {
//     height: "7em"
//   },
//   tabContainer: {
//     marginLeft: 'auto',
//   },
    //  tab: {
    //   ...theme.typography.tab,
    //   minWidth: 10,
    //   marginLeft: "25px",
    //  },
    //  button: {
      //  ...theme.typography.estimate,
    //    border-radius: 50px,
    //    margin-left: 25px,
    //    margin-right: 25px,

    //    height: "45px",
    //    color: "white",
    //  }
// }))

export default function Header(props) {
  // const classes = useStyles();
  const [value, setValue] = useState(0);
  // const handleChange = (e, value) => {
  //   setValue(value)
  // }

  useEffect(() => {
  })

  return (
    <React.Fragment>
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          {/* <img src={logo} className={classes.logo} alt="company logo" /> */}
          {/* <Tabs className={classes.tabContainer}> */}
          <Tabs 
              value={value} 
              // onChange={handleChange}
              indicatorColor="primary"
          >
            {/* <Tab className={classes.tabContainer} label="Profile" /> */}
            <Tab label="Profile" />
            <Tab label="Projects" />
            <Tab label="Languages" />
            <Tab label="Blog" />
            <Tab label="Contact" />
          </Tabs>
          {/* <Button variant="contained" color="secondary" className={classes.button}> */}
          <Button variant="contained" color="secondary">
            ANOTHER THING
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    {/* <div className={classes.toolbarMargin} /> */}
    </React.Fragment>
  )
}

