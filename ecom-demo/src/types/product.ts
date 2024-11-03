import { Category } from "./category"

export type ProductType = {
    id: string,
    productName: string,
    slug: string,
    description: string,
     price: number,
    productStatus: string,
    productBrand: string,
    isFeatured: boolean,
    images: 
      {
        id: number,
        url: string,
      }[]
    category: Category 
  }
