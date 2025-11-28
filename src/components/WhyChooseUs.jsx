import React from 'react'

export default function WhyChooseUs() {
  return (
    <div>
        <section className="bg-gray-100 py-16 mt-16">
    <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-10">
            Why Choose SMART CHOICE?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            {/* Feature 1: Fast Shipping */}
            <div className="p-6 bg-white rounded-xl shadow-md">
                <svg className="w-10 h-10 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast & Free Shipping</h3>
                <p className="text-sm text-gray-500">
                    Guaranteed quick delivery on all orders above $50.
                </p>
            </div>

            {/* Feature 2: Secure Payment */}
            <div className="p-6 bg-white rounded-xl shadow-md">
                <svg className="w-10 h-10 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Secure Payment</h3>
                <p className="text-sm text-gray-500">
                    We ensure safe and encrypted payment processing.
                </p>
            </div>

            {/* Feature 3: Money Back */}
            <div className="p-6 bg-white rounded-xl shadow-md">
                <svg className="w-10 h-10 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a3 3 0 003 3z"></path>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">30 Days Money Back</h3>
                <p className="text-sm text-gray-500">
                    Hassle-free return and exchange policy.
                </p>
            </div>
            
            {/* Feature 4: 24/7 Support */}
            <div className="p-6 bg-white rounded-xl shadow-md">
                <svg className="w-10 h-10 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 0a2 2 0 10-3.536 3.536l3.536 3.536m0 0a2 2 0 103.536-3.536l-3.536-3.536zm-2.121 2.121a2 2 0 103.536-3.536L12 12 8.464 8.464a2 2 0 103.536-3.536z"></path>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Customer Support</h3>
                <p className="text-sm text-gray-500">
                    Dedicated support available all day, every day.
                </p>
            </div>

        </div>
    </div>
</section>
    </div>
  )
}
