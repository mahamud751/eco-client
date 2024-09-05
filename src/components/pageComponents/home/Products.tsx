"use client";

import ProductCard from "@/components/organisms/Product/ProductCard";

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <ProductCard
        imageUrl1="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-1-1.jpg"
        imageUrl2="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-1-2.jpg"
        productName="Sample Product"
        description="This is a sample product description."
        price="$99.99"
      />
      {/* Add more ProductCard components as needed */}
    </div>
  );
};

export default Products;
