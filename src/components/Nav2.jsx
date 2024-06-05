import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import profile from "../assets/profile.jpg";

import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { navLinks } from "../constants/index";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase.config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const Nav2 = ({ info, setInfo }) => {
  const [currentPage, setCurrentPage] = useState("/");
  const [toggle, settoggle] = useState(false);
  const navigate = useNavigate(); //remove is unnessasry

  const toggleBtn = () => {
    settoggle(!toggle);
  };

  const signInHandle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        const user = result.user;
        setInfo({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

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
    <nav className="max-md:w-full md:gap-44 sm:px-20 px-8 py-3 flex md:justify-between justify-center items-center md:flex-row flex-col">
      <div className="flex flex-row justify-around items-center max-md:w-full ">
        <div className="flex flex-row  items-center xl:text-[26px] text-2xl">
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
        <div className="max-md:flex hidden items-center gap-8">
          <div className="flex justify-end items-center">
            <div className="border border-slate-400 rounded-full">
              <img
                src={info && info.photoURL ? info.photoURL : profile}
                className="w-10 h-10 object-contain cursor-pointer rounded-full"
                onClick={() => {
                  !info ? signInHandle() : toggleBtn();
                }}
              />
            </div>
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
                    className="text-white font-montserrat font-semibold cursor-pointer text-[16px]"
                  >
                    logout
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <ul className="flex items-center list-none gap-14 max-md:py-6">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="font-montserrat font-medium cursor-pointer xl:text-[18px] text-[16px] min-w-max"
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

      <div className="md:flex hidden items-center gap-8">
        <div className="flex justify-end items-center">
          <div className="border border-slate-400 rounded-full">
            <img
              src={info && info.photoURL ? info.photoURL : profile}
              className="xl:w-11 xl:h-11 w-10 h-10 object-contain cursor-pointer rounded-full"
              onClick={() => {
                !info ? signInHandle() : toggleBtn();
              }}
            />
          </div>

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
                  className="text-white font-montserrat font-semibold cursor-pointer text-[16px]"
                >
                  logout
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav2;
