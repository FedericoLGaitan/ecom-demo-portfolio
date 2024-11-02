"use client"
import { useGetCategories } from "@/api/useGetCategories";
import Link from "next/link";

const ChooseCategory = () => {

const {result, error, loading} = useGetCategories()
 
console.log(result)
  return (
    <div>choose-category</div>
  )
}

export default ChooseCategory;