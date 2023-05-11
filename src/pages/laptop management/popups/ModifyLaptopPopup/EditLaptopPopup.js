import { Modal2 } from '../../../../components/modal2/Modal'
import modalClasses from './EditLaptopPopup.module.css';
import { useRef } from 'react';

export function EditLaptopPopup({ setOpenModal, rowData}) {
    const enteredSerialNo = useRef();
    const enteredEmail = useRef();
    const enteredEmployeeName = useRef();
    const enteredHod = useRef();
    const enteredServiceDate = useRef();
    const enteredIsChargerGiven = useRef();
    const enteredIsKeyboardGiven = useRef();
    const enteredIsMouseGiven = useRef();


    const submitHandler = (event) => {
        event.preventDefault();
        console.log(enteredHod.current.value);
    }

    const modalData = {
        setOpenModal: setOpenModal,
        submitHandler: submitHandler,
        title: "UPDATE THE LAPTOP INFORMATION",
        buttons: ["cancel", "modify"]
    }

    return (
        <Modal2 modalData={modalData}>
            <form>
                <div className={modalClasses.row}>
                    <span className={modalClasses.item}>
                        <label htmlFor="serialNo">Serial No</label>
                        <input type="number" id="serialNo" defaultValue={rowData.serialNo} required className={modalClasses.textBox} ref={enteredSerialNo} />
                    </span>
                    <span className={modalClasses.item}>
                        <label htmlFor="email">Email address</label>
                        <input type="email" defaultValue={rowData.email} id="email" required className={modalClasses.textBox} ref={enteredEmail}/>
                    </span>
                </div>
                <div className={modalClasses.row}>
                    <span className={modalClasses.item}>
                        <label htmlFor="employeeName">Employee Name</label>
                        <input type="text" id="employeeName" defaultValue={rowData.employeeName} required className={modalClasses.textBox} ref={enteredEmployeeName} />
                    </span>
                    <span className={modalClasses.item}>
                        <label htmlFor="handoverDate">Handover Date</label>
                        <input type="date" id="handoverDate" required className={`${modalClasses.textBox} ${modalClasses.calender}`} defaultValue={rowData.hod} ref={enteredHod}/>
                    </span>
                </div>
                <div className={modalClasses.row}>
                    <span className={modalClasses.item}>
                        <label htmlFor="serviceDate">Service Date</label>
                        <input type="date" id="serviceDate" required className={`${modalClasses.textBox} ${modalClasses.calender}`} defaultValue={rowData.serviceDate} ref={enteredServiceDate}/>
                    </span>
                    <span style={{ marginTop: "20px", marginLeft: "10px" }}>
                        <span className={modalClasses.flex}>
                            <span className={modalClasses.flex}>
                                <input type="checkbox" id="keyboard" className={modalClasses.checkbox} defaultChecked={rowData.keyboard} ref={enteredIsKeyboardGiven} />
                                <label htmlFor="keyboard">KeyBoard</label>
                            </span>
                            <span className={modalClasses.flex}>
                                <input type="checkbox" id="charger" className={modalClasses.checkbox} defaultChecked={rowData.charger} ref={enteredIsChargerGiven}/>
                                <label htmlFor="charger">Charger</label>
                            </span>
                        </span>
                        <span className={modalClasses.flex}>
                            <input type="checkbox" id="mouse" className={modalClasses.checkbox} defaultChecked={rowData.mouse} ref={enteredIsMouseGiven}/>
                            <label htmlFor="mouse">Mouse</label>
                        </span>
                    </span>
                </div>
            </form>
        </Modal2>
    )
}