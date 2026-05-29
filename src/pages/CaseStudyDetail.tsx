import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Download, ExternalLink, MapPin, Users, Calendar, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { getCaseStudy } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudy(slug) : undefined;

  useEffect(() => {
    if (study) {
      document.title = `${study.title} — Case Study | Insight Analytics Africa`;
    }
    window.scrollTo(0, 0);
  }, [study]);

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto section-padding pt-40 pb-24 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Case study not found</h1>
          <Link to="/#case-studies" className="text-accent font-semibold inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Back to case studies
          </Link>
        </div>
      </div>
    );
  }

  const meta = [
    { icon: MapPin, label: "Study Area", value: study.studyArea },
    { icon: Users, label: "Study Population", value: study.studyPopulation },
    { icon: Calendar, label: "Duration", value: study.duration },
    { icon: Building2, label: "Partner", value: study.partners },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto section-padding">
          <Link
            to="/#case-studies"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent text-sm font-body mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> All case studies
          </Link>
          <span className="inline-block bg-accent/20 text-accent text-xs font-semibold font-body tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
            {study.category}
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-5 max-w-4xl">
            {study.title}
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-3xl leading-relaxed">
            {study.subtitle}
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-primary pb-12">
        <div className="container mx-auto section-padding">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={study.heroImage}
              alt={study.heroAlt}
              className="w-full h-64 lg:h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Meta + Metrics */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto section-padding grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {meta.map((m) => (
              <div key={m.label} className="glass-card rounded-xl p-5 flex gap-3">
                <m.icon size={20} className="text-accent shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-body mb-1">{m.label}</p>
                  <p className="text-foreground font-body text-sm leading-snug">{m.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {study.metrics.map((m) => (
              <div key={m.label} className="glass-card rounded-xl p-4 text-center">
                <p className="font-heading text-2xl font-bold text-accent">{m.value}</p>
                <p className="text-muted-foreground text-xs font-body mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20">
        <div className="container mx-auto section-padding max-w-4xl">
          {study.sections.map((s) => (
            <div key={s.heading} className="mb-12">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-5">
                {s.heading}
              </h2>
              <div className="space-y-4">
                {s.body.map((p, i) => (
                  <p key={i} className="text-muted-foreground font-body leading-relaxed text-base">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {study.figures && study.figures.length > 0 && (
            <div className="mb-12">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-6">Figures</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {study.figures.map((f, i) => (
                  <figure key={i} className="rounded-xl overflow-hidden bg-gradient-to-br from-primary to-navy-light border border-accent/20">
                    <div className="bg-background/95 p-3">
                      <img src={f.src} alt={f.alt} className="w-full h-auto object-contain rounded-md" loading="lazy" />
                    </div>
                    <figcaption className="px-4 py-3 border-t border-accent/20 text-primary-foreground/80 font-body text-xs leading-relaxed">
                      {f.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="glass-card rounded-2xl p-8 lg:p-10 mt-16 text-center">
            <h3 className="font-heading text-xl lg:text-2xl font-bold text-foreground mb-3">
              Want the full report?
            </h3>
            <p className="text-muted-foreground font-body mb-6 max-w-xl mx-auto">
              Download the detailed PDF write-up, or get in touch to discuss how a similar engagement could work for your team.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {study.downloadUrl ? (
                <a
                  href={study.downloadUrl}
                  download
                  className="inline-flex items-center gap-2 gradient-gold text-accent-foreground font-semibold font-body px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Download size={16} /> Download PDF
                </a>
              ) : (
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 gradient-gold text-accent-foreground font-semibold font-body px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Request Full Report <ArrowRight size={16} />
                </Link>
              )}
              {study.externalUrl && (
                <a
                  href={study.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border text-foreground font-semibold font-body px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <ExternalLink size={16} /> View on GitHub
                </a>
              )}
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 text-foreground font-semibold font-body px-6 py-3 rounded-lg hover:text-accent transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CaseStudyDetail;
