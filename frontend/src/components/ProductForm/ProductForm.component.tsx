import React, { SyntheticEvent } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { ProductFormStyle } from "./ProductForm.style";

interface Props {
  title: string;
  image: string;
  titleText: string;
  buttonText: string;
  avatar: React.ReactNode;
  handleSubmit: (e: SyntheticEvent) => void;
  handleTitleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles(ProductFormStyle);

export const ProductForm: React.FC<Props> = ({
  title,
  image,
  titleText,
  buttonText,
  avatar,
  handleSubmit,
  handleTitleOnChange,
  handleImageOnChange,
}) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      {console.log("form")}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{avatar}</Avatar>
        <Typography component="h1" variant="h5">
          {titleText}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="title"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
                onChange={handleTitleOnChange}
                value={title}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="image"
                name="image"
                variant="outlined"
                required
                fullWidth
                id="image"
                label="Image"
                onChange={handleImageOnChange}
                value={image}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {buttonText}
          </Button>
        </form>
      </div>
    </Container>
  );
};
