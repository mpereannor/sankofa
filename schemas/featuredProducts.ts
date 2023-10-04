import { defineType } from "sanity"

export default defineType({
  name: "featuredProducts",
  title: "Featured Products",
  type: "document",
  fields: [
    {
      name: "popularCategories",
      title: "Popular Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      name: "mostSellingProducts",
      title: "Most Selling Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
    {
      name: "bestDeals",
      title: "Best Deals",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
    {
      name: "trendingProducts",
      title: "Trending Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
    {
      name: "topSelling",
      title: "Top Selling",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
  ],
})
