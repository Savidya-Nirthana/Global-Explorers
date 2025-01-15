import Users from "../models/user.model.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
export const userLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.find({ userName: username });
  if (user.length === 1) {
    if (password === user[0].password) {
      const userToken = { name: user[0].userName, email: user[0].email };
      const accessToken = jwt.sign(userToken, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });
      res
        .cookie("jwt", accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "development",
          sameSite: "strict",
          maxAge: 3600000,
        })
        .json({ message: "login successful" });
    }else{
        return res.status(401).json({ error: "invalid username or password" });
    }
  } else {
    return res.status(401).json({ error: "invalid username or password" });
  }
};
export const authenticateJWT = (req, res, next) => {
  const token = req.cookies.jwt;

    if (token) {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
          res.status(500).json({ error: err.message });
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).json({ message: "Authorization token required" });
    }
};

export const getUser = (req, res) => {
  res.json({ message: "access granted", user: req.user });
};

export const logout = (req, res) => {
    res.clearCookie("jwt" , {
        httpOnly: true,
        secure: process.env.NODE_ENV === "development",
        sameSite: "strict"
    }).json({message: "successfully logout"});
}
