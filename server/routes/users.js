import express from "express";
import { getUsers, addUsers, deleteUsers, updateUsers } from "../controllers/user.js";

const router = express.Router()

router.get("/", getUsers)

router.post("/", addUsers)

router.delete("/:id", deleteUsers)

router.put("/:id", updateUsers)

export default router