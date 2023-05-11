import { Modal2 } from "../../../../components/modal2/Modal";

export function ConfirmationPopup({setOpenModal}){
    const modalData = {
        setOpenModal: setOpenModal,
        title: "",
        buttons: ["no","yes"],
        size: "small"
    }
    return(
        <Modal2 modalData={modalData}>
            <div style={{fontSize:"20px", textAlign:"center"}}>Are you sure you want to delete this item?</div>
        </Modal2>
    )
}