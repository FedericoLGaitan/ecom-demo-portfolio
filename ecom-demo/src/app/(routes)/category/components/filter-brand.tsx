import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useGetProductsFields } from "@/helpers/useGetProductsFields";
import { FilterTypes } from "@/types/filters";
import React from "react";
type setFilterBrandProps = {
  setFilterBrand: (value: string) => void;
};

const FilterBrand = (props: setFilterBrandProps) => {
  const { setFilterBrand } = props;
  const { result, loading }: FilterTypes = useGetProductsFields();
  console.log(result);
  return (
    <div className="my-5 p-6">
      <p className="text-lg font-semibold">Brand</p>
      {loading && result !== null && <p>Loading brand...</p>}
       <RadioGroup onValueChange={(value) => setFilterBrand(value)}>
         {result !== null && result.schema.attributes.productBrand.enum.map((brand: any) => (
           <div key={brand} className="flex items-center space-x-2">
            <RadioGroupItem id={brand} value={brand} />
              <Label htmlFor="brand">{brand}</Label>
            </div>
         ))}
       </RadioGroup>
    </div>
  );
};

export default FilterBrand;
