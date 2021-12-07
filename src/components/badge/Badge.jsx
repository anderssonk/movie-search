// Project files
import { ReactComponent as TimesIcon } from './times-solid.svg';
import Styles from './Badge.module.scss';

export default function Badge({ setShowBadge }) {
  return (
    <div className={Styles.badge}>
      <small>This is a solar powered website. It may be slower than other sites.</small>
      <button onClick={() => setShowBadge(false)}>
        <TimesIcon />
      </button>
    </div>
  );
}
