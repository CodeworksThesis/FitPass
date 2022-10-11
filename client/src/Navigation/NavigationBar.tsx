import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
} from "react-icons/ai";
import { BrowserRouter } from "react-router-dom";

const NavBar = () => {
  const menus = [
    { name: "Home", icon: AiOutlineHome },
    { name: "Profile", icon: AiOutlineUser },
    { name: "Search", icon: AiOutlineSearch },
    { name: "Favorites", icon: AiOutlineHeart },
  ];

  const [open, setOpen] = useState(true);

  return (
    <section className="w-full h-screen scrollbar-hide">
      {/* El header va aquí */}
      <div className="bg-white shadow-lg shadow-black-500/40 w-full ">
        <div className="grid grid-cols-2 w-full">
          <div className="py-3 px-3 font-extrabold italic text-fitpassGreen text-left text-2xl ">
            FitPass
          </div>
          <div className="">
            <AiOutlineMenu
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>

        <div
          className={`absolute top-0 right-0 bg-[#269FAE] h-screen ${
            open ? "w-0" : "w-72"
          } duration-300 text-white px-4 divide-y-2`}
        >
          <div
            className={`py-3 flex justify-start ${
              open && "opacity-0 translate-x-28 overflow-hidden"
            }`}
          >
            <AiOutlineMenu
              size={26}
              className="cursor-pointer "
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="flex flex-col w-full h-screen">
            <div className="mt-4 flex flex-col gap-4 relative flex-1">
              {menus?.map((menu, i) => (
                <>
                  {/* Recuerda agregar el Link para las rutas aquí!!! */}
                  <div
                    key={i}
                    className="cursor-pointer flex items-center text-sm gap-3.5 font-semibold p-2 hover:bg-highlightGreen duration-500 rounded-md"
                  >
                    <div
                      className={`flex gap-4 whitespace-pre duration-500 ${
                        open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {/* icon */}
                      <div>
                        {React.createElement(menu?.icon, { size: "20" })}
                      </div>

                      {/* navbar element */}
                      <div>{menu?.name}</div>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="">
              <button
                className={` mb-32 border-2 border-white bg-white text-fitpassGreen font-bold
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

      <div className="flex justify-between gap-6">
        <div className="m-3 text-x1 text-gray-900 font-semibold">
          SCREEN OVERLAYED TEST
          <img></img>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
