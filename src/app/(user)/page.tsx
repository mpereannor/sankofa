import FeaturedProducts from "@/components/FeaturedItems"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import { getAllFeaturedProducts } from "@/lib/queries"
import { client } from "../../../sanity/lib/client"

export default async function Home() {
  const featuredProducts = await client.fetch(getAllFeaturedProducts)
  const trendingProducts = await featuredProducts[0]["trendingProducts"]
  const mostSellingProducts = await featuredProducts[0]["mostSellingProducts"]
  return (
    <div>
      <Header variant="main" />
      <Hero />
      <FeaturedProducts products={trendingProducts} mostSellingProducts={mostSellingProducts} />
    </div>
  )
}
