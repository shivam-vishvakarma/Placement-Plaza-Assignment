import { useRef, useState } from "react";
import Tringle from "../components/Tringle";
import { Link } from "react-router-dom";

export default function Signup() {
  const tooltip = useRef(null);
  const alertSuccess = useRef(null);
  const alertError = useRef(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          alertSuccess.current.classList.remove("hidden");
          setTimeout(() => {
            alertSuccess.current.classList.add("hidden");
          }, 5000);
        } else {
          alertError.current.classList.remove("hidden");
          setTimeout(() => {
            alertError.current.classList.add("hidden");
          }, 5000);
        }
      })
      .catch((err) => {
        alertError.current.classList.remove("hidden");
        setTimeout(() => {
          alertError.current.classList.add("hidden");
        }, 5000);
        console.error(err);
      });

    e.target.reset();
    setPassword("");
  };
  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden">
      {/* view data button */}
      <div className="absolute top-5 bg-gray-100 right-5 p-2 flex items-center gap-2 rounded-full border border-black active:scale-95">
        <p>View Data</p>
        <Link to="/data" className=" bg-gray-400 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
      </div>
      {/* alert div success */}
      <div
        ref={alertSuccess}
        className="hidden absolute z-10 w-full p-10 top-0"
      >
        <div className="font-semibold text-2xl p-3 px-16 bg-green-400 rounded-full text-green-950 border-2 border-green-600">
          Details are saved successfully! Go to{" "}
          <Link to="/data" className="text-blue-500">
            /data
          </Link>{" "}
          to view the data.
        </div>
      </div>
      {/* alert div error */}
      <div ref={alertError} className="hidden absolute z-10 w-full p-10 top-0">
        <div className="font-semibold text-2xl p-3 px-16 bg-red-400 rounded-full text-red-950 border-2 border-red-600">
          Some error occured while saving details
        </div>
      </div>

      {/* background div with tringles */}
      <div className="absolute w-full h-full -z-10">
        <Tringle
          size={3}
          color="#EFBC07"
          angle={30}
          className="absolute top-32 -left-20"
        />
        <Tringle
          size={1.2}
          color="#35B092"
          angle={50}
          className="absolute -top-5 left-[35%]"
        />
        <Tringle
          size={3}
          color="#FDDD6F"
          angle={-60}
          className="absolute -top-10 -right-20"
        />
        <Tringle
          size={1}
          color="#DBD42B"
          angle={-60}
          className="absolute top-1/2 left-[20%]"
        />
        <Tringle
          size={1}
          color="#F7C104"
          angle={-60}
          className="absolute top-1/2 right-[25%]"
        />
        <Tringle
          size={3}
          color="#F7C104"
          angle={-60}
          className="absolute top-1/2 -right-20"
        />
        <Tringle
          size={1}
          color="#CBE90F"
          angle={-130}
          className="absolute bottom-20 left-[30%]"
        />
        <Tringle
          size={4}
          color="#35B092"
          angle={170}
          className="absolute -bottom-36 left-[60%]"
        />
        <Tringle
          size={3.7}
          color="#2BBBDB"
          angle={170}
          className="absolute top-[40%] left-[40%]"
        />
        <Tringle
          size={3.7}
          color="#F8DD7E"
          angle={170}
          className="absolute -bottom-10 -left-[10%]"
        />
      </div>
      {/* signup form */}
      <div className="p-16 bg-[#27291E]/15 rounded-3xl">
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 relative"
          >
            <div className="flex items-center justify-center">
              <h1 className="font-bold text-2xl">Signup</h1>
            </div>
            <div className="flex bg-white rounded-2xl py-1 px-2 overflow-hidden gap-3">
              <img src="/account.png" alt="" className="size-7" />
              <input
                type="text"
                placeholder="Full Name"
                required
                className="focus:outline-none p-0.5 px-2"
              />
            </div>
            <div className="flex bg-white rounded-2xl py-1 px-2 overflow-hidden gap-3">
              <img src="/email.png" alt="" className="size-7" />
              <input
                type="email"
                placeholder="Email ID"
                required
                className="focus:outline-none p-0.5 px-2"
              />
            </div>
            <div className="flex bg-white rounded-2xl py-1 px-2 overflow-hidden gap-3 items-center">
              <img src="/password.png" alt="" className="h-5" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  tooltip.current.classList.remove("hidden");
                  setTimeout(() => {
                    tooltip.current.classList.add("hidden");
                  }, 5000);
                }}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                placeholder="Create a Password"
                required
                className="peer focus:outline-none p-0.5"
              />
              <div
                ref={tooltip}
                className="hidden absolute -right-[140%] p-2 bg-white border border-black rounded-2xl"
              >
                <ul className="list-disc pl-5">
                  <li>Password must at least 8 characters long.</li>
                  <li>Password includes at least one digit.</li>
                  <li>Password includes at least one lowercase letter.</li>
                  <li>Password includes at least one uppercase letter.</li>
                </ul>
              </div>
            </div>
            <div className="flex bg-white rounded-2xl py-1 px-2 overflow-hidden gap-3 items-center">
              <img src="/password.png" alt="" className="h-5" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                pattern={password}
                required
                className="focus:outline-none p-0.5 invalid:text-red-300"
              />
              <img
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                src="/eye.svg"
                alt=""
                className="size-5"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="submit"
                className="bg-[#0078D4] text-white py-1 px-6 pb-2 text-xl rounded-2xl font-semibold"
              />
            </div>
          </form>
          <div className="pt-2">
            <p className="text-center">
              Already have an Account?{" "}
              <Link className="text-red-500">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
