import React, { SyntheticEvent, useState } from "react";
import PostAddIcon from "@material-ui/icons/PostAdd";

import { Redirect } from "react-router-dom";
import { ProductForm } from "../../components/ProductForm/ProductForm.component";

export const ProductCreate = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/products/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        image,
      }),
    });

    if (response.status === 201) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Redirect to={"/admin/products"} />;
  }

  return (
    <ProductForm
      title={title}
      image={image}
      titleText={"Add Product"}
      buttonText={"Add Product"}
      avatar={<PostAddIcon />}
      handleSubmit={handleSubmit}
      handleTitleOnChange={(e) => setTitle(e.target.value)}
      handleImageOnChange={(e) => setImage(e.target.value)}
    />
  );
};
