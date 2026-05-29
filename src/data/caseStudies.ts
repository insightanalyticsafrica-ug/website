import caseStudyImg from "@/assets/Malaria-recurrence.png";
import teamImg from "@/assets/team-meeting.jpg";
import malariaRiskMap from "@/assets/malaria-risk-hotspots.png";
import malariaSeirModel from "@/assets/malaria-seir-model.png";

export type CaseStudyFigure = {
  src: string;
  caption: string;
  alt: string;
};

export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  studyArea: string;
  studyPopulation: string;
  duration: string;
  partners: string;
  metrics: { value: string; label: string }[];
  sections: CaseStudySection[];
  figures?: CaseStudyFigure[];
  downloadUrl?: string;
  externalUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "health-supply-chain-east-africa",
    category: "Public Health Analytics",
    title:
      "Recurrence rate of malaria and associated factors in infants born to mothers who received either IPTp-SP or IPTp-DP in Busia, Uganda; a Secondary Conditional Frailty Model analysis.",
    subtitle:
      "Why Maternal Education and Healthcare Access Matter More Than IPTp Drug Choice in Preventing Infant Malaria Recurrence.",
    heroImage: caseStudyImg,
    heroAlt: "Data analyst presenting strategic findings",
    studyArea: "Busia District, Uganda",
    studyPopulation: "640 infants born to mothers enrolled in the PROMOTE randomized controlled trial",
    duration: "Secondary Analysis",
    partners: "Makerere University, School of Public Health (Muksph) | Infectious Diseases Research Collaboration (IDRC)",
    metrics: [
      { value: "6%", label: "DP Risk Reduction (NS)" },
      { value: "48%", label: "Higher Ed. Protection" },
      { value: "640", label: "Infants Tracked" },
      { value: "1-15km", label: "Care Access Gap" },
    ],
    sections: [
      {
        heading: "Background",
        body: [
          "Repeated malaria episodes (recurrence) in infants represent a massive public health burden in sub-Saharan Africa, contributing heavily to severe anemia and developmental issues. Because an initial malaria infection alters an infant's future susceptibility, evaluating these repeat events poses a significant statistical challenge due to individual heterogeneity and event dependence.",
          "Intermittent preventive treatment of malaria in pregnancy (IPTp) using either Sulfadoxine-Pyrimethamine (SP) or Dihydroartemisinin-Piperaquine (DP) is given to mothers to protect both them and their newborns. This study evaluated whether the type of maternal IPTp regimen affected subsequent infant malaria recurrence rates, while simultaneously mapping out the critical socio-demographic and environmental drivers of the disease.",
        ],
      },
      {
        heading: "Approach & Methodology",
        body: [
          "The research team conducted a secondary data analysis using a cohort of 640 infants monitored from birth. The data originated from the PROMOTE trial—a rigorous, double-blind randomized controlled trial conducted in the high-transmission setting of Busia, Uganda.",
          "To properly handle the correlated nature of recurrent infections, standard survival analysis models were bypassed in favor of an advanced Conditional Frailty Model. This approach successfully controlled for individual-level frailty (unobserved heterogeneity among the infants) and event dependence (the compounding risk factor where one malaria episode increases the likelihood of the next).",
        ],
      },
      {
        heading: "Results & Findings",
        body: [
          "The statistical analysis revealed that maternal drug choice had a minimal long-term impact on the infants; children of mothers who received IPTp-DP saw a non-statistically significant 6% risk reduction in malaria recurrence compared to the IPTp-SP group (HR = 0.94).",
          "Instead, socio-demographic and geographic realities heavily dictated recurrence. Higher maternal education proved highly protective, lowering recurrence risk by 21% for primary education, 42% for secondary, and 48% for higher education. Additionally, infants born to older mothers (ages 30 to 45) enjoyed a 28% lower risk than those born to teenage mothers.",
          "Conversely, vulnerability increased with birth history and distance. Infants of multigravida mothers (3+ previous pregnancies) faced a 36% higher risk of recurrence. Furthermore, physical access to healthcare was critical: infants living 3 to 5 kilometers away from a health facility suffered a 40% higher recurrence risk compared to those living within 1 kilometer.",
        ],
      },
    ],
  },

  {
    slug: "uganda-malaria-spatio-temporal-ml",
    category: "Disease Modelling & Surveillance",
    title: "Uganda Malaria Spatio-Temporal Machine Learning",
    subtitle:
      "Combining UDHS survey data, Google Earth Engine climate features, and a hybrid ML–SEIR model to forecast malaria hotspots and quantify LLIN intervention impact.",
    heroImage: malariaRiskMap,
    heroAlt: "Choropleth map of malaria risk hotspots across Uganda regions",
    studyArea: "13 regions of Uganda",
    studyPopulation: "7,787 children aged 0–59 months tested in the Uganda Demographic and Health Survey (UDHS)",
    duration: "9 months",
    partners: "Independent academic research output",
    metrics: [
      { value: "7,787", label: "Children Tested" },
      { value: "13", label: "Regions Mapped" },
      { value: "16%", label: "Peak Case Reduction" },
      { value: "R₀ 10", label: "Transmission Index" },
    ],
    sections: [
      {
        heading: "Background",
        body: [
          "Malaria remains the leading cause of morbidity and mortality among children under five in Uganda, with regional risk varying widely as a function of climate, altitude, housing, and bed-net coverage.",
          "Routine surveillance struggles to anticipate outbreaks ahead of seasonal rainfall peaks, limiting the impact of pre-positioning interventions such as long-lasting insecticidal nets (LLINs).",
        ],
      },
      {
        heading: "Approach & Methodology",
        body: [
          "We integrated household and geographic modules from the UDHS / MIS 2018–19 with environmental features extracted from Google Earth Engine — including rainfall, land surface temperature, NDVI, and elevation — at the cluster level.",
          "Machine-learning classifiers (random forest, gradient boosting) were trained to predict cluster-level malaria positivity, and a regional risk stratification was produced via choropleth mapping.",
          "A compartmental SEIR (Susceptible–Exposed–Infectious–Recovered) outbreak model was then fitted to the high-risk regions and used to simulate counterfactual LLIN distribution scenarios.",
        ],
      },
      {
        heading: "Results & Findings",
        body: [
          "Karamoja (32.1% prevalence) and Busoga (21.4%) emerged as very-high-risk regions, while Kigezi and Kampala showed the lowest burden.",
          "The fitted SEIR model projected a peak of 2,978 symptomatic children at day 40 post-rainfall trigger, with a basic reproduction number R₀ ≈ 10.09.",
          "A simulated mass LLIN distribution scenario reduced peak cases by 16% and delayed the peak by 10 days — providing a quantitative basis for pre-rainfall net distribution timing.",
        ],
      },
    ],
    figures: [
      {
        src: malariaRiskMap,
        caption:
          "Fig 1. Regional risk stratification — malaria prevalence by region, with Karamoja (32.1%) and Busoga (21.4%) as primary hotspots. Source: UDHS / MIS 2018–19.",
        alt: "Choropleth map of malaria risk hotspots across Uganda regions",
      },
      {
        src: malariaSeirModel,
        caption:
          "Fig 2. Hybrid ML–SEIR outbreak dynamics — peak of 2,978 symptomatic children at day 40 post-rainfall trigger (R₀ ≈ 10.09).",
        alt: "SEIR compartmental model curve over 200 days",
      },
    ],
    externalUrl: "https://github.com/ekiru111/Uganda-Malaria-Spatio-temporal-ML",
  },
  {
    slug: "credit-risk-pan-african-banking",
    category: "Financial Services",
    title: "Credit Risk Modelling for Pan-African Banking Group",
    subtitle:
      "Bespoke statistical models that reduced non-performing loans by 23% and unlocked confident expansion into three new markets.",
    heroImage: teamImg,
    heroAlt: "African business professionals in a strategy meeting",
    studyArea: "Retail and SME loan portfolios across 7 African markets",
    studyPopulation: "1.2M active loan accounts and 4 years of repayment history",
    duration: "12 months",
    partners: "Pan-African banking group (anonymised)",
    metrics: [
      { value: "23%", label: "NPL Reduction" },
      { value: "3", label: "New Markets" },
      { value: "1.2M", label: "Accounts Modelled" },
      { value: "12 mo", label: "Duration" },
    ],
    sections: [
      {
        heading: "Background",
        body: [
          "The client's existing scorecards were built on a single-market dataset and over-rejected thin-file applicants — constraining growth in newer markets where alternative data signals are more predictive than traditional bureau scores.",
        ],
      },
      {
        heading: "Approach & Methodology",
        body: [
          "We built market-specific PD (probability of default) models using a combination of logistic regression for regulatory transparency and gradient boosting for challenger benchmarking.",
          "Alternative features — mobile money velocity, airtime top-up cadence, and merchant transaction patterns — were engineered alongside traditional bureau attributes.",
          "Models were validated on out-of-time holdouts and stress-tested against macroeconomic shock scenarios before staged production rollout.",
        ],
      },
      {
        heading: "Results & Findings",
        body: [
          "Non-performing loan rates fell by 23% in the first 12 months post-deployment, while approval rates for thin-file applicants increased by 18%.",
          "The validated framework gave the bank's risk committee the confidence to enter three new markets, with portfolio quality remaining within target tolerances through the first year of operation.",
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
