import { useState } from "react";


const EditTodo = ({todo}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState(todo.description);


    // Update Description 
    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
             await fetch(`http://localhost:5500/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
      {/* Edit Button */}
      <button
        onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                id={`id${todo.todo_id}`}
      >
        Edit
      </button>

      {/* Modal */}
      {isOpen && (
                <div
                    className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
                    id={`id${todo.todo_id}`}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Name</h2>
            <input
              type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded-lg mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                onClick={e => updateDescription(e)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    )
}

export default EditTodo;



