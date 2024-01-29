import { useState } from "react";
import { Button } from "./Button";
import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import { BiSolidCartAdd } from "react-icons/bi";

export const ProductView = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white fixed inset-0 flex justify-center items-center">
      <div className=" w-full h-[100dvh] lg:h-fit lg:w-3/4 gap-0 lg:gap-4  flex  flex-wrap lg:flex-nowrap md:rounded-xl p-6 shadow-xl">
        <div className="img-details h-fit object-containw-full lg:w-fit">
          <img
            src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            alt=""
            className=" md:h-80 lg:h-auto mx-auto"
          />
        </div>
        <div className="details-info p-4 flex flex-col">
          <div className="detail">
            <h2 className="text-3xl font-medium mb-3 flex">
              Titulo de detalles
            </h2>
            <p className="text-lg font-medium mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              quia labore, ab totam animi cumque voluptatem. Accusamus ipsum,
              iusto debitis nemo
            </p>
            <div className="count flex items-center gap-1 p-2">
              <Button
                icon={
                  <GrSubtractCircle
                    size={35}
                    onClick={() =>
                      count <= 0 ? setCount(0) : setCount(count - 1)
                    }
                  />
                }
              />
              <span className="text-4xl font-normal">{count}</span>
              <Button
                icon={
                  <IoAddCircleOutline
                    size={35}
                    onClick={() => setCount(count + 1)}
                  />
                }
              />
            </div>
          </div>

          <div className="detail-footer  flex justify-between mt-auto items-center w-full ">
            <span className="text-3xl font-semibold">${}</span>
            <Button
              classes="bg-black p-4 text-white rounded-xl flex gap-2 items-center"
              text="Add "
              icon={<BiSolidCartAdd size={25} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
