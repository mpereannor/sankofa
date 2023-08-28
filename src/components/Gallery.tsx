"use client"

import Image from "next/image"
import { ICategory, IProduct } from "@/lib/model"
import Link from "next/link"
import { groq } from "next-sanity"
import { client } from "../../sanity/lib/client"
import category from "../../schemas/category"

type GalleryProps = {
  products: IProduct[]
}

async function Gallery({ products }: GalleryProps) {
  return (
    <>
      <section className="p-2">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            justify-items-center gap-y-6 
    mb-[20px] "
        >
          {products.map((prod) => (
            <Link href={`/products/${prod.slug}`} key={prod.id}>
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

export default Gallery

