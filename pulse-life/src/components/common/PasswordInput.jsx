/* eslint-disable react/prop-types */
import { useField } from "formik";
import { FaEyeSlash, FaEye } from "react-icons/fa";

function PasswordInput({ type, showPassword, handleToggle, ...props }) {
  const [fields, meta] = useField(props);
  return (
    <section className="w-full" tabIndex="0">
      <div
        className={`w-full bg-gray-100 flex ${
          meta.touched && meta.error && "border-red-100"
        } py-1 border-2 border-gray-600 rounded-md focus-within:border-black`}
      >
        <input
          type={type}
          {...fields}
          {...props}
          className="flex-grow focus:outline-none py-2 pl-3 bg-transparent text-black placeholder:text-gray-600 "
        />
        <button
          type="button"
          onClick={handleToggle}
          className="w-10 flex justify-center items-center cursor-pointer"
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      {meta.touched && meta.error && (
        <p className="text-red-100 pl-1 font-openSans font-bold">
          {meta.error}
        </p>
      )}
    </section>
  );
}

export default PasswordInput;