import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user_controller.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=> {
//     res.send("Hello user, now you're logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=> {
//     res.send("Hello user, now you're logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=> {
//     res.send("Hello admin, now you're logged in and you can delete all accounts")
// })

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);
// GET ALL
router.get("/", verifyAdmin, getUsers);

export default router