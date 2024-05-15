import { FilterOption } from "../interfaces/FilterOption";

export const FILTER_OPTIONS: FilterOption[] = [
  { value: "highToLow", label: "Price High to Low" },
  { value: "lowToHigh", label: "Price Low to High" },
  { value: "sortByRating", label: "Sort by Rating ⭐" },
];


// constants.ts
export const ITEMS_PER_PAGE = 6;
export const INITIAL_PAGE_NUMBER = 1;
