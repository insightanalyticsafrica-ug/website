import type { ImageMetadata } from "astro";
import ernest from "../assets/team/ernest-ekiru.png";
import samuel from "../assets/team/samuel-munyole.png";
import edward from "../assets/team/edward-ikoona.png";
import phiona from "../assets/team/phiona-agweng.jpg";

export const site = {
  name: "Insight Analytics Africa",
  description:
    "An AI-first analytics startup in Kampala, Uganda. We use AI and machine learning to build models, systems and decision tools for health and development, backed by the statistical rigour to prove they work.",
  email: "insightanalyticsafrica@gmail.com",
  phone: "+256 784 013 274",
  phoneHref: "tel:+256784013274",
  location: "Kampala, Uganda",
};

export const navLinks = [
  { label: "Our AI", href: "/#ai" },
  { label: "Services", href: "/#services" },
  { label: "Research", href: "/#research" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/#team" },
];

export const steps = [
  {
    title: "Frame the problem",
    body: "We start with the decision you need to make, then ask whether AI is the right tool for it.",
  },
  {
    title: "Prepare the data",
    body: "Survey, clinical, programme and satellite data cleaned and joined into one reliable pipeline.",
  },
  {
    title: "Build and validate",
    body: "Machine-learning and statistical models compared side by side, and tested on data they have never seen.",
  },
  {
    title: "Deploy and explain",
    body: "Working tools, dashboards and plain-language briefings for the people who act on the results.",
  },
];

// The first service is the headline offer and is shown larger on the home page.
export const services = [
  {
    title: "AI & machine learning solutions",
    body: "Prediction, risk-stratification and forecasting models, from early disease detection to targeting scarce resources, validated before anyone relies on them.",
  },
  {
    title: "AI-powered systems development",
    body: "We use AI throughout development to build data systems, decision-support tools and dashboards faster, without cutting corners on testing.",
  },
  {
    title: "Disease modelling & surveillance",
    body: "Hybrid machine-learning and SEIR models that forecast outbreaks and test interventions before they are rolled out.",
  },
  {
    title: "Statistical modelling & research",
    body: "Survival, frailty and regression models, study design and manuscripts ready for peer review.",
  },
  {
    title: "Monitoring & evaluation",
    body: "Theories of change, indicator frameworks and impact evaluations, with AI to speed up analysis and reporting.",
  },
];

export const aiPrinciples = [
  {
    title: "Validated, not just accurate",
    body: "Every model is tested on data it has never seen. In our TB study, XGBoost scored highest in testing, but logistic regression held up best on new patients, so that is what we recommended.",
  },
  {
    title: "Explainable to decision-makers",
    body: "Clinicians, programme managers and funders need to know why a model flags a case. We favour models whose reasoning can be shown, and we show it.",
  },
  {
    title: "Built for African data",
    body: "Models trained and tested on local survey, clinical and climate data, designed to run where connectivity, budgets and staff time are limited.",
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
