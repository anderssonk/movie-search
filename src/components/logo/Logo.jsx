import LogoImg from '../../assets/logo.png';
import Styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={Styles.logo}>
      <img src={LogoImg} alt="Movie Search" />
    </div>
  );
};

export default Logo;
