import { ArrowRight, BarChart3, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import GeometricAfrica from "./GeometricAfrica";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Data visualization background"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-navy-light/80" />
      </div>

      {/* Floating glassmorphism elements */}
      <div className="absolute top-32 right-16 hidden lg:block glass-dark rounded-2xl p-5 animate-float opacity-80">
        <div className="flex items-center gap-3">
          <TrendingUp className="text-gold" size={22} />
          <div>
            <p className="text-primary-foreground/60 text-xs font-body">Revenue Growth</p>
            <p className="text-primary-foreground font-heading text-xl font-bold">+47%</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-40 right-32 hidden lg:block glass-dark rounded-2xl p-5 animate-float" style={{ animationDelay: "2s" }}>
        <div className="flex items-center gap-3">
          <BarChart3 className="text-gold" size={22} />
          <div>
            <p className="text-primary-foreground/60 text-xs font-body">Data Points Analyzed</p>
            <p className="text-primary-foreground font-heading text-xl font-bold">2.4M+</p>
          </div>
        </div>
      </div>

      {/* Geometric Africa data-point watermark */}
      <GeometricAfrica className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-primary-foreground opacity-[0.06] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto section-padding pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-slow" />
            <span className="text-primary-foreground/80 text-sm font-body font-medium">
              Trusted by 120+ organizations across Africa
            </span>
          </div>

          <h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Turning Africa's Data Into{" "}
            <span className="text-gradient-gold">Strategic Impact</span>
          </h1>

          <p
            className="text-primary-foreground/70 text-lg sm:text-xl font-body leading-relaxed max-w-xl mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            We partner with governments, NGOs, and enterprises to unlock actionable
            insights through world-class analytics, research, and M&E frameworks.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#contact"
              className="gradient-gold text-accent-foreground font-semibold px-8 py-4 rounded-xl text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity group"
            >
              Schedule a Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#case-studies"
              className="border border-primary-foreground/20 text-primary-foreground font-medium px-8 py-4 rounded-xl text-base text-center hover:bg-primary-foreground/5 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
