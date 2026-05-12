import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-gray-900 shadow-lg">

      <h1 className="text-3xl font-bold text-cyan-400">
        JobPortal 🚀
      </h1>

      <ul className="flex gap-8 text-lg items-center">

        <li>
          <Link
            to="/"
            className="hover:text-cyan-400"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/jobs"
            className="hover:text-cyan-400"
          >
            Jobs
          </Link>
        </li>
        <li> <Link
            to="/dashboard"
            className="hover:text-cyan-400 transition"
          >
            Dashboard
          </Link></li>

        <li>
          <Link
            to="/login"
            className="hover:text-cyan-400"
          >
            Login
          </Link>
        </li>

        <li>
          <Link
            to="/signup"
            className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600"
          >
            Signup
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;