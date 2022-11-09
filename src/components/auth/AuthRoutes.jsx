import { Navigate, Outlet } from "react-router-dom";


const AuthRoutes = () => {
  localStorage.getItem("email")

  if (!localStorage.getItem("email")) {
    return <Navigate to="/" />;
  } else  {
    return <Outlet />;
  }
};
export default AuthRoutes;
