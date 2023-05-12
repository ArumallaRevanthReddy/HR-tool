import { useEffect, useState } from 'react';
import './SideBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedPage } from '../../utils/store';

export function SideBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedPage, setSelectedPage] = useState('dashboard');
    useEffect( () => {
        selectedPage === 'dashboard' ? navigate('/dashboard') : navigate('/wfh');
    }, []);

    return (
        <div className="sideBar">
            <div className='dashboardLogo'></div>
            <div className='menu'>
                <div className='header'>MENU</div>
                <div className='item'>
                    <span className='icon dashboard'></span>
                    <span>Dashboard</span>
                </div>
                <div className='item'>
                    <span className='icon messages'></span>
                    <span>Messages</span>
                </div>
                <div className='item'>
                    <span className='icon calender'></span>
                    <span>Calender</span>
                </div>
            </div>
            <div className='menu'>
                <div className='header'>ORGANIZATION</div>
                <Link className={ selectedPage === 'dashboard' ? 'item select' : 'item'} onClick={() => setSelectedPage('dashboard')} to='/dashboard'>
                    <span className='icon laptop'></span>
                    <span>Laptop Management</span>
                </Link>
                <Link className={ selectedPage === 'wfh' ? 'item select' : 'item'} to='/wfh' onClick={() => setSelectedPage('wfh')}>
                    <span className='icon wfh'></span>
                    <span>WFH Management</span>
                </Link>
                <Link className={ selectedPage === 'recruitment' ? 'item select' : 'item'} to='/recruitment' onClick={() => setSelectedPage('recruitment')}>
                    <span className='icon recruitment'></span>
                    <span>Recruitment</span>
                </Link>
                <Link className={ selectedPage === 'settings' ? 'item select' : 'item'} to='/settings' onClick={() => setSelectedPage('settings')}>
                    <span className='icon settings'></span>
                    <span>Settings</span>
                </Link>
            </div>
            <div className='logoutMenu'>
                <div className='item'>
                    <span className='icon logout'></span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    )
}