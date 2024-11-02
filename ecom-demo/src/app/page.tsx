import BannerDescount from "@/components/banner-descount";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-producst";



export default function Home() {
  return (
   <main>
        <CarouselTextBanner/>
        <FeaturedProducts/>
        <BannerDescount/>
        <ChooseCategory/>
   </main>
  );
}
