import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel_controller.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id",  verifyAdmin, updateHotel);

// DELETE
router.delete("/:id",  verifyAdmin, deleteHotel);

// GET
router.get("/:id", getHotel);
// GET ALL
router.get("/", getHotels);

export default router;
