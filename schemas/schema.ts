import { type SchemaTypeDefinition } from "sanity"

import blockContent from "./blockContent"
import category from "./category"
import post from "./post"
import author from "./author"
import artist from "./artist"
import art from "./art"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [art, artist, post, author, category, blockContent],
}
