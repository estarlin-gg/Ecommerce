import { Button } from "./Button";
import { Header } from "./Header";

export const Hero = () => {
  return (
    <>
    <Header />
      <main className="grid w-full grid-col-1 lg:grid-cols-2 shadow-2xl h-fit lg:h-[80dvh] overflow-hidden mt-20 ">
        <div className="p-4 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold block mb-3 text-center lg:text-start ">
            Descubre un Mundo de Estilo y Conveniencia
          </h1>
          <p className="text-md md:text-lg font-semibold mb-3 block text-center lg:text-start ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            obcaecati sit fugiat. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <Button
            classes="p-3 bg-slate-800 w-full lg:w-fit rounded-lg text-white w-32 text-lg"
            text={"Comprar"}
          />
        </div>
        <div className="img-container object-cover  ">
          <img src="../public/hero-4.jpg " alt="" className="w-full h-full" />
        </div>
      </main>
    </>
  );
};
