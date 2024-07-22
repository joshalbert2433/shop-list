import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useItemInfoStore } from "../../store/useItemInfoStore";
import { useAddItemStore } from "../../store/addItemStore";

export default function ItemInfo() {
  const { itemInfo, toggleShowItem, showItem } = useItemInfoStore();
  const { setShowContainer } = useAddItemStore();

  const { name, notes, image_url, category } = itemInfo;

  console.log(itemInfo);
  console.log(showItem);

  const onBackHandler = () => {
    toggleShowItem();
    setShowContainer(false);
  };

  const handleError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwRConBYl2t6L8QMOAQqa5FDmPB_bg7EnGA&s";
  };

  return (
    <div className="min-h-screen sticky max-w-[350px] flex flex-col bg-white px-8 py-6 grow shadow ">
      <div className="grow">
        <div
          className="flex gap-2 items-center text-orange-500 font-semibold cursor-pointer"
          onClick={onBackHandler}
        >
          <FaLongArrowAltLeft />
          <div>Back</div>
        </div>

        <img
          src={
            image_url ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwRConBYl2t6L8QMOAQqa5FDmPB_bg7EnGA&s"
          }
          alt={name}
          onError={handleError}
          className="w-full h-[200px] rounded-2xl mt-4"
        />

        <div className="mt-12">
          <div className="text-gray-400">name</div>
          <div className="text-2xl font-semibold">{name}</div>
        </div>

        <div className="mt-12">
          <div className="text-gray-400">category</div>
          <div className="text-2xl font-semibold">{category}</div>
        </div>

        <div className="mt-12">
          <div className="text-gray-400">note</div>
          <div className="text-lg">{notes}</div>
        </div>
      </div>

      <div className="flex items-center gap-4 justify-center">
        <div className="text-xl ">delete</div>
        <div className="bg-orange-400 rounded-xl text-white w-fit p-4">
          Add to list
        </div>
      </div>
    </div>
  );
}
