import React, { useEffect, useState } from "react";
import TableContainer from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

import { ProductEdit } from "./ProductEdit.component";

import {
  ProductsStyle,
  StyledTableCell,
  StyledTableRow,
} from "./Products.style";

export interface Product {
  id: number;
  title: string;
  image: string;
  likes: number;
}

const useStyles = makeStyles(ProductsStyle);

export const Products = () => {
  const classes = useStyles();
  const [products, setProducts] = useState<Product[]>([]);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [productId, setProductId] = useState<number | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      await fetch("http://localhost:8000/api/products")
        .then((response) => response.json())
        .then((data: Product[]) => {
          setProducts(data);
        });
    };
    getProducts();
  }, []);

  const handleDeleteProduct = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await fetch(`http://localhost:8000/api/products/${id}`, {
        method: "DELETE",
      });

      setProducts(products.filter((p: Product) => p.id !== id));
    }
  };

  const handleEditProduct = (id: number) => {
    setOpenEditForm(true);
    setProductId(id);
  };

  const handleCloseEditProduct = () => {
    setOpenEditForm(false);
    setProductId(null);
  };

  return (
    <>
      {openEditForm && (
        <ProductEdit
          productId={productId}
          handleOnClose={handleCloseEditProduct}
        />
      )}

      <Container maxWidth="lg">
        <Button
          component={Link}
          variant="outlined"
          color="primary"
          className={classes.addButton}
          to={"/admin/products/create"}
        >
          Add Product
        </Button>
        <TableContainer
          component={Paper}
          classes={{ root: classes.tableContainer }}
        >
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align="center">Image</StyledTableCell>
                <StyledTableCell align="center">Title</StyledTableCell>
                <StyledTableCell align="center">Likes</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product: Product, idx) => (
                <StyledTableRow key={product.id}>
                  <StyledTableCell component="th" scope="row">
                    {idx + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <img src={product.image} height="100" alt="Not available" />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {product.title}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {product.likes}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton onClick={() => handleEditProduct(product.id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteProduct(product.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};
