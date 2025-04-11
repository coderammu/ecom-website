import React, { useContext } from "react";
import matressProducts from "../assets/data/matress";
import matress from "../assets/images/matress/ICO_Lifestyle_4-(1).webp";
import Product from "../component/Product";
import { ProductContext } from "../App";

export default function Matress() {
  const productValue = useContext(ProductContext);
  const { products } = productValue;
  const { cart, wishList } = products;
  const wishListIds = wishList.map((item) => item.id);
  const CartListIds = cart.map((item) => item.id);

  return (
    <article className="container mx-auto px-5">
      <section className="mb-10">
        <img
          src={matress}
          alt="livingRoomFurniture"
          className="w-full h-auto"
        />
      </section>
      <section>
        <div className="grid lg:grid-cols-4 grid-col-1 gap-10">
          {matressProducts.map((item) => {
            const isWl = wishListIds.includes(item.id);
            const isCl = CartListIds.includes(item.id);
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
