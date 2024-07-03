import { useEffect, useState } from "react";
import Tringle from "../components/Tringle";
import {Link} from "react-router-dom";

export default function Data() {
  const [data, setData] = useState({
    allUsers: [
    ],
  });
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="relative flex justify-center w-screen h-screen overflow-hidden">
        {/* back button */}
        <Link to="/" className="absolute top-5 left-5 p-2 bg-gray-200 rounded-full active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
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
      <div className="p-2 bg-[#27291E]/15 rounded-3xl w-4/5 m-10 h-min">
        <table className="w-full text-sm text-left text-black rounded-2xl overflow-hidden">
          <thead className="text-xs text-black uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Password</th>
              <th className="px-6 py-3">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data.allUsers.map((user) => (
              <tr key={user._id} className="bg-white border-b">
                <th className="px-6 py-4 font-medium text-black whitespace-nowrap">
                  {user.name}
                </th>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.password}</td>
                <td className="px-6 py-4">{new Date(user.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
