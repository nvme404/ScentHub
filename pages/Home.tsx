
import React from 'react';
import { STORES, ALL_PERFUMES } from '../data';
import ProductCard from '../components/ProductCard';
import { ChevronRight, Star, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Main Hero Slider Area */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4 h-[300px] md:h-[450px]">
          <div className="flex-1 rounded-2xl overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1613521134910-f1c2b535d79b?auto=format&fit=crop&w=1200&h=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Banner" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-10 text-white">
               <span className="bg-[#f37021] text-white text-xs font-bold px-3 py-1 rounded-full w-max mb-4 uppercase tracking-widest">Global Exclusive</span>
               <h1 className="text-4xl md:text-5xl font-extrabold mb-2">The Art of Fine Perfumery</h1>
               <p className="text-lg opacity-90 mb-6">Experience legendary scents from Chanel, Dior, Creed, and more.</p>
               <div className="flex space-x-4">
                 <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#00a5a8] hover:text-white transition-colors">Shop Now</button>
                 <div className="hidden md:flex items-center text-xs font-bold uppercase tracking-widest">
                   <ShieldCheck size={16} className="mr-2 text-[#00a5a8]" /> 100% Original Guarantee
                 </div>
               </div>
             </div>
          </div>
          <div className="hidden md:flex flex-col gap-4 w-1/3">
             <div className="h-1/2 rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=600&h=300" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Banner" />
                <div className="absolute inset-0 flex flex-col justify-center p-6 text-white bg-black/40">
                  <h3 className="font-bold text-xl uppercase italic">Dior Official</h3>
                  <p className="text-xs">Spring Summer Collection</p>
                </div>
             </div>
             <div className="h-1/2 rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&h=300" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Banner" />
                <div className="absolute inset-0 flex flex-col justify-center p-6 text-white bg-black/40">
                  <h3 className="font-bold text-xl uppercase italic">Chanel Classics</h3>
                  <p className="text-xs">The Essence of Elegance</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Brand Selection Circles - Expanded */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-10">
           <h2 className="text-xl font-extrabold text-gray-900 flex items-center uppercase tracking-tight">
             <Star className="text-[#f37021] mr-3" size={24} fill="currentColor" /> World-Class Brands
           </h2>
           <Link to="/" className="text-[#00a5a8] text-xs font-bold uppercase flex items-center hover:underline tracking-widest">View All Brands <ChevronRight size={14} className="ml-1"/></Link>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-10">
          {STORES.map(store => (
            <Link key={store.id} to={`/store/${store.id}`} className="flex flex-col items-center group">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-[#00a5a8] transition-all p-1 mb-3 bg-white shadow-sm ring-4 ring-transparent group-hover:ring-[#00a5a8]/10">
                <img src={store.logo} alt={store.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-center text-gray-700 group-hover:text-[#00a5a8] uppercase tracking-wider">{store.name.split(' ')[0]}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <h2 className="text-2xl font-extrabold text-gray-900 flex items-center">
              <TrendingUp className="text-[#00a5a8] mr-3" size={24} /> Best Seller Worldwide
            </h2>
            <div className="flex space-x-4 md:space-x-8 text-[11px] font-extrabold text-gray-400 tracking-widest">
               <span className="text-[#00a5a8] border-b-2 border-[#00a5a8] cursor-pointer pb-1">ALL</span>
               <span className="hover:text-[#00a5a8] cursor-pointer pb-1 transition-colors">MEN LUXURY</span>
               <span className="hover:text-[#00a5a8] cursor-pointer pb-1 transition-colors">WOMEN CLASSICS</span>
               <span className="hover:text-[#00a5a8] cursor-pointer pb-1 transition-colors">NICHE SCENTS</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {ALL_PERFUMES.map(perfume => (
              <ProductCard key={perfume.id} perfume={perfume} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="border-2 border-[#00a5a8] text-[#00a5a8] px-16 py-4 rounded-full font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-[#00a5a8] hover:text-white transition-all shadow-md group">
              Load More <span className="inline-block transition-transform group-hover:translate-y-1">↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* AI Consulting Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
         <div className="bg-[#00a5a8] rounded-[2.5rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
               <Sparkles size={300} />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
               <span className="text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Personal Fragrance Guide</span>
               <h2 className="text-4xl md:text-6xl font-extrabold mb-8 italic tracking-tight">Need help choosing your signature scent?</h2>
               <p className="text-xl opacity-90 mb-12 leading-relaxed">Our Gemini-powered AI Scent Consultant analyzes your style, occasion, and personality to find your perfect olfactory match from thousands of global brands.</p>
               <button className="bg-[#f37021] text-white px-12 py-5 rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-[#d96016] transition-all shadow-xl hover:-translate-y-1">Start AI Consultation</button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
