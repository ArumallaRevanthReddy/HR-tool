import { useRef, useState } from 'react';
import styles from './LaptopManagement.module.css';
import { Table } from '../../components/table/Table';
import { TopBar } from '../../components/top-bar/TopBar';
import { NewLaptopPopup } from './popups/NewLaptopPopup/NewLaptopPopup';
import { LaptopInfoPopup } from './popups/LaptopInfoPopup/LaptopInfoPopup';
import { ConfirmationPopup } from './popups/ConfirmationPopup/ConfirmationPopup';

export function LaptopManagement() {
    const columns = ['EMPLOYEE NAME', 'LAPTOP NAME', 'LAPTOP MODEL NO', 'LAPTOP STATUS', 'ACTIONS'];
    const laptopData = [
        { employeeName: "Revanth", role: 'engineer', laptopName: "Lenovo", model: "idea pad", status: "In Service", department: "development" },
        { employeeName: "Dwarakesh", role: 'engineer', laptopName: "Lenovo", model: "idea pad", status: "active", department: "development" },
        { employeeName: "Revati", role: 'engineer', laptopName: "dell", model: "vostro", status: "active", department: "development" },
        { employeeName: "Manoj", role: 'engineer', laptopName: "Lenovo", model: "idea pad", status: "In Service", department: "development" },
        { employeeName: "Samuel", role: 'engineer', laptopName: "Lenovo", model: "idea pad", status: "active", department: "sales" },
        { employeeName: "Chaitanya", role: 'engineer', laptopName: "Lenovo", model: "idea pad", status: "active", department: "sales" },
        { employeeName: "John", role: 'engineer', laptopName: "Lenovo", model: "idea pad", status: "active", department: "HR" },
        { employeeName: "Gigi", role: 'engineer', laptopName: "Lenovo", model: "idea pad", status: "active", department: "HR" },
        { employeeName: "Venkatesh", role: 'engineer', laptopName: "Lenovo", model: "idea pad", status: "active", department: "data" },
        { employeeName: "Praveen", role: 'engineer', laptopName: "Lenovo", model: "idea pad", status: "active", department: "data" }
    ];
    const departments = ['Data', 'Development', 'HR', 'Sales'];
    const brands = ['dell', 'lenovo'];

    const [openModal, setOpenModal] = useState(false);
    const [searchedData, setSearchedData] = useState(laptopData);
    const [filteredData, setFilteredData] = useState(searchedData);
    const openModalHandler = () => {
        setOpenModal(true);
    }
    const [selectedPage, setSelectedPage] = useState("Laptop Management");

    const enteredSearch = useRef();
    const searchHandler = (event) => {
        event.preventDefault();
        if (enteredSearch.current.value.length == 0) {
            setSearchedData(laptopData);
            setFilteredData(searchedData);
        } else {
            setSearchedData(laptopData.filter(laptop => {
                return laptop.employeeName.toLocaleLowerCase() === enteredSearch.current.value.toLocaleLowerCase()
            }))
            setFilteredData(searchedData)
        }
    }

    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const filterHandler = (event) => {
        event.preventDefault();
        if (selectedDepartment && selectedBrand) {
            console.log('brand & department', selectedDepartment, selectedBrand)

            // let laptops = searchedData;
            // laptops = searchedData.filter(laptop => {
            //     return (laptop.department.toLocaleLowerCase() === selectedDepartment.toLocaleLowerCase() &&
            //         laptop.laptopName.toLocaleLowerCase() === selectedBrand.toLocaleLowerCase())
            // });
            // laptops = laptops.filter( laptop => {
            //     return laptop.laptopName.toLocaleLowerCase() === selectedBrand.toLocaleLowerCase()
            // })
            // setFilteredData(laptops);

            setFilteredData(searchedData.filter(laptop => {
                return (laptop.department.toLocaleLowerCase() === selectedDepartment.toLocaleLowerCase()
                    && laptop.laptopName.toLocaleLowerCase() === selectedBrand.toLocaleLowerCase())
            }));
            // setFilteredData(filteredData.filter(laptop => {
            //     return laptop.laptopName.toLocaleLowerCase() === selectedBrand.toLocaleLowerCase()
            // }));
        }
        else {
            if (selectedBrand) {
                console.log('brand', selectedBrand)
                setFilteredData(searchedData.filter(laptop => {
                    return laptop.laptopName.toLocaleLowerCase() === selectedBrand.toLocaleLowerCase()
                }));
            } else if (selectedDepartment) {
                console.log('department')
                setFilteredData(searchedData.filter(laptop => {
                    return laptop.department.toLocaleLowerCase() === selectedDepartment.toLocaleLowerCase()
                }));
                console.log(filteredData)
            } else {
                console.log('no filter')
                setFilteredData(searchedData);
            }
        }
    }

    return (
        <div >
            {openModal && <NewLaptopPopup setOpenModal={setOpenModal} />}
            <div className={styles.page}>
                <TopBar page={selectedPage} />
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
                        <select className={styles.dropdown} value={selectedBrand} onChange={event => setSelectedBrand(event.target.value)}>
                            <option selected value="null" disabled>Brand</option>
                            {brands.map(brand => {
                                return <option value={brand}>{brand}</option>
                            })}
                        </select>
                        <button className="btnFilter" onClick={filterHandler}>Apply Filter</button>
                    </span>
                    <button className="btnCreate" onClick={openModalHandler}>+ Create</button>
                </div>
                <Table columns={columns} data={filteredData} page="dashboard"/>
            </div>
        </div>
    )
}