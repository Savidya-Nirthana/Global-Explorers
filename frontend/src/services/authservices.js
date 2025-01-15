import API from "./aiosinstances";

const API_URL = "api/users";
export const login = async (username, password) => {
  try {
    const response = await API.post(
      `${API_URL}/login`,
      { username, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const logout = async() => {
    try{
        const response = await API.get(
            `${API_URL}/logout`,
            {withCredentials:true}
        )
        return response;
    }catch(err){
        console.log(err.message);
    }
}

export const getUser = async () => {
  try {
    const response = await API.get(`${API_URL}/getUser`, {
      withCredentials: true,
    });
    return response.data.user;
  } catch (err) {
    console.log("Unauthorized access: ");
  }
};
