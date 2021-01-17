import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles";

export const TopBarStyle = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100%",
      width: "100%",
    },
    toolBar: {
      justifyContent: "center",
    },
    icon: {
      marginRight: "10px",
    },
    title: {
      textDecoration: "none",
    },
  });
