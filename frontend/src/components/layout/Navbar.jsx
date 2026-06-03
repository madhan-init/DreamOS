import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b-[3px] border-black bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-2xl tracking-tighter uppercase">Dream OS</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center font-bold">
            <a href="#features" className="text-black hover:bg-black hover:text-white px-2 py-1 transition-colors">Features</a>
            <a href="#how-it-works" className="text-black hover:bg-black hover:text-white px-2 py-1 transition-colors">How it Works</a>
            <a href="#pricing" className="text-black hover:bg-black hover:text-white px-2 py-1 transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <button className="font-bold px-4 py-2 hover:bg-gray-100 transition-colors border-2 border-transparent hover:border-black">Login</button>
            <button className="neo-button bg-primary text-black px-6 py-2">Start Dreaming</button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-[3px] border-black bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col font-bold">
            <a href="#features" className="block px-3 py-2 text-black hover:bg-black hover:text-white">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-black hover:bg-black hover:text-white">How it Works</a>
            <a href="#pricing" className="block px-3 py-2 text-black hover:bg-black hover:text-white">Pricing</a>
            <button className="w-full text-left px-3 py-2 text-black hover:bg-gray-100 border-t-[3px] border-black mt-2">Login</button>
            <button className="w-full text-center mt-2 neo-button bg-primary text-black px-3 py-2">Start Dreaming</button>
          </div>
        </div>
      )}
    </nav>
  );
}
