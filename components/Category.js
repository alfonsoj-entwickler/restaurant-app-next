import Image from "next/image";
import useRestaurant from "@/hooks/useRestaurant";

const Category = ({ category }) => {
  const { id, name, icon } = category;
  const { currentCategory, handleClickCategory } = useRestaurant();
  return (
    <div className={`flex items-center gap-4 w-full border p-5 hover:bg-amber-500 ${id === currentCategory?.id ? "bg-amber-500" : ""}`}>
      <Image
        width={70}
        height={70}
        src={`assets/img/icono_${icon}.svg`}
        alt="Image icon"
        className="mr-5"
      />
      <button type="button" onClick={() => handleClickCategory(id)} className="text-2xl font-bold hover:cursor-pointer">
        {name}
      </button>
    </div>
  );
};

export default Category;
