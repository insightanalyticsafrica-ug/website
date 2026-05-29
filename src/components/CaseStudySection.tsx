import { ArrowRight, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";
import caseStudyImg from "@/assets/Malaria-recurrence.png";
import teamImg from "@/assets/team-meeting.jpg";
import malariaRiskMap from "@/assets/malaria-risk-hotspots.png";
import malariaSeirModel from "@/assets/malaria-seir-model.png";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type Figure = {
  id: string;
  src: string;
  label: string;
  number: string;
  title: string;
  caption: string;
  source: string;
  alt: string;
};

const figures: Figure[] = [
  {
    id: "risk-map",
    src: malariaRiskMap,
    label: "Risk Map",
    number: "Fig 1.",
    title: "Regional Risk Stratification",
    caption: "Malaria prevalence by region — Karamoja (32.1%) and Busoga (21.4%) emerge as primary hotspots.",
    source: "Source: UDHS / MIS 2018–19",
    alt: "Choropleth map of malaria risk hotspots across Uganda regions",
  },
  {
    id: "seir-model",
    src: malariaSeirModel,
    label: "SEIR Curve",
    number: "Fig 2.",
    title: "Hybrid ML-SEIR Outbreak Dynamics",
    caption: "Compartmental model projecting peak of 2,978 symptomatic children at day 40 post-rainfall trigger (R₀ ≈ 10.09).",
    source: "Model: SEIR fitted on UDHS + Google Earth Engine climate features",
    alt: "SEIR compartmental model curve showing infectious, exposed, susceptible and recovered children over 200 days",
  },
];

const metrics = [
  { value: "6%", label: "DP Risk Reduction (NS)" },
  { value: "48%", label: "Higher Ed. Protection" },
  { value: "640", label: "Infants Tracked" },
  { value: "1-15km", label: "Care Access Gap" },
];

const CaseStudySection = () => {
  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto section-padding">
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-body">
            Case Study
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
            Real Impact,{" "}
            <span className="text-gradient-gold">Proven Results</span>
          </h2>
        </div>

        {/* Featured Case Study */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={caseStudyImg}
              alt="Data analyst presenting strategic findings"
              className="w-full h-80 lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="glass-dark text-primary-foreground text-xs font-body font-semibold px-3 py-1.5 rounded-full">
                Featured Project
              </span>
            </div>
          </div>

          <div>
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold font-body tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
              Public Health Analytics
            </span>
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-snug">
              Recurrence rate of malaria and associated factors in infants born to mothers 
              who received either IPTp-SP or IPTp-DP in Busia, Uganda; a Secondary 
              Conditional Frailty Model analysis.
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Using an advanced Conditional Frailty Model on longitudinal clinical 
              trial data from 640 infants in Busia, Uganda, we demonstrated that 
              maternal education (up to 48% risk reduction) and healthcare proximity 
              are far stronger predictors of recurrent malaria than maternal IPTp 
              drug regimens.
              
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center glass-card rounded-xl p-4">
                  <p className="font-heading text-2xl font-bold text-accent">{metric.value}</p>
                  <p className="text-muted-foreground text-xs font-body mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
            <Link
              to="/case-studies/health-supply-chain-east-africa"
              className="inline-flex items-center gap-2 text-accent font-semibold font-body group/link hover:gap-3 transition-all"
            >
              Read Full Case Study
              <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Uganda Malaria ML Case Study */}
        <div className="glass-card rounded-2xl p-8 lg:p-12 mb-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8">
            <div>
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold font-body tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
                Disease Modelling & Surveillance
              </span>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-snug">
                Uganda Malaria Spatio-Temporal Machine Learning
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                A machine-learning study integrating UDHS survey, household, geographic and Google Earth
                Engine environmental data to map malaria risk across Uganda. We combined an SEIR
                outbreak model with regional risk stratification to forecast hotspots and quantify the
                impact of LLIN bed-net distribution interventions.
              </p>
              <ul className="text-muted-foreground font-body text-sm space-y-2 mb-6 list-disc pl-5">
                <li>Identified Karamoja (32.1%) and Busoga (21.4%) as very-high-risk regions.</li>
                <li>SEIR model: peak of 2,978 sick children at day 40, R₀ ≈ 10.09.</li>
                <li>Mass LLIN distribution scenario: 16% reduction in peak cases, peak delayed by 10 days.</li>
              </ul>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { value: "7,787", label: "Children Tested" },
                  { value: "13", label: "Regions Mapped" },
                  { value: "16%", label: "Peak Case Reduction" },
                  { value: "R₀ 10", label: "Transmission Index" },
                ].map((m) => (
                  <div key={m.label} className="text-center bg-secondary rounded-xl p-4">
                    <p className="font-heading text-xl font-bold text-accent">{m.value}</p>
                    <p className="text-muted-foreground text-xs font-body mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/case-studies/uganda-malaria-spatio-temporal-ml"
                className="inline-flex items-center gap-2 text-accent font-semibold font-body group/link hover:gap-3 transition-all"
              >
                Read Full Case Study
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
            <Tabs defaultValue="risk-map" className="w-full">
              <TabsList className="bg-secondary mb-3">
                {figures.map((f) => (
                  <TabsTrigger key={f.id} value={f.id} className="font-body text-xs">
                    {f.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {figures.map((f) => (
                <TabsContent key={f.id} value={f.id} className="mt-0">
                  <figure className="rounded-xl overflow-hidden bg-gradient-to-br from-primary to-navy-light border border-accent/20 shadow-lg">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="relative block w-full bg-background/95 p-3 group/zoom"
                          aria-label={`Zoom into ${f.title}`}
                        >
                          <img
                            src={f.src}
                            alt={f.alt}
                            className="w-full h-auto object-contain rounded-md"
                            loading="lazy"
                          />
                          <span className="absolute top-5 right-5 bg-primary/80 text-primary-foreground rounded-full p-2 opacity-0 group-hover/zoom:opacity-100 transition-opacity">
                            <ZoomIn size={16} />
                          </span>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl p-2 bg-background">
                        <img src={f.src} alt={f.alt} className="w-full h-auto object-contain rounded-md" />
                      </DialogContent>
                    </Dialog>
                    <figcaption className="px-5 py-4 border-t border-accent/20">
                      <p className="text-primary-foreground font-body text-sm leading-relaxed">
                        <span className="text-accent font-semibold">{f.number}</span>{" "}
                        <span className="font-semibold">{f.title}</span> — {f.caption}
                      </p>
                      <p className="text-primary-foreground/60 font-body text-xs mt-1">{f.source}</p>
                    </figcaption>
                  </figure>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        {/* Secondary Case Study */}
        {/* <div className="glass-card rounded-2xl overflow-hidden grid lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img
              src={teamImg}
              alt="African business professionals in a strategy meeting"
              className="w-full h-64 lg:h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold font-body tracking-wider uppercase px-3 py-1.5 rounded-full mb-4 w-fit">
              Financial Services
            </span>
            <h3 className="font-heading text-xl lg:text-2xl font-bold text-foreground mb-3">
              Credit Risk Modelling for Pan-African Banking Group
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Built bespoke statistical models that reduced non-performing loans by 23%,
              enabling a leading bank to confidently expand into three new markets.
            </p>
            <Link
              to="/case-studies/credit-risk-pan-african-banking"
              className="inline-flex items-center gap-2 text-accent font-semibold font-body group/link hover:gap-3 transition-all"
            >
              Read Full Case Study
              <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CaseStudySection;
