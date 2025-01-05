"use client";

import React from "react";
import { useCart } from "@/hooks/use-cart";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import CartProduct from "./components/cart-products";
import {loadStripe} from "@stripe/stripe-js"
import {makePaymentRequest} from "@/helpers/payment"

const CartPage = () => {
  const { products } = useCart();

  const prices = products.map((product) => product.price);
  const totalPrice = prices.reduce((a, b) => a + b, 0);
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "")

  const buyStripe = async () => {
    try {
      const stripe = await stripePromise
       const res = await makePaymentRequest.post("/api/orders", {
         products: products
       })
       await stripe?.redirectToCheckout({
          sessionId: res.data.stripeSession.id
    })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-5">Shopping Cart</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {products.length == 0 && (
            <div className="flex items-center justify-center h-96">
              <h1 className="text-2xl">No products in cart</h1>
            </div>
          )}
          <ul>
            {products.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-100">
            <p className="text-lg font-semibold mb-3">Orden Summary</p>
            <Separator />
            <div className="flex justify-between gap-5 my-4">
              <p>Order Total</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>
            <div className="flex justify-center gap-5 mt-3 w-full">
              <Button className="w-full" onClick={buyStripe}>
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
