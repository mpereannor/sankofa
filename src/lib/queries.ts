import { groq } from "next-sanity";

export const artsQuery = groq`
*[_type=='art'] {
  ...,
  artist->,
  categories[]->
} | order(_createdAt desc)
`
