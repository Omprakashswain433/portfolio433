import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc",
      content: "Working with John was an absolute pleasure. He delivered our e-commerce platform ahead of schedule and exceeded all expectations. The attention to detail and code quality is outstanding.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager, InnovateCorp",
      content: "John's expertise in React and Node.js helped us modernize our entire tech stack. The performance improvements were remarkable, and our users love the new interface.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder, CreativeAgency",
      content: "Exceptional developer with great communication skills. John understood our vision perfectly and brought it to life with clean, maintainable code. Highly recommended!",
      rating: 5,
      avatar: "👩‍🎨"
    },
    {
      id: 4,
      name: "David Kim",
      position: "CTO, DataFlow Solutions",
      content: "John's full-stack capabilities are impressive. He built our analytics dashboard from scratch and integrated complex data visualizations seamlessly. Outstanding work!",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Marketing Director, GrowthLab",
      content: "Professional, reliable, and skilled. John delivered a beautiful, responsive website that perfectly represents our brand. The project was completed on time and within budget.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      id: 6,
      name: "Alex Parker",
      position: "Startup Founder",
      content: "John helped bring our MVP to life with incredible speed and quality. His technical guidance was invaluable throughout the development process. Would definitely work with him again.",
      rating: 5,
      avatar: "👨‍🚀"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-warning fill-current" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-highlight">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about 
            working with me and the results we've achieved together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card hover:bg-card-hover transition-all duration-300 hover:scale-105 border border-border">
              <CardContent className="p-6 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;