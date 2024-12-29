import React from "react";
import FilterBrand from "./filter-brand";
type FiltersOfCategoryProps = {
  setFilterBrand: (value: string) => void;
};

export const FiltersOfCategory = (props: FiltersOfCategoryProps) => {
  const { setFilterBrand } = props;
  return (
    <div className="sm:w-[350px] sm:mt-5">
      <FilterBrand setFilterBrand={setFilterBrand}/>
    </div>
  );
};

export default FiltersOfCategory;
