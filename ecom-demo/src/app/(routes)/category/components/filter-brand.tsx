
import { useGetProductsFields } from '@/helpers/useGetProductsFields'
import React from 'react'

const FilterBrand = () => {
  const {result, error, loading} = useGetProductsFields()
  return (
    <div>filterBrand</div>
  )
}

export default FilterBrand