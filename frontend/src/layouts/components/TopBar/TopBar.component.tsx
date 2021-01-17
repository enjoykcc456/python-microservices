import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import { Link } from "react-router-dom";

import { TopBarStyle } from "./TopBar.style";

const useStyles = makeStyles(TopBarStyle);

export const TopBar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolBar}>
        <AllInclusiveIcon className={classes.icon} />
        <Typography
          component={Link}
          to={"/"}
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Microservices Test
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
