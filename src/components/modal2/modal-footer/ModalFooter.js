import modalClasses from './ModalFooter.module.css';

export function ModalFooter({buttons, setOpenModal, submitHandler}) {
    return (
        <div className={modalClasses.footer}>
            <button className={modalClasses.close} onClick={() => setOpenModal(false)}>{buttons[0]}</button>
            <button onClick={submitHandler}>{buttons[1]}</button>
        </div>
    )
}