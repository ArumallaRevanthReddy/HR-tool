import { Dashboard } from './components/dashboard/Dashboard';
import { Login } from './components/login/Login';
import { Route, Routes, Navigate } from 'react-router';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route exact path='/dashboard' element={<Dashboard />}></Route>
      </Route>
      <Route exact path='/login' element={<Login />}></Route>
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
    // <div>
    //   <Login/>
    // </div>
  );
}

export default App;
