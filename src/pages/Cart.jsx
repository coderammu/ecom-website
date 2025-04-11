import React, { useContext } from "react";
import { ProductContext } from "../App";
import Product from "../component/Product";

export default function Cart() {
  const contextValues = useContext(ProductContext);

  console.log(contextValues);

  const { products } = contextValues;

  const { cart, wishList } = products;
  return (
    <section className="container mx-auto px-5">
      <div className="grid grid-cols-4 grid-rows-3 gap-10">
        {cart.map((product) => (
          <Product product={product} isCart />
        ))}
      </div>
    </section>
  );
}
