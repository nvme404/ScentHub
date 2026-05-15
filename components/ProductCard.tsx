
import React from 'react';
import { Perfume } from '../types';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../CartContext';

interface Props {
  perfume: Perfume;
}

const ProductCard: React.FC<Props> = ({ perfume }) => {
  const { addToCart } = useCart();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(perfume, 1);
  };

  return (
    <div className="bg-white border-transparent hover:border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col h-full group rounded-2xl overflow-hidden p-2">
      <Link to={`/product/${perfume.id}`} className="relative pt-[110%] overflow-hidden block rounded-xl bg-gray-50">
        <img 
          src={perfume.image} 
          alt={perfume.name}
          className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        
        {perfume.isBestSeller && (
          <div className="absolute top-3 left-3 bg-[#f37021] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">
            Best Seller
          </div>
        )}
        
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-10">
          <button 
            onClick={handleAddToCart}
            className="bg-white p-3 rounded-full shadow-lg text-[#00a5a8] hover:bg-[#00a5a8] hover:text-white transition-all transform hover:scale-110 active:scale-95"
            title="Tambah ke Keranjang"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </Link>
      
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
           <p className="text-[10px] font-bold text-[#00a5a8] uppercase tracking-widest">{perfume.brand}</p>
           <div className="flex items-center text-yellow-400">
             <Star size={10} fill="currentColor" />
             <span className="text-[10px] font-bold text-gray-400 ml-1">{perfume.rating}</span>
           </div>
        </div>
        
        <Link to={`/product/${perfume.id}`} className="text-sm font-bold text-gray-800 line-clamp-2 min-h-[40px] hover:text-[#00a5a8] transition-colors leading-snug">
          {perfume.name}
        </Link>
        
        <div className="mt-4 pt-4 border-t border-gray-50">
          <p className="text-[#f37021] font-extrabold text-base">
            {formatPrice(perfume.price)}
          </p>
          <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">
            {perfume.sold >= 1000 ? `${(perfume.sold/1000).toFixed(1)}k+ sold` : `${perfume.sold} sold`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
