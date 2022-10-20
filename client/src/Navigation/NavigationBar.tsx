import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { LogoutButton } from "../components/buttons/LogoutButton";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const menus = [
    { name: "Home", link: "/", icon: AiOutlineHome },
    { name: "Profile", link: "/profile", icon: AiOutlineUser },
    { name: "Search", link: "/search", icon: AiOutlineSearch },
    { name: "Favorites", link: "/favorites", icon: AiOutlineHeart },
  ];

  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <nav className="scrollbar-hide font-montserrat">
      <div className="bg-white shadow-lg shadow-black-500/40 w-full ">
        <div className="grid grid-cols-2 w-full">
          <div
            className="py-3 px-3 font-extrabold italic text-fitpassGreen text-left text-2xl w-screen cursor-pointer"
            onClick={() => navigate("/")}
          >
            FitPass
          </div>
          <div className="flex justify-end px-4 py-4 text-fitpassGreen">
            <AiOutlineMenu
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>

        <div
          className={`absolute top-0 right-0 bg-[#269FAE] h-screen ${open ? "w-0" : "w-72"
            } duration-300 text-white divide-y-2`}
        >
          <div
            className={`py-4 px-4 flex justify-start ${open && "opacity-0 translate-x-28 hidden"
              }`}
          >
            <AiOutlineMenu
              size={26}
              className="cursor-pointer "
              onClick={() => setOpen(!open)}
            />
          </div>
          <div
            className={`flex flex-col w-full h-screen ${open && "opacity-0 translate-x-28 hidden"
              }`}
          >
            <div className="mt-4 flex flex-col gap-4 relative flex-1">
              {menus?.map((menu) => (
                <Link
                  to={menu?.link}
                  key={menu.name}
                  className="px-4 cursor-pointer flex items-center text-sm gap-3.5 font-semibold p-2 hover:bg-highlightGreen duration-500 rounded-md"
                  onClick={() => setOpen(!open)}
                >
                  <div className="flex gap-4 whitespace-pre duration-500">
                    {/* icon */}
                    <div>{React.createElement(menu?.icon, { size: "26" })}</div>

                    {/* navbar element */}
                    <div className="text-xl">{menu?.name}</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex justify-center">
              <div
                className={` mb-32 border-2 border-white bg-white text-fitpassGreen font-bold
              hover:bg-fitpassGreen hover:border-2 hover:text-white hover:border-white
               py-2 px-4 rounded-full whitespace-pre duration-500 ${open && "gap-4 opacity-0 translate-x-28 overflow-hidden"
                  }`}
              >
                <LogoutButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
