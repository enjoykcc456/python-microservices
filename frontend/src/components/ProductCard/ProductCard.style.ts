import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const ProductCardStyle = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    likes: {
      marginRight: "10px",
    },
  });
