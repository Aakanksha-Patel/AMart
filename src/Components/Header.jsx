import React from "react";
import {
  Search,
  ChevronDown,
  ShoppingCart,
} from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b bg-white px-6 py-4 flex items-center justify-between gap-6">
      
      {/* Logo */}
      <div className="flex items-center gap-8">
        <div className="text-5xl font-bold">
          <span className="text-yellow-400">Blink</span>
          <span className="text-green-600">it</span>
        </div>

        {/* Delivery Location */}
        <div className="hidden md:block">
          <h2 className="text-2xl font-bold text-black">
            Delivery in 10 minutes
          </h2>

          <div className="flex items-center text-gray-700 text-lg">
            <span>
              Rajni Khand, Sharda Nagar, Lucknow...
            </span>

            <ChevronDown size={18} className="ml-2" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-4xl">
        <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-4 border">
          <Search className="text-gray-500" size={24} />

          <input
            type="text"
            placeholder='Search "butter"'
            className="bg-transparent outline-none w-full ml-3 text-lg"
          />
        </div>
      </div>

      {/* Right Side */}
        <div className="flex items-center gap-6">
        
          {/* Login Button */}
          <button className="text-2xl font-medium px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
            Login
          </button>
        
          {/* Cart Button */}
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-4 rounded-xl flex items-center gap-2 font-semibold cursor-pointer transition">
            <ShoppingCart size={24} />
            My Cart
          </button>
        
        </div>
    </header>
  );
}