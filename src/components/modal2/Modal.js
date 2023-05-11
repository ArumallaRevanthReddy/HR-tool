import { ModalBody } from "./modal-body/ModalBody";
import { ModalFooter } from "./modal-footer/ModalFooter";
import { ModalHeader } from "./modal-header/ModalHeader";
import modalClasses from './Modal.module.css';

export function Modal2(props){
    return(
        <div className={modalClasses.modalBackground}>
            <div className={props.modalData.size === "small" ?  modalClasses.modalContainerSmall : modalClasses.modalContainer}>
                <ModalHeader setOpenModal={props.modalData.setOpenModal} title={props.modalData.title} />
                <ModalBody>
                    {props.children}
                </ModalBody>
                <ModalFooter buttons={props.modalData.buttons} setOpenModal={props.modalData.setOpenModal} submitHandler={props.modalData.submitHandler}/>
            </div>
        </div>
    )
}