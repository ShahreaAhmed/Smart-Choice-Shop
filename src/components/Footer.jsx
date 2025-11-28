import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <img className=' w-30 drop-shadow-white' src="/appLogo1.png" alt="" />
          <p className="text-gray-400 text-sm leading-6">
            Smart Choice is your trusted marketplace to find premium products at the best price. Fast delivery, secure payments & top-notch customer service.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-white transition">Order Tracking</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
          </ul>
        </div>

        {/* Shopping Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Electronics</a></li>
            <li><a href="#" className="hover:text-white transition">Home Appliances</a></li>
            <li><a href="#" className="hover:text-white transition">Gadgets</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Join Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Get updates on new arrivals & exclusive offers.
          </p>

          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded-lg">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Smart Choice — All rights reserved.
        </p>

        <div className="flex justify-center space-x-6 mt-3 text-xl">
  {/* Facebook */}
  <a href="#" aria-label="Facebook" className="hover:text-white transition">
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img">
      <title>Facebook</title>
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.09 5.66 21.22 10.44 22v-7.02H8.08v-2.9h2.36V9.41c0-2.34 1.39-3.63 3.52-3.63 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.17 0-1.53.73-1.53 1.48v1.79h2.6l-.42 2.9h-2.18V22C18.34 21.22 22 17.09 22 12.07z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a href="#" aria-label="Instagram" className="hover:text-white transition">
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
      <title>Instagram</title>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" fill="none"/>
      <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
    </svg>
  </a>

  {/* Twitter */}
  <a href="#" aria-label="X" className="hover:text-white transition">
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
  >
    <title>X</title>
    <path d="M18.902 2H22L14.44 10.44L23.114 22H16.436L11.15 15.318L5.21 22H2L10.05 13.06L1.72 2H8.59L13.37 8.11L18.902 2ZM17.71 20.27H19.53L7.39 3.64H5.45L17.71 20.27Z"/>
  </svg>
</a>

  {/* LinkedIn */}
  <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img">
      <title>LinkedIn</title>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.4V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.79zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM6.99 20.45H3.69V9h3.3v11.45z"/>
    </svg>
  </a>
</div>

      </div>
    </footer>
  );
}
