import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

interface CarouselProductProps {
  images: { id: number; url: string }[];
}

const CariouselProduct = (props: CarouselProductProps) => {
  const { images } = props;
  return (
  <div className="sm:px-16">
    <Carousel>
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
              alt="product image"
              width={500}
              height={500}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
  )
};

export default CariouselProduct;
