import { useState } from "react";



const InputTodo = () => {
    const [inputValue, setInputValue] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

      try {
      const response = await fetch("http://localhost:5500/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: inputValue }),
      });
        window.location = "/";
      if (response.ok) {
        alert("Data sent successfully!");
        setInputValue("");
      } else {
        alert("Failed to send data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };
    return (
        <>
            <div className="flex justify-center items-center  my-20">
      <form onSubmit={handleSubmit} className="flex bg-white p-6 rounded-xl w-1/3">
        <label className="block text-gray-700 font-semibold mb-2">Enter Todo</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full px-4 py-2 border rounded-md mx-5"
          placeholder="Type something..."
        />
        <button
          type="submit"
          className="mt-4 w-40 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
        </>
)
}

export default InputTodo;