import $ from "jquery";
import { useSession, getSession } from "next-auth/react";

const Contact = function () {
  const { data: session, status } = useSession();
  const Submit = function (e) {
    e.preventDefault();
    console.log("wow");
  };
  return (
    <div className="grid xl:grid-cols-2 mx-14 my-10">
      <form id="contact-form" className="bg-white p-10 text-lg">
        <h2 className="text-blue-800 font-bold text-2xl mb-10">
          Send your request
        </h2>

        <div className="grid grid-cols-2 gap-2">
          <label className="text-blue-600">First Name:</label>
          <label className="text-blue-600">Last Name:</label>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="Juan"
            className="border-b"
          />

          <input
            type="text"
            name="lname"
            id="lname"
            className="border-b"
            placeholder="Karlos"
          />
          <label className="text-blue-600">Email:</label>
          <label className="text-blue-600">Phone:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-b"
            placeholder="juankarlos@email.com"
          />
          <input
            type="number"
            name="phone"
            id="phone"
            className="border-b"
            placeholder="09510189773"
          />
        </div>
        <button
          onClick={Submit}
          className="mt-10 rounded-full text-lg text-white bg-blue-900 px-5"
        >
          Send
        </button>
      </form>

      <div className="bg-blue-800 p-10 text-white text-lg">
        <h2 className=" text-2xl mb-10">Reach Us</h2>
        <table className="table-fixed">
          <tbody>
            <tr>
              <td>Email:</td>
              <td>francodaillanleigh@gmail.com</td>
            </tr>
            <tr>
              <td className="pt-9">Phone:</td>
              <td className="pt-9">09510189773</td>
            </tr>
            <tr>
              <td className="pr-16">Address:</td>
              <td className="pt-10">
                0079 @ D, San Vicenter St., Bilibiran, Binangonan, Rizal
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
