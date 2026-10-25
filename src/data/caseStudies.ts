import type { ImageMetadata } from "astro";
import busiaHero from "../assets/studies/busia-hero.png";
import ugandaRiskMap from "../assets/studies/uganda-risk-map.png";
import ugandaSeir from "../assets/studies/uganda-seir.png";

export type Figure = { image: ImageMetadata; alt: string; caption: string };

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  /** Short headline used on the home page cards. */
  cardTitle: string;
  summary: string;
  image?: ImageMetadata;
  imageAlt?: string;
  studyArea: string;
  population: string;
  design: string;
  partners: string;
  metrics: { value: string; label: string }[];
  sections: { heading: string; body: string[] }[];
  figures?: Figure[];
  pdf?: string;
  code?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "uganda-malaria-spatio-temporal-ml",
    category: "Disease modelling · Uganda",
    title: "Uganda malaria spatio-temporal machine learning",
    cardTitle: "Forecasting malaria hotspots with machine learning and a hybrid SEIR model",
    summary:
      "We combined UDHS survey data with Google Earth Engine climate features to map malaria risk across Uganda, then simulated bed-net campaigns. Distributing nets before the rains cut peak cases by 16% and delayed the peak by 10 days.",
    image: ugandaSeir,
    imageAlt: "SEIR model curves for susceptible, exposed, infectious and recovered children over 200 days",
    studyArea: "13 regions of Uganda",
    population: "7,787 children aged 0–59 months tested in the Uganda Demographic and Health Survey (UDHS)",
    design: "Spatio-temporal machine learning and hybrid SEIR modelling · 9 months",
    partners: "Independent academic research",
    metrics: [
      { value: "7,787", label: "children tested" },
      { value: "13", label: "regions mapped" },
      { value: "16%", label: "fewer peak cases" },
      { value: "≈10.09", label: "estimated R₀" },
    ],
    sections: [
      {
        heading: "Background",
        body: [
          "Malaria remains the leading cause of illness and death among children under five in Uganda, with regional risk varying widely with climate, altitude, housing and bed-net coverage.",
          "Routine surveillance struggles to anticipate outbreaks ahead of seasonal rainfall peaks, which limits the impact of pre-positioned interventions such as long-lasting insecticidal nets (LLINs).",
        ],
      },
      {
        heading: "Approach",
        body: [
          "We integrated household and geographic modules from the UDHS / MIS 2018–19 with environmental features extracted from Google Earth Engine, including rainfall, land surface temperature, NDVI and elevation, at the cluster level.",
          "Random forest and gradient boosting classifiers were trained to predict cluster-level malaria positivity, and the results were used to stratify regional risk.",
          "A compartmental SEIR (Susceptible–Exposed–Infectious–Recovered) model was then fitted to the high-risk regions and used to simulate counterfactual LLIN distribution scenarios.",
        ],
      },
      {
        heading: "Findings",
        body: [
          "Karamoja (32.1% prevalence) and Busoga (21.4%) emerged as very-high-risk regions, while Kigezi and Kampala showed the lowest burden.",
          "The fitted SEIR model projected a peak of 2,978 symptomatic children at day 40 after a rainfall trigger, with a basic reproduction number R₀ ≈ 10.09.",
          "A simulated mass LLIN distribution reduced peak cases by 16% and delayed the peak by 10 days, giving a quantitative basis for distributing nets before the rains.",
        ],
      },
    ],
    figures: [
      {
        image: ugandaRiskMap,
        alt: "Choropleth map of malaria risk hotspots across Uganda's regions",
        caption:
          "Fig 1. Malaria prevalence by region. Karamoja (32.1%) and Busoga (21.4%) are the primary hotspots. Source: UDHS / MIS 2018–19.",
      },
      {
        image: ugandaSeir,
        alt: "SEIR model curves for susceptible, exposed, infectious and recovered children over 200 days",
        caption: "Fig 2. Hybrid ML–SEIR outbreak dynamics: a peak of 2,978 symptomatic children at day 40 (R₀ ≈ 10.09).",
      },
    ],
    code: "https://github.com/ekiru111/Uganda-Malaria-Spatio-temporal-ML",
  },
  {
    slug: "infant-malaria-recurrence-busia",
    category: "Public health · Busia, Uganda",
    title:
      "Recurrence rate of malaria and associated factors in infants born to mothers who received either IPTp-SP or IPTp-DP in Busia, Uganda",
    cardTitle: "Why maternal education matters more than drug choice for infant malaria",
    summary:
      "A conditional frailty model on 640 infants from the PROMOTE trial found no significant difference between IPTp-DP and IPTp-SP (HR 0.94). Maternal education and distance to care drove recurrence.",
    image: busiaHero,
    imageAlt: "Illustration: a health worker with a tablet speaks with a mother holding her infant outside a rural clinic",
    studyArea: "Busia District, Uganda",
    population: "640 infants born to mothers enrolled in the PROMOTE randomised controlled trial",
    design: "Secondary analysis using a conditional frailty model",
    partners:
      "Makerere University School of Public Health · Infectious Diseases Research Collaboration (IDRC)",
    metrics: [
      { value: "640", label: "infants followed" },
      { value: "HR 0.94", label: "DP vs SP (not significant)" },
      { value: "48%", label: "lower risk, higher maternal education" },
      { value: "40%", label: "higher risk 3–5 km from care" },
    ],
    sections: [
      {
        heading: "Background",
        body: [
          "Repeated malaria episodes in infants are a major public health burden in sub-Saharan Africa, contributing to severe anaemia and developmental problems. Because a first infection changes an infant's later susceptibility, repeat events are statistically hard to evaluate: infants differ from each other, and each episode raises the risk of the next.",
          "Intermittent preventive treatment of malaria in pregnancy (IPTp) with either sulfadoxine-pyrimethamine (SP) or dihydroartemisinin-piperaquine (DP) is given to protect mothers and their newborns. This study asked whether the mother's IPTp regimen affected her infant's malaria recurrence, and mapped the social and environmental drivers of the disease.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "We analysed a cohort of 640 infants followed from birth, drawn from the PROMOTE trial, a double-blind randomised controlled trial in the high-transmission setting of Busia, Uganda.",
          "To handle correlated, recurrent infections we used a conditional frailty model rather than standard survival analysis. It controls for unobserved differences between infants (frailty) and for event dependence, where one episode raises the likelihood of the next.",
        ],
      },
      {
        heading: "Findings",
        body: [
          "The mother's drug regimen made little long-term difference: infants of mothers given IPTp-DP had a non-significant 6% lower risk of recurrence than the IPTp-SP group (HR 0.94).",
          "Social and geographic factors mattered far more. Maternal education was strongly protective, lowering recurrence risk by 21% for primary, 42% for secondary and 48% for higher education. Infants of mothers aged 30 to 45 had a 28% lower risk than those of teenage mothers.",
          "Risk rose with birth history and distance. Infants of mothers with three or more previous pregnancies had a 36% higher risk, and infants living 3 to 5 km from a health facility had a 40% higher risk than those within 1 km.",
        ],
      },
    ],
  },
  {
    slug: "tb-prediction-machine-learning-mulago",
    category: "Clinical prediction · Kampala",
    title:
      "Evaluating machine-learning algorithms for predicting tuberculosis cases at Mulago National Referral Hospital",
    cardTitle: "Which machine-learning model should a hospital trust to flag TB early?",
    summary:
      "We compared logistic regression, decision trees, random forests and XGBoost on 529 patient records. XGBoost scored highest in testing, but logistic regression held up best on unseen data, making it the most practical choice for hospital use.",
    studyArea: "Mulago National Referral Hospital, Kampala, Uganda",
    population: "529 patient records from the Mulago TB Unit Register, FY 2023/24",
    design: "Cross-sectional comparison of four supervised machine-learning models",
    partners: "Makerere University School of Public Health",
    metrics: [
      { value: "529", label: "patient records" },
      { value: "92%", label: "AUC, XGBoost (test)" },
      { value: "88%", label: "AUC, logistic regression (validation)" },
      { value: "1.45", label: "adjusted odds ratio, male sex" },
    ],
    sections: [
      {
        heading: "Background",
        body: [
          "Tuberculosis remains a critical public health problem in Uganda, where roughly 22% of cases, about 10,000 a year, go undetected. At Mulago National Referral Hospital, high patient volumes and late, symptom-based screening create diagnostic bottlenecks.",
          "This study set out to find the most stable and interpretable machine-learning framework for early TB case prediction in a resource-constrained tertiary hospital.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "We analysed 529 patient records from the Mulago TB Unit Register (FY 2023/24), split 70/15/15 into training, validation and test sets.",
          "Logistic regression, decision trees, random forest and XGBoost were tuned and compared on accuracy, precision, recall, F1-score and area under the ROC curve (AUC). Chi-square analysis and recursive feature elimination ranked the predictors.",
        ],
      },
      {
        heading: "Findings",
        body: [
          "In testing, XGBoost had the strongest performance (F1 88%, AUC 92%), followed by random forest (F1 82%, AUC 92%). On unseen validation data, however, logistic regression was the most stable and generalisable model (F1 78%, AUC 88%).",
          "Across all models the main predictors of TB were male sex (AOR 1.45; 95% CI 1.17–1.80) and urban residence (AOR 1.43; 95% CI 1.15–1.77). The highest-risk profile was HIV-positive men in urban areas who had previously completed treatment without a confirmed cure.",
        ],
      },
      {
        heading: "What it means",
        body: [
          "Ensemble methods such as XGBoost offer the best raw performance, but logistic regression gives the balance of stability and clinical interpretability a hospital needs. Built into Uganda's electronic health records, a risk-stratification tool like this could improve early case detection and help target GeneXpert and radiography resources.",
        ],
      },
    ],
    pdf: "/tb-prediction-mulago-manuscript.pdf",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
