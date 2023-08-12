import express from "express";
import {
  updateAdmin,
  deleteAdmin,
  getAdmin,
  getAllAdmins,
} from "../controllers/admin.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});

//UPDATE
router.put("/:id", updateAdmin);
//DELETE
router.delete("/:id", deleteAdmin);
//GET
router.get("/:id", getAdmin);
//GET ALL
router.get("/", getAllAdmins);

export default router;
