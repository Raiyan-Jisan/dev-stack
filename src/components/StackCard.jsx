import { X } from "lucide-react";
import { toast } from "react-toastify";

const StackCard = ({ tech, stack, setStack }) => {
  const handleRemove = () => {
    const newStack = stack.filter((item) => item.id !== tech.id);
    setStack(newStack);
    toast.error(`${tech.name} removed from your stack`);
  };

  return (
    <div className="mt-2 flex items-center justify-between rounded-lg border border-gray-100 p-3">
      <div className="flex items-center gap-3">
        <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
        <div>
          <h4 className="text-sm font-semibold">{tech.name}</h4>
          <p className="text-xs text-gray-400">{tech.category}</p>
        </div>
      </div>
      <button className="cursor-pointer" onClick={handleRemove}>
        <X size={16} />
      </button>
    </div>
  );
};

export default StackCard;