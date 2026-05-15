
import React from 'react';
import { useCart } from '../CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ChevronRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (cart.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
             <div className="bg-[#00a5a8]/10 p-6 rounded-full text-[#00a5a8] mb-6">
                <ShoppingBag size={48} />
             </div>
             <h1 className="text-2xl font-bold text-gray-800">Keranjang Belanjamu Kosong</h1>
             <p className="text-gray-500 mt-4 leading-relaxed">Sepertinya kamu belum menambahkan parfum apa pun ke dalam keranjang. Yuk, cari aroma favoritmu!</p>
             <Link to="/" className="mt-8 bg-[#f37021] text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-[0.2em] shadow-lg hover:bg-[#d96016] transition-all">
                Mulai Belanja
             </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-2 text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-6">
           <Link to="/" className="hover:text-[#00a5a8]">Home</Link>
           <ChevronRight size={10} />
           <span className="text-gray-900">Keranjang Belanja</span>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Keranjang Belanja ({totalItems})</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="flex-1 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6 animate-in slide-in-from-bottom-2 duration-300">
                <Link to={`/product/${item.id}`} className="w-24 h-24 shrink-0 bg-gray-50 rounded-xl overflow-hidden border">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </Link>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                       <p className="text-[10px] font-bold text-[#00a5a8] uppercase tracking-widest">{item.brand}</p>
                       <Link to={`/product/${item.id}`} className="text-lg font-bold text-gray-800 hover:text-[#00a5a8] transition-colors">{item.name}</Link>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-end mt-4">
                     <p className="text-[#f37021] font-extrabold text-xl">{formatPrice(item.price)}</p>
                     
                     <div className="flex items-center border rounded-full overflow-hidden shadow-sm">
                       <button 
                         onClick={() => updateQuantity(item.id, item.cartQuantity - 1)}
                         className="p-2 hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors"
                       >
                         <Minus size={16} />
                       </button>
                       <span className="px-4 font-bold text-sm min-w-[3rem] text-center">{item.cartQuantity}</span>
                       <button 
                         onClick={() => updateQuantity(item.id, item.cartQuantity + 1)}
                         className="p-2 hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors"
                       >
                         <Plus size={16} />
                       </button>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-28">
               <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Ringkasan Pesanan</h2>
               
               <div className="space-y-4 text-sm mb-6">
                 <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal ({totalItems} produk)</span>
                    <span className="font-bold">{formatPrice(totalPrice)}</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-gray-500">Ongkos Kirim</span>
                    <span className="text-green-600 font-bold uppercase text-[10px] bg-green-50 px-2 py-0.5 rounded-full">Gratis</span>
                 </div>
               </div>
               
               <div className="border-t pt-6 mb-8">
                 <div className="flex justify-between items-end">
                    <span className="text-lg font-bold">Total Harga</span>
                    <span className="text-2xl font-extrabold text-[#f37021]">{formatPrice(totalPrice)}</span>
                 </div>
                 <p className="text-[10px] text-gray-400 text-right mt-2 font-medium italic">Termasuk PPN jika berlaku</p>
               </div>
               
               <button className="w-full bg-[#00a5a8] text-white py-5 rounded-full font-bold uppercase text-xs tracking-[0.2em] shadow-xl hover:bg-[#008c8e] transition-all transform hover:-translate-y-1 mb-6">
                 Lanjut ke Pembayaran
               </button>

               <div className="bg-gray-50 p-4 rounded-2xl flex items-start space-x-3 text-[10px] leading-relaxed text-gray-500 font-medium">
                  <ShieldCheck className="text-[#00a5a8] shrink-0" size={16} />
                  <span>Transaksi Anda dilindungi oleh <strong>ScentHub Secure Protection</strong>. Jaminan produk 100% original atau uang kembali.</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
