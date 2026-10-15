import TechCard from "./TechCard";
import StackCard from "./StackCard";
import { toast } from "react-toastify";

const AllTechnologies = ({ technologies, stack, setStack }) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-9">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              stack={stack}
              setStack={setStack}
            />
          ))}
        </div>
      </div>

      <div className="col-span-12 lg:col-span-3">
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <h3 className="text-lg font-bold">Your Stack</h3>
          <p className="text-xs text-gray-400">
            {stack.length === 0
              ? "No technologies selected yet."
              : `${stack.length} Technology Selected`}
          </p>

          {stack.length === 0 ? (
            <div className="mt-4 rounded-lg border border-dashed border-gray-300 p-6 text-center text-sm text-gray-400">
              Your stack is empty.
            </div>
          ) : (
            <>
              {stack.map((tech) => (
                <StackCard
                  key={tech.id}
                  tech={tech}
                  stack={stack}
                  setStack={setStack}
                />
              ))}
              <button
                onClick={() => {
                  setStack([]);
                  toast.error("All technologies removed");
                }}
                className="mt-4 w-full cursor-pointer rounded-lg border border-red-400 py-2 text-sm font-semibold text-red-500"
              >
                Remove All
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllTechnologies;