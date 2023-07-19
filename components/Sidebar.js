import Image from "next/image";
import Category from "./Category";
import useRestaurant from "@/hooks/useRestaurant";

const Sidebar = () => {
  const { categories } = useRestaurant();
  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="img logo"
      />
      <nav className="mt-10">
        {categories?.map((item) => (
            <Category key={`sidebar-category-${item.id}`} category={item} />
          ))}
      </nav>
    </>
  );
};

export default Sidebar;
