import React, { useState } from "react";
import Sidebar from "../components/navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {

  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <div className="flex h-screen">

      <Sidebar
        toggleSideBar={toggleSideBar}
        setToggleSideBar={setToggleSideBar}
      />

      <main className="flex-1 overflow-y-auto w-full ">
        <div className=" flex lg:hidden items-center gap-2  justify-between  p-4">
           <img src="/Kaucus1 LOGO.png" className="h-[40px] " alt="logo"/>
          <button
            onClick={() => setToggleSideBar(!toggleSideBar)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 8L7 12L11 16M17 8L13 12L17 16" stroke="#535862" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </button>

        </div>
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;
