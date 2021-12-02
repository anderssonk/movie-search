import Styles from './Badge.module.scss';

const Badge = ({ setShowBadge }) => {
  return (
    <div className={Styles.badge}>
      <p>This is a solar powered website</p>
      <button onClick={() => setShowBadge(false)}>Close</button>
    </div>
  );
};

export default Badge;
