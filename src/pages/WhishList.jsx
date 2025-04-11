import React, { useContext } from "react";
import { ProductContext } from "../App";
import Product from "../component/Product";

export default function WhishList() {
  const contextValue = useContext(ProductContext);
  const { products } = contextValue;
  const { cart, wishList } = products;
  return (
    <section className="container mx-auto px-5">
      <div className="grid grid-cols-4 grid-rows-3 gap-10">
        {wishList.map((product) => (
          <Product product={product} isWishList />
        ))}
      </div>
    </section>
  );
}
