import Styles from './Badge.module.scss';

const Badge = ({ setShowBadge }) => {
  return (
    <article className={Styles.badge}>
      <p>This is a solar powered website</p>
      <button onClick={() => setShowBadge(false)}>Close</button>
    </article>
  );
};

export default Badge;
