
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_PERFUMES, STORES } from '../data';
import { Star, Truck, ShoppingCart, Heart, Share2, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';
import { getPerfumeRecommendation } from '../geminiService';
import { useCart } from '../CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const perfume = ALL_PERFUMES.find(p => p.id === id);
  const store = STORES.find(s => s.perfumes.some(p => p.id === id));
  
  const { addToCart } = useCart();
  const [aiRec, setAiRec] = useState<string>('');
  const [loadingAi, setLoadingAi] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  useEffect(() => {
    if (perfume) {
      setLoadingAi(true);
      getPerfumeRecommendation(`Berikan rekomendasi untuk ${perfume.name} dari ${perfume.brand}. Jelaskan cocok untuk acara apa.`)
        .then(res => {
          setAiRec(res || '');
          setLoadingAi(false);
        });
    }
  }, [perfume]);

  if (!perfume || !store) return <div className="p-20 text-center">Produk tidak ditemukan</div>;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(perfume, quantity);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 3000);
  };

  const handleBuyNow = () => {
    addToCart(perfume, quantity);
    navigate('/cart');
  };

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-2 text-[10px] text-gray-500 uppercase font-bold tracking-widest">
          <Link to="/" className="hover:text-[#00a5a8]">Home</Link>
          <ChevronRight size={10} />
          <Link to={`/store/${store.id}`} className="hover:text-[#00a5a8]">{store.name}</Link>
          <ChevronRight size={10} />
          <span className="text-gray-900">{perfume.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Product Images */}
          <div className="space-y-6">
            <div className="bg-white border rounded-2xl p-8 aspect-square flex items-center justify-center relative shadow-sm overflow-hidden group">
               <img src={perfume.image} alt={perfume.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
               <div className="absolute top-4 right-4 flex flex-col space-y-2">
                 <button className="p-2 bg-white rounded-full shadow-md hover:bg-[#00a5a8] hover:text-white transition-colors"><Heart size={18} /></button>
                 <button className="p-2 bg-white rounded-full shadow-md hover:bg-[#00a5a8] hover:text-white transition-colors"><Share2 size={18} /></button>
               </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border rounded-xl p-2 cursor-pointer hover:border-[#00a5a8] bg-white aspect-square flex items-center justify-center">
                  <img src={perfume.image} className="w-full h-full object-contain" alt="thumb" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-8">
            <div>
              <Link to={`/store/${store.id}`} className="text-[#00a5a8] text-xs font-bold uppercase tracking-widest mb-2 block hover:underline">{perfume.brand}</Link>
              <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">{perfume.name}</h1>
              <div className="flex items-center space-x-4 mt-4 text-sm">
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < Math.floor(perfume.rating) ? "currentColor" : "none"} />)}
                  <span className="text-gray-500 ml-2">({perfume.sold} reviews)</span>
                </div>
                <div className="h-4 w-px bg-gray-200"></div>
                <span className="text-gray-500">ID: P-{perfume.id}</span>
              </div>
            </div>

            <div className="bg-gray-50/50 p-6 rounded-2xl border">
               <div className="flex items-baseline space-x-3">
                 <span className="text-4xl font-extrabold text-[#f37021]">{formatPrice(perfume.price)}</span>
                 <span className="text-gray-400 line-through text-sm">{formatPrice(perfume.price * 1.3)}</span>
               </div>
               <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-[#f37021] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">30% OFF</span>
                  <span className="bg-[#00a5a8] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">FREE DELIVERY</span>
               </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-bold text-gray-700 w-24">Jumlah</span>
                <div className="flex items-center border rounded-full overflow-hidden">
                   <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-5 py-2 hover:bg-gray-100 transition">-</button>
                   <span className="px-6 font-bold">{quantity}</span>
                   <button onClick={() => setQuantity(quantity + 1)} className="px-5 py-2 hover:bg-gray-100 transition">+</button>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <div className="flex gap-4">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-[#00a5a8] text-white py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#008c8e] transition shadow-lg flex items-center justify-center relative overflow-hidden active:scale-95"
                  >
                    <ShoppingCart size={18} className="mr-3" /> Tambah Keranjang
                  </button>
                  <button 
                    onClick={handleBuyNow}
                    className="flex-1 border-2 border-[#f37021] text-[#f37021] py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#f37021] hover:text-white transition shadow-md active:scale-95"
                  >
                    Beli Sekarang
                  </button>
                </div>
                {addedMessage && (
                  <p className="text-[#00a5a8] text-xs font-bold text-center animate-bounce">
                    ✓ Berhasil ditambahkan ke keranjang!
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 text-[10px] uppercase font-bold tracking-widest text-gray-500">
               <div className="flex items-center"><ShieldCheck size={20} className="mr-2 text-[#00a5a8]" /> 100% Original</div>
               <div className="flex items-center"><Truck size={20} className="mr-2 text-[#00a5a8]" /> Pengiriman Cepat</div>
            </div>

            {/* AI Advisor Box */}
            <div className="bg-[#00a5a8]/5 border-2 border-[#00a5a8]/10 rounded-2xl p-6 relative overflow-hidden">
               <div className="flex items-center text-[#00a5a8] font-bold text-sm mb-3">
                  <Sparkles size={16} className="mr-2" /> AI BEAUTY ADVISOR
               </div>
               {loadingAi ? (
                 <div className="animate-pulse flex space-x-4">
                   <div className="flex-1 space-y-4 py-1">
                     <div className="h-2 bg-gray-200 rounded"></div>
                     <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                   </div>
                 </div>
               ) : (
                 <p className="text-xs text-gray-600 leading-relaxed italic italic">"{aiRec}"</p>
               )}
            </div>
          </div>
        </div>

        {/* Description Tabs */}
        <div className="mt-20">
           <div className="flex border-b text-xs font-bold uppercase tracking-widest text-gray-400 overflow-x-auto whitespace-nowrap">
              <button className="px-8 py-4 border-b-2 border-[#00a5a8] text-[#00a5a8]">Deskripsi</button>
              <button className="px-8 py-4 hover:text-gray-900 transition">Cara Pakai</button>
              <button className="px-8 py-4 hover:text-gray-900 transition">Ulasan</button>
           </div>
           
           <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-6">
                 <h3 className="text-xl font-bold text-gray-800">Review Produk</h3>
                 <p className="text-sm text-gray-600 leading-loose whitespace-pre-wrap">{perfume.description}</p>
                 
                 <div className="space-y-4 pt-6">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500">Notes Profile</h4>
                    <div className="grid grid-cols-3 gap-4">
                       <div className="p-4 bg-gray-50 rounded-xl">
                          <span className="text-[10px] font-bold text-[#00a5a8] block mb-2">TOP</span>
                          <span className="text-xs">{perfume.notes.top.join(', ')}</span>
                       </div>
                       <div className="p-4 bg-gray-50 rounded-xl">
                          <span className="text-[10px] font-bold text-[#f37021] block mb-2">MIDDLE</span>
                          <span className="text-xs">{perfume.notes.middle.join(', ')}</span>
                       </div>
                       <div className="p-4 bg-gray-50 rounded-xl">
                          <span className="text-[10px] font-bold text-purple-600 block mb-2">BASE</span>
                          <span className="text-xs">{perfume.notes.base.join(', ')}</span>
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="bg-gray-50 rounded-3xl p-8 h-max">
                 <h3 className="font-bold text-lg mb-6">Spesifikasi Detail</h3>
                 <div className="space-y-4 text-xs">
                    <div className="flex justify-between border-b pb-3"><span className="text-gray-400">Brand</span><span className="font-bold">{perfume.brand}</span></div>
                    <div className="flex justify-between border-b pb-3"><span className="text-gray-400">Tipe</span><span className="font-bold">Eau de Parfum</span></div>
                    <div className="flex justify-between border-b pb-3"><span className="text-gray-400">Kategori</span><span className="font-bold">{perfume.category}</span></div>
                    <div className="flex justify-between border-b pb-3"><span className="text-gray-400">Ukuran</span><span className="font-bold">100ml</span></div>
                    <div className="flex justify-between border-b pb-3"><span className="text-gray-400">Negara Asal</span><span className="font-bold">Indonesia / France</span></div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
