import { adminLogin,createAdmin } from "../controller/admin.js";
import express from "express";
import { home } from "../controller/home.js";
import { authenticatejwt } from "../middleware/authenticatejwt.js";
const router=express.Router();
router.post("/admin/login",adminLogin);
router.post("/admin/register",createAdmin)
router.post("/admin/home",authenticatejwt,home)
export default router;