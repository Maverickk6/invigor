import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-center p-2 m-2">Log In</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <form className="flex flex-col gap-2 pr-16">
          <div className="mb-4 flex flex-col">
            <label>Email Address</label>
            <Field
               id="login"
               name="email"
               placeholder="Email"
              className="border border-gray-400 py-2 px-3 text-grey-darkest rounded"
            />
          </div>

          <div className="mb-4 flex flex-col">
            <label>Password</label>
            <Field
               id="login"
               name="password"
               placeholder="Password"
              className="border border-gray-400 py-2 px-3 text-grey-darkest rounded"
            />
          </div>
          {/* <Link href="/Homepage" passHref> */}
          <Link to="/DashboardLayout">
            <button
              type="submit"
              className="bg-orange-500 py-2 px-4 mt-6 w-32 text-white rounded"
            >
              Log In
            </button>
          </Link>
          {/* </Link> */}
        </form>
      </Formik>
    </div>
  );
}
