import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Zap, 
  Paintbrush, 
  Database,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, TypeScript, and Node.js.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatible"],
      price: "Starting at $2,000"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["React Native", "Native Performance", "App Store Optimization", "Push Notifications"],
      price: "Starting at $3,000"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with payment integration and inventory management.",
      features: ["Payment Gateway", "Inventory System", "Admin Dashboard", "Order Management"],
      price: "Starting at $2,500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "API Development",
      description: "RESTful APIs and GraphQL endpoints for seamless data integration and management.",
      features: ["RESTful APIs", "GraphQL", "Database Design", "Authentication"],
      price: "Starting at $1,500"
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that prioritize usability and visual appeal.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $1,000"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Solutions",
      description: "Database design, optimization, and migration services for better performance.",
      features: ["Database Design", "Performance Tuning", "Data Migration", "Backup Solutions"],
      price: "Starting at $800"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your requirements and project goals"
    },
    {
      step: "02",
      title: "Planning",
      description: "Creating detailed project roadmap and timeline"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution with regular updates"
    },
    {
      step: "04",
      title: "Delivery",
      description: "Testing, deployment, and ongoing support"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-highlight">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I offer comprehensive development services to help bring your digital ideas to life. 
            From concept to deployment, I'll guide you through every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:bg-card-hover transition-all duration-300 hover:scale-105 border border-border group">
              <CardContent className="p-6">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <ArrowRight className="h-3 w-3 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="border-t border-border pt-4">
                  <div className="text-lg font-semibold text-primary mb-3">
                    {service.price}
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              My <span className="text-highlight">Process</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to deliver high-quality results on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;