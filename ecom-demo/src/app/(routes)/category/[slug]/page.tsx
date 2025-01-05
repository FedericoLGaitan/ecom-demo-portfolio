"use client";

import { GetCategoryProducts } from "@/helpers/useGetCategoryProducts";
import { Separator } from "@/components/ui/separator";
import {ResponseType } from "@/types/response";
import { useParams} from "next/navigation";
import FiltersOfCategory from "../components/filtered-of-category";
import SkeletonSchema from "@/components/skeleton-schema";
import ProductCard from "../components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";

export default function page() {
  const [filerBrand, setFilterBrand] = useState<string | null>(null)
  const params = useParams();
  const { slug } = params;
  const { result, loading }: ResponseType = GetCategoryProducts(slug);
  
  const filteredProducts = result !== null && !loading && (
       filerBrand == null ? result : result.filter((product: ProductType) => product.productBrand === filerBrand)
  )

  return (
    <section className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      { result !== null && !loading && 
       <h1 className="text-3xl font-medium uppercase" >{result[0].category.categoryName}</h1>
       }
        <Separator/>
        

        <div className="sm:flex sm:justify-between">
            <FiltersOfCategory setFilterBrand={setFilterBrand} />

          <div className="grid gap-5 mt-8 md:grid-cols-3 md:gap-10">
              {loading && (
                <SkeletonSchema grid={3}/>
              )}
              {filteredProducts !== null && !loading && (
                filteredProducts.map((result: ProductType) => (
                <ProductCard key={result.id} product={result}/>
                )
              )
              )}
              {filteredProducts !== null && filteredProducts.length === 0 && (
                <p>No products found</p>
              )}
          </div>
        </div>
    </section>
  );
}
