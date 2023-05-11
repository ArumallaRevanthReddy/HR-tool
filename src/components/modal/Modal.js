import { Modal2 } from '../modal2/Modal'
import modalClasses from './Modal.module.css'

export function Modal({ setOpenModal}) {
    const modalData = {
        setOpenModal: setOpenModal,
        title: "Laptop Management",
        action: "create"
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
                        <label htmlFor="serialNo">Email address</label>
                        <input type="email" id="serialNo" required className={modalClasses.textBox} />
                    </span>
                </div>
                <div className={modalClasses.row}>
                    <span className={modalClasses.item}>
                        <label htmlFor="serialNo">Employee Name</label>
                        <input type="email" id="serialNo" required className={modalClasses.textBox} />
                    </span>
                    <span className={modalClasses.item}>
                        <label htmlFor="serialNo">Handover Date</label>
                        <input type="date" id="serialNo" required className={`${modalClasses.textBox} ${modalClasses.calender}`} />
                    </span>
                </div>
                <div className={modalClasses.row}>
                    <span className={modalClasses.item}>
                        <label htmlFor="serialNo">Employee Name</label>
                        <input type="email" id="serialNo" required className={modalClasses.textBox} />
                    </span>
                    <span style={{ marginTop: "20px", marginLeft: "10px" }}>
                        <span className={modalClasses.flex}>
                            <span className={modalClasses.flex}>
                                <input type="checkbox" id="serialNo" className={modalClasses.checkbox} />
                                <label htmlFor="serialNo">KeyBoard</label>
                            </span>
                            <span className={modalClasses.flex}>
                                <input type="checkbox" id="serialNo" className={modalClasses.checkbox} />
                                <label htmlFor="serialNo">Charger</label>
                            </span>
                        </span>
                        <span className={modalClasses.flex}>
                            <input type="checkbox" id="serialNo" className={modalClasses.checkbox} />
                            <label htmlFor="serialNo">Mouse</label>
                        </span>
                    </span>
                </div>
            </form>
        </Modal2>
    )
}