import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    let token = {auth: true}

    return(
    <>
        {token.auth ? <Outlet/> : <Navigate to='/login'/>}
    </>
    )
}

export default ProtectedRoute;