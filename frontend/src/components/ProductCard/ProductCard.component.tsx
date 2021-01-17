import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Box from "@material-ui/core/Box";

import { ProductCardStyle } from "./ProductCard.style";
import { Product } from "../../pages/admin/Products.component";

interface Props {
  product: Product;
  handleLikeClick: (id: number) => void;
}

const useStyles = makeStyles(ProductCardStyle);

export const ProductCard: React.FC<Props> = ({ product, handleLikeClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          {product.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={(e) => handleLikeClick(product.id)}
        >
          <FavoriteIcon color="secondary" />
        </IconButton>
        <Box flexGrow={1} />
        <Typography
          variant="body2"
          color="textPrimary"
          component="p"
          className={classes.likes}
        >
          {product.likes} likes
        </Typography>
      </CardActions>
    </Card>
  );
};
