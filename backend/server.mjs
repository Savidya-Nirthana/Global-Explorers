import express from "express";
import tourPackages from "./routes/tourPackages.js";
import users from "./routes/users.js";
import conn from "./config/connection.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/tour_packages", tourPackages);
app.use("/api/users", users);

conn.then(() => {
  console.log("database connected");
  app.listen(4000, () => {
    console.log("Server is running");
  });
});

