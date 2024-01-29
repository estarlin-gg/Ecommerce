import { Button } from "./Button";

export const ProductCard = ({ image, title, price }) => {
  return (
    <div className="card flex flex-col p-4 shadow-xl rounded-lg ">
      <div className="card-img object-cover w-full bg-white p-4">
        <img src={image} alt={title} className="h-72 object-contain mx-auto" />
      </div>
      <div className="text-img p-4 ">
        <h2 className="block mb-3 font-bold capitalize text-xl">{title}</h2>
        <span className="text-xl font-bold ">${price}</span>
      </div>

      <Button
        classes=" w-full bg-black p-3 text-white rounded-lg mt-auto hover:bg-black/40 "
        text={"Ver"}
      />
    </div>
  );
};
