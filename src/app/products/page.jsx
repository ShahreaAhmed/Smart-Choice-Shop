"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

export default function AllProductPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);


  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-11/12 mx-auto mt-20 px-4 mb-20">
      <h1 className="text-4xl font-semibold text-center mb-12">All Products</h1>

      {/* SEARCH BAR WITH COUNT */}
      <div className="flex justify-between items-center mb-15">
        {/* Search Input */}
        <div className="relative w-full">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by name or description..."
            className="input input-bordered w-full pl-10 focus:outline-none focus:ring-2 focus:ring-[#000863] focus:border-[#000863]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Product Count */}
        <div className="ml-4 text-gray-500 text-xl whitespace-nowrap">
          {filteredProducts.length === 1
            ? "1 product found"
            : `(${filteredProducts.length}) products found`}
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product._id}>
            <div className="card bg-base-100 w-full shadow-sm h-[430px] flex flex-col hover:shadow-xl transition-shadow duration-300">
             
              <figure className="bg-[#f7f7f7] w-full h-60 flex items-center justify-center overflow-hidden">
                <img
                  src={product.photoUrl}
                  className="w-full h-full object-contain"
                  alt="product image"
                />
              </figure>

              <div className="card-body flex flex-col">
                <div className="flex justify-between">
                  <h2 className="card-title">{product.name}</h2>
                  <div className="badge badge-secondary">
                    {product.stock_status}
                  </div>
                </div>

                <p className="line-clamp-2">{product.description}</p>

                <div className="card-actions justify-end mt-auto">
                  
                  <Link href={`/products/${product._id}`}>
                    <button className="btn">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="col-span-4 text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}

