export const Footer = () => {
  const date = new Date()

  const year = date.getFullYear()
  return (
    <div className="bg-[#242424] h-[80px] text-[#f7f7f7] flex items-center justify-center">
      © {year} RESSONÂNCIA. Todos os direitos reservados.
    </div>
  )
}
