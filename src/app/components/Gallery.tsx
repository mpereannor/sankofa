import urlFor from "@/lib/urlFor"
import Image from "next/image"
type Props = { arts: Art[] }
function Gallery({ arts }: Props) {
  return (
    <section className="px-2 py-4">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        justify-items-center gap-y-6 grid-rows-masonry

mb-[20px]"
      >
        {arts.map((art) => (
          <div
            key={art._id}
            className="rounded-xl  break-inside-avoid hover:scale-105 transition-transform duration-200 ease-out w-[300px] h-[200px] relative"
          >
            <Image
              src={urlFor(art.mainImage).url()}
              alt={art.artist.name}
            sizes="100vw"
              fill
              style={{ borderRadius: "15px",objectFit:"cover" }}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
