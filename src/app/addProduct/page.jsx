"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    photoUrl: "",
    created_at: "",
    available: 0,
    stock_status: "",
    original_price: 0,
    price: 0,
  });

  // Update state when user types/selects
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const payload = {
      ...formData,
      created_at: new Date(formData.created_at).toISOString(), 
      available: Number(formData.available),
      original_price: Number(formData.original_price),
      price: Number(formData.price),
    };

    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        Swal.fire("Success!", "Product added successfully.", "success");

        // Reset form
        setFormData({
          name: "",
          email: "",
          description: "",
          photoUrl: "",
          created_at: "",
          available: 0,
          stock_status: "",
          original_price: 0,
          price: 0,
        });
      } else {
        Swal.fire("Error!", "Failed to add product.", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error!", "Server error.", "error");
    }
  };

  return (
    <div className="w-11/12 mx-auto bg-white shadow-lg p-6 mt-16 mb-20 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>

        {/* Name */}
        <div className="flex flex-col">
          <label className="font-semibold">Name</label>
          <input 
            type="text" 
            name="name"
            placeholder="Product Name" 
            className="input input-bordered w-full" 
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="font-semibold">Email</label>
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            className="input input-bordered w-full"
            value={formData.email}
            onChange={handleChange} 
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-semibold">Description</label>
          <textarea 
            name="description"
            placeholder="Product Description" 
            className="textarea textarea-bordered w-full"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Photo URL */}
        <div className="flex flex-col">
          <label className="font-semibold">Photo URL</label>
          <input 
            type="text" 
            name="photoUrl"
            placeholder="Image URL" 
            className="input input-bordered w-full"
            value={formData.photoUrl}
            onChange={handleChange} 
            required
          />
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="font-semibold">Date</label>
          <input 
            type="date" 
            name="created_at"
            className="input input-bordered w-full"
            value={formData.created_at}
            onChange={handleChange}
            required
          />
        </div>

        {/* Available */}
        <div className="flex flex-col">
          <label className="font-semibold">Available (Quantity)</label>
          <input 
            type="number" 
            name="available"
            placeholder="Total Available" 
            className="input input-bordered w-full"
            value={formData.available}
            onChange={handleChange} 
            min={0}
            required
          />
        </div>

        {/* Stock Status */}
        <div className="flex flex-col">
          <label className="font-semibold">Stock Status</label>
          <select
            name="stock_status"
            className="select select-bordered w-full"
            value={formData.stock_status}
            onChange={handleChange}
            required
          >
            <option value="">Select option</option>
            <option value="IN STOCK">IN STOCK</option>
            <option value="STOCK OUT">STOCK OUT</option>
          </select>
        </div>

        {/* Original Price */}
        <div className="flex flex-col">
          <label className="font-semibold">Original Price</label>
          <input 
            type="number" 
            name="original_price"
            placeholder="Original Price" 
            className="input input-bordered w-full"
            value={formData.original_price}
            onChange={handleChange} 
            min={0}
            required
          />
        </div>

        {/* Current Price */}
        <div className="flex flex-col">
          <label className="font-semibold">Discount Price</label>
          <input 
            type="number" 
            name="price"
            placeholder="Sale Price" 
            className="input input-bordered w-full"
            value={formData.price}
            onChange={handleChange} 
            min={0}
            
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button type="submit" className="btn btn-primary w-full">Add Product</button>
        </div>

      </form>
    </div>
  );
}
