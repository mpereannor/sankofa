import { defineArrayMember, defineField, defineType } from "sanity"

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of Product",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 100 },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
        name: "artist",
        title: "Artist",
        type: "reference",
        to: { type: "artist" },
      }),
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "text",
      description: "Social Media Link; Instagram",
    }),
    {
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "gallery",
        },
      ],
      options: { maxLength: 3 },
    },
    {
      name: "rating",
      title: "Rating",
      type: "object",
      fields: [
        {
          name: "rate",
          title: "Rate",
          type: "number",
        },
        {
          name: "count",
          title: "Count",
          type: "number",
        },
      ],
    },
    defineField({
        name: "publishedAt",
        title: "Published at",
        type: "datetime",
      }),
  ],
})
