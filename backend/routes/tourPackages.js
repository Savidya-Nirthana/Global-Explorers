import express from "express";
import { getData } from "../Controllers/tourPackageController.js";


const router = express.Router()

router.get('/get_data', getData);

export default router;