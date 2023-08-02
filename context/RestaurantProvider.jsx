import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [nameUser, setNameUser] = useState("");
  const [total, setTotal] = useState(0);
  const router = useRouter();

  const getCategories = async () => {
    try {
      const { data } = await axios("/api/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
    setCurrentCategory(categories[0]);
  }, []);

  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories]);

  useEffect(() => {
    if (order.length) {
      setTotal(
        order?.reduce((total, item) => item.price * item.quantity + total, 0)
      );
    }
  }, [order]);

  const handleClickCategory = (id) => {
    setCurrentCategory(categories.filter((item) => item.id === id)[0]);
    router.push("/");
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };

  const handleChangeModal = () => {
    setModal((modal) => !modal);
  };

  const handleAddOrder = ({ categoryId, ...currentOrder }) => {
    //console.log('Order added', currentOrder);
    setOrder([
      ...order.filter((item) => item.id !== currentOrder.id),
      currentOrder,
    ]);
    toast.success(`Order ${currentOrder.quantity}x${currentOrder.name} added`);
    setModal(false);
  };

  const handleEditQuantity = (id) => {
    const updateProduct = order.filter((item) => item.id === id);
    setProduct(updateProduct[0]);
    setModal((modal) => !modal);
  };

  const handleRemoveProduct = (id) => {
    setOrder(order.filter((item) => item.id !== id));
    toast.warning(`Product removed`);
  };

  const sendOrder = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/order", {
        order,
        name: nameUser,
        total: total,
        date: Date.now().toString(),
      });
      // reset the app
      setCurrentCategory(categories[0]);
      setOrder([]);
      setNameUser('');
      setTotal(0);

      toast.success(`Order successfully!!!`);
      
      setTimeout(() => {
        router.push('/');
      }, 3000);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        categories,
        currentCategory,
        product,
        modal,
        order,
        nameUser,
        total,
        handleClickCategory,
        handleSetProduct,
        handleChangeModal,
        handleAddOrder,
        handleEditQuantity,
        handleRemoveProduct,
        setNameUser,
        sendOrder,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantProvider };

export default RestaurantContext;
