// Edit this file when you want to change text, links, skills, projects, or images.
// Keep image files inside assets/images, then update the matching src below.
export const portfolioContent = {
  page: {
    language: "en",
    title: "Huy Nguyen | Business Analytics",
    description:
      "Huy Nguyen - Business Analytics and MSc Business Analytics graduate. Python, SQL, Power BI, Tableau and Streamlit.",
  },

  hero: {
    kicker: "Data, insight, and better decisions",
    headline: "Hi, I am Huy",
    phrases: [
      "a Business Analytics",
      "MSc Business Analytics graduate",
      "I work with data ",
    ],
    scrollLabel: "Scroll to portfolio",
    portrait: {
      src: "assets/images/HUY.jpg",
      alt: "Portrait of Huy Nguyen",
      initials: "HN",
    },
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Soft Skills", href: "#soft-skills" },
    { label: "Portfolio", href: "#projects" },
  ],

  profile: {
    eyebrow: "MSc Business Analytics",
    name: "Huy Nguyen Nhu",
    role: "Business Analytics",
    contacts: [
      {
        label: "Email",
        value: "huynguyennhu.uk@gmail.com",
        href: "mailto:huynguyennhu.uk@gmail.com",
        icon: "@",
      },
      {
        label: "Phone",
        value: "(+44) 7938438161",
        href: "tel:+447938438161",
        icon: "T",
      },
      {
        label: "GitHub",
        value: "github.com/huynguyennhu2201",
        href: "https://github.com/huynguyennhu2201",
        icon: "GH",
      },
      {
        label: "Location",
        value: "Birmingham, United Kingdom",
        icon: "L",
      },
    ],
  },

  about: {
    eyebrow: "About Me",
    title: "",
    body: "I am an MSc Business Analytics graduate from Aston University with experience across e-commerce, finance and marketing analysis. I work with Python, SQL, Power BI, Tableau, Excel and Streamlit to clean data, build machine learning models, track KPIs and turn complex analysis into clear business insights teams can act on.",
  },

  skills: {
    eyebrow: "Technical Skills",
    title: "",
    items: [
      {
        icon: "PY",
        iconSrc: "assets/images/icons/python.svg",
        title: "Python",
        description: "Pandas, NumPy, scikit-learn, Matplotlib, Seaborn, and Plotly for analysis and automation.",
      },
      {
        icon: "SQL",
        iconSrc: "assets/images/icons/sql.svg",
        title: "SQL",
        description: "Data retrieval, joins, filtering, aggregation, and validation across reporting tables.",
      },
      {
        icon: "ML",
        iconSrc: "assets/images/icons/ml.svg",
        title: "Machine Learning",
        description: "Decision Tree, Random Forest, AdaBoost, Gradient Boosting, XGBoost, and Logistic Regression.",
      },
      {
        icon: "BI",
        iconSrc: "assets/images/icons/powerbi.svg",
        title: "Power BI",
        description: "DAX measures, interactive reporting, and executive dashboards for management.",
      },
      {
        icon: "TB",
        iconSrc: "assets/images/icons/tableau.svg",
        title: "Tableau",
        description: "Visual analytics, calculated fields, filters, and storytelling dashboards.",
      },
      {
        icon: "ST",
        iconSrc: "assets/images/icons/streamlit.svg",
        title: "Streamlit",
        description: "Interactive data apps and dashboards that make analysis usable for non-technical teams.",
      },
      {
        icon: "XL",
        iconSrc: "assets/images/icons/excel.svg",
        title: "Excel & Sheets",
        description: "Power Query, PivotTables, XLOOKUP, SUMIFS, and COUNTIFS for clean reporting models.",
      },
      {
        icon: "AU",
        iconSrc: "assets/images/icons/automation.svg",
        title: "Automation",
        description: "VBA and Office Scripts to automate recurring reports and reconciliation tasks.",
      },
      {
        icon: "DS",
        iconSrc: "assets/images/icons/storytelling.svg",
        title: "Data Storytelling",
        description: "Turning technical findings into simple narratives and recommendations for stakeholders.",
      },
    ],
  },

  softSkills: {
    eyebrow: "Soft Skills",
    title: "",
    items: [
      { label: "Analytical thinking", value: 80 },
      { label: "Communication", value: 75 },
      { label: "Problem solving", value: 90 },
      { label: "Stakeholder management", value: 84 },
    ],
  },

  projects: {
    eyebrow: "Portfolio",
    title: "",
    items: [
      {
        tag: "Machine Learning",
        title: "Loan Prediction App",
        description:
          "A Streamlit machine learning app that predicts loan approval status from applicant and loan details. Compares Decision Tree, Random Forest, AdaBoost, and XGBoost models and returns a live approval probability.",
        demoHref: "https://loan-prediction-app-jbqhaftkaelvhcaer5dbmb.streamlit.app/",
        demoLabel: "Live demo",
        href: "https://github.com/huynguyennhu2201/loan-prediction-app",
        linkLabel: "Code",
      },
      {
        tag: "Data Analysis",
        title: "London Commercial Property Analysis",
        description:
          "Scraped Rightmove commercial property listings with Python (BeautifulSoup, Pandas, Requests) and built a Tableau dashboard analysing asking prices by business sector and distance from Bank Station.",
        href: "https://github.com/huynguyennhu2201/london-commercial-property-analysis",
        linkLabel: "Code",
      },
      {
        tag: "Automation",
        title: "Email Booking Automation",
        description:
          "End-to-end booking system combining a public booking form, an AI-assisted Gmail worker (FastAPI + Groq Llama 3.3) and a Streamlit manager dashboard, with Supabase storage and Google Calendar sync.",
        demoHref: "https://bookingemailapp-nail-shop.streamlit.app/",
        demoLabel: "Live demo",
        href: "https://github.com/huynguyennhu2201/Booking_email_app_nail",
        linkLabel: "Code",
      },
    ],
  },
};
