import { Modal2 } from '../../../../components/modal2/Modal'
import modalClasses from './NewEmployeePopup.module.css'

export function NewEmployeePopup({ setOpenModal, rowData }) {
    const modalData = {
        setOpenModal: setOpenModal,
        title: "ADDING NEW WFH EPLOYEE",
        buttons: ["cancel", "create"]
    }

    return (
        <Modal2 modalData={modalData}>
            <form>
                <div className={modalClasses.row}>
                    <span className={modalClasses.item}>
                        <label htmlFor="employeeId">Employee Id</label>
                        <input type="email" id="employeeId" required className={modalClasses.textBox} defaultValue={rowData ? rowData.employeeId : null} />
                    </span>
                    <span className={modalClasses.item}>
                        <label htmlFor="employeeName">Employee Name</label>
                        <input type="email" id="employeeName" required className={modalClasses.textBox} defaultValue={rowData ? rowData.employeeName : null} />
                    </span>
                </div>
                <div className={modalClasses.row}>
                    <span className={modalClasses.item}>
                        <label htmlFor="fromDate">Department</label>
                        <select className={modalClasses.dropdown}>
                            <option selected value="null" disabled>Department</option>
                        </select>
                    </span>
                    <span className={modalClasses.item}>
                        <label htmlFor="fromDate">Job Title</label>
                        <select className={modalClasses.dropdown}>
                            <option selected value="null" disabled>Job Title</option>
                        </select>
                    </span>
                    <span className={modalClasses.item} style={{marginLeft: "20px"}}>
                        <label htmlFor="fromDate">From</label>
                        <input type="date" id="fromDate" required className={`${modalClasses.textBox} ${modalClasses.calender}`} />
                    </span>
                    <span className={modalClasses.item}>
                        <label htmlFor="toDate">To</label>
                        <input type="date" id="toDate" required className={`${modalClasses.textBox} ${modalClasses.calender}`} />
                    </span>
                </div>
                <div className={modalClasses.row} style={{justifyContent:"center"}}>
                    <span className={`${modalClasses.item} ${modalClasses.radio}`}>
                        <input type="radio" id="active" checked="checked" name="radio" />
                        <label htmlFor="active">Active</label>
                    </span>
                    <span className={`${modalClasses.item} ${modalClasses.radio}`}>
                        <input type="radio" id="leave" name="radio"/>
                        <label htmlFor="leave">Leave</label>
                    </span>
                </div>
            </form>
        </Modal2>
    )
}