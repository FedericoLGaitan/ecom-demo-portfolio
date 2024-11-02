"use client"

import { ResponseType } from "@/types/response"
import { useFeaturedProducts } from "../api/useGetFeaturedProducts"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import SkeletonSchema from "./skeleton-schema"
import { ProductType } from "@/types/product"
import { Card, CardContent } from "./ui/card"

const FeaturedProducts = () => {
    
   const {result, loading, error}: ResponseType = useFeaturedProducts()
        
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

                            const {images, id} = product
                                
                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className="shadow-none py-4 border border-gray-200">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2">
                                                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`} alt="Featured product"/>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    )
                    }

                </CarouselContent>
             </Carousel>
        </div>
    )
}



export default FeaturedProducts