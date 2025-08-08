import { Facebook, Instagram, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#5e4636] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">HijabStyles</h2>
          <p className="text-sm text-[#e2d5cb]">
            A place to explore and review elegant hijab styles with comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#e2d5cb]">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#styles" className="hover:underline">
                Styles
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:underline">
                Reviews
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-[#e2d5cb]">
            <a href="#">
              <Facebook className="hover:text-white" />
            </a>
            <a href="#">
              <Instagram className="hover:text-white" />
            </a>
            <a href="#">
              <Twitter className="hover:text-white" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <div className="flex items-center space-x-2 text-sm text-[#e2d5cb]">
            <Mail size={18} />
            <span>support@hijabstyles.com</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-[#e2d5cb]">
        © {new Date().getFullYear()} HijabStyles. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
