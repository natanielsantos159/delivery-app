import { useRoutes, Navigate } from "react-router-dom";
import Login from "../components/Login";

export default function Router() {
  return useRoutes([
    {
      path: '/', element: <Navigate to="/login" replace />
    },
    {
      path: '/login', element: <Login />, 
    }
  ]);
}