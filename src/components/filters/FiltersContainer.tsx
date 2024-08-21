"use client";

import React, { ChangeEvent, useState } from "react";
import DropDown from "@/components/elements/input/DropDown";
import FilterType from "@/enums/FilterType";
import SortType from "@/enums/SortType";
import InputField from "@/components/elements/input/InputField";
import ButtonMain from "@/components/elements/buttons/ButtonMain";
import { useRouter } from "next/navigation";
import Filters from "@/types/Filters.type";

interface Props {
  route: string;
  sortPriceParam: SortType;
  sortNameParam: SortType;
  minPriceParam: number;
  maxPriceParam: number;
}

const FiltersContainer: React.FC<Props> = ({
  route,
  sortPriceParam,
  sortNameParam,
  minPriceParam,
  maxPriceParam,
}) => {
  const router = useRouter();

  const [sortPrice, setSortPrice] = useState<SortType>(sortPriceParam);
  const [sortName, setSortName] = useState<SortType>(sortNameParam);
  const [minPrice, setMinPrice] = useState<number>(minPriceParam);
  const [maxPrice, setMaxPrice] = useState<number>(maxPriceParam);

  const onApply = () => {
    const filters: Partial<Filters> = {};

    if (sortPrice && sortPrice !== SortType.ANY) {
      filters.sortPrice = sortPrice;
    }

    if (sortName && sortName !== SortType.ANY) {
      filters.sortName = sortName;
    }

    if (minPrice >= 0) {
      filters.minPrice = minPrice.toString();
    }

    if (maxPrice) {
      filters.maxPrice = maxPrice.toString();
    }

    // Convert the filters object to a query string
    const query = new URLSearchParams(
      filters as Record<string, string>,
    ).toString();

    // Push the new URL with query parameters
    router.replace(`?${query}`);
  };

  return (
    <div className="flex flex-col w-full mb-12 items-center">
      <div
        className={"flex flex-col md:flex-row w-full gap-4 items-start mb-4"}
      >
        <div className="flex flex-1 w-full gap-4 flex-row">
          <DropDown
            title={"Sort by Price"}
            htmlFor={FilterType.PRICE}
            options={[SortType.ANY, SortType.ASC, SortType.DESC]}
            selected={sortPrice}
            onChange={(value) => {
              setSortPrice(value);
              setSortName(SortType.ANY);
            }}
          />
          <DropDown
            title={"Sort by Name"}
            htmlFor={FilterType.NAME}
            options={[SortType.ANY, SortType.ASC, SortType.DESC]}
            selected={sortName}
            onChange={(value) => {
              setSortName(value);
              setSortPrice(SortType.ANY);
            }}
          />
        </div>

        <div className="flex flex-1 gap-4 flex-row">
          <InputField
            title={"Min Price"}
            htmlFor={FilterType.PRICE_MIN}
            type={"number"}
            min={0}
            value={minPrice}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setMinPrice(parseInt(event.target.value))
            }
          />
          <InputField
            title={"Max Price"}
            htmlFor={FilterType.PRICE_MAX}
            type={"number"}
            min={0}
            value={maxPrice}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setMaxPrice(parseInt(event.target.value))
            }
          />
        </div>
      </div>
      <ButtonMain title={"Apply Filters"} onClick={onApply} />
    </div>
  );
};

export default FiltersContainer;
