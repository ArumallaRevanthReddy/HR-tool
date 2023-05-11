import modalClasses from './ModalHeader.module.css'

export function ModalHeader({setOpenModal, title}) {
    return (
        <div className={modalClasses.header}>
            { title ? <div className={modalClasses.title}>{title}</div> : null}
            <button className={modalClasses.titleCloseBtn} onClick={() => { setOpenModal(false); }}>X</button>
        </div>
    )
}