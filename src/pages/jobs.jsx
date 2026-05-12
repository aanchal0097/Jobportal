import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: 12,
    type: "WFH",
    domain: "Frontend",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Amazon",
    location: "Hyderabad",
    salary: 15,
    type: "Remote",
    domain: "Backend",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Microsoft",
    location: "Pune",
    salary: 18,
    type: "Full Time",
    domain: "DevOps",
  },
  {
    id: 4,
    title: "React Developer",
    company: "Infosys",
    location: "Jaipur",
    salary: 8,
    type: "Part Time",
    domain: "Frontend",
  },
];

function Jobs() {
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [salaryRange, setSalaryRange] = useState(0);

  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&

      (selectedDomain === "All" ||
        job.domain === selectedDomain) &&

      (selectedType === "All" ||
        job.type === selectedType) &&

      job.salary >= salaryRange
    );
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">

      {/* LEFT FILTER SIDEBAR */}
      <div className="w-[300px] bg-gray-900 p-6 border-r border-gray-800 sticky top-0 h-screen overflow-y-auto">

        <h2 className="text-3xl font-bold text-cyan-400 mb-8">
          Filters
        </h2>

        {/* DOMAIN FILTER */}
        <div className="mb-8">

          <h3 className="text-xl font-semibold mb-4">
            Domain
          </h3>

          <select
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          >
            <option>All</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>DevOps</option>
          </select>

        </div>

        {/* JOB TYPE FILTER */}
        <div className="mb-8">

          <h3 className="text-xl font-semibold mb-4">
            Job Type
          </h3>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          >
            <option>All</option>
            <option>WFH</option>
            <option>Remote</option>
            <option>Full Time</option>
            <option>Part Time</option>
          </select>

        </div>

        {/* SALARY FILTER */}
        <div className="mb-8">

          <h3 className="text-xl font-semibold mb-4">
            Minimum Salary: {salaryRange} LPA
          </h3>

          <input
            type="range"
            min="0"
            max="20"
            value={salaryRange}
            onChange={(e) => setSalaryRange(e.target.value)}
            className="w-full"
          />

        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 px-6 py-10">

        <h1 className="text-5xl font-bold text-center text-cyan-400 mb-10">
          Available Jobs
        </h1>

        {/* SEARCH BAR */}
        <div className="flex justify-center mb-12">

          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-2xl p-4 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-cyan-400"
          />

        </div>

        {/* JOB CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredJobs.map((job) => (

            <Link to={`/jobs/${job.id}`} key={job.id}>

              <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">

                <h2 className="text-2xl font-bold text-cyan-400">
                  {job.title}
                </h2>

                <p className="text-gray-300 mt-3">
                  Company: {job.company}
                </p>

                <p className="text-gray-300">
                  Location: {job.location}
                </p>

                <p className="text-gray-300">
                  Salary: {job.salary} LPA
                </p>

                <p className="text-gray-300">
                  Type: {job.type}
                </p>

                <p className="text-gray-300 mb-6">
                  Domain: {job.domain}
                </p>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toast.success("Application Submitted 🚀");
                  }}
                  className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold w-full"
                >
                  Apply Now
                </button>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Jobs;