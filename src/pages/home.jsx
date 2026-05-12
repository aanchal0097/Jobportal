function Home() {
  const APP_NAME = import.meta.env.VITE_APP_NAME;
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col justify-center items-center text-center px-6 h-[90vh] bg-gradient-to-r from-gray-950 via-gray-900 to-cyan-950">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Find Your
          <span className="text-cyan-400"> Dream Job</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-2xl mt-6 max-w-2xl">
          Discover thousands of job opportunities with all the
          information you need. Your future starts here 🚀
        </p>

        {/* SEARCH BAR */}
        <div className="flex flex-col md:flex-row gap-4 mt-10 w-full max-w-3xl">

          <input
            type="text"
            placeholder="Search jobs..."
            className="flex-1 p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
          />

          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold transition">
            Search
          </button>

        </div>

        {/* BUTTONS */}
        <div className="flex gap-6 mt-10">

        </div>

      </section>

    </div>
  );
}

export default Home;