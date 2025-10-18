import {Router} from "express";
import {getUsers, getUser, deleteAllUsers, updateUser} from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";


const userRouter = Router();

userRouter.get("/",authorize, getUsers)
userRouter.get("/:id",authorize, getUser)

userRouter.post("/", (req, res) => res.send({title: "CREATE a new user"}))

userRouter.put("/:id", authorize, updateUser)

userRouter.delete("/:id", (req, res) => res.send({title: "DELETE a user"}))

userRouter.delete("/",authorize, deleteAllUsers)

export default userRouter;