import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import { useState } from "react";
import AuthButton from "./common/AuthButton";
import Input from "./common/Input";
import PasswordInput from "./common/PasswordInput";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";
import { sanitizeFormData } from "../utils/utils";

// Validation schema using Yup
const schema = Yup.object({
  username: Yup.string()
    .min(4, "Username should be more than 4 characters.")
    .required("Required."),
  email: Yup.string().email("Invalid email address.").required("Required."),
  password: Yup.string()
    .min(8, "Password must be 8 or more characters.")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/[0-9]/, "Password must contain at least one digit.")
    .required("Required."),
});

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      // Optional delay for loading animation visibility
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const updatedValues = sanitizeFormData(values);

      // Format data as expected by FastAPI with URLSearchParams
      const formData = new URLSearchParams();
      formData.append("username", updatedValues.username);
      formData.append("password", updatedValues.password);
      // Optionally include email if your backend supports it:
      // formData.append("email", updatedValues.email);

      // Call the backend signup endpoint
      const response = await axios.post(
        "http://127.0.0.1:8000/signup",
        formData.toString(),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      );
      console.log("Response: ", response.data);

      toast.success("Account created successfully!");

      actions.resetForm();
      navigate("/login");
    } catch (error) {
      console.error("Signup error: ", error.response?.data?.detail || error);
      const errorMessage =
        error.response?.data?.detail || "Signup failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      actions.setSubmitting(false);
    }
  };

  const togglePassword = () => setShowPassword((state) => !state);

  return (
    <section className="flex-grow min-h-screen bg-gray-100 dark:bg-night-200 flex items-center justify-center mt-10">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white rounded-md w-11/12 max-w-2xl px-6 py-5 flex flex-col items-center gap-5">
            <h2 className="text-xl sm:text-3xl text-green-600 font-bold uppercase">
              Create your account
            </h2>

            <Input
              type="text"
              name="username"
              placeholder="Enter your username."
            />

            <Input type="email" name="email" placeholder="Enter your email." />

            <PasswordInput
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password."
              handleToggle={togglePassword}
              showPassword={showPassword}
            />

            <div className="text-red-500 text-sm font-semibold">
              <ErrorMessage name="server" />
            </div>

            <AuthButton
              className="bg-green-600 text-white py-2 px-4 rounded-md"
              action="Creating account..."
              disabled={isSubmitting}
            >
              Create account
            </AuthButton>

            <div className="font-bold font-openSans text-base text-night-200 flex flex-col items-center sm:flex-row gap-2">
              <p>Already have an account?</p>
              <Link to="/login" className="text-red-600 hover:underline">
                Log in
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default Signup;