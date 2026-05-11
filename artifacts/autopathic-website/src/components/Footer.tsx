export function Footer() {
  return (
    <footer className="bg-[#080F1A] border-t border-white/5">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Section */}
          <div>
            <h2 className="text-white text-2xl font-semibold tracking-wide">
              AutoPathic
            </h2>

            <p className="mt-3 text-white/60 text-[15px] leading-7 max-w-sm">
              The Pathway to Automate your Business Processes and Accelerate Growth
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white/90 text-sm font-semibold tracking-widest uppercase mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                About
              </a>

              <a
                href="#services"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                Services
              </a>

              <a
                href="#work"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                Our Work
              </a>

              <a
                href="#process"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                Our Process
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white/90 text-sm font-semibold tracking-widest uppercase mb-5">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-white/60">
              <a
                href="tel:+919986299629"
                className="hover:text-white transition-colors duration-200"
              >
                📞 +91 99862 99629
              </a>

              <a
                href="mailto:hello@autopathic.com"
                className="hover:text-white transition-colors duration-200"
              >
                ✉️ hello@autopathic.com
              </a>

              <a
                href="https://wa.me/919986299629"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                💬 WhatsApp
              </a>

              <p>
                📍 Bangalore, Karnataka
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          
          <p className="text-white/40 text-sm text-center md:text-left">
            © 2026 AutoPathic. All rights reserved.
          </p>

          <p className="text-white/40 text-sm text-center md:text-right">
            Designed & Developed by AutoPathic
          </p>
        </div>
      </div>
    </footer>
  );
}
