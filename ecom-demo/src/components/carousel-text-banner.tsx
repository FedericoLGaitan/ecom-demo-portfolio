"use client"

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import { Tienne } from "next/font/google";



export const dataCarouselTop = [
    {
      id: 1,
      title: "Exclusive Offer",
      description: "Get up to 50% off on selected tech products!",
      link: "/exclusive-offers",
    },
    {
      id: 2,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders over $50!",
      link: "/free-shipping",
    },
    {
      id: 3,
      title: "Interest-Free Installments",
      description: "Shop now and pay in up to 12 interest-free installments.",
      link: "/interest-free",
    }
  ];

const CarouselTextBanner = () => {
    const router = useRouter()


    return (
        <div className="bg-gray-200 dark:bg-primary">
         <Carousel className="w-ful max-w-4xl mx-auto"
          plugins={[
            Autoplay({
                delay: 2500
            })
          ]}>
            <CarouselContent>
            {dataCarouselTop.map(({id, title, link, description}) => 
            <CarouselItem key={id} onClick={() => router.push(link)}>
                   <div>
                     <Card className="shadow-none border-none bg-transparent" >
                        <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                            <h5 className="sm:text-lg text-wrap dark:text-secondary">{title}</h5>
                            <p className="text-xs sm:text-xs text-wrap dark:text-secondary">{description}</p>
                        </CardContent>
                     </Card>
                   </div>
            </CarouselItem>
            )} 
            </CarouselContent>
         </Carousel>
         </div>
    )
}



export default CarouselTextBanner