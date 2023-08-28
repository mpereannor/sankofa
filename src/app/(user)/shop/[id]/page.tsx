import { getAllProductsByCategory } from "@/lib/queries"
import { client } from "../../../../../sanity/lib/client"
import { ICategory, IProduct } from "@/lib/model"
import Gallery from "@/components/Gallery"
import Header from "@/components/Header"
import { groq } from "next-sanity"
import Link from "next/link"

export default async function ShopModalPage(props: any) {
  const { id } = props.params

  const products: IProduct[] = await client.fetch(getAllProductsByCategory, {
    id,
  })

  return (
    <div>
      <Header />
      <div className=" w-full flex justify-center my-4 ">
        <Link href="/shop">
          <p className="text-white/[0.6] font-light  p-4 align-right hover:text-white ">Shop All</p>
        </Link>
        <p className="text-white font-light  p-4 align-right ">
          {products[0]?.category?.title}
        </p>
      </div>
      <Gallery products={products} />
      <Gallery products={products} />
    </div>
  )
}
export async function generateStaticParams() {
  const query = groq`*[_type == "category"] { 
    "id": _id
  }`

  const categories: ICategory[] = await client.fetch(query)

  return categories.map((category) => ({
    id: category.id,
  }))
}
