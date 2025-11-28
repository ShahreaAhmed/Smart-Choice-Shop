import React from 'react'

export default function TrendingCategories() {
  return (
    <div>
        <section className="w-11/12 mx-auto py-16">
            <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-10">
                Shop By Top Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                
                {/* Category Card 1: Phones */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
                    <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
                        <img 
                            src="https://via.placeholder.com/150/f0f9ff/0e7490?text=PHONE" 
                            alt="Smart Phones" 
                            className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-105" 
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-900">Smart Phones</h3>
                        <p className="text-sm text-blue-600 mt-1">Shop Now <span aria-hidden="true">&rarr;</span></p>
                    </div>
                </div>

                {/* Category Card 2: Laptops */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
                    <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
                        <img 
                            src="https://via.placeholder.com/150/f0f9ff/0e7490?text=LAPTOP" 
                            alt="Laptops" 
                            className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-105" 
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-900">Laptops & Tabs</h3>
                        <p className="text-sm text-blue-600 mt-1">Shop Now <span aria-hidden="true">&rarr;</span></p>
                    </div>
                </div>
                
                {/* Category Card 3: Gaming */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
                    <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
                        <img 
                            src="https://via.placeholder.com/150/f0f9ff/0e7490?text=GAMING" 
                            alt="Gaming Consoles" 
                            className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-105" 
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-900">Gaming Consoles</h3>
                        <p className="text-sm text-blue-600 mt-1">Shop Now <span aria-hidden="true">&rarr;</span></p>
                    </div>
                </div>

                {/* Category Card 4: Accessories */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
                    <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
                        <img 
                            src="https://via.placeholder.com/150/f0f9ff/0e7490?text=WATCH" 
                            alt="Wearables & Audio" 
                            className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-105" 
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-900">Wearables & Audio</h3>
                        <p className="text-sm text-blue-600 mt-1">Shop Now <span aria-hidden="true">&rarr;</span></p>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}
