import { adminLogin,createAdmin } from "../controller/admin.js";
import express from "express";
import { home } from "../controller/home.js";
import { authenticatejwt } from "../middleware/authenticatejwt.js";
const router=express.Router();
router.post("/admin/login",adminLogin);
router.post("/admin/register",createAdmin)
router.get("/admin/home",authenticatejwt,home)
router.get("/admin/verify", authenticatejwt, (req, res) => {
  res.status(200).json({ message: "Token valid" });
});

export default router;