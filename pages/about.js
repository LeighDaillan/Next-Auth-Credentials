import { Fragment } from "react";
import { getSession } from "next-auth/react";
import Head from "next/head";

const AboutUs = function () {
  return (
    <Fragment>
      <Head>
        <title>About | Leigh</title>
      </Head>

      <div className="grid md:grid-cols-2 mx-20 gap-5 h-screen">
        <div className="h-3/4 self-center">
          <p className="text-2xl lg:text-4xl font-bold mt-20">
            <span className="h-3 w-3 bg-yellow-500 rounded-full inline-block mb-1 mr-3 lg:mb-2"></span>
            I'm Daillan Leigh Franco, a <br />
            future Front End Developer
          </p>

          <p className="mt-5 text-xl lg:text-2xl indent-8">
            Hi there! I was born and raised in the Philippines (and i know how
            to speak kapampangan dialect) and am currently a college student. My
            dream job is to be a Front End Developer, but being a Full Stack
            Developer also sounds appealing. Please contact me if you like my
            sample blog.
          </p>
        </div>

        <div className="self-center">
          <h2 className="underline text-2xl lg:text-3xl font-bold mb-2">
            What I like?
          </h2>
          <ul className="leading-8 text-xl lg:text-2xl">
            <li>Watching Movies</li>
            <li>Playing Video Games</li>
            <li>And Eating</li>
          </ul>
          <br />
          <h2 className="underline text-2xl lg:text-3xl font-bold mb-2">
            Where did I learn to program?
          </h2>
          <ul className="leading-8 text-xl lg:text-2xl">
            <li>Udemy</li>
            <li>YouTube</li>
            <li>Reading Documentation</li>
            <li>College Program</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;

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
