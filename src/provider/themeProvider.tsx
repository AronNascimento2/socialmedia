import { createContext, ReactNode, useState, useEffect } from "react"

interface ThemeContextData {
  theme: string
  handleToggleThemeClick: () => void
}

export const ThemeContext = createContext({} as ThemeContextData)

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    // Verifica se já há um tema no localStorage
    const storedTheme = localStorage.getItem("theme")
    // Se houver um tema armazenado, retorna ele, caso contrário, retorna "light"
    return storedTheme || "light"
  })

  const handleToggleThemeClick = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  useEffect(() => {
    // Ao mudar o tema, salva no localStorage
    localStorage.setItem("theme", theme)
  }, [theme]) // Executa o useEffect sempre que o tema mudar

  return (
    <ThemeContext.Provider value={{ theme, handleToggleThemeClick }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
