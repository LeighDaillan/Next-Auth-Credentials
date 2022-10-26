import Head from "next/head";
import Link from "next/link";
import Layout from "../layout/layout";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import loginValidate from "../lib/validate";
import { useRouter } from "next/router";

const Login = function () {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const onSubmit = async function (values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });

    console.log(status);

    if (status.ok) router.push(status.url);
  };

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit,
  });

  // Google Handler Function
  const handleGoogleSignin = async function () {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  // Github Handler Function
  const handleGithubSignin = async function () {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Login</title>
        </Head>

        <section className="w-3/4 mx-auto flex flex-col">
          <div className="title">
            <h1 className="text-gray-800 text-3xl font-bold py-4">Explore</h1>
            <p className="w-3/4 mx-auto text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing?
            </p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-2 my-3"
          >
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
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              <span
                onClick={() => setShow(!show)}
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

            {/* Login Buttons */}
            <div className="input-button">
              <button className={styles.button} type="submit">
                Login
              </button>
            </div>
            <div className="input-button">
              <button
                onClick={handleGoogleSignin}
                className={styles.button_custom}
                type="button"
              >
                Sign In Google
                <Image
                  src={"/assets/google.png"}
                  width="20"
                  height="20"
                  alt="google logo"
                ></Image>
              </button>
            </div>
            <div className="input-button">
              <button
                onClick={handleGithubSignin}
                className={styles.button_custom}
                type="button"
              >
                Sign In Github
                <Image
                  src={"/assets/github.png"}
                  width="25"
                  height="25"
                  alt="github logo"
                ></Image>
              </button>
            </div>
          </form>
          <p className="text-center text-gray-400">
            Don&apos;t have an account yet?{" "}
            <Link href={"/register"}>
              <a className="text-blue-700 underline">Sign Up</a>
            </Link>
          </p>
        </section>
      </Layout>
    </>
  );
};

export default Login;
