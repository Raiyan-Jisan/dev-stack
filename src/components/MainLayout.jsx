import { useEffect, useState } from "react";
import Loading from "./Loading";
import AllTechnologies from "./AllTechnologies";

const MainLayout = () => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
   <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-extrabold">
        Explore the <span className="text-gradient">Technologies</span>
      </h2>
      <p className="mt-1 mb-6 text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>
      <AllTechnologies
        technologies={technologies}
        stack={stack}
        setStack={setStack}
      />
    </section>
  );
};

export default MainLayout;


{/* <AllTechnologies
  technologies={technologies}
  stack={stack}
  setStack={setStack}
/> */}