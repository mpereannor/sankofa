type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface Art extends Base {
  artist: Artist
  body: Block[]
  categories: Category[]
  mainImage: Image
  slug: Slug
  title: string
  description: string
}

interface Artist extends Base {
  bio: Block[]
  image: Image
  name: string
  slug: Slug
}

interface Image {
  _type: "image"
  asset: Reference
}

interface Reference {
  _ref: string
  _type: "reference"
}

interface Slug {
  _type: "slug"
  current: string
}

interface Block {
  _key: string
  _type: "block"
  children: Span[]
  markDefs: any[]
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
}

interface Span {
  _key: string
  _type: "span"
  marks: string[]
  text: string
}

interface Category extends Base {
  description: string
  title: string
}

interface MainImage {
  _type: "image"
  asset: "Reference"
}

interface Title {
  _type: "string"
  current: string
}

// type ItemKey = "cart" | "wishlist" | "checkout"
// interface IState {
//   cart: Item[]
//   wishlist: Item[]
//   checkout: Item[]
// }
// interface Item extends Art {
//   count: number
// }
// interface IContext  {
//   state: IState
//   addItem: (key: ItemKey, product: Art, count?: number) => void
//   removeItem: (key: ItemKey, productId: string) => void
//   increaseCount: (key: ItemKey, productId: string) => void
//   decreaseCount: (key: ItemKey, productId: string) => void
//   resetItems: (key: ItemKey) => void
// }
