import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars min")
  });

  const initialValues = {
    email: "",
    password: ""
  };

const Login = () => {
  return (
      <div className="w-[100%] h-[100vh] flex">
      <div className="w-[50%] bg-[url('/images/login.png')] bg-[100%] bg-lightgray bg-cover bg-no-repeat relative z-[-100]">
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[40%] bg-white opacity-10 w-[580px] rounded-[20px] flex pt-10 pb-10 pr-[60px] pl-[60px] items-center justify-center backdrop-blur-[35px] z-[1]"><p className="text-blue font-satoshi text-3xl not-italic font-medium z-[100]">Everyone deserves fair access to <br/> quality food, nutritional education,and <br/> adequate health care.</p></div>
          </div>
          <div className="w-[50%]"></div>
    </div>
  )
}

export default Login