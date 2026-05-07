import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ["services", "work", "about", "contact"];
      let current = "";

      for (const section of sections) {
        const el = document.getElementById(section);

        if (el && window.scrollY >= el.offsetTop - 100) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#work" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-foreground ${
        isScrolled
          ? "shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
          : "border-b border-white/10"
      }`}
    >
      <div className="container-custom mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" style={{textDecoration: 'none', display: 'inline-flex', alignItems: 'center', height: '32px', overflow: 'hidden'}}>
          <span style={{
            fontFamily: 'serif',
            fontWeight: 'bold',
            fontSize: '25px',
            color: 'white',
            display: 'inline-flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }}>
            <span>A</span>
            <span style={{
              display: 'inline-block',
              maxWidth: isScrolled ? '0px' : '150px',
              opacity: isScrolled ? 0 : 1,
              overflow: 'hidden',
              transition: 'max-width 0.4s ease, opacity 0.5s ease',
            }}>uto</span>
            <span style={{
              display: 'inline-block',
              transform: isScrolled ? 'translateX(-2px)' : 'translateX(0px)',
              transition: 'transform 0.5s ease',
            }}>P</span>
            <span style={{
              display: 'inline-block',
              maxWidth: isScrolled ? '0px' : '150px',
              opacity: isScrolled ? 0 : 1,
              overflow: 'hidden',
              transition: 'max-width 0.5s ease, opacity 0.5s ease',
            }}>athic</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans font-medium text-[15px] tracking-[0.3px] transition-colors duration-200 ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-primary text-white font-sans font-medium text-[15px] px-[22px] py-[10px] rounded-md transition-all duration-300 hover:shadow-[0_0_18px_rgba(13,148,136,0.55)] hover:-translate-y-[2px] hover:bg-[#0f9f93]"
          >
            Book a Free Call
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-foreground border-b border-white/10 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-sans font-medium text-[15px] block py-2 ${
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-primary text-white font-sans font-medium text-center text-[15px] px-[22px] py-[10px] rounded-md mt-4 inline-block"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </nav>
  );
}
