import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Formik, Form } from "formik";
import Input from "./common/Input";
import PasswordInput from "./common/PasswordInput";
import AuthButton from "./common/AuthButton";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";
import { sanitizeFormData } from "../utils/utils";

// Validation schema using Yup
const schema = Yup.object({
  username: Yup.string()
    .min(4, "Username should be more than 4 characters.")
    .required("Required."),
  password: Yup.string()
    .min(8, "Password must be 8 or more characters.")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/[0-9]/, "Password must contain at least one digit.")
    .required("Required."),
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const path = state?.redirectTo || "/";

  const handleSubmit = async (values, actions) => {
    actions.setSubmitting(true);
    try {
      // Delay for loading animation visibility
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const updatedValues = sanitizeFormData(values);

      // Format data as expected by FastAPI with URLSearchParams
      const formData = new URLSearchParams();
      formData.append("username", updatedValues.username);
      formData.append("password", updatedValues.password);

      // Call the backend login endpoint
      const response = await axios.post(
        "http://127.0.0.1:8000/token",
        formData.toString(),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      );

      // Save the token directly to localStorage
      localStorage.setItem("token", response.data.access_token);

      toast.success("Login successful!");

      actions.resetForm();
      navigate(path);
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage =
        error.response?.data?.detail || "Login failed. Please try again.";
      toast.error(errorMessage);
      actions.setErrors({ server: errorMessage });
    } finally {
      actions.setSubmitting(false);
    }
  };

  const togglePassword = () => setShowPassword((state) => !state);

  return (
    <section className="flex-grow min-h-screen bg-gray-100 dark:bg-night-200 flex justify-center items-center mt-10">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white rounded-md w-11/12 max-w-2xl px-6 py-5 flex flex-col items-center gap-5">
          <h2 className="text-xl sm:text-3xl text-green-600 font-bold uppercase">
            Welcome Back
          </h2>
          
          {/* Username input */}
          <Input
            type="text"
            name="username"
            placeholder="Enter your username."
          />

          {/* Password input */}
          <PasswordInput
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password."
            handleToggle={togglePassword}
            showPassword={showPassword}
          />

          {/* Forgot Password Link */}
          <Link
            to="/forgot-password"
            className="text-sm text-red-600 hover:underline self-end mt-[-10px]"
          >
            Forgot Password?
          </Link>

          <AuthButton
            className="bg-red-600 text-black py-2 px-4 rounded-md"
            action="logging in..."
          >
            Log in
          </AuthButton>

          <div className="font-bold font-openSans text-base text-night-200 flex flex-col items-center sm:flex-row gap-2">
            <p>Don&apos;t have an account?</p>
            <Link to="/signup" className="text-red-600 hover:underline">
              Create one now
            </Link>
          </div>
        </Form>
      </Formik>
    </section>
  );
}

export default Login;