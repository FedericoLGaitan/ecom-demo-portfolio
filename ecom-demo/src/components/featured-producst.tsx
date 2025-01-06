"use client"

import { ResponseType } from "@/types/response"
import { useFeaturedProducts } from "../helpers/useGetFeaturedProducts"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import SkeletonSchema from "./skeleton-schema"
import { ProductType } from "@/types/product"
import { Card, CardContent } from "./ui/card"
import { Expand, ShoppingCart, Heart } from "lucide-react"
import IconButton from "./icon-button"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"

const FeaturedProducts = () => {


   const router = useRouter(); 
   const {result, loading}: ResponseType = useFeaturedProducts()
   const {addProduct} = useCart()
  const {addFavorite} = useFavorites()
        
        return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
             <h3 className="px-6 text-3xl sm:pb-8">Featured Products</h3>
             <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && (
                        <SkeletonSchema grid={3}/>
                    )}
                    {result !== null && (
                        result.map((product: ProductType) => {

                            const {images, id, slug, productName, productBrand} = product
                                
                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className="shadow-none py-4 border border-gray-200">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2">
                                                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`} alt="Featured product"/>
                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                    <div className="flex justify-center gap-x-6">
                                                         <IconButton onClick={() => router.push(`product/${slug}`)} icon={<Expand/>} className="text-gray-600"/>
                                                         <IconButton onClick={() => addProduct(product)} icon={<ShoppingCart/> } className="text-gray-600"/>
                                                         <IconButton onClick={() => addFavorite(product)} icon={<Heart/>} className="text-gray-600"/>
                                                    </div>
                                                </div>
                                            </CardContent>
                                              <div className="flex justify-between gap-4 px-8">
                                                <h3 className="text-lg font-bold">{productName}</h3>
                                                <div className="flex items-center justify-between gap-3">
                                                <p>{productBrand}</p>
                                                </div>
                                              </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })     
                    )
                    }

                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext className="hidden sm:flex"/>
             </Carousel>
        </div>
    )
}



export default FeaturedProducts