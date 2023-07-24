import { client } from "../../../sanity/lib/client"
import Gallery from "../components/Gallery"
import { groq } from "next-sanity"

const query = groq`
*[_type=='art'] {
  ...,
  artist->,
  categories[]->
} | order(_createdAt desc)
`
export default async function Home() {
  const arts = await client.fetch(query)

  return <Gallery arts={arts} />
  {
  }
}
