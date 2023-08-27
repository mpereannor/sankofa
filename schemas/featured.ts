import { defineType } from "sanity"

export default defineType({
  name: "featured",
  title: "Featured",
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
