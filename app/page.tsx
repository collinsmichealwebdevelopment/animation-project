
"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Home() {
  return (
    <CardContainer className="inter-var">
  <div className="flex flex-1 justify-end h-full items-end relative">
    <CardItem translateZ="100" className="pl-3 z-10 relative absolute bottom-1/2 translate-y-1/2 right-20 w-60 h-60">
        <Image
          src="/image.png"
          height="1000"
          width="1000"
          className="rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
    </CardItem>
    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  rounded-xl p-6 border ">
    <div className="flex justify-between items-center mt-20">
        <CardItem
          translateZ={20}
          target="__blank"
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          Try now →
        </CardItem>
        
      </div>
    </CardBody>
  </div>
</CardContainer>
  )
}