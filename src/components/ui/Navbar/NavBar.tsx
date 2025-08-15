import Carrito from "../../../assets/carrito-compras.png";
import Logo from "../../../assets/logo.svg";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbarDetail}>
            <img src={Logo} alt="Logo-DH-ECommerce" width={50} height={50} />
            <div>
                <span>DH-Ecommerce</span>
            </div>
        </div>
        <div className={styles.navbarCartContainer}>
            <p className={styles.navbarTextAmount}>2</p>
            <img src={Carrito} alt="Carrito de Compras" />

        </div>
    </div>
  )
}
