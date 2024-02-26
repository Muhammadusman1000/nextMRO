"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { TbHearts } from "react-icons/tb";
import Image from "next/image";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("email is required"),
    password: Yup.string()
      .min(6, "password should be more hten 6 characters")
      .required("password is required"),
  });

  const onSubmit = (values) => {
    // values.preventDefault();

    console.log(values);
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('bg-2.jpg')" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 border-4 border-spacing-2 border-[#8c0b86]">
          <div className="my-5">
            <p className="text-center font-poppins text-2xl text-gray-700 font-semibold">
              Log<span className="text-[#8c0b86]">in</span>
            </p>
            <Image
              src="/divider.png"
              alt=""
              className="w-auto h-auto mx-auto"
              width={28}
              height={28}
              priority={true}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 "
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
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="mt-6 h-10 flex rounded-lg justify-center group w-36  bg-[#8c0b86] hover:bg-[#8b1d85] cursor-pointer">
            <button
              className="relative flex w-32 h-10 text-xl group-hover:-translate-x-3 group-hover:duration-300 justify-between items-center px-6 bg-transparent text-white rounded-md  focus:outline-none translate-x-0 duration-300  "
              type="submit"
            >
              Sign in
              <TbHearts
                className="text-white ml-5 opacity-0  z-50 absolute right-0 group-hover:opacity-100 group-hover:duration-300 group-hover:-translate-x-2 translate-x-0 duration-300"
                size={25}
              />
            </button>
          </div>
          <p className="font-poppins mt-5 text-center text-gray-400">
            not have an account ?
            <br /> please
            <Link href="/signup">
              <span className="text-[#8c0b86]">Sign up</span>
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
