import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "../../services/authservices.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const { name } = await getUser();
        setUser(name);
      } catch (e) {
        navigate("/admin/login");
      }
    };
    getData();
  }, []);
  return (
    <>
      <div>Welcome {user}</div>
      <div>
        <div>Add Users</div>
        <div>
          <FontAwesomeIcon icon={faUser} />
          <input placeholder="Username" />
        </div>

        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="email" placeholder="Email" />
        </div>

        <div>
          <FontAwesomeIcon icon={faLock} />
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <FontAwesomeIcon icon={faLock} />
          <input type="password" placeholder="Retype Password" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
