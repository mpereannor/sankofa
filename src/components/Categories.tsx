"use client"

import Image from "next/image"
import { ICategory } from "@/lib/model"
import Link from "next/link"

type CategoryProps = {
  categories: ICategory[]
}

async function Gallery({ categories }: CategoryProps) {
  return (
    <>
      <section className="p-2">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            justify-items-center gap-y-6 
    mb-[20px] "
        >
          {categories.map((category) => (
            <Link href={`/products/${category.slug}`} key={category.id}>
              <div className="rounded-xl  w-[300px] h-[200px] hover:scale-95 transition-transform duration-500 ease-in relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  sizes="33vw"
                  fill
                  style={{ borderRadius: "15px", objectFit: "cover" }}
                  className="w-full h-auto  hover:scale-150 transition-transform duration-500 ease-out"
                />
                <div className=" w-full bg-black/[.50]	 absolute bottom-0 right-0 flex justify-end">
                  <p className="text-white font-regular  p-4 align-right opacity-100">{category.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default Gallery
