import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { SideBar } from "./SideBar";
import { useState } from "react";
import { Button } from "./Button";

export const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const viewSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <header className="w-full flex justify-between items-center p-6 fixed top-0 bg-white shadow-lg">
      <Button icon={<RxHamburgerMenu size={35} />} onClick={viewSideBar} classes="block lg:hidden" />

      <div className="logo">
        <h2 className="text-3xl">Logo</h2>
      </div>
      <nav className="hidden gap-4 lg:flex">
        <a href="" className="text-2xl font-medium">
          item
        </a>
        <a href="" className="text-2xl font-medium">
          item
        </a>
        <a href="" className="text-2xl font-medium">
          item
        </a>
        <a href="" className="text-2xl font-medium">
          item
        </a>
      </nav>
      <FaShoppingCart size={35} />
      {/* <SideBar /> */}
      {sideBar && <SideBar hidden={viewSideBar} />}
    </header>
  );
};
