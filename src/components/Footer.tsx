import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-4">Om Prakash</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Building reliable, scalable, and automated cloud solutions with a focus on AI/ML deployment, DevOps best practices, and seamless user experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Omprakashswain433"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="glass" size="icon" className="hover:scale-110 transition-transform">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/om-prakash-swain-6442b2302/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="glass" size="icon" className="hover:scale-110 transition-transform">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:om.operify@gmail.com">
                <Button variant="glass" size="icon" className="hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <a
                href="mailto:om.operify@gmail.com"
                className="block hover:text-primary transition-colors duration-200"
              >
                om.operify@gmail.com
              </a>
              <a href="tel:+919348988935" className="block hover:text-primary transition-colors duration-200">
                +91 9348988935
              </a>
              <p>Odisha, India</p>
              <p className="text-sm">© {currentYear} Om Prakash. All rights reserved.</p>
            </div>
          </div>

          <div></div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Om Prakash. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>using React & TypeScript</span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="hover:scale-110 transition-transform"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
