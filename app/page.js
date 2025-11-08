import Hero from "./components/Hero";
import Products from "./components/Products";

export default async function Home() {
  const json = await fetch("https://dummyjson.com/products"
    , { next: { revalidate: 120 } }
  )
  const res = await json.json();
  const data = res.products;
  return (
    <>

      <Hero />
      <div  className="mt-10 text-5xl font-bold text-center text-blue-500">
        <h2 id="products" className=" mb-16 relative w-fit mx-auto before:w-full before:bg-blue-500 before:h-1 before:absolute before:-bottom-5  after:w-7 after:h-7 after:absolute after:-bottom-8 after:left-[50%] after:-translate-x-[50%] after:right-[50%]  after:rounded-full after:bg-white after:border-3 ">Products</h2>
        <Products data={data} />
      </div>
    </>
  );
}
