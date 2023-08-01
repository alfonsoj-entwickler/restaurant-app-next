import Image from "next/image";
import useRestaurant from "@/hooks/useRestaurant";
import { formatMoney } from "@/helpers";

const Product = ({ item }) => {
  const { id, name, price, image } = item;
  const { handleSetProduct, handleChangeModal } = useRestaurant();

  return (
    <div className="border p-3">
      <Image
        width={400}
        height={500}
        src={`/assets/img/${image}.jpg`}
        alt={`Image of ${name}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-600">
          {formatMoney(price)}
        </p>
        <button
          type="button"
          onClick={() => {
            handleChangeModal();
            handleSetProduct(item);
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white w-full mt-5 p-3 uppercase font-bold"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
