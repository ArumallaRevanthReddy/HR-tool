import './SideBar.css'

export function SideBar() {
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
                <div className='item select'>
                    <span className='laptop icon'></span>
                    <span>Laptop Management</span>
                </div>
                <div className='item'>
                    <span className='icon wfh'></span>
                    <span>WFH Management</span>
                </div>
                <div className='item'>
                    <span className='icon recruitment'></span>
                    <span>Recruitment</span>
                </div>
                <div className='item'>
                    <span className='icon settings'></span>
                    <span>Settings</span>
                </div>
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