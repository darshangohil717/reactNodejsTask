import express from "express";
import UserController from "../module/user/controller/UserController";
const router = express.Router();

router.post("/create", UserController.saveUser);

router.post("/login", UserController.login);

router.get("/get-all-users", UserController.getAllUsers);

export default  router;