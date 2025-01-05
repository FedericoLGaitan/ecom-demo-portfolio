import { useCart } from "@/hooks/use-cart";
import { ProductType } from "@/types/product";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { formatPrice } from "@/lib/formatPrice";
import {cn} from "@/lib/utils";
import { X } from "lucide-react";

interface CartProductProps { 
    product: ProductType
}

const CartProduct = (props: CartProductProps) => {
    const {product} = props
    const router = useRouter()
    const {removeProduct} = useCart()
    return ( 
        <li className="flex py-6 border-b">
          <div className="cursor-pointer"
           onClick={() => router.push(`/products/${product.slug}`)}>
               <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
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
             </div>
             <div>
                    <button 
                    className={cn("rounded-full flex items-center justify-center bg-slate-50 border shadow-md p-1 hover:scale-110 transition")}
                    onClick={() => removeProduct(product.id)}>
                     <X size={20} />
                    </button>
             </div>
          </div>
        </li>
    )
}

export default CartProduct;