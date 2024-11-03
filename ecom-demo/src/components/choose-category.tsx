"use client";
import { useGetCategories } from "@/api/useGetCategories";
import { Category } from "@/types/category";
import { ResponseType } from "@/types/response";
import Link from "next/link";

const ChooseCategory = () => {
  const { result, loading }: ResponseType = useGetCategories();

  return (
    <section className="m-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8 "> Choose Category</h3>
      <div className="grid gap-5 sm:grid-cols-3">
        {!loading &&
          result !== null &&
          result.map((category: Category) => {
            return (
              <Link
                key={category.id}
                href={`category/${category.slug}`}
                className="relative max-w-xs overflow-hidden bg-no-repeat bg-cover rounded-lg "
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${category.mainImage?.url}`}
                  className="max-w-[270px] transition duration-300 ease-in-out hover:scale-110"
                />
                <p className="absolute w-full py-2 text-lg font-bold text-white text-center bottom-5 backdrop-blur-lg">{category.categoryName}</p>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default ChooseCategory;
