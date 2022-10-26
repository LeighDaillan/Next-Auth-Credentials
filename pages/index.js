import Head from "next/head";
import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import { Fragment } from "react";
import codeImg from "../public/assets/code.png";

const HomePage = function () {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className="grid grid-cols-2 gap-4  items-center sm:h-screen py-24 mx-10">
        <Image
          src={codeImg}
          className="justify-self-end hidden md:block "
          alt="code image"
          objectFit="contain"
        />
        <div className="justify-center leading-relaxed">
          <h1 className=" text-green-600 font-bold text-6xl lg:text-8xl">
            Hello!
          </h1>
          <p className="text-xl md:text-2xl lg:text-4xl leading-relaxed">
            I&apos;m <span>Daillan Leigh Franco</span>, a <br />
            future Front End Developer
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
