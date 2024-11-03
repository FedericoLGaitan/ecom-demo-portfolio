import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"



export const BannerProduct = () => {
  return (
    <> 
    <section className="mt-4 text-center">
       <p>Buy with confidence</p>
       <h4 className="text-5xl mt-2 font-extrabold uppercase">All the tech in one place</h4>
       <Link href="#" className={cn(buttonVariants(), "mt-2")}>Buy Now</Link>
    </section>
    <div className="h-[400px] lg:h-[700px] bg-[url('https://i.pinimg.com/1200x/32/1b/37/321b37cebd6339c47b8606a4c1dc6ab1.jpg')] bg-center bg-no-repeat bg-cover mt-5">
    </div>
    </>
  )
}
