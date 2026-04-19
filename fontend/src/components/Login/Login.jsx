import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

// Hàm kiểm tra lỗi
const validate = {
  isRequired: (value) => (value ? undefined : "This field is required"),
  isEmail: (value) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
      ? undefined
      : "Please enter a valid email",
};

const Login = ({ useLogin, setUseLogin }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Xử lý thay đổi giá trị input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Kiểm tra các lỗi trong form
  const validateForm = () => {
    const newErrors = {};
    newErrors.email = validate.isEmail(formValues.email);
    newErrors.password = validate.isRequired(formValues.password);
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  // Xử lý submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await fetch("API_LOGIN_URL", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues),
        });
        setIsLoading(false);
        if (response.ok) {
          const data = await response.json();
          console.log("Login successful:", data);
          setUseLogin(false);
          // Thực hiện các hành động sau khi đăng nhập thành công
        } else {
          console.error("Login failed");
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-cyan-300/10 flex justify-center items-center dark:bg-gray-300 dark:text-black duration-200">
      <div className="h-screen w-screen top-0 left-0 bg-black/50 z-51 backdrop-blur-sm">
        <div className="container mt-12 p-10 sm:pb-0 w-[400px] bg-white bor rounded-lg">
          <div className="flex">
            <h1 className="text-4xl ml-4 font-comic ">Login</h1>
          </div>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label className="text-xs px-3">Email | Phone number</label>
              <input
                name="email"
                type="email"
                placeholder="@gmail.com"
                className="w-full rounded-full border text-black border-gray-300 dark:border-gray-900 dark:bg-gray-300 px-2 py-1"
                value={formValues.email}
                onChange={handleInputChange}
                onBlur={validateForm} // Kiểm tra khi rời khỏi trường input
              />
              {errors.email && (
                <span className="text-orange-500 text-xs ml-3">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="mb-4 relative">
              <label className="text-xs px-3">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full rounded-full border text-black border-gray-300 dark:border-gray-900 dark:bg-gray-300 px-2 py-1"
                value={formValues.password}
                onChange={handleInputChange}
                onBlur={validateForm} // Kiểm tra khi rời khỏi trường input
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs absolute right-4 top-8 text-gray-600 dark:text-gray-400 cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
              {errors.password && (
                <span className="text-orange-500 text-xs ml-3">
                  {errors.password}
                </span>
              )}
            </div>
            <p className="text-xs text-left ml-2 mt-2 mb-2">
              Please login to continue...
            </p>

            <Link
              to="/forgotpassword"
              className="underline mb-6 text-xs text-right block hover:text-orange-500 dark:hover:text-orange-500 duration-200 mt-2"
            >
              Forgot password
            </Link>

            <div className="flex justify-around pb-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-6 rounded-full"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Login"}
              </button>

              <button
                type="button"
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-6 rounded-full"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
