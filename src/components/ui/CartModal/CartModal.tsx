import styles from './CartModal.module.css';
import Close from '../../../assets/close.svg';

export const CartModal = ({handleShowCartModal}) => {
  return (
    <div className={styles.modalContainer}>
        <button onClick={handleShowCartModal} className={styles.modalCloseButton}>
            <img src={Close} alt="" />
        </button>
        <table className={styles.modalTable}>
            <thead>
                    <tr>
                    <th>Producto</th>
                    <th>Borrar</th>
                    <th>Cantidad</th>
                    <th>Agregar</th>
                </tr>
            </thead>
           <tbody>
                <tr>
                    <td>Freidora de mano</td>
                    <td ><button className={styles.modalButtonContainer} >-1</button ></td>
                    <td>-12</td>
                    <td ><button className={styles.modalButtonContainer} >+1</button></td>
                </tr>
           </tbody>
        </table>
        <div>
            <h3 className={styles.modalTotalContainer}>Total: 400,00</h3>
        </div>
        <div className={styles.modalButtonContainer}>
            <button>Comprar</button>
        </div>
    </div>
  )
}
