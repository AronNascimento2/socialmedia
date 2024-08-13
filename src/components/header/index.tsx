import { ThemeContext } from "@/provider/themeProvider"
import { FileText, Guitar, Home, Moon, Newspaper, Sun, Tag } from "lucide-react"
import { useContext } from "react"
import { MobileMenu } from "../mobilemenu"

export const Header = () => {
  const menuItems = [
    { icon: <Home />, label: "Home", id: "Home" },
    { icon: <Newspaper />, label: "Notícias", id: "news" },
    { icon: <Guitar />, label: "Lutheria", id: "lutheria" },
    { icon: <FileText />, label: "Editais", id: "editais" },
    { icon: <Tag />, label: "Instrumentos a Venda", id: "sell" },
  ]
  const { theme, handleToggleThemeClick } = useContext(ThemeContext)

  return (
    <header className="w-full flex flex-col items-center  text-white bg-[#242424] ">
      <div className="w-full p-2 ">
        <MobileMenu />
      </div>
      <div className="flex items-center justify-center ">
        <img src="logo.png" alt="Logo" className="lg:h-[350px]" />
      </div>
      <div className="hidden lg:flex lg:space-x-4 lg:gap-4 p-4">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center p-2 bg-[#181818] rounded hover:bg-gray-600 cursor-pointer"
          >
            <span className="text-xl mr-2">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
        <button onClick={handleToggleThemeClick} className="group relative">
          {theme === "light" ? (
            <Sun className="h-5 w-5" color="white" />
          ) : (
            <Moon className="h-5 w-5" color="white" />
          )}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="absolute h-[40px] w-[40px] rounded-full border-[1px] border-transparent p-2 group-hover:border-white"></span>
          </span>
        </button>
      </div>
    </header>
  )
}
