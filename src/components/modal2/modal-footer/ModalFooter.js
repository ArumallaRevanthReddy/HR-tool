import modalClasses from './ModalFooter.module.css';

export function ModalFooter({buttons, setOpenModal}) {
    return (
        <div className={modalClasses.footer}>
            <button className={modalClasses.close} onClick={() => setOpenModal(false)}>{buttons[0]}</button>
            <button>{buttons[1]}</button>
        </div>
    )
}