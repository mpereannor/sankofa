import { ICategory } from "@/lib/model"
import { getAllCategories } from "@/lib/queries"
import Header from "@/components/Header"
import Categories from "@/components/Categories"
import { client } from "../../../../sanity/lib/client"

export default async function ShopPage() {
  const categories: ICategory[] = await client.fetch(getAllCategories)

  return (
    <div>
      <Header />
      <Categories categories={categories} />
    </div>
  )
}
