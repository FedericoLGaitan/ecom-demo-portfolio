"use client";

import { GetCategoryProducts } from "@/api/useGetCategoryProducts";
import { Separator } from "@/components/ui/separator";
import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";

export default function page() {
  const router = useRouter()
  const params = useParams();
  const { slug } = params;
  const { result, error, loading }: ResponseType = GetCategoryProducts(slug);

  return (
    <section className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        <h1 className="text-3xl font-medium uppercase">{slug}s</h1>
        <Separator/>
      {!loading &&
        result.map((product: ProductType) => {
          return 
          <div>
        

          </div>
        })}
    </section>
  );
}
