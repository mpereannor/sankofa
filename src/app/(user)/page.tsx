import Header from "@/components/Header"
import { client } from "../../../sanity/lib/client"
import {  getAllProductsQuery } from "@/lib/queries"
import Gallery from "@/components/Gallery"
import { IProduct } from "@/lib/model"

export default async function Home() {
  // const products: IProduct[] = await client.fetch(
  //   getAllProductsQuery
  // )


  return (
    <div>
      <Header />
      {/* <Gallery products={products}  /> */}
      {/* <Gallery products={products}  /> */}
    </div>
  )
}
