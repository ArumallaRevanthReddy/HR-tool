import { Modal2 } from "../../../../components/modal2/Modal";
import styles from './LaptopInfoPopup.module.css';

export function LaptopInfoPopup({setOpenModal}){
    const modalData = {
        setOpenModal: setOpenModal,
        title: "Laptop Information",
        buttons: ["close", "modify"]
    }

    return(
        <Modal2 modalData={modalData}>
            <div className={styles.body}>
                <div className={styles.column}>
                    <span className={styles.cell}>
                        <span className={styles.title}>model no</span>
                        <span className={styles.value}>LAP877</span>
                    </span>
                    <span className={styles.cell}>
                        <span className={styles.title}>Employee name</span>
                        <span className={styles.value}>LAP877</span>
                    </span>
                    <span className={styles.cell}>
                        <span className={styles.title}>Service date</span>
                        <span className={styles.value}>LAP877</span>
                    </span>
                </div>
                <div className={styles.column}>
                <span className={styles.cell}>
                        <span className={styles.title}>Brand name</span>
                        <span className={styles.value}>LAP877</span>
                    </span>
                    <span className={styles.cell}>
                        <span className={styles.title}>Handover date</span>
                        <span className={styles.value}>LAP877</span>
                    </span>
                    <span className={styles.cell}>
                        <span className={styles.title}>Accesories</span>
                        <span className={styles.value}>Laptop, Keyboard, Mouse</span>
                    </span>
                </div>
            </div>
        </Modal2>
    )
}