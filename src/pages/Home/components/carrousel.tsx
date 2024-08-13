import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const items = [
    { img: "orchestra.webp" },
    {
      img: "https://images.pexels.com/photos/13673492/pexels-photo-13673492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/7097455/pexels-photo-7097455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/7097459/pexels-photo-7097459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="lg:w-[67%] shadow-xl sm:w-[100%]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="w-full">
            <Card className="w-full h-full border-none  ">
              <CardContent className="flex items-center justify-center p-0 h-full lg:rounded-md">
                <img
                  className="lg:rounded-md w-full h-[400px] object-cover"
                  src={item.img}
                  alt={`Slide ${index + 1}`}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  )
}
