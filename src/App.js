import { LaptopManagement } from './pages/laptop management/LaptopManagement';
import { Login } from './pages/login/Login';
import { Route, Routes, Navigate } from 'react-router';
import ProtectedRoute from './utils/ProtectedRoute';
import './App.css'
import { WfhManagement } from './pages/wfh-management/WfhManagement';
import { SideBar } from './components/side-bar/Sidebar';
import { Recruitment } from './pages/recruitment/Recruitment';
import { Settings } from './pages/settings/Settings';
import { Applicants } from './pages/recruitment/components/Applicants/Applicants';

function App() {
  // const [isLogggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);

  return (
    <div className='mainContainer'>
      <SideBar />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route exact path='/dashboard' element={<LaptopManagement />}></Route>
          <Route exact path='/wfh' element={<WfhManagement />}></Route>
          <Route exact path='/recruitment' element={<Recruitment />}></Route>
          <Route exact path='/recruitment/applicants' element={<Applicants />}></Route>
          <Route exact path='/settings' element={<Settings />}></Route>
        </Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </div>
  );
}

export default App;
