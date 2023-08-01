import { client } from "../../../sanity/lib/client"
import Gallery from "../components/Gallery"
import { groq } from "next-sanity"
import Header from "../components/Header"

const query = groq`
*[_type=='art'] {
  ...,
  artist->,
  categories[]->
} | order(_createdAt desc)
`
export default async function Home() {
  const arts = await client.fetch(query)

  return (
    <div>
      <Header />
      <Gallery arts={arts} />
      <Gallery arts={arts} />
    </div>
  )
  {
  }
}
