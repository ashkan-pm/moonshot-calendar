import styles from "./Error.module.scss";

type Props = { isError: boolean };
function Loading({ isError }: Props) {
  return isError ? (
    <div className={styles.Loading}>
      <div>
        <h2>There seems to have been an error connceting to the API</h2>
      </div>
    </div>
  ) : null;
}

export default Loading;
