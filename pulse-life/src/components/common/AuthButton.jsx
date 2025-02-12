/* eslint-disable react/prop-types */
import { useFormikContext } from "formik";
import { ClipLoader } from "react-spinners";

function AuthButton({ action, children }) {
  const { isSubmitting } = useFormikContext();
  return (
    <div className="mt-2 w-full text-center">
      <button
        type="submit"
        disabled={isSubmitting}
        className={`border-none font-bold py-2 w-5/6 sm:w-3/6 bg-green-600 text-white font-montserrat hover:bg-red-600 rounded ${
          isSubmitting && "disabled:bg-gray-600 disabled:cursor-not-allowed"
        } active:scale-95 tracking-wide text-lg sm:text-xl`}
      >
        {isSubmitting ? (
          <span className="flex justify-center items-center">
            <ClipLoader size={20} color="white" />
            &nbsp;
            {`${action}`}
          </span>
        ) : (
          children
        )}
      </button>
    </div>
  );
}
export default AuthButton;