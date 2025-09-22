import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 w-full z-50">
      <header
        className={`max-w-7xl mx-auto flex items-center justify-between py-2 px-4 
        border rounded-lg transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        {/* LOGO */}
        <div className="flex-shrink-0">
          <img
            src="/src/assets/logojm.png"
            alt="Logo"
            className="h-30 w-auto object-contain"
          />
        </div>

        {/* INFO + MENÚ DESKTOP */}
        <div className="hidden md:flex flex-col items-end w-full">
          {/* Barra de contacto arriba */}
          <div className="flex w-fit text-black border-b-2 border-black space-x-6 text-sm px-4 py-1">
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span>+124 12 45 658</span>
            </div>
            <div className="flex items-center space-x-2 border-l-2 pl-4 border-black">
              <span>✉️</span>
              <span>info@example.com</span>
            </div>
            <div className="flex items-center space-x-2 border-l-2 pl-4 border-black">
              <span>🕒</span>
              <span>Lunes - Viernes : 7am - 6pm</span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex py-2 justify-end space-x-8 text-black font-semibold">
            <a href="#" className="px-2 hover:underline">Inicio</a>
            <a href="#" className="px-2 hover:underline">Acerca de</a>
            <a href="#" className="px-2 hover:underline">Servicios</a>
            <a href="#" className="px-2 hover:underline">Contacto</a>
            <a href="#" className="px-2 hover:underline">Blog</a>
            <a href="#" className="px-2 hover:underline">Proyectos</a>
          </nav>
        </div>

        {/* BOTÓN HAMBURGUESA SOLO EN MÓVIL */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-8 w-8" />
        </button>
      </header>

      {/* OVERLAY OSCURO */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MENU LATERAL */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* BOTÓN DE CERRAR */}
        <button
          className="absolute top-4 right-4 text-black"
          onClick={() => setMenuOpen(false)}
        >
          <X className="h-8 w-8" />
        </button>

        {/* CONTACTO */}
        <div className="bg-blue-900 text-white py-4 px-4 space-y-4 mt-12">
          <div className="flex items-center space-x-2">
            📞 <span>+124 12 45 658</span>
          </div>
          <div className="flex items-center space-x-2 border-t pt-2 border-white">
            ✉️ <span>info@example.com</span>
          </div>
          <div className="flex items-center space-x-2 border-t pt-2 border-white">
            🕒 <span>Lunes - Viernes : 7am - 6pm</span>
          </div>
        </div>

        {/* LINKS DEL MENÚ */}
        <nav className="flex flex-col py-6 px-4 space-y-4 text-blue-900 font-semibold">
          <a href="#">Inicio</a>
          <a href="#">Acerca de</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
    </div>
  );
}
