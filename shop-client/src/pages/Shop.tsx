import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { getAllProducts } from "../services/shopApi";
import { Item, Product } from "../types/products.types";
import { useItemInfoStore } from "../store/useItemInfoStore";

export default function Shop() {
  const { setItemInfo, toggleShowItem, showItem } = useItemInfoStore();

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const productHandler = (items: Item) => {
    setItemInfo(items);

    if (showItem) {
      toggleShowItem();
    }
  };

  return (
    <div>
      <div className="flex gap-12">
        <div className="text-3xl w-[60%]">
          <span className="text-orange-500 font-bold">Shoppingify</span> allows
          you take your shopping list wherever you go
        </div>

        <div className=" w-[40%]">
          <div className="relative shadow rounded-lg w-fit">
            <IoMdSearch className="absolute -translate-y-1/2 t               op-1/2 left-4" />
            <input placeholder="search items" className="pl-12 p-2 w-fit" />
          </div>
        </div>
      </div>

      {products?.map((product: Product) => {
        const { category, items } = product;
        return (
          <div className="mt-12">
            <div className="font-semibold text-lg">{category}</div>
            <div className="grid grid-cols-4 mt-4 gap-4">
              {items?.map((item) => (
                <div
                  className="rounded-lg shadow bg-white text-lg h-fit font-semibold py-2 px-4  flex justify-between items-center select-none"
                  onClick={() => productHandler({ ...item, category })}
                >
                  {item.name}
                  <FaPlus />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
