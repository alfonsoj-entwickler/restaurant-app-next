import { useEffect, useState } from "react";
import Image from "next/image";
import useRestaurant from "@/hooks/useRestaurant";
import { formatMoney } from "@/helpers";

const ModalProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [ edit, setEdit ] = useState(false);
  const { product, order, handleChangeModal, handleAddOrder } = useRestaurant();
  
  useEffect( ()=> {
    const updateQuantity = order?.filter( item => item.id === product.id );
    if( updateQuantity.length ) {
      setEdit(true);
      setQuantity(updateQuantity[0].quantity);
    }
  }, []);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${product?.image}.jpg`}
          alt={`image of ${product?.name}`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button type="button" onClick={() => handleChangeModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5 ">{product?.name}</h1>
        <p className="mt-5 font-black text-4xl text-amber-600">
          {product && formatMoney(product?.price)}
        </p>
        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              setQuantity(quantity == 1 ? quantity : quantity - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p className="text-3xl">{quantity}</p>
          <button
            type="button"
            onClick={() => {
              setQuantity(quantity === 5 ? quantity : quantity + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 mt-5 text-white uppercase font-bold"
            onClick={()=>handleAddOrder({
              ...product,
              quantity
            })}
        >
          {edit ? 'Save changes' : 'Add order'}
        </button>
      </div>
    </div>
  );
};

export default ModalProduct;
