import ButtonNavigation from "@/components/elements/buttons/ButtonNavigation";
import ProductsList from "@/components/products/ProductsList";

const Home = async () => {
  const res = await fetch(`${process.env.BASE_URL}/products.json`);
  const products = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12">
      <div className="flex flex-1 flex-col z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <nav
          className={"flex flex-row w-full items-center justify-between mb-12"}
        >
          <input
            className={
              "flex w-1/2 p-4 text-gray-500 leading-tight rounded-full shadow-sm"
            }
            type="search"
            placeholder="Search"
          />
          <div>
            <ButtonNavigation title={"Products"} goTo={"/products"} />
            <ButtonNavigation title={"Cart"} goTo={"/cart"} />
          </div>
        </nav>

        <ProductsList products={products} />
      </div>
    </main>
  );
};

export default Home;
