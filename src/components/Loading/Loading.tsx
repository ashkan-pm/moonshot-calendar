import styles from "./Loading.module.scss";
import { ReactComponent as LoadingSpinner } from "assets/loading.svg";

type Props = { isLoading: boolean };
function Loading({ isLoading }: Props) {
  return isLoading ? (
    <div className={styles.Loading}>
      <LoadingSpinner />
    </div>
  ) : null;
}

export default Loading;
