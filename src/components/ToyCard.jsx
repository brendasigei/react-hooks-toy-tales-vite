function ToyCard({ toy, onLike, onDonate }) {
  const { id, name, image, likes } = toy;

  return (
    <div
      data-testid="toy-card"
      className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow"
    >
      <h2 className="text-lg font-bold">{name}</h2>
      <img
        src={image}
        alt={name}
        className="h-40 w-40 rounded object-cover"
      />
      <p className="text-gray-600">
        {likes}{" Likes "}
      </p>
      <button
        onClick={() => onLike(toy)}
        className="rounded bg-pink-500 px-4 py-1 text-white hover:bg-pink-600"
      >
        Like &lt;3
      </button>
      <button
        onClick={() => onDonate(id)}
        className="rounded bg-gray-700 px-4 py-1 text-white hover:bg-gray-800"
      >
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;