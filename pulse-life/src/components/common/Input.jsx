/* eslint-disable react/prop-types */
import { useField } from "formik";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { FaKey, FaHouse, FaPhone } from "react-icons/fa6";

function Input({ type, ...props }) {
  const [fields, meta] = useField(props);

  let Icon = null;

  if (props.name === "username") {
    Icon = FaUser;
  }

  if (props.name === "email") {
    Icon = FaEnvelope;
  }

  if (props.name === "hostel_name" || props.name === "block_number") {
    Icon = FaHouse;
  }

  if (props.name === "room_number") {
    Icon = FaKey;
  }

  if (props.name === "phone_number") {
    Icon = FaPhone;
  }
  return (
    <section className="w-full">
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
          className="w-10 flex justify-center items-center cursor-default"
        >
          <Icon />
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

export default Input;