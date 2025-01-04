import CroselProducts from "@/components/modules/Dashboard/CroselProducts";
import UserOrders from "@/components/modules/Dashboard/UserOrders";
import React from "react";

function page() {
  return (
    <>
      <div className="col-span-3 border rounded-xl ">
        <UserOrders />
        <CroselProducts
          title="علاقه مندی ها"
          products={[1, 1, 1, 1, 1, 1, 1, 1]}
          link="/"
        />
        <CroselProducts
          title="خرید های پر تکرار"
          products={[1, 1, 1, 1, 1, 1, 1, 1]}
          link="/"
        />
        <CroselProducts
          title="گالری من"
          products={[1, 1, 1, 1, 1, 1, 1, 1]}
          link="/"
        />
      </div>
    </>
  );
}

export default page;
