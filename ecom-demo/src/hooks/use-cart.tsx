import { ProductType } from "@/types/product"
import {create} from "zustand" 
import {persist, createJSONStorage} from "zustand/middleware"
import { toast } from "./use-toast"

interface ICartStore {
    products: ProductType[];
    addProduct: (product: ProductType) => void;
    removeProduct: (productId: string) => void;
    removeAllProducts: () => void;
}

export const useCart =  create(persist<ICartStore>((get, set) =>({
    products: [],
    addProduct: (product: ProductType) => {
        const currentProducts = get().products
        const exisingProduct = currentProducts.find((p) => p.id === product.id)

        if(exisingProduct){
            return toast({
                title: "Product already in cart",
                description: "You can increase the quantity in the cart",
            })
        }

        set({
            products: [...currentProducts, product]
        })
        toast({
            title: "Product added to cart",
            description: "You can increase the quantity in the cart",
        })
    },
    removeProduct: (productId: string) => {
        const currentProducts = get().products
        const newProducts = currentProducts.filter((p) => p.id !== productId)
        set({
            products: newProducts
        })
        toast({
            title: "Product removed from cart",
            description: "You can increase the quantity in the cart",
        })
    },
    removeAllProducts: () => {
        set({
            products: []
        })
        toast({
            title: "All products removed from cart",
            description: "You can increase the quantity in the cart",
        })
    }
}), {
    name: "cart-storage", // unique name
    storage: createJSONStorage(() => localStorage) // storage provider
}
))
 