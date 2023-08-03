import { useEffect, useCallback } from "react";
import Layout from "@/layout/Layout";
import useRestaurant from "@/hooks/useRestaurant";
import { formatMoney } from "@/helpers";

export default function Total() {
  const { order, nameUser, total, setNameUser, sendOrder } = useRestaurant();

  const checkOrder = useCallback(() => {
    return order.length === 0 || nameUser === '' || nameUser.length < 3 ;
  }, [order, nameUser]);

  useEffect(() => {
    checkOrder();
  }, [order, checkOrder]);

  return (
    <Layout page="Summary">
      <h1 className="text-4xl font-black">Summary</h1>
      <p className="text-2xl my-10">Check your order</p>
      <form onSubmit={e => sendOrder(e)}>
        <div>
          <label
            htmlFor="name"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={nameUser}
            onChange={e => setNameUser(e.target.value)}
          />
        </div>
        <div className="mt-10 mb-2">
          <p>
            Total to pay:&nbsp;
            <span className="font-bold">{formatMoney(total)}</span>
          </p>
        </div>
        <div>
          <input
            type="submit"
            className={`w-full md:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center cursor-pointer ${checkOrder() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} `}
            value="Confirm your order"
            disabled={checkOrder()}
          />
        </div>
      </form>
    </Layout>
  );
}
