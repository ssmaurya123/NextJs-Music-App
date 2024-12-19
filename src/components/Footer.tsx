'use client'
function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          {/* About Us Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4 text-sm sm:text-base">
              Music School is a premier institution dedicated to teaching the art
              and science of music. We nurture talent from the ground up,
              fostering a vibrant community of musicians.
            </p>
          </div>
  
          {/* Quick Links Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          {/* Follow Us Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                Instagram
              </a>
            </div>
          </div>
  
          {/* Contact Us Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-sm sm:text-base">New Delhi, India</p>
            <p className="text-sm sm:text-base">Delhi 10001</p>
            <p className="text-sm sm:text-base">Email: info@musicschool.com</p>
            <p className="text-sm sm:text-base">Phone: (123) 456-7890</p>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <p className="text-center text-xs mt-8 sm:mt-12">
          © 2024 Saurya School. All rights reserved.
        </p>
      </footer>
    );
  }
  
  export default Footer;
  