import { SideBar } from '../side-bar/Sidebar'
import './Dashboard.css'

export function Dashboard() {
    const columns = ['EMPLOYEE NAME', 'LAPTOP NAME', 'LAPTOP MODEL NO', 'LAPTOP STATUS', 'ACTIONS'];
    const data = [{ 'employeeName': "Revanth", 'role': 'engineer', 'laptopName': "Lenovo", 'model': "bbbbb", 'status': "active" },
    { 'employeeName': "Revanth", 'role': 'engineer', 'laptopName': "Lenovo", 'model': "bbbbb", 'status': "active" },
    { 'employeeName': "Revanth", 'role': 'engineer', 'laptopName': "Lenovo", 'model': "bbbbb", 'status': "active" },
    { 'employeeName': "Revanth", 'role': 'engineer', 'laptopName': "Lenovo", 'model': "bbbbb", 'status': "active" },
    { 'employeeName': "Revanth", 'role': 'engineer', 'laptopName': "Lenovo", 'model': "bbbbb", 'status': "active" }
    ];
    return (
        <div className="mainContainer">
            <SideBar />
            <div className="page">
                <div className='infoBar'>
                    <span className='pageName'>Laptop Management</span>
                    <span className='profile'>
                        <span class="icon notification"></span>
                        <span className='username'>John HR</span>
                        <span className='icon profile'></span>
                    </span>
                </div>
                <div className='toolbar'>
                    <span class="toolbarLeft">
                        <input type="text" placeholder="search" className='search' />
                        <select name="cars" id="cars" className='dropdown'>
                            <option value="volvo">Volvo</option>
                        </select>
                        <select name="cars" className='dropdown'>
                            <option value="volvo">Volvo</option>
                        </select>
                        <button className='filter'>Apply Filter</button>
                    </span>
                    <button className='new filter'>+ Create</button>
                </div>
                <table>
                    <tr className='checkbox'>
                        <th><input type='checkbox' className='checkbox'/></th>
                        {columns.map(column => { return <th>{column}</th> })}
                    </tr>
                    {data.map(row => {
                        return (
                            <tr>
                                <td><input type='checkbox' className='checkbox'/></td>
                                <td>
                                    <p className='cell'>{row.employeeName}</p>
                                    <p className='role'>{row.role}</p>
                                </td>
                                <td className='cell'>{row.laptopName}</td>
                                <td className='cell'>{row.model}</td>
                                <td className='cell'>{row.status}</td>
                                <td className='actions'>
                                    <span className='edit'></span>
                                    <span className='delete'></span>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}