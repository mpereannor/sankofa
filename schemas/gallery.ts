import { defineType, defineField } from "sanity"

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "image",
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string",
      options: {
        isHighLight: true,
      },
    },
  ],
  options: { hotspot: true },
})
