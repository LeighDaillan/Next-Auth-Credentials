import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = function () {
  const { data: session, status } = useSession();
  const { push, asPath } = useRouter();

  const handleSignout = async function () {
    const data = await signOut({ redirect: false, callbackUrl: "/" });

    push(data.url);
  };

  const handleSignin = function () {
    push("http://localhost:3000/login");
  };

  return (
    <nav className="text-center font-bold bg-slate-700 grid grid-cols-2">
      <div className="justify-self-start self-center ml-6 md:text-xl lg:text-3xl text-white">
        <span>Next-Auth</span>
      </div>
      <div className=" py-2 justify-self-end">
        <ul className="flex justify-evenly md:justify-between text-sm lg:text-xl text-white ">
          <li className="px-1 sm:px-3 md:px-5 py-2">
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li className="px-1 sm:px-3 md:px-5 py-2">
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li className="px-1 sm:px-3 md:px-5 py-2">
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>

          {status === "unauthenticated" && (
            <li className="px-1 sm:px-3 md:px-5 py-2">
              <button onClick={handleSignin}>SIGN IN</button>
            </li>
          )}

          {status === "authenticated" && (
            <li className="px-1 sm:px-3 md:px-5 py-2">
              <button onClick={handleSignout}>SIGN OUT</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
