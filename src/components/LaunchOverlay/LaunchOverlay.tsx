import { Launch } from "api/launches";
import styles from "./LaunchOverlay.module.scss";

type Props = {
  launch: Launch;
  onClose: () => void;
};
function LaunchOverlay({ launch, onClose }: Props) {
  return (
    <div className={styles.LaunchOverlay}>
      <h3>Name: {launch.name}</h3>
      <p>Time of launch: {launch.window_start}</p>
      <p>Pad name: {launch.pad.name}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default LaunchOverlay;
