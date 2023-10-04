"use client"

import Image from "next/image"
import { IFeaturedItems } from "@/lib/model"
import Link from "next/link"

type FeaturedProductsProps = {
  products: IFeaturedItems[]
  mostSellingProducts: IFeaturedItems[]
}

async function FeaturedProducts({
  products,
  mostSellingProducts,
}: FeaturedProductsProps) {
  return (
    <>
      <div className="text-center font-light text-white  my-4">
        {" "}
        Trending Products
      </div>
      <section className="p-2">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            justify-items-center gap-y-6 
    mb-[20px] "
        >
          {products.map((prod: any) => (
            <Link href={`/products/${prod.slug["current"]}`} key={prod.id}>
              <div className="rounded-xl  w-[300px] h-[200px] hover:scale-95 transition-transform duration-500 ease-in relative overflow-hidden">
                <Image
                  src={prod.mainImage}
                  alt={prod.name}
                  sizes="33vw"
                  fill
                  style={{ borderRadius: "15px", objectFit: "cover" }}
                  className="w-full h-auto  hover:scale-150 transition-transform duration-500 ease-out"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <div className="text-center font-light text-white  my-4">Top Selling</div>
      <section className="p-2">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            justify-items-center gap-y-6 
    mb-[20px] "
        >
          {mostSellingProducts.map((prod: any) => (
            <Link href={`/products/${prod.slug["current"]}`} key={prod.id}>
              <div className="rounded-xl  w-[300px] h-[200px] hover:scale-95 transition-transform duration-500 ease-in relative overflow-hidden">
                <Image
                  src={prod.mainImage}
                  alt={prod.name}
                  sizes="33vw"
                  fill
                  style={{ borderRadius: "15px", objectFit: "cover" }}
                  className="w-full h-auto  hover:scale-150 transition-transform duration-500 ease-out"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default FeaturedProducts
