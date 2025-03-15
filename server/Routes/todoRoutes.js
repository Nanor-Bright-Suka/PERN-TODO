import express from "express";
const router = express.Router();
import { getTodos, getTodo, createTodo, deleteTodo, updateTodo } from "../controllers/todosController.js";

router.get("/", getTodos);

router.get("/:id", getTodo);

router.post("/", createTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);



export default router;