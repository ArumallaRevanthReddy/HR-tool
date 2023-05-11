import { Modal2 } from '../../../../components/modal2/Modal'
import modalClasses from './NewLaptopPopup.module.css'

export function NewLaptopPopup({ setOpenModal}) {
    const modalData = {
        setOpenModal: setOpenModal,
        title: "Laptop Management",
        buttons: ["cancel", "create"]
    }

    return (
        <Modal2 modalData={modalData}>
            <form>
                <div className={modalClasses.row}>
                    <span className={modalClasses.item}>
                        <label htmlFor="serialNo">Serial No</label>
                        <input type="email" id="serialNo" required className={modalClasses.textBox} />
                    </span>
                    <span className={modalClasses.item}>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" required className={modalClasses.textBox} />
                    </span>
                </div>
                <div className={modalClasses.row}>
                    <span className={modalClasses.item}>
                        <label htmlFor="employeeName">Employee Name</label>
                        <input type="email" id="employeeName" required className={modalClasses.textBox} />
                    </span>
                    <span className={modalClasses.item}>
                        <label htmlFor="handoverDate">Handover Date</label>
                        <input type="date" id="handoverDate" required className={`${modalClasses.textBox} ${modalClasses.calender}`} />
                    </span>
                </div>
                <div className={modalClasses.row}>
                    <span className={modalClasses.item}>
                        <label htmlFor="serviceDate">Service Date</label>
                        <input type="date" id="serviceDate" required className={`${modalClasses.textBox} ${modalClasses.calender}`} />
                    </span>
                    <span style={{ marginTop: "20px", marginLeft: "10px" }}>
                        <span className={modalClasses.flex}>
                            <span className={modalClasses.flex}>
                                <input type="checkbox" id="keyboard" className={modalClasses.checkbox} />
                                <label htmlFor="keyboard">KeyBoard</label>
                            </span>
                            <span className={modalClasses.flex}>
                                <input type="checkbox" id="charger" className={modalClasses.checkbox} />
                                <label htmlFor="charger">Charger</label>
                            </span>
                        </span>
                        <span className={modalClasses.flex}>
                            <input type="checkbox" id="mouse" className={modalClasses.checkbox} />
                            <label htmlFor="mouse">Mouse</label>
                        </span>
                    </span>
                </div>
            </form>
        </Modal2>
    )
}