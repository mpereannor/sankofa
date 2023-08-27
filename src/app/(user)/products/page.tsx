import Header from "@/components/Header"
import { getAllProductsQuery } from "@/lib/queries"
import Gallery from "@/components/Gallery"
import { IProduct } from "@/lib/model"
import { client } from "../../../../sanity/lib/client"

export default async function ProductsPage() {
  const products: IProduct[] = await client.fetch(getAllProductsQuery)

  return (
    <div>
      <Header />
      <Gallery products={products} />
      <Gallery products={products} />
    </div>
  )
}
