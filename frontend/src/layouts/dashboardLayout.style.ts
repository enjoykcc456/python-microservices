import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles";

export const DashboardLayoutStyle = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100%",
      width: "100%",
    },
    container: {
      display: "flex",
      marginTop: "100px",
      flex: "1 1 auto",
    },
  });
