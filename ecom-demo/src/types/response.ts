import { productFilters } from "./prodcutFilters"
import { ProductType } from "./product"

export type ResponseType = {
    result: ProductType[] | any,
    loading: boolean,
    error: string
}

export type ResponseFiltersType = {
    result: productFilters | null,
    loading: boolean,
    error: string
}