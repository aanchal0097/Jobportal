import { useParams } from "react-router-dom";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "12 LPA",
    description:
      "We are looking for a skilled Frontend Developer with React experience.",
    skills: "React, Tailwind, JavaScript",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Amazon",
    location: "Hyderabad",
    salary: "15 LPA",
    description:
      "Looking for Node.js developer with database knowledge.",
    skills: "Node.js, Express, MongoDB",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Microsoft",
    location: "Pune",
    salary: "18 LPA",
    description:
      "Need DevOps engineer with Docker and AWS experience.",
    skills: "Docker, AWS, CI/CD",
  },
];

function JobDetails() {
  const { id } = useParams();

  const job = jobsData.find((job) => job.id === parseInt(id));

  if (!job) {
    return (
      <h1 className="text-center text-3xl mt-20 text-red-500">
        Job Not Found
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">

      <div className="max-w-3xl mx-auto bg-gray-900 p-10 rounded-2xl shadow-2xl">

        <h1 className="text-5xl font-bold text-cyan-400 mb-6">
          {job.title}
        </h1>

        <p className="text-xl text-gray-300 mb-3">
          Company: {job.company}
        </p>

        <p className="text-xl text-gray-300 mb-3">
          Location: {job.location}
        </p>

        <p className="text-xl text-gray-300 mb-6">
          Salary: {job.salary}
        </p>

        <h2 className="text-2xl font-bold mb-4 text-cyan-300">
          Job Description
        </h2>

        <p className="text-gray-400 leading-8 mb-8">
          {job.description}
        </p>

        <h2 className="text-2xl font-bold mb-4 text-cyan-300">
          Required Skills
        </h2>

        <p className="text-gray-400 mb-8">
          {job.skills}
        </p>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold text-lg">
          Apply Now
        </button>

      </div>

    </div>
  );
}

export default JobDetails;