import SortType from "@/enums/SortType";

interface Filters extends Record<string, string | undefined> {
  sortPrice?: SortType;
  sortName?: SortType;
  minPrice?: string;
  maxPrice?: string;
}

export default Filters;
