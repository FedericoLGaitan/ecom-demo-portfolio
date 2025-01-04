
import { ProductType } from "@/types/product"
import {create} from "zustand" 
import {persist, createJSONStorage} from "zustand/middleware"
import { toast } from "./use-toast"

interface IFavorites {
    favorites: ProductType[];
    addFavorite: (product: ProductType) => void;
    removeFavorite: (productId: string) => void;
}

export const useFavorites = create(
    persist<IFavorites>(
        (set, get) => ({
            favorites: [],
            addFavorite: (product: ProductType) => {
                const currentProducts = get().favorites;
                const existingProduct = currentProducts.find((p) => p.id === product.id);

        if(existingProduct) {
            return toast({
                title: "Product already in favorites",
            })
        }

        set({
            favorites: [...currentProducts, product]
        })
        toast({
            title: "Product added to favorites",
        })
    },
    removeFavorite: (productId: string) => {
        const currentProducts = get().favorites
        const newProducts = currentProducts.filter((p) => p.id !== productId)
        set({
            favorites: newProducts
        })
        toast({
            title: "Product removed from favorites",
        })
    },
}), {
    name: "cart-storage", // unique name
    storage: createJSONStorage(() => localStorage) // storage provider
}
))
 