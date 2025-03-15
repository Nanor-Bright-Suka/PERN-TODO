import express from "express";
import cors from "cors";
import  todoRoutes  from "./Routes/todoRoutes.js";


const app = express();
const PORT = 5500;

//middleware
app.use(cors());
app.use(express.json());

//ROUTES
//Home Route
app.get("/", async (req, res) => {
    res.send("Hello World");
 });

//Create a Todos Middleware
app.use("/todos", todoRoutes);
 

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));