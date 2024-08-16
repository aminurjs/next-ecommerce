import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { wixCLientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams?: any }) => {
  const wixClient = wixCLientServer();
  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className=" bg-pink-50 px-4 flex justify-center h-56 sm:h-64">
        <div className="flex flex-col items-center justify-center gap-5 sm:gap-8">
          <h1 className=" text-2xl sm:text-4xl  font-semibold leading-normal sm:leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-2xl bg-custom-pink text-white w-max py-2 sm:py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">
        {cat?.collection?.name} For You!
      </h1>{" "}
      <Suspense fallback={"Loading..."}>
        <ProductList
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default ListPage;
