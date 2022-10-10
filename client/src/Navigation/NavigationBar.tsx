import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  const menus = [
    { name: "Home", icon: AiOutlineHome },
    { name: "Profile", icon: AiOutlineUser },
    { name: "Search", icon: AiOutlineSearch },
    { name: "Favorites", icon: AiOutlineHeart },
  ];

  const [open, setOpen] = useState(true);

  return (
    <section>
      {/* El header va aquí */}
      <div className="flex justify-between order-last bg-white shadow-lg shadow-black-500/40 w-full ">
        <div className="py-3 px-3 font-extrabold italic text-fitpassGreen text-left text-2xl ">
          FitPass
        </div>
        <div className="text-fitpassGreen py-3 px-3">
          <AiOutlineMenu
            size={26}
            className={`order-last self-end cursor-pointer  ${
              open ? "w-16" : "w-16"
            }`}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      <div className="flex justify-between gap-6">
        <div className="m-3 text-x1 text-gray-900 font-semibold">
          SCREEN OVERLAYED TEST
          <img></img>
        </div>

        <div
          className={`bg-[#269FAE] min-h-screen ${
            open ? "w-16" : "w-72"
          } duration-300 justify-end text-white px-4 divide-y-2`}
        >
          <div className="py-3 flex justify-center">
            <AiOutlineMenu
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="mt-4 flex flex-col gap-4 relative flex-1">
              {menus?.map((menu, i) => (
                <>
                  {/* Recuerda agregar el Link para las rutas aquí!!! */}

                  <div
                    key={i}
                    className="cursor-pointer flex items-center text-sm gap-3.5 font-semibold p-2 hover:bg-highlightGreen duration-500 rounded-md"
                  >
                    <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                    <div
                      className={`whitespace-pre duration-500 ${
                        open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {menu?.name}
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="">
              <button
                className={`border-2 border-white bg-white text-fitpassGreen font-bold
              hover:bg-fitpassGreen hover:border-2 hover:text-white hover:border-white
               py-2 px-4 rounded-full whitespace-pre duration-500 ${
                 open && "opacity-0 translate-x-28 overflow-hidden"
               }`}
              >
                LogOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
