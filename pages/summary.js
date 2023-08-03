import Layout from "@/layout/Layout";
import useRestaurant from "@/hooks/useRestaurant";
import SummaryProduct from "@/components/SummaryProduct";

export default function Summary() {
  const { order } = useRestaurant();
  return (
    <Layout page="Total and confirm your order">
      <h1 className="text-4xl font-black">Total and confirm your order</h1>
      <p className="text-2xl my-10">Confirm your order and continue</p>
      {order.length === 0 ? (
        <p className="text-center text-2xl">There are no items in your order</p>
      ) : (
        <>
            {order.map( item => (
                <SummaryProduct key={`summary-product-${item.id}`} product={item} />
            ))}
        </>
      )}
    </Layout>
  );
}
