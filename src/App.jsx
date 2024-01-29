import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductsSection } from "./components/ProductsSection";
import { ProductProvider } from "./context/ProductProvider";

function App() {
  return (
    <>
      <ProductProvider>
        <Header />
        <Hero />
        <ProductsSection />
        <Footer />
      </ProductProvider>
    </>
  );
}

export default App;
