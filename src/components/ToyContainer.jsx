import ToyCard from "./ToyCard";

function ToyContainer({ toys, onLike, onDonate }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* Render one card per toy */}
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onLike={onLike}
          onDonate={onDonate}
        />
      ))}
    </div>
  );
}

export default ToyContainer;