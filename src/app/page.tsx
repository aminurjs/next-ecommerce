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
          <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4} />
        </Suspense>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="mt-24">
        <h1 className="text-2xl mb-12">Categories</h1>{" "}
        <Suspense fallback={"Loading..."}>
          <CategoryList />
        </Suspense>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="mt-24">
        <h1 className="text-2xl mb-12">New Products</h1>
        <Suspense fallback={"Loading..."}>
          <ProductList categoryId={process.env.FEATURED_PRODUCTS_NEW_CATEGORY_ID!} limit={4} />
        </Suspense>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePage;
