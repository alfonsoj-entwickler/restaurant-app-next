import Layout from "@/layout/Layout";
import Product from "@/components/Product";
import { Inter } from "next/font/google";
import useRestaurant from "@/hooks/useRestaurant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { currentCategory } = useRestaurant();
 
  return (
    <Layout page={`Menu - ${currentCategory?.name}`}>
      <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
      <p className="text-2xl my-10">Choose and personalise your order</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols4">
        {currentCategory?.products?.map((product) => (
          <Product key={`${currentCategory?.name}-${product.name}${product.id}`} item={product} />
        ))}
      </div>
    </Layout>
  );
}
