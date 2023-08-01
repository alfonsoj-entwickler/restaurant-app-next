import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import { formatMoney } from "@/helpers";

const Order = ({ item }) => {
  const { id, name, total, order } = item;

  const finishOrder = async () => {
    try {
      await axios.post(`/api/orders/${id}`);
      toast.success("Order finished"); 
    } catch (error) {
      console.log(error);
      toast.error("There was a error");
    }
  };

  return (
    <div className="border p-10 space-y-5">
      <h2 className="text-2xl font-bold">Order: {id}</h2>
      <p className="text-lg font-bold">Customer: {name}</p>
      <div>
        {order.map((item) => (
          <div
            key={`customer-order-${id}-${item.id}`}
            className="py-3 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/assets/img/${item.image}.jpg`}
                alt={`Image of ${item.name}`}
              />
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold text-amber-500">{item.name}</h4>
              <p className="text-lg font-bold">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-500">
          Total to pay: {formatMoney(total)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg"
          onClick={() => finishOrder()}
        >
          Finish order
        </button>
      </div>
    </div>
  );
};

export default Order;
