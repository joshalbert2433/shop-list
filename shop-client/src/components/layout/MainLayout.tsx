import React from "react";
import { Outlet } from "react-router-dom";
import SidebarNav from "../sidebar/SidebarNav";
import CartNav from "../sidebar/CartNav";
import ItemInfo from "../sidebar/ItemInfo";
import { useItemInfoStore } from "../../store/useItemInfoStore";
import AddNewItem from "../sidebar/AddNewItem";
import { useAddItemStore } from "../../store/addItemStore";

export default function MainLayout() {
  const { showItem } = useItemInfoStore();
  const { showContainer } = useAddItemStore();

  return (
    <>
      <div className="flex h-full">
        <SidebarNav />

        <div className="grow bg-[#FAFAFE] px-24 py-8">
          <Outlet />
        </div>
        {!showItem ? (
          <ItemInfo />
        ) : showItem && showContainer ? (
          <AddNewItem />
        ) : (
          <CartNav />
        )}
      </div>
    </>
  );
}
