import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex justify-center items-center h-[80vh]">

      <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl w-[400px]">

        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-8">
          Signup
        </h1>

        <form className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Enter your name"
            className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
          />

          <input
            type="password"
            placeholder="Create password"
            className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
          />

          <button
            className="bg-cyan-500 hover:bg-cyan-600 p-4 rounded-lg text-lg font-semibold"
          >
            Signup
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-cyan-400 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;