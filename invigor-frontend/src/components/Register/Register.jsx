import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Register() {
  const styles = {
    mainWrapper: `h-screen w-screen flex`,
    imageWrapper: `w-full h-full flex flex-col items-center justify-center`,
    heading: `text-3xl`,
    paragraph: `p-6 w-2/3 text-center`,
    getAccount: `bg-transparent text-orange-500 font-semibold hover:text-white hover:bg-orange-500 py-2 px-4 border border-orange-600 hover:border-transparent rounded`,
    formWrapper: `w-1/2 flex flex-col gap-4 bg-gray-200 pt-6 pb-8 pl-8 pr-16 `,
    haveAccount: `ml-auto mb-12 flex text-right items-center`,
    form: `flex flex-col gap-2 pr-16`,
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-3xl">Register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <form className={styles.form}>
          <div className="mb-4 flex flex-col">
            <label>Practice Name</label>
            <Field
              id="register"
              name="name"
              placeholder="Name"
              className="border border-gray-400 py-2 px-3 text-grey-darkest rounded"
            />
          </div>

          <div className="mb-4 flex flex-col">
            <label>Email Address</label>
            <Field
              id="register"
              name="email"
              placeholder="Email"
              className="border border-gray-400 py-2 px-3 text-grey-darkest rounded"
            />
          </div>

          <div className="mb-4 flex flex-col">
            <label>Password</label>
            <Field
              id="register"
              name="password"
              placeholder="Password"
              className="border border-gray-400 py-2 px-3 text-grey-darkest rounded"
            />
          </div>
          {/* <div className="mb-4 flex flex-col">
          <label>Password Confirmation</label>
          <input
            type="text"
            className="border border-gray-400 py-2 px-3 text-grey-darkest rounded"
          />
        </div> */}
          <Link to="/DashboardLayout">
            <button
              onClick={onSubmit}
              type="submit"
              className="bg-orange-500 py-2 px-4 mt-6 w-32 text-white rounded"
            >
              Register
            </button>
          </Link>
        </form>
      </Formik>
    </div>
  );
}
