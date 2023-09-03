"use-client"

import Image from "next/image"

export const Loading = () => {
  return (
    <div className=" w-full h-screen   flex justify-center items-center">
      <div className="w-[20%] h-[20%] flex flex-col  justify-center items-center gap-y-6">
        <Image
          src={"/sankofa_loading.png"}
          alt="sankofa_loading"
          width={50}
          height={50}
        />
        <div className="text-md text-white">Loading...</div>
      </div>
    </div>
  )
}
