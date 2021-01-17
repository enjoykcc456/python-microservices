import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { MainStyle } from "./Main.style";
import { Product } from "../admin/Products.component";
import { ProductCard } from "../../components/ProductCard/ProductCard.component";

const useStyles = makeStyles(MainStyle);

export const Main = () => {
  const classes = useStyles();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      await fetch("http://localhost:8001/api/products")
        .then((response) => response.json())
        .then((data: Product[]) => {
          setProducts(data);
          console.log(data);
        });
    };
    getProducts();
  }, []);

  const handleLike = async (id: number) => {
    const response = await fetch(
      `http://localhost:8001/api/products/${id}/like`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status !== 400) {
      setProducts(
        products.map((p: Product) => {
          if (p.id === id) {
            p.likes++;
          }
          return p;
        })
      );
    }
  };

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {products.map((product: Product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} handleLikeClick={handleLike} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
