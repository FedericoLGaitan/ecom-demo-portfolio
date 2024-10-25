"use client"
import { useRouter } from "next/navigation"

export const Navbar = () => {
    const router = useRouter()
    return (
       <nav className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
         <div>
            <h1 className="text-3xl" onClick={() => router.push("/")}>Tecno
                <span className="font-bold">STORE</span>
            </h1>
             
         </div>
       </nav>
    )
}