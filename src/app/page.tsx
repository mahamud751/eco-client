import ProductPage from "@/components/pageComponents/home/Products";
import Navbar from "@/components/templates/shared/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <ProductPage />
    </div>
  );
};

export default page;
