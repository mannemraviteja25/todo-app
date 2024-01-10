import { useState } from "react";

export function CreateTodo({ onTodoCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddTodo = () => {
    setLoading(true);

    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Failed to add todo: ${res.statusText}`);
        }

        const json = await res.json();
        // alert("Todo created successfully");
        onTodoCreated(); // Trigger the parent component to fetch updated todos

        // Clear input fields after successful addition
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
        // alert("Failed to add todo. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />

      <button onClick={handleAddTodo} disabled={loading}>
        {loading ? "Adding Todo..." : "Add a Todo"}
      </button>
    </div>
  );
}
