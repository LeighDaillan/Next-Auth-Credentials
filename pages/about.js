import { Fragment } from "react";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { BsController, BsYoutube } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { SiUdemy } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineSchool } from "react-icons/md";

const AboutUs = function () {
  return (
    <Fragment>
      <Head>
        <title>About | Leigh</title>
      </Head>

      <div className="grid md:grid-cols-2  mx-20 gap-5 h-auto md:h-screen mb-5">
        <div className="h-3/4 self-center mb-10 md:mb-2">
          <p className="text-2xl lg:text-4xl font-bold mt-20">
            <span className="h-3 w-3 bg-yellow-500 rounded-full inline-block mb-1 mr-3 lg:mb-2"></span>
            I&apos;m Daillan Leigh Franco, a <br />
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
            <li>
              <h2 className="flex items-center">
                Watching Movies
                <span className="ml-2">
                  <BiMoviePlay size={25} />
                </span>
              </h2>
            </li>
            <h2 className="flex items-center">
              Playing Video Games
              <span className="ml-2">
                <BsController size={25} />
              </span>
            </h2>
            <li>
              <h2 className="flex items-center">
                And Eating
                <span className="ml-2">
                  <IoFastFoodOutline size={25} />
                </span>
              </h2>
            </li>
          </ul>
          <br />
          <h2 className="underline text-2xl lg:text-3xl font-bold mb-2">
            Where did I learn to program?
          </h2>
          <ul className="leading-8 text-xl lg:text-2xl">
            <li>
              <h2 className="flex items-center">
                Udemy
                <span className="ml-2">
                  <SiUdemy size={25} />
                </span>
              </h2>
            </li>
            <li>
              <h2 className="flex items-center">
                Youtube
                <span className="ml-2">
                  <BsYoutube size={25} />
                </span>
              </h2>
            </li>
            <li>
              <h2 className="flex items-center">
                Reading Documentation
                <span className="ml-2">
                  <HiOutlineDocumentText size={25} />
                </span>
              </h2>
            </li>
            <li>
              <h2 className="flex items-center">
                College Programm
                <span className="ml-2">
                  <MdOutlineSchool size={25} />
                </span>
              </h2>
            </li>
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
