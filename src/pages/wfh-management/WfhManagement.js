import { useState, useRef } from 'react';
import styles from './WfhManagement.module.css';
import { Table } from '../../components/table/Table';
import { TopBar } from '../../components/top-bar/TopBar';
import { NewEmployeePopup } from './popups/NewEmployeePopup/NewEmployeePopup';


export function WfhManagement() {
    const [openModal, setOpenModal] = useState(false);
    const openModalHandler = () => {
        setOpenModal(true);
    }
    const columns = ['EMPLOYEE NAME', 'Employee ID', 'DEPARTMENT', 'JOB TITLE', 'STATUS', 'ACTIONS'];
    const employeeData = [
        { employeeName: "Revanth", 'employeeId': '128', department: "Development", jobTitle: "developer", status: "active", fromDate: '2023-04-11', toDate: '2023-14-12' },
        { employeeName: "Dwarakesh", 'employeeId': '123', department: "Development", jobTitle: "developer", status: "active", fromDate: '2023-04-11', toDate: '2023-14-12' },
        { employeeName: "Manoj", 'employeeId': '125', department: "Development", jobTitle: "designer", status: "active", fromDate: '2023-04-11', toDate: '2023-14-12' },
        { employeeName: "Revati", 'employeeId': '120', department: "Development", jobTitle: "developer", status: "active", fromDate: '2023-04-11', toDate: '2023-14-12' },
        { employeeName: "John", 'employeeId': '115', department: "HR", jobTitle: "HR executive", status: "active", fromDate: '2023-04-11', toDate: '2023-14-12' },
    ];
    const departments = ['Data', 'Development', 'HR', 'Sales'];
    const message = employeeData.length + " EMPLOYEES";
    const [selectedPage, setSelectedPage] = useState("WORK FROM HOME Management");
    const [searchedData, setSearchedData] = useState(employeeData);
    const [filteredData, setFilteredData] = useState(searchedData);
    const enteredSearch = useRef();
    const searchHandler = (event) => {
        event.preventDefault();
        if (enteredSearch.current.value.length == 0) {
            setSearchedData(employeeData);
            setFilteredData(searchedData);
        } else {
            setSearchedData(employeeData.filter(employee => {
                return employee.employeeName.toLocaleLowerCase() === enteredSearch.current.value.toLocaleLowerCase()
            }))
            setFilteredData(searchedData)
        }
    }

    const filterHandler = (event) => {
        event.preventDefault();
        if (selectedDepartment) setFilteredData(searchedData.filter(laptop => {
            return laptop.department.toLocaleLowerCase() === selectedDepartment.toLocaleLowerCase()
        }));
        else setFilteredData(searchedData);
    }

    const [selectedDepartment, setSelectedDepartment] = useState(null);

    return (
        <div>
            {openModal && <NewEmployeePopup setOpenModal={setOpenModal} />}
            <div className={styles.page}>
                <TopBar page={selectedPage} message={message} />
                <div className={styles.toolbar}>
                    <span className={styles.toolbarLeft}>
                        <div className={styles.search}>
                            <input type="text" placeholder="search" className={styles.searchInput} ref={enteredSearch} />
                            <span className={styles.searchIcon} onClick={searchHandler}></span>
                        </div>
                        <select className={styles.dropdown} value={selectedDepartment} onChange={event => setSelectedDepartment(event.target.value)}>
                            <option selected value="null" disabled>Department</option>
                            {departments.map(department => {
                                return <option value={department}>{department}</option>
                            })}
                        </select>
                        <button className="btnFilter" onClick={filterHandler}>Apply Filter</button>
                    </span>
                    <button className="btnCreate" onClick={openModalHandler}>+ Create</button>
                </div>
                <Table columns={columns} data={filteredData} page="wfh" />
            </div>
        </div>
    )
}