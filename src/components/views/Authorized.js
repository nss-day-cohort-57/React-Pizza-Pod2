import { Navigate } from "react-router-dom"

export const Authorized = ({ children }) => {

    if (localStorage.getItem("pizza_user")) {
        return children
    }
    else {
        return <Navigate to={`/login`} />
    }
}
