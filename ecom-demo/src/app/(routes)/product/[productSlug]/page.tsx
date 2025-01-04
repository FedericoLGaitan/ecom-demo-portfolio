"use client";

import { useParams } from "next/navigation";
import { useGetProductBySlug } from "@/helpers/useGetProductBySlug";
import { ResponseType } from "@/types/response";
import SkeletonProduct from "./components/skeleton-product";
import CarrouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";

const productPage = () => {
  const params = useParams();
  const { productSlug } = params;
  if (typeof productSlug !== "string") {
    return <SkeletonProduct />;
  }
  const { result }: ResponseType = useGetProductBySlug(productSlug);
  console.log(result);

  if (result === null) {
    return <SkeletonProduct />;
  }

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
      <div className="grid sm:grid-cols-2">
        <div className="sm:py-12">
          <CarrouselProduct images={result[0].images} />
        </div>
        <div>
          <InfoProduct product={result[0]} />
        </div>
      </div>
    </div>
  );
};

export default productPage;
