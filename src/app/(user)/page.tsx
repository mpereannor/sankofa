import Header from "@/components/Header"
import { client } from "../../../sanity/lib/client"
import { artsQuery } from "@/lib/queries"
import Gallery from "@/components/Gallery"
import Cart from "@/components/Cart"
import { useCycle } from "framer-motion"

export default async function Home() {

  const arts = await client.fetch(artsQuery)

  return (
    <div>
      <Header  />
      <Gallery arts={arts} />
      <Gallery arts={arts} />
      <Cart  />
    </div>
  )
 
}
