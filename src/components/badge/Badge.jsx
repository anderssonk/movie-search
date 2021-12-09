// Project files
import Styles from './Badge.module.scss';

export default function Badge({ setShowBadge }) {
  return (
    <div className={Styles.badge}>
      <p>This is a solar powered website</p>
      <button onClick={() => setShowBadge(false)}>Close</button>
    </div>
  );
}
