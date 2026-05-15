
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
          <div className="space-y-6">
            <h4 className="font-extrabold text-[#00a5a8] text-2xl italic tracking-tighter">ScentHub</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Toko kecantikan dan kesehatan nomor satu di hati Anda. Kami menghadirkan produk parfum pilihan terbaik dari brand-brand ternama dunia.
            </p>
            <div className="flex space-x-4">
               {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#00a5a8] hover:text-white transition cursor-pointer">?</div>)}
            </div>
          </div>
          
          <div className="space-y-4">
            <h5 className="font-bold uppercase tracking-widest text-xs text-gray-800">Produk</h5>
            <ul className="space-y-3 text-gray-500 text-xs">
              <li className="hover:text-[#00a5a8] cursor-pointer">Parfum Pria</li>
              <li className="hover:text-[#00a5a8] cursor-pointer">Parfum Wanita</li>
              <li className="hover:text-[#00a5a8] cursor-pointer">Unisex Fragrance</li>
              <li className="hover:text-[#00a5a8] cursor-pointer">New Arrivals</li>
              <li className="hover:text-[#00a5a8] cursor-pointer">Special Offers</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold uppercase tracking-widest text-xs text-gray-800">Layanan</h5>
            <ul className="space-y-3 text-gray-500 text-xs">
              <li className="hover:text-[#00a5a8] cursor-pointer">Metode Pembayaran</li>
              <li className="hover:text-[#00a5a8] cursor-pointer">Pengiriman</li>
              <li className="hover:text-[#00a5a8] cursor-pointer">Kebijakan Pengembalian</li>
              <li className="hover:text-[#00a5a8] cursor-pointer">FAQ</li>
              <li className="hover:text-[#00a5a8] cursor-pointer">Cek Pesanan</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold uppercase tracking-widest text-xs text-gray-800">Tentang Kami</h5>
            <ul className="space-y-3 text-gray-500 text-xs">
              <li className="hover:text-[#00a5a8] cursor-pointer">Kisah ScentHub</li>
              <li className="hover:text-[#00a5a8] cursor-pointer">Karir</li>
              <li className="hover:text-[#00a5a8] cursor-pointer">Lokasi Toko</li>
              <li className="hover:text-[#00a5a8] cursor-pointer">Hubungi Kami</li>
              <li className="hover:text-[#00a5a8] cursor-pointer">Syarat & Ketentuan</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center space-x-6">
              <div className="h-6 w-10 bg-gray-100 rounded"></div>
              <div className="h-6 w-10 bg-gray-100 rounded"></div>
              <div className="h-6 w-10 bg-gray-100 rounded"></div>
              <div className="h-6 w-10 bg-gray-100 rounded"></div>
           </div>
           <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
             © 2024 ScentHub Indonesia. Part of Guardian-Style Global.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
