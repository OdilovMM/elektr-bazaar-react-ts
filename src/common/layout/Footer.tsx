import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div className="text-white">
          <h6 className="text-lg font-semibold mb-4">Company Info</h6>
          <ul>
            <li className="mb-2">
              <a
                href="/uz-en/about-temu.html"
                className="text-white hover:text-gray-900"
              >
                About MarketUZ
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/uz-en/contact-us.html"
                className="text-white hover:text-gray-900"
              >
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/uz-en/press.html"
                className="text-white hover:text-gray-900"
              >
                Press
              </a>
            </li>
            <li>
              <a
                href="/uz-en/tree-landing.html"
                className="text-white hover:text-gray-900"
              >
                MarketUZ's Tree Planting Program
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Customer Service</h6>
          <ul>
            <li className="mb-2">
              <a
                href="/uz-en/return-and-refund-policy.html"
                className="text-white hover:text-gray-900"
              >
                Return and Refund Policy
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/uz-en/intellectual-property-policy.html"
                className="text-white hover:text-gray-900"
              >
                Intellectual Property Policy
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/uz-en/shipping-info.html"
                className="text-white hover:text-gray-900"
              >
                Shipping Info
              </a>
            </li>
            <li>
              <a
                href="/uz-en/bgch_report_suspicious.html"
                className="text-white hover:text-gray-900"
              >
                Report Suspicious Activity
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Help</h6>
          <ul>
            <li className="mb-2">
              <a
                href="/uz-en/support-center.html"
                className="text-white hover:text-gray-900"
              >
                Support Center & FAQ
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/uz-en/safety-center.html"
                className="text-white hover:text-gray-900"
              >
                Safety Center
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/uz-en/temu-purchase-protection.html"
                className="text-white hover:text-gray-900"
              >
                MarketUZ Purchase Protection
              </a>
            </li>
            <li>
              <a
                href="/uz-en/sitemap.html"
                className="text-white hover:text-gray-900"
              >
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        {/* App Download and Social Media Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">
            Download the MarketUZ App
          </h6>
          <div className="flex space-x-4 mb-6">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <img
                src="https://aimg.kwcdn.com/upload_aimg/pc/5c5f0a0f-db6f-4205-a0d3-c745b6c672ea.png"
                alt="App Store"
                className="h-12"
              />
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <img
                src="https://aimg.kwcdn.com/upload_aimg/pc/427c29ba-bef6-439c-9d4c-edbdde47c7e0.png"
                alt="Google Play"
                className="h-12"
              />
            </a>
          </div>
          <h6 className="text-lg font-semibold mb-4">Connect with MarketUZ</h6>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <img
                src="https://aimg.kwcdn.com/upload_aimg/pc/a817be22-932c-43b3-95e4-c768af711c34.png"
                alt="Instagram"
                className="h-6"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <img
                src="https://aimg.kwcdn.com/upload_aimg/pc/0d1c5252-2094-4504-b6fc-34a6a3f87804.png"
                alt="Facebook"
                className="h-6"
              />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <img
                src="https://aimg.kwcdn.com/upload_aimg/temupch5/4eb16ee6-f4ed-426e-9ce3-574a2ab4ba6c.png"
                alt="Twitter"
                className="h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
