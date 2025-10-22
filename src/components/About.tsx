import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Server, ChartPie, Users, Download } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud & DevOps",
      description:
        "Designing, deploying, and managing scalable cloud infrastructure, automating CI/CD pipelines, and ensuring high system reliability.",
      technologies: [
        "AWS ☁️",
        "Docker 🐳",
        "Kubernetes ☸️",
        "Terraform 🌱",
        "Jenkins 🛠️",
        "GitHub Actions ⚙️",
        "Monitoring: Prometheus, Grafana 📊",
      ],
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend & AI/ML Development",
      description:
        "Building scalable APIs, deploying ML models, and managing data pipelines for AI/ML applications.",
      technologies: [
        "Python 🐍",
        "FastAPI 🚀",
        "Flask 🍶",
        "TensorFlow 🤖",
        "PyTorch 🔥",
        "MLflow 📊",
        "SQL / PostgreSQL 💾",
        "MongoDB 🍃",
        "Apache Airflow 🌐",
      ],
    },
    {
      icon: <ChartPie className="h-8 w-8" />,
      title: "MLOps & Monitoring",
      description:
        "Ensuring AI/ML models are reproducible, monitored, and efficiently deployed to production environments.",
      technologies: [
        "CI/CD pipelines",
        "MLflow / DVC / Git",
        "Monitoring: CloudWatch, Prometheus, Grafana",
        "Logging & Alerts: ELK stack, CloudWatch",
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description:
        "Working effectively in agile/cloud teams to deploy, monitor, and maintain reliable systems.",
      technologies: ["Git ⚡", "Jira 📋", "Slack 💬", "Agile/Scrum 🏃"],
    },
  ];

  const stats = [
    { number: "50+", label: "Deployments Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "100%", label: "Pipeline Success Rate" },
    { number: "10+", label: "AI/ML Projects Deployed" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-highlight">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cloud & DevOps Engineer with hands-on experience in AWS, Docker, Kubernetes, Terraform, and CI/CD pipelines. Skilled in deploying AI/ML models, automating workflows, and building scalable cloud infrastructure. Passionate about optimizing deployments and ensuring high system reliability.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-card hover:bg-card-hover transition-all duration-300 hover:scale-105 border border-border"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">{skill.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Story */}
        <div className="bg-card rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                My Journey in <span className="text-highlight">Cloud & AI/ML</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Started my journey in 2023 with a passion for creating scalable cloud solutions and AI/ML deployments. Over the years, I have built automated pipelines, deployed ML models, and optimized infrastructure for high reliability.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I focus on clean, maintainable code and staying updated with the latest industry trends in cloud computing, DevOps, and AI/ML. My goal is to bridge the gap between development and operations, creating seamless, reliable systems.
              </p>

              {/* Corrected Download CV Button */}
              <Button asChild variant="outline" size="lg">
                <a
                  href="/resume.pdf"
                  download="OmPrakashSwain_Resume.pdf"
                  className="flex items-center"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md h-64 bg-gradient-to-br from-primary/20 to-highlight/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <div className="text-lg font-semibold text-foreground">
                    Always Learning
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Staying curious and growing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
