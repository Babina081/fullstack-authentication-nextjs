import Sidebar from "@/components/profile/Sidebar";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className="w-full h-full px-14 py-4 bg-gradient-to-br  from-red-300 to-indigo-600  profileSection flex flex-col text-purple-600 ">
  <h1 className="text-xl md:text-2xl font-bold  text-center md:text-left py-2  mr-0 md:mr-24 w-full text-purple-600 ">
    Profile
  </h1>

  <div className="flex w-4/4 h-full gap-4">
    {/* sidebar */}
    <Sidebar ></Sidebar>

    {/* main */}
    {children}
  </div>

  {/* --------------- */}
  {/* <div className="flex  items-center justify-evenly min-h-screen gap-6">
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2 className="p-3 rounded bg-green-500">
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <button
        onClick={getUserDetails}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        Get User Details
      </button>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
    <div className="text-white">
      <ul className="border-2 border-white border-dashed m-2 p-2 ">
        <h1 className="border-b-2 border-white w-auto mb-4 text-center font-bold">
          List of Users
        </h1>
        {users.map((user, i) => {
          return (
            <li
              key={String(user._id)}
              className="flex justify-between items-center gap-6"
            >
              <h2>
                {i + 1} : {user.username}
              </h2>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => deleteUser(user._id)}
              >
                Delete user
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  </div> */}
</section>;
};

export default ProfileLayout;
