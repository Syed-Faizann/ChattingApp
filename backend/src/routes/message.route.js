import express from "express"
import { getUserForSidebar } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();


router.get("/users",protectRoute, getUserForSidebar)



export default router