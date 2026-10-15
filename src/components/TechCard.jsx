import { toast } from "react-toastify";

const badgeStyles = {
  Popular: "bg-sky-50 text-sky-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-500",
  "SSR / Edge": "bg-violet-50 text-violet-600",
  Standard: "bg-green-50 text-green-600",
  "Top SQL": "bg-blue-50 text-blue-600",
  Cache: "bg-rose-50 text-rose-500",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-cyan-50 text-cyan-600",
  Robust: "bg-sky-50 text-sky-600",
  Modern: "bg-teal-50 text-teal-600",
  Containers: "bg-blue-50 text-blue-600",
};

const TechCard = ({ tech, stack, setStack }) => {
  const isAdded = stack.some((item) => item.id === tech.id);

  const handleAdd = () => {
    if (isAdded) return toast.warning(`${tech.name} is already in your stack`);
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  return (
    <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-10 w-10 object-contain" />
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${badgeStyles[tech.badge]}`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold">{tech.name}</h3>
      <p className="mt-1 flex-1 text-sm text-gray-500">{tech.description}</p>

      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-xs">
        <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
          {tech.category}
        </span>
        <span className="text-gray-500">{tech.difficulty}</span>
        <span className="font-semibold text-gray-700">
          <span className="text-yellow-400">★</span> {tech.rating}
        </span>
      </div>

      <button
        onClick={handleAdd}
        // disabled={isAdded}
        className="mt-4 w-full cursor-pointer rounded-lg bg-gray-900 py-2.5 text-sm font-semibold text-white "
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;