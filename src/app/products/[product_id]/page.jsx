import dayjs from "dayjs";
import { Star, Heart, ShoppingCart, Shuffle } from "lucide-react";
import React from "react";

export default async function Page({ params }) {
  const { product_id } = await params;

  // API call
  const res = await fetch(`http://localhost:5000/smart-choice-db/${product_id}`, {
    cache: "no-store",
  });
  const data = await res.json();

  if (!data.success || !data.result) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-xl">
        Product not found
      </div>
    );
  }

  const product = data.result;

  return (
    <div className="w-11/12 mx-auto mt-8 py-10 max-w-7xl">
      <h1 className="text-4xl underline text-center mb-15 font-bold">Product Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow-lg">

        {/* Product Image */}
        <div className="relative flex justify-center items-center">
          <div className="border rounded-xl overflow-hidden flex justify-center items-center h-[450px] w-full bg-gray-100 shadow-sm">
            <img
              src={product.photoUrl}
              alt={product.name}
              className="object-contain h-full w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{product.name}</h1>

          {/* Ratings */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                fill={i < 4 ? "#facc15" : "none"}
                stroke="#facc15"
              />
            ))}
            <span className="ml-2 text-gray-500 text-sm">4 reviews</span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-4 mb-4 border-b pb-4">
            {product.original_price > product.price && (
              <span className="text-gray-400 text-lg line-through">
                ${product.original_price}
              </span>
            )}
            <span className="text-3xl md:text-4xl font-extrabold text-red-600">
              ${product.price}
            </span>
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                product.stock_status === "IN STOCK"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.stock_status}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition duration-200">
              <ShoppingCart size={18} /> Add to Cart
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-600 text-gray-700 font-semibold py-3 px-6 rounded-xl transition duration-200">
              <Heart size={18} /> Add to Wishlist
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-600 text-gray-700 font-semibold py-3 px-6 rounded-xl transition duration-200">
              <Shuffle size={18} /> Compare
            </button>
          </div>

          {/* Product Meta */}
          <div className="text-gray-600 mb-6">
            <p className="leading-relaxed">{product.description}</p>
          </div>

          {/* Extra Info */}
          <div className="grid grid-cols-2 gap-4 text-gray-500 text-sm">
            <div>
              <span className="font-semibold">Available:</span> {product.available}
            </div>
            <div>
              <span className="font-semibold">Added on:</span>{" "}
              {dayjs(product.created_at).format("DD MMM YYYY")}
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Product Description</h2>
        <div className="border mb-4 text-gray-200"></div>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
}
