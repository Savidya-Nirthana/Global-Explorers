import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { login } from "../../services/authservices";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const loginHandle = async () => {
    const response = await login(username, password);
    if (response.status) {
      alert("Invalid user name or password");
    } else {
      navigate("/admin");
    }
  };
  return (
    <>
      <div className="m-auto w-[400px] py-10 border-[2px] border-slate-800 flex flex-col items-center mt-[50vh] translate-y-[-50%] rounded-md">
        <div>
          <div className=" text-[24px] font-bold pb-5">Admin Login</div>
          <div className="flex flex-col gap-3">
            <div>
              <FontAwesomeIcon className="pr-3 " icon={faUser} size="xl" />
              <input
                className="px-2 py-1 border-2 w-[300px] rounded-md border-slate-800"
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div>
              <FontAwesomeIcon icon={faLock} className="pr-3 " size="xl" />
              <input
                type="password"
                className="px-2 py-1 border-2 rounded-md w-[300px] border-slate-800"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            className="px-4 mt-5 py-1 m-3 bg-slate-800 text-slate-50 text-[18px] rounded-md"
            onClick={loginHandle}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
