"use client"
import { Heart, ShoppingCart, User } from "lucide-react"
import { useRouter } from "next/navigation"
import MenuList from "./menu-list"

export const Navbar = () => {
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
            <p>items menu mobile</p>
         </div>
         <div className="flex items-center justify-between gap-2 sm:gap-7">
            <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/cart")}/>
            <Heart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/favorites")}/>
            <User strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/dashboard")}/>
         </div>

       </nav>
    )
}