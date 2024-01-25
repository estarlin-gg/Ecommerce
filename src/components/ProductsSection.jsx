import { products } from "../products";
import { Button } from "./Button";
import { ProductCard } from "./ProductCard";

export const ProductsSection = () => {
    
  return (
    <>
      <section className="section-products  w-full p-4 mt-10 ">
        <div className="section-header w-full p-8 flex flex-col items-center gap-4">
            <h2 className="text-3xl capitalize block text-center font-semibold">seccion de productos</h2>
            <div className="filter flex gap-2 lg:gap-8">
                <Button classes="bg-gray-500 p-3 w-24 lg:w-36 text-white rounded-2xl hover:bg-gray-500/40" text={"Todo"} />
                <Button classes="bg-gray-500 p-3 w-24 lg:w-36 text-white rounded-2xl hover:bg-gray-500/40" text={"Hombre"} />
                <Button classes="bg-gray-500 p-3 w-24 lg:w-36 text-white rounded-2xl hover:bg-gray-500/40" text={"Mujer"} />
                <Button classes="bg-gray-500 p-3 w-24 lg:w-36 text-white rounded-2xl hover:bg-gray-500/40" text={"Electronico"} />
            </div>
        </div>
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {products.map(item => <ProductCard key={item.id} title={item.title} price={item.price} image={item.image} />)}

        </div>
      </section>
    </>
  );
};
