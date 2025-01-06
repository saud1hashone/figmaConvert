import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface typeOfCarousel {
  image: string;
}

export function CarouselSize({ image }: { image: typeOfCarousel[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[82%]"
    >
      <CarouselContent>
        {image.map((data:typeOfCarousel, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card className="bg-transparent border-transparent relative h-[320px]">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image fill className="object-center rounded-3xl" src={data.image} alt="image"  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
