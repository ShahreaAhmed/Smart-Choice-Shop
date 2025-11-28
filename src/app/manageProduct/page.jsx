"use client";

import dayjs from "dayjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function PremiumProductTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("http://localhost:5000/products");
      const result = await res.json();
      setData(result);
    }
    fetchProducts();
  }, []);

 
const handleDelete = async (id) => {
  const confirm = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  });

  if (confirm.isConfirmed) {
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE',
      });

      const result = await res.json();

      if (result.success) {
        Swal.fire('Deleted!', 'Product has been deleted.', 'success');
        setData(data.filter(product => product._id !== id));
      } else {
        Swal.fire('Error!', 'Failed to delete product.', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error!', 'Server error.', 'error');
    }
  }
};



  return (
    <div className="p-6 mt-10 mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Product Management
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-11/12 mx-auto bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                Image
              </th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                Name
              </th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                Description
              </th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                Price
              </th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                Stock
              </th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">
                Date
              </th>
              <th className="py-3 px-6 text-center text-gray-700 font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((product, index) => (
              <tr
                key={product._id}
                className={`border-b transition-colors duration-200 hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="py-4 px-6">
                  <img
                    src={product.photoUrl}
                    alt={product.name}
                    className="w-14 h-14 object-contain rounded-lg shadow-sm"
                  />
                </td>
                <td className="py-4 px-6 font-medium text-gray-800">
                  {product.name}
                </td>
                <td className="py-4 px-6 text-gray-600">
                  {product.description}
                </td>
                <td className="py-4 px-6 font-semibold text-gray-800">
                  {product.original_price}
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      product.available > 5
                        ? "bg-green-100 text-green-800"
                        : product.available > 0
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.available}
                  </span>
                </td>
                <td>{dayjs(product.created_at).format("DD MMM YYYY")}</td>
                <td className="py-4 px-6 flex justify-center gap-2">
                  <Link href={`/products/${product._id}`}>
                  <button className="bg-[#010966] text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition">
                    View
                  </button>
                  </Link>

                  <button onClick={() => handleDelete(product._id)} className="bg-[#f20583]  text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
