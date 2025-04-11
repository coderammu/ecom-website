import React, { useContext } from "react";
import { ProductContext } from "../App";
import Product from "../component/Product";
import Swal from "sweetalert2";

export default function Cart() {
  const contextValues = useContext(ProductContext);

  console.log(contextValues);

  const { products, setProducts } = contextValues;

  const { cart, wishList } = products;
  const productTotalAmount = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const handleClick = () => {
    Swal.fire({
      title: "Good job!",
      text: "Your order has been placed!",
      icon: "success",
    }).then(() => {
      setProducts({ wishList, cart: [] });
    });
  };

  return (
    <section className="container mx-auto px-5 flex">
      <div
        className="grid lg:grid-cols-3 grid-col-1
       gap-10 w-2/3"
      >
        {cart.map((product) => (
          <Product product={product} isCart />
        ))}
      </div>
      <div className="w-1/3 bg-neutral-100 flex flex-col  h-100 px-7 gap-2 ml-10">
        <h2 className="font-bold text-xl text-center p-3">summary</h2>
        <h5 className="">
          Subtotal <span className="ml-50">{productTotalAmount}</span>
        </h5>
        <h5>
          Shipping Discount<span className="ml-50">00.00</span>
        </h5>
        <h5>
          Shipping & Handling<span className="ml-50">100</span>
        </h5>
        <h5 className="mb-2">
          Tax<span className="ml-60">100</span>
        </h5>
        <hr />
        <h3 className="font-bold text-xl mt-4">
          Balance<span className="ml-50">{productTotalAmount + 200}</span>
        </h3>
        {cart.length > 0 && (
          <button
            className="bg-black text-white py-2 mt-4"
            onClick={handleClick}
          >
            Checkout
          </button>
        )}
      </div>
    </section>
  );
}
