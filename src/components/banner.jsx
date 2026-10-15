import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-10 md:py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">

        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Your Ideal
            <span className="block text-gradient">Development Stack</span>
          </h1>

          <p className="mt-4 max-w-md text-gray-600">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-6 flex gap-3">
            <button className="cursor-pointer rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white">
              Explore Technologies
            </button>
            <button className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2.5 text-sm text-gray-700">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img src={bannerImg} alt="Development stack illustration" className="mx-auto w-full max-w-md" />
        </div>

      </div>
    </section>
  );
};

export default Banner;