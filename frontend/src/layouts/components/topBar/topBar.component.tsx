import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";

import { TopBarStyle } from "./topBar.style";

const useStyles = makeStyles(TopBarStyle);

export const TopBar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolBar}>
        <AllInclusiveIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Microservices Test
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
