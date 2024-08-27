import express from "express";
import {
  createResidency,
  deleteResidency,
  getAllResidencies,
  getResidency,
} from "../controllers/residencyControllers.js";
import jwtCheck from "../config/auth0Config.js";
const router = express.Router();

router.post("/create", jwtCheck, createResidency);
router.get("/allresd", getAllResidencies);
router.get("/:id", getResidency);
router.delete("/:id", jwtCheck, deleteResidency);
export { router as residencyRoute };
