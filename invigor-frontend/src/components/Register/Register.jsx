import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
    form: `flex flex-col gap-2 pr-10`,
  };

  const initialValues = {
    name: "",
    practice_id: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    practice_id: Yup.string().required("Practice Id is required"),
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:3001/practice", data).then((response) => {
      alert("Registered!");
      resetForm({ values : ''});
    });
  };

  return (
    <div className="">
      <h1 className="text-2xl text-center">Register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={styles.form}>
          <div className="mb-1 flex flex-col">
            <label className="text-sm">Practice Name</label>
            <Field
              id="register"
              name="name"
              placeholder="Name"
              className="border border-gray-400 py-1 px-3 text-grey-darkest placeholder:text-sm rounded"
            />
          </div>
          <div className="mb-1 flex flex-col">
            <label className="text-sm">Practice Id</label>
            <Field
              id="practice_id"
              name="practice_id"
              placeholder="Practice id"
              className="border border-gray-400 py-1 px-3 text-grey-darkest placeholder:text-sm rounded"
            />
          </div>

          <div className="mb-1 flex flex-col">
            <label className="text-sm">Street</label>
            <Field
              id="street"
              name="street"
              placeholder="Your street"
              className="border border-gray-400 py-1 px-3 text-grey-darkest placeholder:text-sm rounded"
            />
          </div>

          <div className="mb-1 flex flex-col">
            <label className="text-sm">City</label>
            <Field
              id="city"
              name="city"
              placeholder="Your city"
              className="border border-gray-400 py-1 px-3 text-grey-darkest placeholder:text-sm rounded"
            />
          </div>

          <div className="mb-1 flex flex-col">
            <label className="text-sm">State</label>
            <Field
              id="state"
              name="state"
              placeholder="Your state"
              className="border border-gray-400 py-1 px-3 text-grey-darkest placeholder:text-sm rounded"
            />
          </div>

          <div className="mb-1 flex flex-col">
            <label className="text-sm">Zip</label>
            <Field
              id="zip"
              name="zip"
              placeholder="Your zip"
              className="border border-gray-400 py-1 px-3 text-grey-darkest placeholder:text-sm rounded"
            />
          </div>

          <div className="mb-1 flex flex-col">
            <label className="text-sm">Email Address</label>
            <Field
              id="register"
              name="email"
              placeholder="Email"
              className="border border-gray-400 py-1 px-3 text-grey-darkest placeholder:text-sm rounded"
            />
          </div>

          <div className="mb-1 flex flex-col">
            <label className="text-sm">Phone</label>
            <Field
              id="phone"
              name="phone"
              placeholder="Your phone number"
              className="border border-gray-400 py-1 px-3 text-grey-darkest placeholder:text-sm rounded"
            />
          </div>

          <div className="mb-1 flex flex-col">
            <label className="text-sm">Password</label>
            <Field
              id="register"
              name="password"
              placeholder="Password"
              className="border border-gray-400 py-1 px-3 text-grey-darkest placeholder:text-sm rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 py-2 px-4 mt-2 w-32 text-white rounded"
          >
            Register
          </button>
          {/* </Link> */}
        </Form>
      </Formik>
    </div>
  );
}
