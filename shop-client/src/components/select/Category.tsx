import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/shopApi";
import { Category as CategoryState } from "../../types/products.types";
import { IoClose } from "react-icons/io5";

export default function Category() {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (!isDirty) {
      setIsDirty(true);
    }

    setShow(value !== "");
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setIsDirty(false);
      setShow(false);
    }
  };

  const clearInputValueHandler = () => {
    setInputValue("");
  };

  const selectValueHandler = (description: string) => {
    setInputValue(description);
    setShow(false);
  };

  useEffect(() => {
    if (inputValue === "") {
      setShow(false);
    }
  }, [inputValue]);

  return (
    <div className="relative">
      <div>Category</div>

      <div className="relative">
        <input
          className="p-3 mt-2 w-full border-2 border-gray-400 rounded-lg focus:outline-orange-500"
          placeholder="Enter a category"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {inputValue !== "" && (
          <IoClose
            className="absolute right-3 top-6"
            size={22}
            onClick={clearInputValueHandler}
          />
        )}
      </div>

      {show && (
        <div className="bg-white border border-gray-400 px-2 py-4 absolute w-full top-24 rounded-lg space-y-2 max-h-[240px] overflow-y-auto">
          {categories?.map((category: CategoryState) => {
            const { product_category_id, description } = category;
            return (
              <div
                className="text-lg font-semibold text-gray-500 hover:bg-gray-300 hover:rounded-lg hover:cursor-pointer py-2 px-4 hover:text-black select-none"
                key={product_category_id}
                onClick={() => description && selectValueHandler(description)}
              >
                {description ?? "No description available"}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
