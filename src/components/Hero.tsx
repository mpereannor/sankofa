function Hero() {
  return (
    <div
      className="w-full flex  justify-end bg-hero bg-no-repeat pt [10vh] relative h-screen bg-cover bg-center"
      style={{ backgroundSize: "100% cover" }}
    >
      <div className="text-sm self-end p-8">
        Photo by{" "}
        <a
          className="text-white/[0.5] hover:text-white"
          href="https://unsplash.com/@goashape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Goashape
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/Rb_wkrNoMnA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
    </div>
  )
}

export default Hero
