import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authservices";
import { useEffect } from "react";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async() => {
        try {
            await logout();
            navigate('/admin');
        }catch(e) {
            console.log(e.message);
            navigate('/admin');
        }
    }
 
    useEffect(() => {
        handleLogout();
    }, []);      

  return null;
};

export default Logout;
