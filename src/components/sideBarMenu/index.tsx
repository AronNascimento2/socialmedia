import { FileText, Guitar, Home, Newspaper, Tag } from "lucide-react"
import React, { useState } from "react"

const menuItems = [
  { icon: <Home />, label: "Home" },
  { icon: <Newspaper />, label: "Notícias" },
  { icon: <Guitar />, label: "Lutheria" },
  { icon: <FileText />, label: "Editais" },
  { icon: <Tag />, label: "Instrumentos a Venda" },
]

export const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      <div
        className={`fixed z-50 top-0 left-0 h-full transition-all duration-300 ${
          isExpanded ? "w-60" : "w-16"
        } bg-[#242424] text-white hidden lg:block`}
      >
        <button
          className="w-full py-4 text-center text-xl bg-gray-700 hover:bg-gray-600 focus:outline-none"
          onClick={handleToggle}
        >
          {isExpanded ? "MENU ⮜" : "⮟"}
        </button>
        <ul className="mt-4">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center p-4 hover:bg-gray-600"
            >
              <span className="text-2xl">{item.icon}</span>
              {isExpanded && <span className="ml-4">{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
