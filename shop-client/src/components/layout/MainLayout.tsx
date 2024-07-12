import React from "react";
import { Outlet } from "react-router-dom";
import SidebarNav from "../sidebar/SidebarNav";
import CartNav from "../sidebar/CartNav";
import ItemInfo from "../sidebar/ItemInfo";

export default function MainLayout() {
  return (
    <>
      <div className="flex h-full">
        <SidebarNav />

        <div className="grow bg-[#FAFAFE] px-24 py-8">
          <Outlet />
        </div>

        {/* <CartNav /> */}
        <ItemInfo />
      </div>
    </>
  );
}
