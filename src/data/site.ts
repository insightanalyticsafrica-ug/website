import type { ImageMetadata } from "astro";
import ernest from "../assets/team/ernest-ekiru.png";
import samuel from "../assets/team/samuel-munyole.png";
import edward from "../assets/team/edward-ikoona.png";
import phiona from "../assets/team/phiona-agweng.jpg";

export const site = {
  name: "Insight Analytics Africa",
  description:
    "Biostatistics, disease modelling, research and M&E consultancy based in Kampala, Uganda. We find out what actually works, and prove it.",
  email: "insightanalyticsafrica@gmail.com",
  phone: "+256 784 013 274",
  phoneHref: "tel:+256784013274",
  location: "Kampala, Uganda",
};

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Research", href: "/#research" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/#team" },
];

export const steps = [
  {
    title: "Frame the question",
    body: "We start with the decision you need to make, not the dataset you happen to have.",
  },
  {
    title: "Design the study",
    body: "Sampling, protocols and M&E frameworks built to answer that decision.",
  },
  {
    title: "Model rigorously",
    body: "Survival, spatial, transmission and machine-learning models, each checked against the others.",
  },
  {
    title: "Brief the decision-makers",
    body: "Plain-language findings, figures and dashboards for the people who act on them.",
  },
];

export const services = [
  {
    title: "Disease modelling & surveillance",
    body: "SEIR and spatio-temporal models that forecast outbreaks and test interventions before they are rolled out.",
  },
  {
    title: "Statistical modelling",
    body: "Survival, frailty and regression models chosen for the question, built for correlated, recurrent and clustered data.",
  },
  {
    title: "Data science & analytics",
    body: "Machine-learning pipelines that join survey, clinical and satellite data, and dashboards decision-makers actually open.",
  },
  {
    title: "Monitoring & evaluation",
    body: "Theories of change, indicator frameworks, sampling and impact evaluations that stand up to donor review.",
  },
  {
    title: "Research & insight",
    body: "Study design, protocol writing, secondary analysis and manuscripts ready for peer review.",
  },
];

export const mission = {
  title: "Turning data into impact",
  body: "To transform Africa's data into actionable insights that drive evidence-based decisions, improve public health, and empower communities.",
};

export const vision = {
  title: "Africa's hub for data-driven innovation",
  body: "To be Africa's leading hub for data-driven innovation, where analytics and research fuel sustainable development, resilient health systems, and inclusive growth across the continent.",
};

export const values = [
  {
    title: "Precision",
    body: "Every data point verified. Every model validated. Accuracy you can stake decisions on.",
  },
  {
    title: "Pan-African progress",
    body: "Deep local expertise, connected by a shared vision for Africa's data-driven future.",
  },
  {
    title: "Clarity from complexity",
    body: "We distil vast datasets and nuanced contexts into clear, actionable intelligence.",
  },
  {
    title: "Integrity",
    body: "Independent, unbiased analysis. Our recommendations serve your outcomes, not an agenda.",
  },
];

export type Member = { name: string; role: string; photo: ImageMetadata };

export const team: Member[] = [
  { name: "Ekiru Ernest Ochepa", role: "Founder", photo: ernest },
  { name: "Munyole Samuel", role: "Co-Founder", photo: samuel },
  { name: "Ikoona Edward", role: "Co-Founder", photo: edward },
  { name: "Agweng Phiona", role: "Co-Founder", photo: phiona },
];

// Only list institutions you have actually worked with; visitors and funders do check.
export const partners = [
  "Makerere University School of Public Health",
  "Infectious Diseases Research Collaboration (IDRC)",
];
