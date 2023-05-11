import { useState, useRef } from 'react';
import { SideBar } from '../../components/side-bar/Sidebar';
import styles from './WfhManagement.module.css';
import { Modal } from '../../components/modal/Modal';
import { Table } from '../../components/table/Table';
import { TopBar } from '../../components/top-bar/TopBar';


export function WfhManagement(){
    const [openModal, setOpenModal] = useState(false);
    const openModalHandler = () => {
        setOpenModal(true);
    }
    const columns = ['EMPLOYEE NAME', 'Employee ID', 'DEPARTMENT', 'JOB TITLE', 'STATUS', 'ACTIONS'];
    const employeeData = [
    { 'employeeName': "Revanth", 'employeeId': '123', 'department': "Lenovo", 'jobTitle': "bbbbb", 'status': "active" },
    { 'employeeName': "Revanth", 'employeeId': '123', 'department': "Lenovo", 'jobTitle': "bbbbb", 'status': "active" },
    { 'employeeName': "Revanth", 'employeeId': '123', 'department': "Lenovo", 'jobTitle': "bbbbb", 'status': "active" },
    { 'employeeName': "Revanth", 'employeeId': '123', 'department': "Lenovo", 'jobTitle': "bbbbb", 'status': "active" },
    { 'employeeName': "Revanth", 'employeeId': '123', 'department': "Lenovo", 'jobTitle': "bbbbb", 'status': "active" },
    ];
    const [selectedPage, setSelectedPage] = useState("WORK FROM HOME Management");
    const [filteredData, setFilteredData] = useState(employeeData);
    const enteredSearch = useRef();
    const searchHandler = (event) => {
        event.preventDefault();
        if (enteredSearch.current.value.length == 0) {
            setFilteredData(employeeData)
        } else {
            setFilteredData(employeeData.filter( employee => {
                return employee.employeeName.toLocaleLowerCase() === enteredSearch.current.value.toLocaleLowerCase()
            }))
        }
    }
    
    return (
        <div>
            {/* <SideBar /> */}
            { openModal && <Modal setOpenModal={setOpenModal} /> }
            <div className={styles.page}>
                <TopBar page={selectedPage}/>
                <div className={styles.toolbar}>
                    <span className={styles.toolbarLeft}>
                        <div className={styles.search}>
                            <input type="text" placeholder="search" className={styles.searchInput} ref={enteredSearch}/>
                            <span className={styles.searchIcon} onClick={searchHandler}></span>
                        </div>
                        <select name="cars" id="cars" className={styles.dropdown}>
                            <option value="volvo">Volvo</option>
                        </select>
                        <select name="cars" className={styles.dropdown}>
                            <option value="volvo">Volvo</option>
                        </select>
                        <button className="btnFilter">Apply Filter</button>
                    </span>
                    <button className="btnCreate" onClick={openModalHandler}>+ Create</button>
                </div>
                <Table columns={columns} data={filteredData} page="wfh"/>
            </div>
        </div>
    )
}