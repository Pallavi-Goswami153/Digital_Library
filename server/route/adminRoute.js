import { adminLogin,createAdmin } from "../controller/admin.js";
import express from "express";
const router=express.Router();
router.post("/admin",adminLogin);
router.post("/admin/register",createAdmin)
export default router;