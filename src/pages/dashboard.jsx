function Dashboard() {
  const appliedJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
    },
    {
      id: 2,
      title: "DevOps Engineer",
      company: "Microsoft",
    },
  ];

  const savedJobs = [
    {
      id: 1,
      title: "React Developer",
      company: "Infosys",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Amazon",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">

      {/* PROFILE SECTION */}
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl mb-10">

        <div className="flex flex-col md:flex-row items-center gap-6">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-cyan-400"
          />

          <div>
            <h1 className="text-4xl font-bold text-cyan-400">
              Aanchal Sharma
            </h1>

            <p className="text-gray-400 mt-2">
              MCA Student | React Developer | DevOps Enthusiast
            </p>

            <p className="text-gray-500 mt-1">
              aanchal@gmail.com
            </p>
          </div>

        </div>

      </div>

      {/* APPLIED JOBS */}
      <div className="mb-12">

        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          Applied Jobs
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {appliedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg"
            >

              <h3 className="text-2xl font-bold">
                {job.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {job.company}
              </p>

              <button className="mt-5 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl font-semibold">
                View Details
              </button>

            </div>
          ))}

        </div>

      </div>

      {/* SAVED JOBS */}
      <div>

        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          Saved Jobs
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {savedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg"
            >

              <h3 className="text-2xl font-bold">
                {job.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {job.company}
              </p>

              <button className="mt-5 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl font-semibold">
                Apply Now
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;