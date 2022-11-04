import { ChangeEvent } from "react";
import { useFilterState } from "contexts/FilterStateContext";
import styles from "./Filters.module.scss";

function Filters() {
  const [filters, setFilters] = useFilterState();

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, startDate: new Date(e.target.value) });
  };
  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, endDate: new Date(e.target.value) });
  };
  const handleOnlySuccessfulChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, onlySuccessful: e.target.checked });
  };

  return (
    <section className={styles.Filters}>
      <h1>Filters</h1>
      <form>
        <div>
          <label htmlFor="start-date">Start Date</label>
          <input
            type="date"
            id="start-date"
            value={filters.startDate.toISOString().split("T")[0]}
            onChange={handleStartDateChange}
          />
        </div>
        <div>
          <label htmlFor="end-date">End Date</label>
          <input
            type="date"
            id="end-date"
            value={filters.endDate.toISOString().split("T")[0]}
            onChange={handleEndDateChange}
          />
        </div>
        <div>
          <label htmlFor="only-successful">Only Successful</label>
          <input
            type="checkbox"
            id="only-successful"
            checked={filters.onlySuccessful}
            onChange={handleOnlySuccessfulChange}
          />
        </div>
      </form>
    </section>
  );
}
export default Filters;
