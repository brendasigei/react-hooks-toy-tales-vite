import { useState } from "react";

function ToyForm({ onAddToy }) {
  // Controlled inputs: form values only matter inside this component
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  // On submit, pass the new toy up to App and clear the form
  function handleSubmit(e) {
    e.preventDefault();
    onAddToy({ name, image });
    setName("");
    setImage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-8 flex max-w-md flex-col gap-3 rounded-lg bg-white p-4 shadow"
    >
      <h3 className="text-xl font-semibold">Create a toy!</h3>
      <input
        type="text"
        placeholder="Enter a toy's name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="rounded border border-gray-300 p-2"
      />
      <input
        type="text"
        placeholder="Enter a toy's image URL..."
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
        className="rounded border border-gray-300 p-2"
      />
      <button
        type="submit"
        className="rounded bg-blue-600 p-2 font-medium text-white hover:bg-blue-700"
      >
        Create New Toy
      </button>
    </form>
  );
}

export default ToyForm;