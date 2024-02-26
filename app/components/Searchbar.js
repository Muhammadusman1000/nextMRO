import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TbHearts } from "react-icons/tb";

const Searchbar = () => {
  const initialValues = {
    gender: "",
    ageFrom: "",
    ageTo: "",
    sect: "",
    education: "",
  };

  const validationSchema = Yup.object().shape({
    gender: Yup.string().required("Gender is required"),
    ageFrom: Yup.number()
      .integer("Age From must be an integer")
      .min(18, "below 28 not available"),
    //   .typeError("Age From must be a number")

    //   .min(0, "Age From must be at least 0"),
    ageTo: Yup.number(),
    // .typeError("Age To must be a number")
    // .integer("Age To must be an integer")
    // .when(
    //   "ageFrom",
    //   (ageFrom, schema) =>
    //     ageFrom &&
    //     schema.min(
    //       ageFrom,
    //       "Age To must be greater than or equal to Age From"
    //     )
    // ),
    sect: Yup.string(),

    education: Yup.string(),
    // Define validation rules for other fields
    // language, education, country, etc.
  });

  const handleSubmit = (values) => {
    // Here, you can use the form values to perform the search.
    // Implement your search logic here or pass the values to a parent component for further processing.
    console.log(values);
  };

  return (
    <div className="py-4 px-12 flex justify-center items-center bg-black shadow-md rounded-md relative -mt-[125px] z-20 font-poppins">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <p className=" font-poppins text-xl text-[#D91285] shadow-text ">
                Search Your Soulmate
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full">
              {/* Gender */}
              <div>
                <label
                  htmlFor="gender"
                  className="font-medium text-white font-poppins tracking-wider"
                >
                  Gender:
                </label>
                <Field
                  as="select"
                  id="gender"
                  name="gender"
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#8c0b86]"
                >
                  <option value="">Any</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>
              </div>

              {/* Age From */}
              <div>
                <label
                  htmlFor="ageFrom"
                  className="font-medium text-white font-poppins"
                >
                  Age From:
                </label>
                <Field
                  type="number"
                  id="ageFrom"
                  name="ageFrom"
                  className="block w-full tracking-widest mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#8c0b86]"
                />
              </div>

              {/* Age To */}
              <div>
                <label
                  htmlFor="ageTo"
                  className="font-medium text-white font-poppins"
                >
                  Age To:
                </label>
                <Field
                  type="number"
                  id="ageTo"
                  name="ageTo"
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#8c0b86]"
                />
              </div>

              {/* Other filter options go here */}
              <div>
                <label
                  htmlFor="sect"
                  className="font-medium text-white font-poppins tracking-wider"
                >
                  Religious Sect:
                </label>
                <Field
                  as="select"
                  id="sect"
                  name="sect"
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#8c0b86]"
                >
                  <option value="sectall">Any</option>
                  <option value="sunni">Sunni</option>
                  <option value="deobandi">Deobandi</option>
                  <option value="wahabi">Wahabi</option>
                  <option value="shia">Shia</option>
                </Field>
              </div>

              <div>
                <label
                  htmlFor="education"
                  className="font-medium text-white font-poppins tracking-wider"
                >
                  Education:
                </label>
                <Field
                  as="select"
                  id="education"
                  name="education"
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#8c0b86]"
                >
                  <option value="educationall">Any</option>
                  <option value="masters">Masters (MBA/MCS/MIT)</option>
                  <option value="graduationsimple">
                    Bachalore (M.A/B.A/B.com)
                  </option>

                  <option value="graduationbs">Bachalore (BBA/BSC/etc)</option>
                  <option value="intermediate">Intermediate </option>
                  <option value="associate">Associate (DAE/Diploma)</option>
                  <option value="phd">Doctorate (Phd)</option>
                  <option value="lawyer">Lawyer (LLB/LLM)</option>
                </Field>
              </div>
              {/* --------------------------- */}
              <div className="mt-6 h-10 flex  justify-center group w-36  bg-[#8c0b86] hover:bg-[#8b1d85] curser-pointer">
                <button
                  type="submit"
                  className="relative flex w-32 h-10 text-xl group-hover:-translate-x-3 group-hover:duration-300 justify-between items-center px-6 bg-transparent text-white rounded-md  focus:outline-none translate-x-0 duration-300  "
                >
                  Search
                  <TbHearts
                    className="text-white ml-5 opacity-0  z-50 absolute right-0 group-hover:opacity-100 group-hover:duration-300 group-hover:-translate-x-2 translate-x-0 duration-300"
                    size={25}
                  />
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Searchbar;
