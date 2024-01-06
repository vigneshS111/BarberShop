import React, { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { navLinks } from "../constants/index";
import { AiOutlineClose } from "react-icons/ai";
import { auth, provider } from "../firebase.config";
import { signInWithRedirect, getRedirectResult, signOut } from "firebase/auth";
const Loader = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 text-white">
    <p className="text-[50px] text-white font-poppins font-extrabold tracking-wider">
      Loading. Please wait...
    </p>
  </div>
);

const Nav = ({ info, setInfo }) => {
  const [currentPage, setCurrentPage] = useState("/");
  const [toggle, settoggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true

  const toggleBtn = () => {
    settoggle(!toggle);
  };

  const signInHandle = () => {
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          const user = result.user;
          setInfo({
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          });
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          console.log(info);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false)); // Set loading to false once the operation is complete
  }, []);

  const signOutHandle = () => {
    signOut(auth)
      .then(() => {
        setInfo(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      <nav className="max-md:w-full md:gap-44 sm:px-20 px-8 py-3 flex md:justify-between justify-center items-center md:flex-row flex-col">
        <div className="flex flex-row justify-center items-center text-2xl">
          <img
            src={logo}
            alt="logo"
            style={{ width: 100, height: 100 }}
            className="object-contain"
          />
          <p className="font-dancingScript font-semibold mr-2 text-primary">
            Your
          </p>
          <p className="font-dancingScript font-bold">Look</p>
        </div>

        <ul className="flex items-center list-none gap-14 max-md:py-6">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="font-poppins font-medium cursor-pointer text-[16px] min-w-max"
            >
              <NavLink
                to={link.to}
                className={`hover:text-primary ${
                  currentPage === link.to ? "text-primary" : "text-black"
                }`}
                onClick={() => {
                  setCurrentPage(link.to);
                }}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-8">
          <div className="flex justify-end items-center">
            <img
              src={info ? info.photoURL : profile}
              className="w-10 h-10 object-contain cursor-pointer rounded-full"
              onClick={() => {
                !info ? signInHandle() : toggleBtn();
              }}
            />
            {info && (
              <div
                className={`${
                  toggle ? "flex" : "hidden"
                } bg-blackVar absolute p-6 sm:top-20 top-44 sm:right-0 mx-4 my-2 min-w-[140px] rounded-s-xl sidebar`}
              >
                <AiOutlineClose
                  className="absolute top-3 sm:left-3 right-3 cursor-pointer text-white"
                  onClick={toggleBtn}
                />

                <div className="flex flex-col flex-1 justify-end items-center list-none gap-4">
                  <p
                    onClick={signOutHandle}
                    className="text-white font-poppins font-semibold cursor-pointer text-[16px]"
                  >
                    logout
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
