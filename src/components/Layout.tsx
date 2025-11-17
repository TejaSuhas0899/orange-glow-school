import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/programs", label: "Programs" },
    { path: "/admissions", label: "Admissions" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            {/* Logo: place your image at /public/Logo.png (served as /Logo.png). */}
            <div className="rounded-full overflow-hidden w-10 h-10 flex items-center justify-center bg-primary/10 group-hover:scale-105 transition-transform">
              <img
                src="/Logo.png"
                alt="Endeavour logo"
                className="w-10 h-10 object-cover block"
                onError={(e) => {
                  // If Logo.png fails, try favicon.ico as fallback
                  const img = e.currentTarget as HTMLImageElement;
                  if (!img.dataset.fallback) {
                    img.dataset.fallback = "1";
                    img.src = "/favicon.ico?v=2";
                    img.style.display = "block";
                  } else {
                    // final fallback: hide image (keeps the rounded bg)
                    img.style.display = "none";
                  }
                }}
              />
              <div className="sr-only">Endeavour</div>
            </div>
            <span className="text-xl font-bold text-foreground">Endeavour</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <select
              value={location.pathname}
              onChange={(e) => window.location.href = e.target.value}
              className="px-3 py-2 rounded-lg border border-border bg-background text-sm"
            >
              {navLinks.map((link) => (
                <option key={link.path} value={link.path}>
                  {link.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-secondary border-t border-border mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Address</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                123 Education Street<br />
                Learning District<br />
                City, State 12345
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">Contact</h3>
              <p className="text-muted-foreground text-sm">
                Phone: (555) 123-4567
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
            <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Endeavour. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
