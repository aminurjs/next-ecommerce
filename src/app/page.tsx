import CategoryList from "@/components/CategoryList";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <div>
      <Slider />
      <MaxWidthWrapper className="mt-24">
        <h1 className="text-2xl">Feature Products</h1>
        <Suspense fallback={"Loading..."}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </MaxWidthWrapper>
      <div className="mt-24">
        <MaxWidthWrapper className="text-2xl  mb-12">
          <h1>Categories</h1>
        </MaxWidthWrapper>
        <Suspense fallback={"Loading..."}>
          <CategoryList />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
