// src/components/layout/Footer.jsx
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Bio Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nick Prasad</h3>
            <p className="text-gray-400">
              Data Engineer and Full Stack Developer based in Houston, TX.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="text-gray-400 hover:text-white">
                  Work
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/nprasad2077"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhilrprasad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:nprasad2077@gmail.com"
                className="text-gray-400 hover:text-white"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Nick Prasad. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}