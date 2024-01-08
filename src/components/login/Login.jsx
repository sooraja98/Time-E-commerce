import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; // Regex pattern for email validation
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; // Regex pattern for password validation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the email and password fields
    if (name === "email" && !emailRegex.test(value)) {
      setErrors({
        ...errors,
        email: "Invalid email address",
      });
    } else if (name === "password" && !passwordRegex.test(value)) {
      setErrors({
        ...errors,
        password: "Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 6 characters long",
      });
    } else {
      // Clear the specific error if the input is valid
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = () => {
    // the logic that sends the data to the backend
  };

  return (
    <section className="text-black min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <div className="p-8 bg-gray-50 rounded-lg shadow-2xl">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-black">
            Log In
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {errors.general && (
              <div className="text-red-500 text-sm">{errors.general}</div>
            )}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full px-4 py-3 border rounded-lg focus:ring-primary-600 focus:border-primary-600  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && (
                <div className="text-red-500 text-sm">{errors.password}</div>
              )}
            </div>
            <button
              type="submit"
              className="w-full  bg-gray-400 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-semibold rounded-lg text-sm py-3"
            >
              Log In
            </button>

            <p className="text-sm font-light mt-3">
              Dont have an account?{' '}
              <Link to="/register" className="font-semibold text-primary-600 hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
