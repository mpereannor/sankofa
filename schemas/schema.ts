import { type SchemaTypeDefinition } from "sanity"

import blockContent from "./blockContent"
import category from "./category"
import post from "./post"
import author from "./author"
import artist from "./artist"
import product from "./product"
import gallery from "./gallery"
import featured from "./featured"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    artist,
    post,
    author,
    product,
    category,
    blockContent,
    gallery,
    featured,
  ],
}
