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
      <h1 className="text-center p-2 my-2 text-2xl">Log In</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col gap-2 pr-16">
          <div className="mb-4 flex flex-col">
            <label className="text-sm">Email Address</label>
            <Field
              id="login"
              name="email"
              placeholder="Email"
              className="border border-gray-400 py-1 px-1 text-grey-darkest placeholder:text-sm rounded"
            />
          </div>

          <div className="mb-4 flex flex-col">
            <label className="text-sm">Password</label>
            <Field
              id="login"
              name="password"
              placeholder="Password"
              className="border border-gray-400 py-1 px-1 text-grey-darkest placeholder:text-sm rounded"
            />
          </div>
          {/* <Link to="/Dashboard"> */}
            <button
              type="submit"
              className="bg-orange-500 py-2 px-4 mt-6 w-32 text-white rounded"
            >
              Log In
            </button>
          {/* </Link> */}
        </Form>
      </Formik>
    </div>
  );
}
