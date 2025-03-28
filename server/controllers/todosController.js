import pool from "../db.js";



//Get all Todos
 export const  getTodos = async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.error(error.message);
    }
    
};

//GET a Todo
export const getTodo = async (req, res) => { 
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
    
};



 //Create Todos
export const createTodo = async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
    
};


//Update a Todo
export const updateTodo =  async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
    await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        res.json("Todo was updated!");
    } catch (error) {
        console.error(error.message);
    }
    
};

//Delete a Todo
export const deleteTodo =  async (req, res) => {
    try {
        const { id } = req.params;
         await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was deleted!");
    } catch (error) {
        console.error(error.message);
    }
   
};

