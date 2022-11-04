import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type FilterState = { startDate: Date; endDate: Date };
const FilterStateContext = createContext<
  [FilterState, Dispatch<SetStateAction<FilterState>>] | null
>(null);
FilterStateContext.displayName = "FilterStateContext";

type Props = { children: React.ReactNode };
export function FilterStateProvider({ children }: Props) {
  const today = new Date();
  const threeMonthsFromToday = new Date();
  threeMonthsFromToday.setMonth(threeMonthsFromToday.getMonth() + 3);

  const filterState = useState<FilterState>({
    startDate: today,
    endDate: threeMonthsFromToday,
  });

  return (
    <FilterStateContext.Provider value={filterState}>
      {children}
    </FilterStateContext.Provider>
  );
}

export function useFilterState() {
  const context = useContext(FilterStateContext);
  if (!context) {
    throw new Error("useFilterState must be within FilterStateProvider");
  }
  return context;
}
