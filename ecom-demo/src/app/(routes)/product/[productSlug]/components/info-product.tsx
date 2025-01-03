import ProductType from "@/types/product";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import { formatPrice } from "@/lib/formatPrice";
import { Heart } from "lucide-react";

export type InfoProductProps = {
  product: ProductType;
};
const InfoProduct = (props: InfoProductProps) => {
  const { product } = props;
  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl">{product.productName}</h1>
        <div className="flex items-center justify-between gap-3">
          <p
            className="px-2 py-1 text-xs text-white bg-black 
              rounded-full dark:bg-white dark:text-back w-fit"
          >
            {product.productBrand}
          </p>
          <p
            className="px-2 py-1 text-xs bg-blue-400 rounded-full w-fit
              text-white"
          >
            {product.productStatus}
          </p>
        </div>
      </div>
      <Separator className="my-4"/>
      <p>{product.description}</p>
      <Separator className="my-4"/>
    <p className="my-4 text-2xl">{formatPrice(product.price)}</p>
       <div className="flex items-center gap-5">
         <Button className="w-full" onClick={()=> console.log("comprar")}>Comprar</Button>
         <Heart width={30} strokeWidth={1} className="transition duration-300 cursor-pointer hover:fill-black" 
         onClick={()=> console.log("add to favorites")}/>
        </div>
    </div>
  );
};

export default InfoProduct;
