// Project files
import Styles from './Badge.module.scss';

const Badge = () => {
  return (
    <div className={Styles.badge}>
      <p>
        This website is solar-powered! It has been designed to use less energy when accessing our
        content. ☀️
      </p>
    </div>
  );
};
