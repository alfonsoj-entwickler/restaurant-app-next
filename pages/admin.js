import useSWR from "swr";
import axios from "axios";
import AdminLayout from "@/layout/AdminLayout";
import Order from "@/components/Order";

export default function Home() {
  const fetcher = () => axios("/api/order").then((query) => query.data);

  const { data, error, isLoading } = useSWR("/api/order", fetcher, {refreshInterval: 100});

  return (
    <AdminLayout page={`Coffee - Admin`}>
      <h1 className="text-4xl font-black">Admin panel</h1>
      <p className="text-2xl my-10">Controll your orders</p>
      {data && data.data.length ? (
        data.data.map((item) => <Order key={`admin-order-${item.id}`} item={item} />)
      ) : (
        <p>No</p>
      )}
    </AdminLayout>
  );
}
