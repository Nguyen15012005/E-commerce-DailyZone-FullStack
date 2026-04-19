import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ForgotPassword = ({ useRegister, setUseRegister }) => {
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    password: "",
    password_confirmation: "",
    gender: "",
    province: "",
    avatar: null,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes (including files for avatar)
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues({
      ...formValues,
      [name]: files ? files[0] : value,
    });
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    newErrors.fullname = validate.isRequired(formValues.fullname);
    newErrors.email = validate.isEmail(formValues.email);
    newErrors.password = validate.minLength(formValues.password, 6);
    newErrors.password_confirmation = validate.isConfirmed(
      formValues.password_confirmation,
      formValues.password
    );
    newErrors.gender = validate.isRequired(formValues.gender);
    newErrors.province = validate.isRequired(formValues.province);
    newErrors.avatar = validate.isRequired(formValues.avatar);
    setErrors(newErrors);

    return Object.values(newErrors).every((error) => !error);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Register form data:", formValues);
    } else {
      // Nếu có lỗi, form sẽ không được submit
      console.log("Form has errors");
    }
  };

  // Validation functions
  const validate = {
    isRequired: (value) => (value ? undefined : "This field is required"),
    isEmail: (value) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        ? undefined
        : "This field must be a valid email",
    minLength: (value, min) =>
      value.length >= min
        ? undefined
        : `Please enter at least ${min} characters`,
    isConfirmed: (value, confirmValue) =>
      value === confirmValue ? undefined : "Code confirmation does not match",
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-cyan-300/10 flex justify-center items-center dark:bg-gray-300 dark:text-black duration-200">
      <div className="h-screen w-screen top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
        <div
          className="container mt-8 p-6 sm:pb-0 w-[400px] bg-white bor rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-4xl ml-4 font-comic text-black">Forgot Password</h1>
          </div>

          {/* Input */}
          <div className="mt-2 text-black">
            <div className="mb-4">
              <label className="text-xs px-3">
                Email | Phone number of account
              </label>
              <input
                name="email"
                type="email"
                placeholder="e.g., john.doe@gmail.com"
                className="w-full text-xs h-10 rounded-full border border-gray-300 dark:border-gray-900 dark:bg-gray-300 px-5 py-1"
                value={formValues.email}
                onChange={handleInputChange}
                onBlur={validateForm}
              />
              {errors.email && (
                <span className="ml-3 text-orange-500 text-sm">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-4 relative">
              <label className="text-xs px-3">Code</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Code"
                className="w-full text-xs h-10 rounded-full border border-gray-300 dark:border-gray-900 dark:bg-gray-300 px-5 py-1"
                value={formValues.password}
                onChange={handleInputChange}
                onBlur={validateForm} // Kiểm tra khi rời khỏi trường input
              />
              <span className="text-xs absolute right-4 top-8 text-gray-600 dark:text-gray-400 cursor-pointer"></span>

              <span className="ml-3 text-orange-500 text-sm"></span>
            </div>

            <div className="flex justify-end text-xs mr-4 mb-6">
              <input type="checkbox" name="" id="" />
              <p className="ml-2 dark:text-black">You are not a robot</p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-around pb-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-6 rounded-full"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Continues"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
