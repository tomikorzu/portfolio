import aboutData from "../../data/aboutData.json";

export default function Card({ type }: { type: string }) {
  const content = aboutData[type];
  return (
    <div className="container">
      <h2>{type}</h2>
      <div className="card">
        <img
          src={content.image}
          alt={`${content.title} image`}
          className="w-16 h-16"
        />
      </div>
    </div>
  );
}
