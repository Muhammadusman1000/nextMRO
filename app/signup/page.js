"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TbHearts } from "react-icons/tb";
import Link from "next/link";

import Image from "next/image";
import divider from "../../public/divider.png";

const Signup = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    religion: Yup.string().required("religion id required field"),
    dob: Yup.date()
      .nullable()
      .max(new Date(), "Date of birth cannot be in the future")
      .test("age", "You must be at least 18 years old", function (value) {
        const today = new Date();
        const birthDate = new Date(value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
        return age >= 18;
      })
      .required("Date of birth is required"),
    sect: Yup.string().required("required"),
    country: Yup.string().required("Required"),
    mobileNumber: Yup.string()
      .required("Mobile number is required")
      .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
    maritalStatus: Yup.string().required("Required"),

    profileFor: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const submit = (values, { resetForm }) => {
    // Your form submission logic here

    // Reset the form to initial values after submission
    resetForm();

    console.log(values);
  };
  var initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    religion: "",
    sect: "",
    dob: "",
    country: "",
    mobileNumber: "",
    maritalStatus: "",
    password: "",
    profileFor: "",
    gender: "",
    confirmPassword: "",
  };

  const country = [
    "Pakistan",
    "Canada",
    "UK",
    "Australia",
    "Germany",
    "USA",
    "India",
  ];
  const religion = ["Islam", "Hindu", "Sikh", "christian"];
  const sect = ["Sunni", "Wahabi", "Deobandi", "Shia"];
  const gender = ["Male", "Female"];
  const maritalStatus = [
    "Single",
    "Divorced",
    "Widower",
    "Separated",
    "Second Marriage",
  ];
  const profileFor = [
    "My Self",
    "Son",
    "Daughter",
    "Friend",
    "Brother",
    "Sister",
    "Relative",
  ];

  return (
    <div
      className="flex justify-center items-center h-full bg-center bg-no-repeat bg-cover pt-20 md:pt-32"
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white mt-14 shadow-md rounded px-16 pt-6 pb-8 mb-4 md:w-4/6 border-4 border-spacing-2 border-[#8c0b86]">
            <div className="my-5">
              <p className="text-center font-poppins text-2xl text-gray-700 font-semibold">
                Registration <span className="text-[#8c0b86]">Form</span>
              </p>
              <Image
                src={divider}
                alt=""
                className="h-auto w-auto mx-auto"
                height={30}
                width={200}
                priority={true}
              />
            </div>
            {/* ------------- Main form Content--------------- */}
            <div className="grid md:grid-cols-3 gap-8 mt-04">
              <div className="mb-4">
                <label
                  className="block text-[#8c0b86] text-sm font-bold mb-2 "
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name"
                />
                <ErrorMessage
                  name="firstName"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>

              {/* ------------------------- last name--------------------- */}
              <div className="mb-4">
                <label
                  className="block text-[#8c0b86] text-sm font-bold mb-2 "
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last name"
                />
                <ErrorMessage
                  name="lastName"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>
              {/* ---------------------------- Email ------------------------------ */}
              <div className="mb-4">
                <label
                  className="block text-[#8c0b86] text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>
              {/* -----------------------------religion--------------------------- */}
              <div>
                <label
                  htmlFor="religion"
                  className="block text-[#8c0b86] text-sm font-bold mb-2 font-poppins"
                >
                  Religion
                </label>
                <Field
                  as="select"
                  id="religion"
                  name="religion"
                  className="shadow font-poppins border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>-- Select an option --</option>
                  {religion.map((option, id) => (
                    <option key={id} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="religion"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* ---------------------- sect -------------------------------- */}
              <div>
                <label
                  htmlFor="sect"
                  className="block text-[#8c0b86] text-sm font-bold mb-2"
                >
                  Sect
                </label>
                <Field
                  as="select"
                  id="sect"
                  name="sect"
                  className="shadow border font-poppins block w-full pl-2 pr-10 py-2 text-gray-700 border-gray-300 focus:outline-none sm:text-sm rounded-md focus:shadow-outline"
                >
                  <option>-- Select an option --</option>
                  {sect.map((option, id) => (
                    <option key={id} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="sect"
                  component="div"
                  className=" red-500 text-sm"
                />
              </div>
              {/* ------------------------------- DOB ------------------------------- */}
              <div className="mb-2">
                <label
                  htmlFor="dob"
                  className="block text-[#8c0b86] font-semibold mb-2 font-poppins"
                >
                  Date of Birth
                </label>
                <Field
                  type="date"
                  name="dob"
                  id="dob"
                  className="shadow appearance-none border block w-full focus:border-none focus:outline-none p-2 bg-white rounded-md focus:ring-none "
                />
                <ErrorMessage
                  name="dob"
                  component="div"
                  className="text-red-600"
                />
              </div>
              {/* -------------------------------- country---------------------------------- */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-[#8c0b86] text-sm font-bold mb-2 font-poppins"
                >
                  Country
                </label>
                <Field
                  as="select"
                  id="country"
                  name="country"
                  className="shadow font-poppins text-gray-700 border block w-full pl-3 pr-10 py-2  border-gray-300 focus:outline-none sm:text-sm rounded-md"
                >
                  <option>-- Select an option --</option>
                  {country.map((option, id) => (
                    <option key={id} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>

                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* ----------------------------- mobile number ---------------- */}
              <div className="mb-4">
                <label
                  htmlFor="mobileNumber"
                  className="block text-[#8c0b86] font-semibold mb-2 font-poppins"
                >
                  Mobile Number
                </label>
                <Field
                  type="tel"
                  name="mobileNumber"
                  id="mobileNumber"
                  maxLength="10"
                  placeholder="enter number without country code"
                  className="shadow font-poppins appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="mobileNumber"
                  component="div"
                  className="text-red-600"
                />
              </div>
              {/* ---------------------------- Marital Status ------------------- */}
              <div>
                <label
                  htmlFor="selectOption"
                  className="block text-[#8c0b86] text-sm font-bold mb-2 font-poppins"
                >
                  Marital Status
                </label>
                <Field
                  as="select"
                  id="maritalStatus"
                  name="maritalStatus"
                  className="shadow font-poppins border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>-- Select an option --</option>
                  {maritalStatus.map((option, id) => (
                    <option key={id} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>

                <ErrorMessage
                  name="maritalStatus"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* ------------------------------ PRofile for --------------------------------- */}
              <div>
                <label
                  htmlFor="profileFor"
                  className="block text-[#8c0b86] text-sm font-bold mb-2 font-poppins"
                >
                  Profile For
                </label>
                <Field
                  as="select"
                  id="profileFor"
                  name="profileFor"
                  className="shadow font-poppins border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>-- Select an option --</option>
                  {profileFor.map((option, id) => (
                    <option key={id} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>

                <ErrorMessage
                  name="profileFor"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* ---------------------------gender---------------------------- */}
              <div>
                <label
                  htmlFor="gender"
                  className="block text-[#8c0b86] text-sm font-bold mb-2 font-poppins"
                >
                  Gender
                </label>
                <Field
                  as="select"
                  id="gender"
                  name="gender"
                  className="shadow font-poppins border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>-- Select an option --</option>
                  {gender.map((option, id) => (
                    <option key={id} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>

                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* ---------------------------------- Passowrd ----------------------------- */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-[#8c0b86] font-semibold mb-2 font-poppins"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  maxLength="15"
                  placeholder="password no less then 6 charachters"
                  className="shadow font-poppins appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600"
                />
              </div>
              {/* ---------------------------------- confirm Password ----------------------------- */}
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-[#8c0b86] font-semibold mb-2 font-poppins"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  maxLength="15"
                  placeholder="password no less then 6 charachters"
                  className="shadow font-poppins appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-600"
                />
              </div>
            </div>

            {/* --------------- registor button------------------------- */}
            <div className="mt-6 h-10 flex rounded-lg justify-center group w-36  bg-[#8c0b86] hover:bg-[#8b1d85] cursor-pointer">
              <button
                className="relative  flex w-32 h-10 text-xl group-hover:-translate-x-3 group-hover:duration-300 justify-between items-center px-6 bg-transparent text-white rounded-md  focus:outline-none translate-x-0 duration-300 font-poppins "
                type="submit"
              >
                {isSubmitting ? "Done" : "Submit"}
                <TbHearts
                  className="text-white ml-5 opacity-0  z-50 absolute right-0 group-hover:opacity-100 group-hover:duration-300 group-hover:-translate-x-2 translate-x-0 duration-300"
                  size={25}
                />
              </button>
            </div>

            <p className="font-poppins mt-5 text-center text-gray-400">
              Already have an account ?
              <br /> please{" "}
              <Link href="/login">
                <span className="text-[#8c0b86]">Login</span>
              </Link>
            </p>
          </Form>
        )}
      </Formik>
      {/* <div className="w-full h-[152%] bg-white opacity-50 absolute top-0"></div> */}
    </div>
  );
};

export default Signup;
