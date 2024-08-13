import { useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex lg:hidden">
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild className="text-white">
          <button
            onClick={() => setIsMenuOpen(true)}
            id="menu-button-mobile-tuor"
          >
            <Menu className="h-6 w-6" color="white" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className={`flex w-[80%] flex-col overflow-auto bg-[#242424] border-none`}
        >
          <nav>
            <ul className="mt-5 flex flex-col gap-2 hover:cursor-pointer"></ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
