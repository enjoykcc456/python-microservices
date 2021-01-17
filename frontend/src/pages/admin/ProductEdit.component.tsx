import React, { SyntheticEvent, useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import EditIcon from "@material-ui/icons/Edit";

import { Redirect } from "react-router-dom";

import { Product } from "./Products.component";
import { ProductForm } from "../../components/ProductForm/ProductForm.component";

interface Props {
  productId: number | null;
  handleOnClose: () => void;
}

export const ProductEdit: React.FC<Props> = ({ productId, handleOnClose }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `http://localhost:8000/api/products/${productId}`
      );
      const product: Product = await response.json();
      setTitle(product.title);
      setImage(product.image);
    };

    if (productId) getProduct();
  }, [productId]);

  const handleSubmit = async (e: SyntheticEvent) => {
    const response = await fetch(
      `http://localhost:8000/api/products/${productId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          image,
        }),
      }
    );

    if (response.status === 202) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Redirect to={"/admin/products"} />;
  }

  return (
    <Dialog open={true} onClose={handleOnClose}>
      <ProductForm
        title={title}
        image={image}
        titleText={"Edit Product"}
        buttonText={"Edit Product"}
        avatar={<EditIcon />}
        handleSubmit={handleSubmit}
        handleTitleOnChange={(e) => setTitle(e.target.value)}
        handleImageOnChange={(e) => setImage(e.target.value)}
      />
    </Dialog>
  );
};
