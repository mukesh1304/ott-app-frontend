import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderList from "./HeaderList";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex items-center justify-between p-5 relative">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderList key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderList key={index} name={""} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderList name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4"
              >
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderList key={index} name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          className="w-[40px] rounded-full cursor-pointer"
          onClick={() => setShowAuthModal(true)}
          alt="User Avatar"
        />
      </div>

      {showAuthModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowAuthModal(false)}
        >
          <div
            className="bg-[#121212] p-8 rounded-md w-[320px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-white text-lg font-bold"
              onClick={() => setShowAuthModal(false)}
            >
              &times;
            </button>

            {isLogin ? (
              <>
                <h2 className="text-white text-2xl mb-4 text-center">Login</h2>
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="User ID"
                    className="p-2 rounded bg-gray-800 text-white border border-gray-600"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="p-2 rounded bg-gray-800 text-white border border-gray-600"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
                  >
                    Login
                  </button>
                </form>
                <p className="mt-4 text-center text-gray-400">
                  Don't have an account?{" "}
                  <button
                    className="text-blue-500 underline"
                    onClick={() => setIsLogin(false)}
                  >
                    Signup
                  </button>
                </p>
              </>
            ) : (
              <>
                <h2 className="text-white text-2xl mb-4 text-center">Signup</h2>
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-2 rounded bg-gray-800 text-white border border-gray-600"
                  />
                  <input
                    type="text"
                    placeholder="User ID"
                    className="p-2 rounded bg-gray-800 text-white border border-gray-600"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="p-2 rounded bg-gray-800 text-white border border-gray-600"
                  />
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white py-2 rounded"
                  >
                    Signup
                  </button>
                </form>
                <p className="mt-4 text-center text-gray-400">
                  Already have an account?{" "}
                  <button
                    className="text-blue-500 underline"
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
