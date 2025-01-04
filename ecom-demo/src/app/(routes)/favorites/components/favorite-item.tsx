"use client"

import { ProductType } from "@/types/product";
import { useFavorites } from "@/hooks/use-favorites";
import { useRouter } from "next/navigation"
import { formatPrice } from "@/lib/formatPrice";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

interface FavoriteItemProps {
  product: ProductType;
}

const FavoriteItem = (props: FavoriteItemProps) => {
  const { product } = props;
  const router = useRouter();
  const { removeFavorite } = useFavorites();
  const {addProduct} = useCart();

const addToCart = () => {
    addProduct(product)
    removeFavorite(product.id)
}

  return (
  <li 
  className=" flex px-6 bborder-bb">FavoriteItem
      <div className="cursor-pointer"
           onClick={() => router.push(`/products/${product.slug}`)}>
               <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${product.images[0].url}`}
                    alt={product.productName}
                    width={100}
                    height={100}
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
                />
          </div>
          <div className="flex justify-between flex-1 px-6">
             <div>
                    <h3 className="text-lg font-semibold">{product.productName}</h3>
                    <p className="text-sm text-gray-500 font-bold">{formatPrice(product.price)}</p>
                    <div className="flex items-center justify-between gap-3">
                        <p className="px-2 py-1 text-slate-50 bg-black 
                        rounded-full dark:bg-slate-50 dark:text-black w-fit">{product.productBrand}</p>
                    </div>
                  <Button className="w-full" onClick={() => addToCart}>Add to cart</Button>
             </div>
             <div>
                    <button 
                    className={cn("rounded-full flex items-center justify-center bg-slate-50 border shadow-md p-1 hover:scale-110 transition")}
                    onClick={() => removeFavorite(product.id)}>
                     <X size={20} />
                    </button>
             </div>
          </div>

  </li>

  )
};

export default FavoriteItem;
