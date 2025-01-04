"use client"
import { Heart, ShoppingCart, User, BaggageClaim } from "lucide-react"
import { useRouter } from "next/navigation"
import MenuList from "./menu-list"
import MenuMobile from "./items-menu-mobile"
import { ModeToggle } from "./theme-toggle"
import {useCart} from "@/hooks/use-cart"
import {useFavorites} from "@/hooks/use-favorites"

export const Navbar = () => {
   const {products} = useCart()
   const {favorites} = useFavorites()
    const router = useRouter()
    return (
       <nav className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
         <div>
            <h1 className="text-3xl" onClick={() => router.push("/")}>Tecno
                <span className="font-bold">STORE</span>
            </h1>
         </div>
         <div className="items-center justify-between hidden sm:flex">
             <MenuList/>
         </div>
         <div className="flex sm:hidden">
            <MenuMobile/>
         </div>
         <div className="flex items-center justify-between gap-2 sm:gap-7">
            {products.length < 0 ?  <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/cart")}/> 
              : 
              <div className="flex gap-1" onClick={() => router.push("/cart")}>
                 <BaggageClaim strokeWidth="1" className="cursor-pointer"/>
                 <span>{products.length}</span>
              </div> }   

            <Heart strokeWidth="1" className={`cursor-pointer ${favorites.length > 0 && "fill-black dark:fill-white"}`}
             onClick={() => router.push("/favorites")}/>

            <User strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/dashboard")}/>
          <ModeToggle/>
         </div>
       </nav>
    )
}