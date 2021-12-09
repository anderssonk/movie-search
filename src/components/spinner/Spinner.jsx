import Loader from '../../assets/loader.gif';
import Styles from './Spinner.module.scss';

export default function Spinner() {
  return (
    <div className={Styles.spinner}>
      <img src={Loader} alt="Loading..."></img>
    </div>
  );
}
