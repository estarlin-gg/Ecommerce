import { IoMdClose } from "react-icons/io";
import { Button } from "./Button";

export const SideBar = ({ hidden }) => {
  return (
    <div className="fixed inset-0 flex flex-col  bg-white w-full md:w-3/4 transition ease-in-out">
      <div className="flex w-full justify-between shadow-md p-4 items-center">
        <h2 className="text-3xl">Logo</h2>
        <Button icon={<IoMdClose size={40} />} onClick={() => hidden()} />
      </div>
      <nav className="flex flex-col gap-4 p-4">
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
    </div>
  );
};
