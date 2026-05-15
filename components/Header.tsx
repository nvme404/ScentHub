
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      {/* Top small bar */}
      <div className="bg-gray-100 py-1 text-[10px] text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex justify-end space-x-6">
          <span className="cursor-pointer hover:text-gray-800">Hubungi Kami</span>
          <span className="cursor-pointer hover:text-gray-800">Lokasi Toko</span>
          <span className="cursor-pointer hover:text-gray-800">Bantuan</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between py-4 gap-8">
          <Link to="/" className="shrink-0">
             <span className="guardian-teal font-extrabold text-3xl italic tracking-tighter">ScentHub</span>
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-xl relative">
            <input
              type="text"
              placeholder="Cari parfum favoritmu (Dior, Chanel, HMNS...)"
              className="w-full py-2 px-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:border-[#00a5a8] text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#00a5a8]">
              <Search size={18} />
            </button>
          </form>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-1 cursor-pointer hover:text-[#00a5a8] text-gray-600">
              <User size={22} />
              <span className="text-xs font-medium">Masuk</span>
            </div>
            <Link to="/" className="text-gray-600 hover:text-[#00a5a8]">
              <Heart size={22} />
            </Link>
            <Link to="/cart" className="relative text-gray-600 hover:text-[#00a5a8] transition-transform hover:scale-110">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#f37021] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[1.2rem] text-center shadow-sm animate-in fade-in zoom-in duration-300">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Categories Bar */}
        <nav className="flex items-center space-x-8 py-3 text-xs font-bold uppercase tracking-wide text-gray-700 overflow-x-auto whitespace-nowrap">
           <div className="flex items-center cursor-pointer hover:text-[#00a5a8]">
             <Menu size={16} className="mr-2" /> Belanja Kategori
           </div>
           <Link to="/search?q=Brands" className="cursor-pointer hover:text-[#00a5a8]">Brands</Link>
           <Link to="/search?q=Promo" className="cursor-pointer hover:text-[#00a5a8]">Promo</Link>
           <Link to="/search?q=Best Sellers" className="cursor-pointer hover:text-[#00a5a8]">Best Sellers</Link>
           <Link to="/search?q=New Arrivals" className="cursor-pointer hover:text-[#00a5a8]">New Arrivals</Link>
           <span className="cursor-pointer hover:text-[#00a5a8] text-[#f37021]">Health & Beauty</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
