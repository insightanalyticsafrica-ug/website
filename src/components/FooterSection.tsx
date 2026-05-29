import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-primary py-20">
      <div className="container mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img src={logo} alt="Insight Analytics Africa" className="h-12 w-auto brightness-0 invert opacity-90" />
            </div>
            <p className="text-primary-foreground/60 font-body leading-relaxed max-w-sm mb-6">
              Empowering data-driven decision-making across Africa through rigorous
              data analytics, research, and strategic consulting.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@insightafrica.com" className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors text-sm font-body">
                <Mail size={16} /> insightanalyticsafrica@gmail.com
              </a>
              <span className="flex items-center gap-2 text-primary-foreground/60 text-sm font-body">
                <MapPin size={16} /> Kampala, Uganda {/* · Nairobi, Kenya · Dar-el-salaam, Tanzania */}
              </span>
              <span className="flex items-center gap-2 text-primary-foreground/60 text-sm font-body">
                <Phone size={16} /> +256 784 013 274
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Services</h4>
            {["Disease Surveillance & Modeling", "Research & Insight", "Statistical Modelling", "Data Science & Analytics", "Monitoring & Evaluation"].map((s) => (
              <a key={s} href="#services" className="block text-primary-foreground/60 text-sm font-body mb-2.5 hover:text-accent transition-colors">
                {s}
              </a>
            ))}
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Company</h4>
            {["About Us", "Case Studies", "Careers", "Contact"].map((s) => (
              <a key={s} href="#" className="block text-primary-foreground/60 text-sm font-body mb-2.5 hover:text-accent transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm font-body">
            © 2026 Insight Analytics Africa. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((s) => (
              <a key={s} href="#" className="text-primary-foreground/40 text-sm font-body hover:text-accent transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
