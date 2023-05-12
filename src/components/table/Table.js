import { ConfirmationPopup } from '../../pages/laptop management/popups/ConfirmationPopup/ConfirmationPopup';
import { LaptopInfoPopup } from '../../pages/laptop management/popups/LaptopInfoPopup/LaptopInfoPopup';
import { EditLaptopPopup } from '../../pages/laptop management/popups/ModifyLaptopPopup/EditLaptopPopup';
import { EmployeeInfoPopup } from '../../pages/wfh-management/popups/EmployeeInfoPopup/EmployeeInfoPopup';
import styles from './Table.module.css'
import { useState } from 'react';

export function Table(props) {
    let [currentPage, setCurrentPage] = useState(1);
    let [postsPerPage, setPostsPerPage] = useState(5);
    const lastPostIndex = currentPage * postsPerPage;
    let firstPostIndex = lastPostIndex - postsPerPage;
    let currentPosts = props.data.slice(firstPostIndex, lastPostIndex);
    let pages = [];
    let totalPages = Math.ceil(props.data.length / postsPerPage);
    for (let i = 1; i <= Math.ceil(totalPages); i++) {
        pages.push(i)
    }
    const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] = useState(currentPage === 1 ? true : false);
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(currentPage === totalPages ? true : false);

    const previousButtonHandler = () => {
        if (!isPreviousButtonDisabled) {
            let page = currentPage;
            page = currentPage - 1;
            if (page === 1) setIsPreviousButtonDisabled(true);
            currentPage === totalPages - 1 ? setIsNextButtonDisabled(true) : setIsNextButtonDisabled(false);
            setCurrentPage(page);
        }

    }

    const nextButtonHandler = () => {
        if (!isNextButtonDisabled) {
            let page = currentPage;
            page = currentPage + 1;
            if (page === totalPages) setIsNextButtonDisabled(true);
            page === 1 ? setIsPreviousButtonDisabled(true) : setIsPreviousButtonDisabled(false);
            setCurrentPage(page);
        }
    }

    let [rowData, setRowData] = useState([]);

    const [openLaptopInfoModal, setOpenLaptopInfoModal] = useState(false);
    const laptopInfoHandler = (index) => {
        setRowData(currentPosts[index]);
        setOpenLaptopInfoModal(true);
    }

    const [openEditLaptopModal, setOpenEditLaptopModal] = useState(false);
    const editLaptopHandler = (index) => {
        setRowData(currentPosts[index]);
        setOpenEditLaptopModal(true);
    }

    const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
    const deleteLaptopHandler = () => {
        setOpenConfirmationModal(true);
    }

    const [openEmployeeInfoModal, setOpenEmployeeInfoModal] = useState(false);
    const employeeInfoHandler = (index) => {
        setRowData(currentPosts[index]);
        setOpenEmployeeInfoModal(true);
    }

    const [openEditEmployeeModal, setOpenEditEmployeeModal] = useState(false);
    const editEmployeeHandler = (index) => {
        setRowData(currentPosts[index]);
        setOpenEditEmployeeModal(true);
    }

    const deleteEmployeeHandler = (index) => {
        setOpenConfirmationModal(true);
    }

    return (
        <>
            {openLaptopInfoModal && <LaptopInfoPopup setOpenModal={setOpenLaptopInfoModal} rowData={rowData}/>}
            {openEditLaptopModal && <EditLaptopPopup setOpenModal={setOpenEditLaptopModal} rowData={rowData} />}
            {openConfirmationModal && <ConfirmationPopup setOpenModal={setOpenConfirmationModal} />}

            { openEmployeeInfoModal && <EmployeeInfoPopup setOpenModal={setOpenEmployeeInfoModal} rowData={rowData}/> }
            <table>
                <tr className={styles.checkbox}>
                    {/* {props.page === 'dashboard' && <th><input type='checkbox' className={styles.checkbox} /></th>} */}
                    {props.columns.map(column => { return <th>{column}</th> })}
                </tr>
                {props.page === "dashboard" ? currentPosts.map((row, index) => {
                    return (
                        <tr>
                            {/* <td><input type='checkbox' className={styles.checkbox} /></td> */}
                            <td onClick={() => laptopInfoHandler(index)}>
                                <p className={styles.cell}>{row.employeeName}</p>
                                <p className={styles.role}>{row.role}</p>
                            </td>
                            <td className={styles.cell}>{row.laptopName}</td>
                            <td className={styles.cell}>{row.model}</td>
                            <td className={row.status === 'active' ? `${styles.cell} ${styles.active}` : `${styles.cell} ${styles.inactive}`}>{row.status}</td>
                            <td className={styles.actions}>
                                <span className={styles.edit} onClick={() => editLaptopHandler(index)}></span>
                                <span className={styles.delete} onClick={deleteLaptopHandler}></span>
                            </td>
                        </tr>
                    )
                }) :
                    currentPosts.map( (row,index) => {
                        return (
                            <tr>
                                {/* <td><input type='checkbox' className={styles.checkbox} /></td> */}
                                <td className={styles.cell} style={{ display: "flex", alignItems: "center" }} onClick={() => employeeInfoHandler(index)}>
                                    <span className={styles.dp}></span>
                                    <span>{row.employeeName}</span>
                                </td>
                                <td className={styles.cell}>{row.employeeId}</td>
                                <td className={styles.cell}>{row.department}</td>
                                <td className={styles.cell}>{row.jobTitle}</td>
                                <td className={row.status === 'active' ? `${styles.cell} ${styles.active}` : `${styles.cell} ${styles.inactive}`}>{row.status}</td>
                                <td className={styles.actions}>
                                    <span className={styles.edit} onClick={() => editEmployeeHandler(index) }></span>
                                    <span className={styles.delete} onClick={() => deleteEmployeeHandler(index)}></span>
                                </td>
                            </tr>
                        )
                    })}
            </table>
            <div className={styles.pagination}>
                <div className={styles.leftIcon} onClick={previousButtonHandler}></div>
                {pages.map(page => {
                    return (
                        <div className={page === currentPage ? `${styles.pageNo} ${styles.selected}` : styles.pageNo} key={page}>
                            {page}
                        </div>
                    )
                })}
                <div className={styles.rightIcon} onClick={nextButtonHandler}></div>
                <div className={styles.pageNoInfo}>
                    <span>showing</span>
                    <select>
                        <option>5</option>
                        <option>10</option>
                    </select>
                    <span>of {props.data.length} results</span>
                </div>
            </div>
        </>
    )
}