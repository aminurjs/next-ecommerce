import { wixCLientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import ScrollableContainer from "./catScroll";

const CategoryList = async () => {
  const wixClient = await wixCLientServer();

  const cats = await wixClient.collections.queryCollections().find();

  return (
    <ScrollableContainer>
      <div className="flex gap-4 md:gap-8">
        {cats.items.map((item) => (
          <Link
            href={`/shop?cat=${item.slug}`}
            className="flex-shrink-0 w-1/2 lg:w-1/4 xl:w-1/5"
            key={item._id}
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src={item.media?.mainMedia?.image?.url || "cat.png"}
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">{item.name}</h1>
          </Link>
        ))}
      </div>
    </ScrollableContainer>
  );
};

export default CategoryList;
