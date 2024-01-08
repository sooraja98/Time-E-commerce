import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Define regex patterns for validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // Validation logic
    if (name === "email" && !emailPattern.test(value)) {
      setErrors({ ...errors, email: "Invalid email format" });
    } else if (name === "password" && !passwordPattern.test(value)) {
      setErrors({ ...errors, password: "Password must contain at least 8 characters, one uppercase letter, and one number" });
    } else {
      // Clear validation errors
      setErrors({ ...errors, [name]: "" });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation logic
    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Passwords do not match" });
      return;
    }

    // If validation passes, send a POST request to the backend
    try {
      const response = await axios.post("http://localhost:4000/auth/userRegister", formData);
      if (response.data.message === "User already exists") {
        setSuccessMessage("User Already exists");
      } else {
        setSuccessMessage("Registration successful");
      }

      // Clear the form data
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      // Handle registration error
      if (error.response) {
        console.error("Registration failed:", error.response.data);
        setErrors(error.response.data);
      } else {
        console.error("Registration failed:", error.message);
        setErrors({ general: "Registration failed. Please try again later." });
      }
    }
  };

  return (
    <section className="text-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <div className="p-8 bg-white dark:bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-black">
            Create an Account
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {errors.general && (
              <div className="text-red-500 text-sm">{errors.general}</div>
            )}
            {successMessage === "User Already exists" ? (
              <div className="text-red-800 text-sm">{successMessage}</div>
            ) : (
              <div className="text-green-500 text-sm">{successMessage}</div>
            )}
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">
                Your User Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.name ? "border-red-500" : "focus:ring-primary-600 focus:border-primary-600"
                } dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black ${
                  errors.name ? "dark:text-red-500" : "dark:text-white"
                } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-black ">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.email ? "border-red-500" : "focus:ring-primary-600 focus:border-primary-600"
                } dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black ${
                  errors.email ? "dark:text-red-500" : "dark:text-white"
                } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="name@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.password ? "border-red-500" : "focus:ring-primary-600 focus:border-primary-600"
                } dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black ${
                  errors.password ? "dark:text-red-500" : "dark:text-white"
                } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.confirmPassword ? "border-red-500" : "focus:ring-primary-600 focus:border-primary-600"
                } dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black ${
                  errors.confirmPassword ? "dark:text-red-500" : "dark:text-white"
                } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gray-400 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-semibold rounded-lg text-sm py-3"
            >
              Create an Account
            </button>

            <p className="text-sm font-light mt-3 text-black">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-primary-600 hover:underline">
                Log in here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
