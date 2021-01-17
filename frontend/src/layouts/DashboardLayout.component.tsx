import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { DashboardLayoutStyle } from "./DashboardLayout.style";
import { TopBar } from "./components/TopBar/TopBar.component";

interface Props {
  children?: React.ReactNode;
}

const useStyles = makeStyles(DashboardLayoutStyle);

const DashboardLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
