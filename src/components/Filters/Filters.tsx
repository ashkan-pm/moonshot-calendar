import styles from './Filters.module.scss'

function Filters() {
  return (
    <section className={styles.Filters}>
      <h1>Filters</h1>
      <form>
        <div>
          <label htmlFor="start-date">Start Date</label>
          <input type="date" id="start-date" />
        </div>
        <div>
          <label htmlFor="end-date">End Date</label>
          <input type="date" id="end-date" />
        </div>
      </form>
    </section>
  );
}
export default Filters;
