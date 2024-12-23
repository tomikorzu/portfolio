import aboutData from "../../data/aboutData.json";

export default function Card({
  title,
  name,
  startDate,
  endDate,
  image,
  description,
}: {
  title: string;
  name: string;
  startDate: string;
  endDate: string;
  image: string;
  description: string;
}) {
  return (
    <li className="w-full h-[200px] bg-slate-400 rounded-xl relative">
      <img
        src={image}
        alt={`${title} image`}
        className="w-10 h-10 object-cover absolute right-2 top-2 rounded-full"
      />
      <h2 className="max-w-[250px] mt-2">{title}</h2>
    </li>
  );
}
