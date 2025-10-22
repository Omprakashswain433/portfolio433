import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "End-to-End ML Model Deployment",
      description:
        "Trained predictive ML model using Scikit-learn, containerized with Docker, and deployed via GitHub Actions on AWS EC2 for automated CI/CD.",
      image: project1,
      technologies: ["Python 🐍", "Docker 🐳", "GitHub Actions ⚙️", "Flask 🍶", "AWS EC2 ☁️"],
      features: ["Containerized deployment", "Automated CI/CD", "AWS EC2 hosting", "Scikit-learn model"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI/ML Deployment"
    },
    {
      id: 2,
      title: "Real-Time Sentiment Analysis API",
      description:
        "Developed REST API for real-time sentiment analysis using NLP techniques and deployed serverless on AWS Lambda with Terraform automation.",
      image: project2,
      technologies: ["Python 🐍", "FastAPI 🚀", "AWS Lambda ☁️", "Terraform 🌱", "NLP"],
      features: ["Serverless deployment", "Automated infrastructure", "Real-time predictions", "API Gateway integration"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI/ML API"
    },
    {
      id: 3,
      title: "Cloud-Based Image Classification App",
      description:
        "Developed CNN-based image classifier using TensorFlow, containerized with Docker, and deployed on AWS EKS with auto-scaling and load balancing.",
      image: project3,
      technologies: ["TensorFlow 🤖", "Docker 🐳", "Kubernetes ☸️", "AWS EKS ☁️", "Flask 🍶"],
      features: ["CNN-based classifier", "Kubernetes deployment", "Auto-scaling & Load balancing", "Docker containerization"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI/ML App"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-highlight">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent Cloud, DevOps, and AI/ML projects demonstrating model deployment, serverless APIs, and scalable infrastructure.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="bg-card hover:bg-card-hover transition-all duration-300 hover:scale-105 border border-border overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" as="a" href={project.liveUrl} target="_blank">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" as="a" href={project.githubUrl} target="_blank">
                      <Github className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {project.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature) => (
                      <div key={feature} className="text-xs text-muted-foreground flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" as="a" href={project.liveUrl} target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1" as="a" href={project.githubUrl} target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Button variant="default" size="lg">
            View All Projects
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Check out my GitHub for more Cloud & AI/ML projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
