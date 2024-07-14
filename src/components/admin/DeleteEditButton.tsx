"use client";
import axios from "axios";

import React from "react";

const DeleteEditButton = ({ productId, token }: any) => {
  const handleEditProduct = async (id: any) => {
    // const response = await axios.put();
  };
  const handleDeleteProduct = async (id: any) => {
    try {
      if (!token) {
        throw new Error("Access token not found in cookies");
      }

      const response = await axios.delete(
        `http://localhost:3000/api/v1/products/${id}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjkyNGZiZWU0NDcxZjY4OTdlMWQ3MTciLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjA5NDMyNjEsImV4cCI6MTcyMTAyOTY2MX0.eqc9svnv55R6E94MSWSzszSmNiy4DY1cN7AO9Wp6N-U`, // Include your Bearer token here
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        className="font-medium text-white dark:text-blue-500 hover:underline bg-blue-500 rounded-lg p-2"
        onClick={() => {
          handleEditProduct(productId);
        }}
      >
        Edit
      </button>
      <button
        className="font-medium text-white bg-red-600 dark:text-red-500 hover:underline rounded-lg p-2"
        onClick={() => {
          handleDeleteProduct(productId);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteEditButton;
