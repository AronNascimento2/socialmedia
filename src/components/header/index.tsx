import { FileText, Guitar, Home, Menu, Newspaper, Tag, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const menuItems = [
    { icon: <Home />, label: 'Home' },
    { icon: <Newspaper />, label: 'Notícias' },
    { icon: <Guitar />, label: 'Lutheria' },
    { icon: <FileText />, label: 'Editais' },
    { icon: <Tag />, label: 'Instrumentos a Venda' },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col items-center  text-white ">
    <div className='w-full'>
    <button
          className="lg:hidden p-2 text-white bg-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    </div>
      <div className="flex items-center justify-center ">
        <img src="logo.png" alt="Logo" />
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
      </div>
    </header>
  );
};
