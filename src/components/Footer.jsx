import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Vyapar Logo and Description */}
        <div className="lg:col-span-1">
          <img src="/lgo.webp" alt="Vyapar Logo" className="mb-1" />
          <p>Billing Accounting & Inventory software for small business owners in India.</p>
        </div>

        {/* Column 2: Our Products and Vyapar Software */}
        <div className="lg:col-span-1">
          <h3 className="font-bold text-xl mb-4">Our Products</h3>
          <ul className="space-y-2">
            <li>Vyapar App</li>
            <li>NeoDove (Telecalling CRM)</li>
          </ul>

          <h3 className="font-bold text-xl mt-6 mb-4">Vyapar Software</h3>
          <ul className="space-y-2">
            <li>Billing Software</li>
            <li>Accounting Software</li>
            <li>Inventory Software</li>
            <li>Invoicing Software</li>
            <li>Business Management Software</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Column 3: Vyapar Web Applications (Tools) */}
        <div className="lg:col-span-1">
          <h3 className="font-bold text-xl mb-4">Vyapar Web Applications (Tools)</h3>
          <ul className="space-y-2">
            <li>Logo Maker</li>
            <li>GST Calculator</li>
            <li>Invoice Generator</li>
            <li>Quotation Maker</li>
            <li>Proforma Invoice Generator</li>
            <li>Purchase Order Generator</li>
            <li>Receipt Maker</li>
            <li>Depreciation Calculator</li>
            <li>QR Code Generator</li>
            <li>Online Barcode Generator</li>
            <li>Business Card Maker</li>
          </ul>
        </div>

        {/* Column 4: Vyapar Formats and Contact Info */}
        <div className="lg:col-span-1">
          <h3 className="font-bold text-xl mb-4">Vyapar Formats</h3>
          <ul className="space-y-2">
            <li>Invoice Formats</li>
            <li>Quotation Format</li>
            <li>Balance Sheet Formats</li>
            <li>BillBook Formats</li>
            <li>Receipt Formats</li>
            <li>Credit Note Formats</li>
            <li>Sales Report Format</li>
            <li>Estimate Format</li>
            <li>Delivery Challan Format</li>
            <li>Cash Flow Statement Format</li>
            <li>Voucher Formats</li>
            <li>Income Statement</li>
          </ul>

          <h3 className="font-bold text-xl mt-6 mb-4">Contact Info</h3>
          <p>
            24th 1,2 & 3rd Floor, 150/2 Enzyme Diamond<br />
            7th Cross Road, Sector 1, HSR Layout<br />
            Bengaluru, Karnataka, 560102
          </p>
          <p className="mt-4"><strong>Phone:</strong> +91-9333-911-911<br /> +91-6366-827-420</p>
          <p className="mt-4"><strong>Email:</strong> help@vyaparapp.in</p>
          <p className="mt-4"><strong>GST Registration Number:</strong> 29AAZCS9478E1Z7</p>
          <p><strong>Udyam Registration Number:</strong> UDYAM-KR-03-0219719</p>
        </div>
      </div>

      {/* Bottom Footer Section with Terms, Conditions, Copyright, and Social Media */}
      <div className="mt-12 border-t border-gray-700 pt-8">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left: Terms & Conditions */}
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <a href="/terms" className="hover:underline text-sm">Terms & Conditions</a> | 
            <a href="/privacy" className="hover:underline text-sm ml-2">Privacy Policy</a>
          </div>

          {/* Center: Copyright */}
          <div className="text-sm text-gray-500 mb-4 lg:mb-0 text-center">
            © 2024 Vyapar. All Rights Reserved.
          </div>

         {/* Social Media Icons */}
         <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-80 transition"><FaFacebookF className="w-6 h-6" /></a>
            <a href="#" className="hover:opacity-80 transition"><FaTwitter className="w-6 h-6" /></a>
            <a href="#" className="hover:opacity-80 transition"><FaLinkedinIn className="w-6 h-6" /></a>
            <a href="#" className="hover:opacity-80 transition"><FaInstagram className="w-6 h-6" /></a>
            <a href="#" className="hover:opacity-80 transition"><FaGithub className="w-6 h-6" /></a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;