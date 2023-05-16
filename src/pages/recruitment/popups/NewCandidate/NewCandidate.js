import modalClasses from './NewCandidate.module.css';
import { Modal2 } from '../../../../components/modal2/Modal';

export function NewCandidate({ setOpenModal }) {
    const modalData = {
        setOpenModal: setOpenModal,
        title: "Apply For New Candidate",
        buttons: ["close", "apply"],
        size: 'large'
    }

    return (
        <Modal2 modalData={modalData}>
            <form>
                <div className={modalClasses.row}>
                    <span className={modalClasses.item}>
                        <label htmlFor="serialNo">Name</label>
                        <input type="text" id="serialNo" required className={modalClasses.textBox} />
                    </span>
                    <span className={modalClasses.item}>
                        <label htmlFor="department">Department</label>
                        <input type="text" id="department" required className={modalClasses.textBox} />
                    </span>
                </div>
                <div className={modalClasses.row}>
                    <span className={modalClasses.item}>
                        <label htmlFor="mobile">Mobile No</label>
                        <input type="number" id="mobile" required className={modalClasses.textBox} />
                    </span>
                    <span className={modalClasses.item}>
                        <label htmlFor="email">Email Id</label>
                        <input type="email" id="email" required className={`${modalClasses.textBox}`} />
                    </span>
                </div>
                <div className={modalClasses.row}>
                    <span className={modalClasses.item}>
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" required className={modalClasses.textBox} />
                    </span>
                    <span className={modalClasses.item}>
                        <label htmlFor="education">Education Qualification</label>
                        <input type="text" id="education" required className={`${modalClasses.textBox}`} />
                    </span>
                </div>
                <div className={modalClasses.row}>
                    <span className={modalClasses.item}>
                        <label htmlFor="status">Interview Status</label>
                        <input type="text" id="status" required className={modalClasses.textBox} />
                    </span>
                    <span className={modalClasses.item}>
                        <label htmlFor="interviewer">Assign Interviewer</label>
                        <input type="text" id="interviewer" required className={`${modalClasses.textBox}`} />
                    </span>
                </div>
                <div className={modalClasses.row}>
                    <span className={`${modalClasses.item} ${modalClasses.flexRow}`}>
                        <span className={`${modalClasses.icon} ${modalClasses.attachment}`}></span>
                        <span>Attach Resume here</span>
                    </span>
                    <span className={modalClasses.item} style={{marginRight:"80px"}}>
                        <span>Available Time Slot</span>
                        <span>
                            <input type="time" id="from" required className={`${modalClasses.textBox} ${modalClasses.textBoxSmall}`} />
                            <input type="time" id="to" required className={`${modalClasses.textBox} ${modalClasses.textBoxSmall}`} />
                        </span>
                    </span>
                </div>
            </form>
        </Modal2>
    )
}