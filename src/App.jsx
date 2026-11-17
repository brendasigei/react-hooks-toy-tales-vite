import { useState, useEffect } from "react";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API_URL = "http://localhost:3001/toys";

function App() {
  // Single source of truth for all toys
  const [toys, setToys] = useState([]);

  // GET: load all toys once when the page loads
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // POST: create a new toy (likes start at 0) and add it to state
  function handleAddToy(newToy) {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newToy, likes: 0 }),
    })
      .then((res) => res.json())
      .then((createdToy) => setToys((prev) => [...prev, createdToy]));
  }

  // PATCH: increase a toy's likes, then swap it in place so order is kept
  function handleLike(toy) {
    fetch(`${API_URL}/${toy.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
      .then((res) => res.json())
      .then((updatedToy) =>
        setToys((prev) =>
          prev.map((t) => (t.id === updatedToy.id ? updatedToy : t))
        )
      );
  }

  // DELETE: remove the toy from the backend, then from state
  function handleDonate(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() =>
      setToys((prev) => prev.filter((t) => t.id !== id))
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <ToyForm onAddToy={handleAddToy} />
      <ToyContainer
        toys={toys}
        onLike={handleLike}
        onDonate={handleDonate}
      />
    </div>
  );
}

export default App;