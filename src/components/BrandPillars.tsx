import { Crosshair, Globe, Lightbulb, Shield } from "lucide-react";
import GeometricAfrica from "./GeometricAfrica";

const values = [
  {
    icon: Crosshair,
    title: "Precision",
    description: "Every data point verified. Every model validated. We deliver accuracy you can stake decisions on.",
    color: "text-accent",
  },
  {
    icon: Globe,
    title: "Pan-African Progress",
    description: "Deep local expertise spanning 25+ nations, connected by a shared vision for Africa's data-driven future.",
    color: "text-teal",
  },
  {
    icon: Lightbulb,
    title: "Clarity from Complexity",
    description: "We distill vast datasets and nuanced contexts into clear, actionable intelligence.",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Independent, unbiased analysis. Our recommendations serve your outcomes, not an agenda.",
    color: "text-teal",
  },
];

const BrandPillars = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Geometric Africa watermark */}
      <GeometricAfrica className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] text-primary-foreground opacity-[0.04] pointer-events-none hidden lg:block" />

      <div className="container mx-auto section-padding relative z-10">
        <div className="max-w-2xl mb-16">
          <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3 font-body">
            Our Foundation
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-5">
            Built on Values That{" "}
            <span className="text-gradient-teal">Drive Results</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg font-body leading-relaxed">
            Founded by four biostatisticians, Insight Analytics Africa (IAA) was built to elevate
            the standard of evidence-based progress on the continent. We bridge the gap between
            advanced science and executive strategy across all sectors, with a profound specialization
            in public health. By bringing clinical-grade precision to Research, Data Analytics, and M&E,
            we ensure that the minds behind your models are the partners guiding your impact.
            
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="glass-dark rounded-2xl p-8 opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/5 flex items-center justify-center mb-5">
                <value.icon className={value.color} size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-primary-foreground/50 font-body text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPillars;
