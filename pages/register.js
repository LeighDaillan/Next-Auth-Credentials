import Head from "next/head";
import Link from "next/link";
import Layout from "../layout/layout";
import styles from "../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
import { useFormik } from "formik";
import { registerValidate } from "../lib/validate";
import { useRouter } from "next/router";

const Register = function () {
  const [show, setShow] = useState({
    password: false,
    cpassword: false,
  });
  const router = useRouter();

  const onSubmit = async function (values) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    await fetch("http://localhost:3000/api/auth/signup", options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push("http://localhost:3000");
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidate,
    onSubmit,
  });

  return (
    <>
      <Layout>
        <Head>
          <title>Register</title>
        </Head>

        <section className="w-3/4 mx-auto flex flex-col">
          <div className="title">
            <h1 className="text-gray-800 text-3xl  font-bold py-4">Register</h1>
            <p className="w-3/4 mx-auto text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing?
            </p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-5 my-3"
          >
            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type="text"
                name="username"
                placeholder="Username"
                {...formik.getFieldProps("username")}
              />
              <span className="icon flex items-center px-4">
                <HiOutlineUser size={23} />
              </span>
            </div>
            {formik.errors.username && formik.touched.username ? (
              <span className="text-sm text-red-500">
                {formik.errors.username}
              </span>
            ) : (
              <></>
            )}
            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type="email"
                name="email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={23} />
              </span>
            </div>
            {formik.errors.email && formik.touched.email ? (
              <span className="text-sm text-red-500">
                {formik.errors.email}
              </span>
            ) : (
              <></>
            )}
            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type={`${show.password ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              <span
                onClick={() => setShow({ ...show, password: !show.password })}
                className="icon flex items-center px-4"
              >
                <HiFingerPrint size={23} />
              </span>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <span className="text-sm text-red-500">
                {formik.errors.password}
              </span>
            ) : (
              <></>
            )}

            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type={`${show.cpassword ? "text" : "password"}`}
                name="cpassword"
                placeholder="Confirm Password"
                {...formik.getFieldProps("cpassword")}
              />
              <span
                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
                className="icon flex items-center px-4"
              >
                <HiFingerPrint size={23} />
              </span>
            </div>
            {formik.errors.cpassword && formik.touched.cpassword ? (
              <span className="text-sm text-red-500">
                {formik.errors.cpassword}
              </span>
            ) : (
              <></>
            )}

            {/* Login Buttons */}
            <div className="input-button">
              <button className={styles.button} type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center text-gray-400">
            Have an account?
            <Link href={"/login"}>
              <a className="text-blue-700 underline">Sign In</a>
            </Link>
          </p>
        </section>
      </Layout>
    </>
  );
};

export default Register;
