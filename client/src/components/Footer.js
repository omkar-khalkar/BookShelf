import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Footer Left: Logo and Description */}
        <div className="mb-4 md:mb-0">
          <a href="/" className="text-2xl font-bold text-white hover:text-gray-400">BookShelf</a>
          <p className="mt-2 text-gray-400">A better marketplace for buying and selling used books.</p>
        </div>

        {/* Footer Middle: Quick Links */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Footer Right: Social Media Icons */}
        <div>
          <h4 className="text-xl font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557a9.805 9.805 0 01-2.828.775A4.916 4.916 0 0023.337 3.1a9.857 9.857 0 01-3.13 1.195A4.91 4.91 0 0016.616 3c-2.707 0-4.91 2.203-4.91 4.92 0 .385.043.762.128 1.123A13.942 13.942 0 011.67 3.149a4.92 4.92 0 001.524 6.561 4.864 4.864 0 01-2.224-.616v.061c0 2.367 1.684 4.343 3.92 4.791a4.902 4.902 0 01-2.218.084 4.917 4.917 0 004.587 3.417 9.86 9.86 0 01-6.102 2.107c-.398 0-.79-.023-1.176-.068a13.94 13.94 0 007.548 2.212c9.054 0 14.004-7.498 14.004-13.996 0-.213-.005-.425-.015-.636A9.936 9.936 0 0024 4.557z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.768v-3.622h3.052V8.413c0-3.017 1.844-4.664 4.54-4.664 1.292 0 2.403.096 2.726.139v3.162h-1.87c-1.468 0-1.752.699-1.752 1.723v2.256h3.502l-.457 3.622h-3.045V24h5.966c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .288c-6.627 0-12 5.373-12 12 0 6.086 4.503 11.11 10.392 11.888v-8.388h-3.13v-3.5h3.13v-2.658c0-3.09 1.895-4.772 4.66-4.772 1.325 0 2.463.099 2.795.143v3.237h-1.918c-1.507 0-1.799.715-1.799 1.763v2.287h3.597l-.468 3.5h-3.13v8.388C19.497 23.398 24 18.374 24 12.288c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6">
        &copy; 2024 BookShelf. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
