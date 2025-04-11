import React, { useContext } from "react";
import diningProducts from "../assets/data/dining";
import DinningsRoom from "../assets/images/dining/hero.avif";
import Product from "../component/Product";
import { ProductContext } from "../App";

export default function DiningRoom() {
  const productValue = useContext(ProductContext);
  const { products } = productValue;
  const { cart, wishList } = products;

  const wishListIds = wishList.map((item) => item.id);
  const cartListIds = cart.map((item) => item.id);
  return (
    <article className="container mx-auto px-5">
      <section className="mb-10">
        <img
          src={DinningsRoom}
          alt="livingRoomFurniture"
          className="w-full h-auto"
        />
      </section>
      <section>
        <div className="grid lg:grid-cols-4 grid-col-1 gap-10">
          {diningProducts.map((item) => {
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
