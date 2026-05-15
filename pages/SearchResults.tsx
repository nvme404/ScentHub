
import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ALL_PERFUMES } from '../data';
import ProductCard from '../components/ProductCard';
import { ChevronRight, Filter, Search, SlidersHorizontal } from 'lucide-react';

const SearchResults: React.FC = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const q = queryParams.get('q') || '';

  const results = useMemo(() => {
    if (!q) return ALL_PERFUMES;
    const lowerQ = q.toLowerCase().trim();
    
    // Split query by space to allow multi-term search
    const terms = lowerQ.split(/\s+/);
    
    return ALL_PERFUMES.filter(p => {
      const searchSpace = `${p.name} ${p.brand} ${p.category} ${p.description}`.toLowerCase();
      // Every term must match somewhere in the product info
      return terms.every(term => searchSpace.includes(term));
    });
  }, [q]);

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-gray-50 py-3 border-b">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-2 text-[10px] text-gray-500 uppercase font-bold tracking-widest">
          <Link to="/" className="hover:text-[#00a5a8]">Home</Link>
          <ChevronRight size={10} />
          <span className="text-gray-900">Hasil Pencarian</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b pb-6 gap-4">
           <div>
             <h1 className="text-3xl font-extrabold text-gray-900">
               {q ? `Hasil pencarian untuk "${q}"` : 'Semua Koleksi Parfum'}
             </h1>
             <p className="text-sm text-gray-500 mt-2 font-medium">Ditemukan {results.length} aroma premium dari koleksi dunia</p>
           </div>
           <div className="flex items-center space-x-3">
             <div className="flex items-center space-x-2 border px-5 py-2.5 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-50 transition cursor-pointer">
               <SlidersHorizontal size={14} /> <span>Urutkan</span>
             </div>
             <button className="flex items-center space-x-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-black transition shadow-sm">
               <Filter size={14} /> <span>Filter Lengkap</span>
             </button>
           </div>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {results.map(p => (
              <div key={p.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <ProductCard perfume={p} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 flex flex-col items-center justify-center text-center">
            <div className="bg-gray-50 p-10 rounded-full mb-8 text-gray-200 ring-8 ring-gray-100/50">
               <Search size={80} />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Oops! Aroma yang kamu cari belum tersedia</h2>
            <p className="text-gray-500 mt-4 max-w-lg leading-relaxed mx-auto">
              Kami sedang terus mengupdate koleksi parfum dari seluruh penjuru dunia. Coba gunakan kata kunci brand (Dior, Chanel, Tom Ford) atau jenis aroma.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Link to="/" className="bg-[#00a5a8] text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest shadow-lg hover:bg-[#008c8e] transition">
                Telusuri Koleksi Populer
              </Link>
            </div>
          </div>
        )}

        {/* Brand Discovery Section for empty results or just extra value */}
        <div className="mt-20 pt-16 border-t">
           <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 text-center">Telusuri Berdasarkan Brand Ternama</h3>
           <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {['CHANEL', 'DIOR', 'TOM FORD', 'GUCCI', 'YSL', 'HERMES', 'JO MALONE'].map(brand => (
                <Link key={brand} to={`/search?q=${brand}`} className="text-xl font-black tracking-tighter hover:text-[#00a5a8]">{brand}</Link>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
