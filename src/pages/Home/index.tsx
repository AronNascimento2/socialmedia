import { Header } from "@/components/header"
import { CarouselPlugin } from "./components/carrousel"
import { Card } from "@/components/ui/card"
import { useContext } from "react"
import { ThemeContext } from "@/provider/themeProvider"
import { Footer } from "@/components/footer"

interface Item {
  imgSrc?: string
  imgAlt?: string
  title?: string
  description?: string
  date?: string
}

interface Props {
  title?: string
  items?: Item[]
}

const CardSection = ({ title, items }: Props) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`flex flex-col items-center justify-center p-4 ${
        theme === "dark" ? "bg-[#242424]" : "bg-[#f7f7f7]"
      } `}
    >
      <div>
        <p
          className={`pl-6 lg:pl-0 font-bold pb-8 ${
            theme === "light" ? "text-[#242424]" : "text-[#f7f7f7]"
          }  text-[#242424] text-[24px]`}
        >
          {title}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {items.map((item, index) => (
            <Card
              key={index}
              className="w-[330px] sm:w-[300px] md:w-[250px] lg:w-[300px] flex flex-col items-center  h-[400px] rounded-none shadow-xl border-none"
            >
              <img
                src={item.imgSrc}
                alt={item.imgAlt}
                className="w-full h-[200px] object-cover"
              />
              <p className="mt-2 text-center font-bold text-lg">{item.title}</p>
              <p className="overflow-hidden text-ellipsis  text-center p-4 text-[17px]">
                {item.description}
              </p>
              <p className="text-center mt-auto mb-2 pl-6  w-full text-sm">
                {item.date}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export const Home = () => {
  const { theme } = useContext(ThemeContext)

  const commonItems = [
    {
      imgSrc:
        "https://images.pexels.com/photos/4028878/pexels-photo-4028878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt: "Imagem de uma orquestra tocando",
      title: "O Encanto da Música Clássica",
      description:
        "Explore o mundo da música clássica e suas composições atemporais.",
      date: "07/05/2024",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/6899918/pexels-photo-6899918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt: "Imagem de uma performance de ópera",
      title: "Óperas que Marcaram Época",
      description: "Reviva as performances mais memoráveis das grandes óperas.",
      date: "08/12/2024",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt: "Imagem de uma galeria de arte",
      title: "Exposições Imperdíveis",
      description:
        "Descubra as exposições de arte mais notáveis ao redor do mundo.",
      date: "21/09/2024",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt: "Imagem de um museu de arte",
      title: "Museus de Arte para Visitar",
      description:
        "Uma seleção dos museus de arte mais impressionantes para uma visita.",
      date: "15/10/2024",
    },
  ]

  const editals = [
    {
      imgSrc:
        "https://images.pexels.com/photos/7095036/pexels-photo-7095036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt: "Imagem de uma apresentação de música clássica",
      title: "Concertos Clássicos para Ouvir",
      description: "Conheça os concertos clássicos que todos devem ouvir.",
      date: "03/11/2024",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/2676582/pexels-photo-2676582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt: "Imagem de uma coleção de arte renascentista",
      title: "Arte Renascentista: Um Olhar Detalhado",
      description:
        "Explore as obras-primas da arte renascentista e sua importância cultural.",
      date: "01/12/2024",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/25859573/pexels-photo-25859573/free-photo-of-cidade-meio-urbano-ponto-de-referencia-ponto-historico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt: "Imagem de uma escultura contemporânea",
      title: "Esculturas Contemporâneas",
      description: "Descubra as esculturas mais inovadoras e suas inspirações.",
      date: "15/01/2025",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/11803907/pexels-photo-11803907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt: "Imagem de uma instalação de arte",
      title: "Instalações de Arte para Visitar",
      description:
        "Conheça as instalações de arte mais impressionantes e interativas.",
      date: "22/02/2025",
    },
  ]

  const sell = [
    {
      imgSrc:
        "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt: "Imagem de uma peça de música clássica",
      title: "Peças Clássicas para Conhecer",
      description:
        "Um guia para as peças de música clássica que definiram eras.",
      date: "10/03/2025",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt: "Imagem de uma performance de balé",
      title: "O Melhor do Balé Clássico",
      description: "Acompanhe as performances de balé que marcaram a história.",
      date: "14/04/2025",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/4585185/pexels-photo-4585185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt: "Imagem de uma pintura moderna",
      title: "Pinturas Modernas em Destaque",
      description:
        "Explore as pinturas modernas mais impactantes e seus criadores.",
      date: "09/05/2025",
    },
    {
      imgSrc: "teatro.webp",
      imgAlt: "Imagem de uma sala de concertos",
      title: "Salas de Concerto ao Redor do Mundo",
      description:
        "Descubra as salas de concerto mais impressionantes para assistir a uma performance ao vivo.",
      date: "20/06/2025",
    },
  ]

  return (
    <>
      <Header />
      <div
        className={`flex justify-center lg:p-4 ${
          theme === "dark" ? "bg-[#242424]" : "bg-[#f7f7f7]"
        } `}
      >
        <CarouselPlugin />
      </div>
      <CardSection title="Notícias" items={commonItems} />
      <CardSection items={editals} />
      <CardSection items={sell} />
      <Footer />
    </>
  )
}
