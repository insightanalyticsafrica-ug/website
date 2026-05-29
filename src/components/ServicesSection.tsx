import { BarChart3, LineChart, Target, BookOpen, ArrowUpRight, RefreshCw, Activity } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    description:
      "Transform raw data into strategic intelligence with advanced visualization, predictive modelling, and decision-support dashboards.",
    stat: "50+ projects",
    color: "accent" as const,
  },
  {
    icon: LineChart,
    title: "Statistical Modelling",
    description:
      "Rigorous quantitative frameworks — econometric models, forecasting, and scenario analysis tailored to African markets.",
    stat: "98% accuracy",
    color: "accent" as const,
  },
  {
    icon: RefreshCw,
    title: "Monitoring & Evaluation",
    description:
      "End-to-end M&E systems that measure real impact — from theory of change to data collection, analysis, and reporting.",
    stat: "150+ evaluations",
    color: "teal" as const,
    isLoop: true,
  },
  {
    icon: BookOpen,
    title: "Research & Insights",
    description:
      "Mixed-methods research combining qualitative depth with quantitative rigor to inform policy and strategy across the continent.",
    stat: "20+ publications",
    color: "teal" as const,
  },
  {
    icon: Activity,
    title: "Disease Modeling & Surveillance",
    description:
      "Epidemiological modelling and real-time surveillance systems that track outbreaks, forecast trends, and inform public health response across Africa.",
    stat: "10+ health systems",
    color: "accent" as const,
  },
];

const colorMap = {
  accent: {
    iconBg: "bg-accent/10",
    iconText: "text-accent",
    statText: "text-accent",
    ring: "group-hover:ring-accent/20",
  },
  teal: {
    iconBg: "bg-teal/10",
    iconText: "text-teal",
    statText: "text-teal",
    ring: "group-hover:ring-teal/20",
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto section-padding">
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-body">
            Our Services
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
            Expertise That Drives
            <br />
            Measurable Outcomes
          </h2>
          <p className="text-muted-foreground text-lg font-body leading-relaxed">
            Five pillars of analytical excellence, each forged through the successful
            delivery of over 25 complex research and data portfolios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={service.title}
                className={`group glass-card rounded-2xl p-8 lg:p-10 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 opacity-0 animate-slide-up cursor-pointer ring-2 ring-transparent ${colors.ring}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center`}>
                      <service.icon className={colors.iconText} size={26} strokeWidth={1.5} />
                    </div>
                    {/* M&E circular motif */}
                    {service.isLoop && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full border-2 border-teal/40 border-dashed animate-spin" style={{ animationDuration: "8s" }} />
                    )}
                  </div>
                  <ArrowUpRight
                    className="text-muted-foreground/40 group-hover:text-accent transition-colors"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-heading text-xl lg:text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-border/50">
                  <span className={`${colors.statText} font-semibold text-sm font-body`}>{service.stat}</span>
                  <span className="text-muted-foreground text-sm font-body"> delivered</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
