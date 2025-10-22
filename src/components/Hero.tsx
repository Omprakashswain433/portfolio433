import { Button } from "@/components/ui/button";
import { Download, Eye, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const techStack = [
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "Terraform", icon: "🌱" },
    { name: "Jenkins", icon: "🛠️" },
    { name: "GitHub Actions", icon: "⚙️" },
    { name: "Python", icon: "🐍" },
    { name: "TensorFlow", icon: "🤖" },
    { name: "PyTorch", icon: "🔥" },
    { name: "MLflow", icon: "📊" },
    { name: "FastAPI", icon: "🚀" },
    { name: "Flask", icon: "🍶" },
    { name: "Prometheus", icon: "📈" },
    { name: "Grafana", icon: "📊" },
    { name: "SQL / PostgreSQL", icon: "💾" },
    { name: "MongoDB", icon: "🍃" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-section-gradient pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left animate-slide-up">
            <div className="mb-6">
              <h2 className="text-lg text-muted-foreground mb-2">Hi, I'm</h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-foreground">Om </span>
                <span className="text-highlight">Developer</span>
              </h1>
              <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
              Cloud & DevOps Engineer | MLOps & AI/ML Specialist
            </h3>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              I’m Om Prakash Swain, a Cloud & DevOps Engineer with experience in AWS, Docker,
              Kubernetes, Terraform, and MLOps. I design scalable cloud infrastructures, automate
              CI/CD pipelines, and deploy AI/ML models efficiently. Passionate about optimizing
              workflows and ensuring high system reliability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild variant="hero" size="lg" className="group">
                <a
                  href="/resume.pdf"
                  download="OmPrakashSwain_Resume.pdf"
                  className="flex items-center"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#projects")}
              >
                <Eye className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4 font-medium">
                Tech Stack | <span className="text-highlight">Expertise</span>
              </p>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 bg-card hover:bg-card-hover px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Omprakashswain433"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="glass"
                  size="icon"
                  className="hover:scale-110 transition-transform"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/om-prakash-swain-6442b2302/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="glass"
                  size="icon"
                  className="hover:scale-110 transition-transform"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:0m9856668@gmail.com">
                <Button
                  variant="glass"
                  size="icon"
                  className="hover:scale-110 transition-transform"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_40px_hsl(var(--primary)/0.3)] animate-float">
                <img
                  src={profilePhoto}
                  alt="Profile photo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-highlight rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
