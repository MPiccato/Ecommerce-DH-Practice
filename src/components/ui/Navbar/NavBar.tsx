import Carrito from "../../../assets/carrito-compras.png";
import Logo from "../../../assets/logo.svg";
import { CartModal } from "../CartModal";
import styles from "./NavBar.module.css";
import { useState } from "react";

export const NavBar = () => {

  const [showCartModal, setShowCartModal] = useState(false);

  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal)
  }


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
            <img src={Carrito} onClick = {handleShowCartModal} alt="Carrito de Compras" />

        </div>
        {/* Para que aparezca el modal que muestre los productos comprados */}
        {showCartModal && 
          <CartModal handleShowCartModal={handleShowCartModal} />
        }
    </div>
  )
}
