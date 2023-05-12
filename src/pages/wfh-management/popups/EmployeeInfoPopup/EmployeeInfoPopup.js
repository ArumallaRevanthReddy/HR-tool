import { Modal2 } from "../../../../components/modal2/Modal";
import styles from './EmployeeInfoPopup.module.css';

export function EmployeeInfoPopup({ setOpenModal, rowData }) {
    const modalData = {
        setOpenModal: setOpenModal,
        title: "WFH EMPLOYEE INFORMATION",
        buttons: ["close", "modify"]
    }

    return (
        <Modal2 modalData={modalData}>
            <div className={styles.body}>
                <div className={styles.column}>
                    <span className={styles.cell}>
                        <span className={styles.title}>Employee Id</span>
                        <span className={styles.value}>{rowData.employeeId}</span>
                    </span>
                    <span className={styles.cell}>
                        <span className={styles.title}>Department</span>
                        <span className={styles.value}>{rowData.department}</span>
                    </span>
                    <span className={styles.cell}>
                        <span className={styles.title}>Status</span>
                        <span className={styles.value}>{rowData.status}</span>
                    </span>
                </div>
                <div className={styles.column}>
                    <span className={styles.cell}>
                        <span className={styles.title}>Employee name</span>
                        <span className={styles.value}>{rowData.employeeName}</span>
                    </span>
                    <span className={styles.cell}>
                        <span className={styles.title}>From</span>
                        <span className={styles.value}>{rowData.fromDate}</span>
                    </span>
                </div>
                <div className={styles.column}>
                    <span className={styles.cell}>
                        <span className={styles.title}>Job Title</span>
                        <span className={styles.value}>{rowData.jobTitle}</span>
                    </span>
                    <span className={styles.cell}>
                        <span className={styles.title}>To</span>
                        <span className={styles.value}>{rowData.toDate}</span>
                    </span>
                </div>
            </div>
        </Modal2>
    )
}