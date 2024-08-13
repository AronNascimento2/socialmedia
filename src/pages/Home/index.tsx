import { Header } from "@/components/header";
import { CarouselPlugin } from "./components/carrousel";
import { Card } from "@/components/ui/card";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center p-4 bg-[#242424]">
        <CarouselPlugin />
      </div>
      <div className="flex flex-col items-center justify-center p-4 bg-[#242424]">
        <p className="font-bold pb-8 text-white text-[24px]">Lutheria</p>
       <div className="flex gap-4">
       <Card className="w-[300px] h-[300px]" />
        <Card className="w-[300px] h-[300px]" />
        <Card className="w-[300px] h-[300px]" />
        <Card className="w-[300px] h-[300px]" />

       </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 bg-[#242424]">
        <p className="font-bold pb-8 text-white text-[24px]">Editais</p>
        <div className="flex gap-4">
       <Card className="w-[300px] h-[300px]" />
        <Card className="w-[300px] h-[300px]" />
        <Card className="w-[300px] h-[300px]" />
        <Card className="w-[300px] h-[300px]" />

       </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 bg-[#242424]">
        <p className="font-bold pb-8 text-white text-[24px]">Instrumentos à Venda</p>  
        <div className="flex gap-4">
       <Card className="w-[300px] h-[300px]" />
        <Card className="w-[300px] h-[300px]" />
        <Card className="w-[300px] h-[300px]" />
        <Card className="w-[300px] h-[300px]" />

       </div>        </div>
    </>
  );
};
