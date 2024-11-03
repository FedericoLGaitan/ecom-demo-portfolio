"use client";

import { GetCategoryProducts } from "@/api/useGetCategoryProducts";
import { Separator } from "@/components/ui/separator";
import {ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import FiltersOfCategory from "../components/filtered-of-category";

export default function page() {
  const router = useRouter()
  const params = useParams();
  const { slug } = params;
  const { result, loading }: ResponseType = GetCategoryProducts(slug);

  return (
    <section className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      { result !== null && !loading && 
       <h1 className="text-3xl font-medium uppercase" >{result[0].category.categoryName}</h1>
       }
        <Separator/>

        <div className="sm:flex sm:justify-between">
            <FiltersOfCategory/>
        </div>
    </section>
  );
}
