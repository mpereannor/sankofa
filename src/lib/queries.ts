import { groq } from "next-sanity"

export const artsQuery = groq`
*[_type=='art'] {
  ...,
  artist->,
  categories[]->
} | order(_createdAt desc)
`

export const getAllProductsQuery = groq`
*[_type=='product'] { 
"id":_id, 
name, 
description,
price,
count,
"slug": slug.current,
"mainImage": mainImage.asset->url

}`

export const getAllProductsMainImgQuery = groq`
*[_type=='product'] { 
  "id":_id,
  name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url
}`

export const getAllCategories = groq`
*[_type == 'category']{
  "id": _id,
  title,
  "image": image.asset->url
}`

export const getAllProductsByCategory = groq`
 *[_type == "product" && references($id)] {
        ...,
        "id": _id,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{ title, "image": image.asset->url  },
    }
`
export const getProductDetail = groq`
   *[_type == "product" && slug.current == $slug][0] {
      ...,
      "id": _id,
      "slug": slug.current,
        "mainImage": mainImage.asset->url,
         link,
        category->{
            name,
            "id": _id,
            "image": image.asset->url
        },
        "gallery": gallery[].asset->url
    }
`

export const getAllProductsBySearch = groq`
    *[_type == "product" && (name match $searchText || description match $searchText) ] {
      ...,
      "id": _id,
      "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{
            title,
            "id": _id,
            "image": image.asset->url
        },
        "gallery": gallery[].asset->url
    }
`

export const getAllFeaturedProducts = groq`
    *[_type == "featuredProducts"]{
      
        "trendingProducts": trendingProducts[]->{
            "id": _id,
            name,
            "mainImage": mainImage.asset->url,
            slug
        },
        "mostSellingProducts": mostSellingProducts[]->{
            "id": _id,
            slug,
            name,
            "mainImage": mainImage.asset->url,
        }
    }
`
