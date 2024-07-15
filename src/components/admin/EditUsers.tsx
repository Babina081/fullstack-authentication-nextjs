"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const EditUsers = ({ user,fetchUsers }: any) => {
  const [categories, setCategories] = React.useState<any>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    image: "",
    isVerfied: "",
    isAdmin: "",
  });
  const [updatedUserData, setUpdatedUserData] = useState({
    name: user.name || "",
    email: user.email || "",
    gender: user.gender || "",
    phone: user.phone || "",
    address: user.address || "",
    image: user.image || "",
    isVerfied: user.isVerfied || false,
    isAdmin: user.isAdmin || false,
  });

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }
  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/categories");
    setCategories(response.data);
    console.log(response.data);
  };

  const handleUpdateUser = async (id: any) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/users/${id}`,
        updatedUserData,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njk0ZDQwODIxZDk1NjYxNDI5MDJiZDYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjEwNDgzNDUsImV4cCI6MTcyMTEzNDc0NX0.bZgEB_kXrdWEb7YmmBn6VYGU5JllQDZqf0FcTyfWyK4`,
          },
        }
      );
      console.log(response);
      setUserData(updatedUserData);
      fetchUsers();
      toggleModal();
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetchCategories();
    setIsModalOpen(false);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedUserData((prevData) => ({
      ...prevData,
      gender: e.target.value,
    }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUpdatedUserData((prevData) => ({
      ...prevData,
      isAdmin: e.target.value === "admin" ? true : false,
    }));
  };

  return (
    <>
      <button
        className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition font-medium duration-500"
        onClick={toggleModal}
      >
        Edit
      </button>

      <div
        className={`fixed z-20 overflow-y-auto top-0 w-full left-0 ${
          isModalOpen ? "" : "hidden"
        }`}
        id="modal"
      >
        <div className="flex  pt-4 px-4 pb-20  text-center sm:block sm:p-0">
          <div className=" fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center   rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white grid grid-cols-2">
              <div className=" flex flex-col px-2 pt-5 pb-4 sm:p-2 sm:pb-0 ">
                <label className="font-medium text-gray-800">Name</label>
                <input
                  type="text"
                  className=" w-full outline-none rounded-xl bg-gray-100 mb-2 "
                  value={updatedUserData.name}
                  onChange={handleChange}
                  name="name"
                />
                <label className="font-medium text-gray-800">Email</label>
                <input
                  type="text"
                  className=" w-full outline-none rounded-xl bg-gray-100 mb-2 "
                  value={updatedUserData.email}
                  onChange={handleChange}
                  name="email"
                />
                <label className="font-medium text-gray-800">Address</label>
                <input
                  type="text"
                  className=" w-full outline-none rounded-xl bg-gray-100 mb-2 "
                  value={updatedUserData.address}
                  onChange={handleChange}
                  name="address"
                />
                <label className="font-medium text-gray-800">Phone</label>
                <input
                  type="text"
                  className=" w-full outline-none rounded-xl bg-gray-100 mb-2 "
                  value={updatedUserData.phone}
                  onChange={handleChange}
                  name="phone"
                />

                {/* <label htmlFor="category">Choose a category:</label>
                <select name="Select category" id="category">
                  {categories.map((category: any, i:any) => {
                    return (
                      <option key={i} value={category.name}>
                        {category.name}
                      </option>
                    );
                  })}
                </select> */}
              </div>

              <div className=" px-2 pt-5 pb-4 sm:p-2 sm:pb-0 flex flex-col">
                <label htmlFor="img">Select image:</label>
                <input type="file" id="img" name="img" accept="image/*" />
                <input type="submit" />
                <label htmlFor="gender" className="font-medium text-gray-800">
                  Gender
                </label>
                <div className="flex gap-2 mb-2">
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={updatedUserData.gender === "male"}
                      onChange={handleGenderChange}
                      className="h-3 w-3"
                    />
                    <label htmlFor="male">male</label>
                  </div>
                  <br />
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={updatedUserData.gender === "female"}
                      onChange={handleGenderChange}
                      className="h-3 w-3"
                    />
                    <label htmlFor="female">female</label>
                  </div>
                </div>
                <label htmlFor="status" className="font-medium text-gray-800">
                  Choose status:
                </label>
                <select
                  name="status"
                  id="status"
                  value={updatedUserData.isAdmin ? "admin" : "user"}
                  onChange={handleStatusChange}
                  className="rounded-lg"
                >
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
                <div className="flex gap-2 mt-2 items-center ">
                  <label className="font-medium text-gray-800">Verified:</label>
                  <label
                    className={`
                    h-auto rounded-2xl px-2 py-1 ${
                      user.isVerified
                        ? "bg-green-400 text-white"
                        : "bg-red-400 text-white"
                    }
                  `}
                  >
                    {user.isVerified ? "isVerified" : "not verified"}
                  </label>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 px-4 py-3 text-right">
              <button
                type="button"
                className="py-2 px-4 bg-gray-500 text-white rounded-xl hover:bg-gray-700 mr-2"
                onClick={toggleModal}
              >
                <i className="fas fa-times"></i> Cancel
              </button>
              <button
                type="button"
                className="py-2 px-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-700 mr-2 transition duration-500"
                onClick={() => handleUpdateUser(user._id)}
              >
                <i className="fas fa-plus"></i> Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUsers;
