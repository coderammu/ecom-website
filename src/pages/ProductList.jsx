import React, { useContext } from "react";
import livingProducts from "../assets/data/living";
import diningProducts from "../assets/data/bedroom";
import bedroomProducts from "../assets/data/dining";
import entertainmentProducts from "../assets/data/entertaintment";
import matressProduct from "../assets/data/matress";
import officeProduct from "../assets/data/office";

import Product from "../component/Product";
import { ProductContext } from "../App";

export default function AllProductList() {
  const productValue = useContext(ProductContext);
  const { products } = productValue;
  const { cart, wishList } = products;
  const wishListIds = wishList.map((item) => item.id);
  const cartListIds = cart.map((item) => item.id);

  const AllProducts = [
    ...livingProducts,
    ...diningProducts,
    ...bedroomProducts,
    ...entertainmentProducts,
    ...matressProduct,
    ...officeProduct,
  ];
  return (
    <article className="container mx-auto px-5">
      <section>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
          {AllProducts.map((item) => {
            const isWl = wishListIds.includes(item.id);
            const isCl = cartListIds.includes(item.id);
            const prp = {};
            if (isWl) {
              prp.isWishList = true;
            }
            if (isCl) {
              prp.goCart = true;
            }
            return <Product product={item} {...prp} />;
          })}
        </div>
      </section>
    </article>
  );
}
