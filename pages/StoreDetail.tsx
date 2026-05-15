
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { STORES } from '../data';
import { ChevronRight, Filter, Grid, List, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const StoreDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const store = STORES.find(s => s.id === id);

  if (!store) return <div className="p-20 text-center">Toko tidak ditemukan</div>;

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-2 text-[11px] text-gray-500 uppercase tracking-wider">
          <Link to="/" className="hover:text-[#00a5a8]">Home</Link>
          <ChevronRight size={12} />
          <span className="hover:text-[#00a5a8] cursor-pointer">Brand</span>
          <ChevronRight size={12} />
          <span className="text-gray-900 font-bold">{store.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar - Filtering */}
          <aside className="w-full md:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="font-bold text-sm uppercase mb-4 border-b pb-2 flex justify-between items-center">
                Filter <Filter size={14} className="text-gray-400" />
              </h3>
              
              <div className="space-y-6">
                {/* Category Filter */}
                <div className="space-y-3">
                   <h4 className="text-xs font-bold uppercase text-gray-700 flex justify-between items-center cursor-pointer">
                     Kategori <ChevronDown size={14} />
                   </h4>
                   <div className="space-y-2 text-sm text-gray-600 px-1">
                      {['Men', 'Women', 'Unisex', 'Eau de Parfum', 'Extrait de Parfum'].map(cat => (
                        <label key={cat} className="flex items-center cursor-pointer hover:text-[#00a5a8]">
                          <input type="checkbox" className="mr-2 rounded border-gray-300 text-[#00a5a8] focus:ring-[#00a5a8]" />
                          {cat}
                        </label>
                      ))}
                   </div>
                </div>

                {/* Price Filter */}
                <div className="space-y-3">
                   <h4 className="text-xs font-bold uppercase text-gray-700 flex justify-between items-center cursor-pointer">
                     Harga <ChevronDown size={14} />
                   </h4>
                   <div className="space-y-2 text-sm text-gray-600 px-1">
                      {['Rp0 - Rp100.000', 'Rp100.000 - Rp500.000', 'Rp500.000+'].map(range => (
                        <label key={range} className="flex items-center cursor-pointer hover:text-[#00a5a8]">
                          <input type="radio" name="price" className="mr-2 text-[#00a5a8] focus:ring-[#00a5a8]" />
                          {range}
                        </label>
                      ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-[#00a5a8]/5 p-4 rounded-lg">
               <h4 className="font-bold text-xs text-[#00a5a8] mb-2">Butuh Bantuan?</h4>
               {/* Fix: use store.name instead of store.brand as Store type doesn't have brand property */}
               <p className="text-[10px] text-gray-500 mb-3">Tanyakan pada ahli kecantikan kami tentang brand {store.name}</p>
               <button className="w-full bg-[#00a5a8] text-white text-[10px] font-bold py-2 rounded-full uppercase tracking-widest">Chat Sekarang</button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-1">{store.name}</h1>
                <p className="text-sm text-gray-500">{store.perfumes.length} Produk Ditemukan</p>
              </div>
              
              <div className="flex items-center space-x-4 self-end">
                <div className="flex items-center space-x-2 border rounded-full px-4 py-1.5 text-xs text-gray-600 bg-white">
                  <span>Urutkan:</span>
                  <select className="focus:outline-none bg-transparent font-bold">
                    <option>Relevansi</option>
                    <option>Terbaru</option>
                    <option>Harga: Rendah ke Tinggi</option>
                    <option>Harga: Tinggi ke Rendah</option>
                  </select>
                </div>
                <div className="flex border rounded-full overflow-hidden">
                   <button className="p-2 bg-gray-100 text-[#00a5a8]"><Grid size={18} /></button>
                   <button className="p-2 bg-white text-gray-400 border-l hover:text-[#00a5a8]"><List size={18} /></button>
                </div>
              </div>
            </div>

            {/* Banner Section */}
            <div className="mb-10 rounded-xl overflow-hidden relative h-48 bg-gray-100">
               <img src={`https://picsum.photos/seed/${store.id}/1200/400`} className="w-full h-full object-cover opacity-80" alt="Brand Banner" />
               <div className="absolute inset-0 flex flex-col justify-center px-12 text-white bg-black/20">
                  <h2 className="text-2xl font-bold uppercase tracking-widest">{store.name} Collections</h2>
                  <p className="text-sm max-w-md mt-2">Temukan keajaiban wewangian eksklusif dari {store.name}. Kualitas premium untuk kepercayaan diri Anda.</p>
               </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {store.perfumes.map(p => <ProductCard key={p.id} perfume={p} />)}
              {/* Dummy duplication for better grid demonstration */}
              {store.perfumes.map(p => <ProductCard key={`${p.id}-copy`} perfume={p} />)}
            </div>

            {/* Pagination Mockup */}
            <div className="mt-16 flex justify-center items-center space-x-4">
               <button className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 disabled:opacity-30" disabled>&lt;</button>
               <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00a5a8] text-white font-bold">1</button>
               <button className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100 font-bold">2</button>
               <button className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100 font-bold">3</button>
               <button className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 font-bold">&gt;</button>
            </div>
          </main>
        </div>
      </div>
      
      {/* Brand Description Footer */}
      <div className="bg-gray-50 mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-[#00a5a8] pl-4">Tentang {store.name}</h2>
          <div className="text-sm text-gray-600 leading-relaxed space-y-4 max-w-4xl">
            <p>
              {store.name} merupakan salah satu brand terkemuka yang kini tersedia di ScentHub. Dikenal dengan karakter aromanya yang kuat dan desain botol yang elegan, {store.name} telah mencuri hati jutaan penggemar parfum di seluruh dunia.
            </p>
            <p>
              Setiap produk dari {store.name} dibuat menggunakan bahan-bahan pilihan berkualitas tinggi untuk memastikan ketahanan aroma yang maksimal sepanjang hari. Dari varian floral yang lembut hingga oriental yang misterius, temukan pilihan yang paling sesuai dengan kepribadian Anda di sini.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
