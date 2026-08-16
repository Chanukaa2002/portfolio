export const personalInfo = {
  name: "Chanuka Dilshan",
  shortName: "Chanuka",
  brandName: "Chanuka.ai",
  domain: "chanukadilshan.me",
  title: "ML / MLOps Engineer",
  tagline: "Building Production ML Systems with ZenML & MLflow",
  heroSubtitle:
    "Building production ML systems with ZenML + MLflow, and developing scalable enterprise ML infrastructure with Airflow, Spark, and Kafka.",
  aboutPrompt: "Who is Chanuka Dilshan?",
  aboutBio:
    "Chanuka Dilshan is an ML / MLOps Engineer specializing in building production-ready machine learning systems and automated data pipelines. Currently reading his Higher National Diploma in Software Engineering at NIBM with a 3.75 GPA (following a perfect 4.0 GPA on the Dean's List during his Diploma), Chanuka designs robust ML architectures using ZenML, MLflow, TensorFlow, and PyTorch, alongside enterprise data infrastructure with Kafka, Spark, and Airflow. With hands-on engineering experience shipping healthcare mobile and backend systems at Ceylon X Corporation, Chanuka is actively seeking an ML / MLOps internship where he can deploy robust, production-grade intelligence systems.",
  resumeUrl:
    "https://drive.google.com/file/d/123qqzF5dGoN741A881v59H4wvhMfwzB5/view?usp=sharing",
  githubUrl: "https://github.com/Chanukaa2002",
  linkedinUrl: "https://www.linkedin.com/in/chanuka72/",
  email: "chanukadilshan2002@gmail.com",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chanuka72/",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/Chanukaa2002",
      icon: "github",
    },
    {
      name: "Medium",
      url: "https://medium.com/@Chanuka72",
      icon: "medium",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/chanuka_dilshann/",
      icon: "instagram",
    },
    {
      name: "Blog",
      url: "https://www.blog.chanukadilshan.me",
      icon: "blog",
    },
    {
      name: "Email",
      url: "mailto:chanukadilshan2002@gmail.com",
      icon: "mail",
    },
  ],
};

export const skillsData = [
  { id: "python", name: "Python", slug: "python", category: "ml" },
  { id: "tensorflow", name: "TensorFlow", slug: "tensorflow", category: "ml" },
  { id: "pytorch", name: "PyTorch", slug: "pytorch", category: "ml" },
  { id: "sklearn", name: "Scikit-Learn", slug: "sklearn", category: "ml" },
  { id: "zenml", name: "ZenML", slug: "python", category: "mlops" },
  { id: "mlflow", name: "MLflow", slug: "python", category: "mlops" },
  { id: "kafka", name: "Apache Kafka", slug: "kafka", category: "mlops" },
  { id: "spark", name: "Apache Spark", slug: "spark", category: "mlops" },
  { id: "docker", name: "Docker", slug: "docker", category: "mlops" },
  { id: "aws", name: "AWS Cloud", slug: "aws", category: "mlops" },
  { id: "git", name: "Git / GitHub", slug: "git", category: "mlops" },
  { id: "flutter", name: "Flutter", slug: "flutter", category: "fullstack" },
  { id: "nodejs", name: "Node.js", slug: "nodejs", category: "fullstack" },
  { id: "react", name: "React.js", slug: "react", category: "fullstack" },
  { id: "postgres", name: "PostgreSQL", slug: "postgres", category: "fullstack" },
  { id: "mongodb", name: "MongoDB", slug: "mongodb", category: "fullstack" },
  { id: "postman", name: "Postman", slug: "postman", category: "mlops" },
  { id: "dotnet", name: ".NET Framework", slug: "dotnet", category: "fullstack" },
];

export const allProjects = [
  {
    id: "zenml-mlops-pipeline",
    title: "Production ML Pipeline with ZenML & MLflow",
    shortTitle: "ZenML MLOps",
    description:
      "An end-to-end production Machine Learning pipeline architected with ZenML and MLflow. Features automated data ingestion, model training, evaluation, experiment tracking, model registry, artifact storage, and continuous deployment workflows.",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1757347135/c31161d1-4b31-4a04-8f28-b3e482df8a79_1280x720_i0n3og.gif",
    githubLink: "https://github.com/Chanukaa2002",
    tags: ["ZenML", "MLflow", "Python", "Docker", "MLOps", "Model Registry"],
    category: "Production ML",
  },
  {
    id: "ev-optimizer",
    title: "EV Optimizer - Electric Vehicle Efficiency AI",
    shortTitle: "EV Optimizer",
    description:
      "An intelligent Machine Learning optimization system designed to forecast and optimize electric vehicle energy consumption, battery degradation curves, and dynamic route efficiency based on telemetry features.",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753446974/pred_yk4tyq.png",
    githubLink: "https://github.com/Chanukaa2002",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "Optimization", "Telemetry"],
    category: "ML Fundamentals",
  },
  {
    id: "movie-recommender",
    title: "Movie Recommendation System",
    shortTitle: "MovieRec",
    description:
      "A content-based recommendation engine built with Machine Learning, cosine similarity, and Streamlit, providing real-time film suggestions tailored to user tastes.",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1757248790/movie_x67glp.png",
    githubLink: "https://github.com/Chanukaa2002/Movie-Reccomender-System",
    tags: ["Streamlit", "Scikit-Learn", "Python", "Kaggle", "NLP"],
    category: "ML Fundamentals",
  },
  {
    id: "neural-network",
    title: "Build Own Neural Network from Scratch",
    shortTitle: "NeuralNet",
    description:
      "A complete neural network built from scratch using pure Python and NumPy. Implements forward propagation, backpropagation with gradient descent, activation functions (ReLU, Sigmoid, Softmax), and loss calculations without high-level ML libraries.",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1757347135/c31161d1-4b31-4a04-8f28-b3e482df8a79_1280x720_i0n3og.gif",
    githubLink: "https://github.com/Chanukaa2002/Neural-network-from-scratch",
    tags: ["Python", "NumPy", "Deep Learning", "Neural Network"],
    category: "ML Fundamentals",
  },
  {
    id: "mediseek",
    title: "MediSeek - Production Healthcare Platform",
    shortTitle: "MediSeek",
    description:
      "A production healthcare application built to serve international users. Features a cross-platform Flutter mobile client, high-throughput Node.js REST APIs, and integrations for payments, real-time push notifications, and geolocation mapping.",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753447492/mil_ofrj4m.png",
    githubLink: "https://github.com/Chanukaa2002",
    tags: ["Flutter", "Node.js", "REST APIs", "Healthcare", "Webhooks", "PostgreSQL"],
    category: "Full-Stack",
  },
  {
    id: "routz",
    title: "RoutZ - Dijkstra Path Finder",
    shortTitle: "RoutZ",
    description:
      "A high-performance algorithmic web application engineered for Data Structures & Algorithms. Implements Dijkstra's shortest path algorithm over custom graph nodes to calculate the optimal route between locations.",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1760547141/Capture_cq262q.png",
    liveLink: "https://routz.chanukadilshan.me/",
    githubLink: "https://github.com/Chanukaa2002/RoutZ",
    tags: ["Next.js", "Express", "Node.js", "Firebase", "Algorithms"],
    category: "Full-Stack",
  },
  {
    id: "nibmevex",
    title: "NibmEvex - Campus Event Management System",
    shortTitle: "NibmEvex",
    description:
      "An enterprise event booking and student management portal developed with full-stack architecture, role-based authentication, ticket generation, and real-time schedule synchronization.",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1757242600/house_ycyu5h.png",
    githubLink: "https://github.com/Chanukaa2002",
    tags: ["React.js", "Node.js", "MongoDB", "Express", "Full-Stack"],
    category: "Full-Stack",
  },
  {
    id: "eatro",
    title: "EATRO - Smart IoT Mobile App",
    shortTitle: "EATRO",
    description:
      "An intelligent IoT mobile application engineered with Flutter, Firebase, and Gemini API integration that connects with custom hardware sensors to track, analyze, and plan user meals in real-time.",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753447492/mil_ofrj4m.png",
    githubLink: "https://github.com/Chanukaa2002/IOT-Mobile",
    tags: ["Flutter", "Firebase", "Gemini API", "IoT", "Mobile"],
    category: "Full-Stack",
  },
  {
    id: "hogwarts-house",
    title: "Hogwarts House Sorting AI Web App",
    shortTitle: "HogwartsAI",
    description:
      "An interactive ML web app featuring a React frontend and Flask REST backend. Utilizes trained classification models (Random Forest & Scikit-Learn) on Kaggle datasets to predict user Hogwarts houses based on personality vectors.",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1757242600/house_ycyu5h.png",
    githubLink: "https://github.com/Chanukaa2002/house-sorting-app",
    tags: ["React.js", "Flask", "Scikit-Learn", "Machine Learning", "Python"],
    category: "ML Fundamentals",
  },
  {
    id: "laptop-price",
    title: "Laptop Price Prediction Engine",
    shortTitle: "PricePredict",
    description:
      "A machine learning web system utilizing regression algorithms to evaluate hardware specifications (CPU, RAM, GPU, SSD) and accurately forecast laptop market valuation in real-time.",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753446974/pred_yk4tyq.png",
    liveLink: "https://laptop-price-prediction-c3hs.onrender.com",
    githubLink: "https://github.com/Chanukaa2002/Laptop-price-prediction",
    tags: ["Python", "Flask", "Scikit-Learn", "Regression", "Render"],
    category: "ML Fundamentals",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio 2.0",
    shortTitle: "Portfolio",
    description:
      "Modern, sleek cyber-neural portfolio showcasing machine learning systems, credentials, and projects with interactive SVG brain circuits and custom animations.",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1757340008/Chanuka_Dilshan_Mozilla_Firefox_2025-09-08_19-25-27_online-video-cutter.com_fjrui0.gif",
    liveLink: "https://chanukadilshan.me",
    githubLink: "https://github.com/Chanukaa2002/portfolio",
    tags: ["React.js", "TailwindCSS", "Vite", "Vercel"],
    category: "Full-Stack",
  },
];

export const certificatesData = [
  {
    id: "adv-learning-algos",
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI & Stanford Online (Coursera)",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1757780288/Capture_tgtfos.png",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/8PQKQW6PKA3J",
    category: "Machine Learning",
  },
  {
    id: "supervised-ml",
    title: "Supervised Machine Learning: Regression & Classification",
    issuer: "DeepLearning.AI & Stanford Online (Coursera)",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753361007/Capture_sjtqal.png",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/BFMDYIRJC63F",
    category: "Machine Learning",
  },
  {
    id: "tensorflow-intro",
    title: "Introduction to TensorFlow for AI, ML, and Deep Learning",
    issuer: "DeepLearning.AI (Coursera)",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1762786472/cert_yxw6cz.png",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/GGZC73FYE5WA",
    category: "Deep Learning",
  },
  {
    id: "linear-algebra-ml",
    title: "Linear Algebra for Machine Learning and Data Science",
    issuer: "DeepLearning.AI (Coursera)",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1749288143/C1_ejvdwa.png",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/E0BM75OUC2LY",
    category: "Mathematics & AI",
  },
  {
    id: "python-beginner",
    title: "Python For Beginners",
    issuer: "University of Moratuwa (CODL)",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1749092905/python_1_uom_e2gxud.png",
    verifyUrl:
      "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?contextid=4776&code=kcsp4kXOAk&qrcode=1",
    category: "Programming",
  },
  {
    id: "frontend-dev",
    title: "Front-End Web Development",
    issuer: "University of Moratuwa (CODL)",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1749093664/fe_oiglp2.png",
    verifyUrl:
      "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?code=4Qk4sVWQpp",
    category: "Web Development",
  },
  {
    id: "web-design",
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa (CODL)",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1749093809/we_lig8a1.png",
    verifyUrl:
      "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?code=ooRriETAC1",
    category: "Design",
  },
];

export const badgesData = [
  {
    id: "aws-ml-foundations",
    title: "Machine Learning Foundations - AWS",
    issuer: "Amazon Web Services (AWS)",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753361920/aws-educate-machine-learning-foundations_1_ty3wr8.png",
    verifyUrl:
      "https://www.credly.com/badges/c40e216b-918d-4feb-b9e4-db33c9175cca/linked_in?t=szw33z",
  },
  {
    id: "postman-expert",
    title: "Postman Student Expert",
    issuer: "Postman",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753361935/pstmn_mbyi1x.png",
    verifyUrl:
      "https://badgr.com/public/assertions/RxZSosLjRKK2jkcPuRJt7g?identity__email=mchanuka72@gmail.com",
  },
  {
    id: "pieces-genai",
    title: "GenAI 101 with Pieces",
    issuer: "Pieces for Developers",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753361935/assertion-7Adyw2SzTSeP7JjSB0yRAg_ignc2d.png",
    verifyUrl:
      "https://badgr.com/public/assertions/67b04377157e9b171a2b1617?identity__email=mchanuka72@gmail.com",
  },
  {
    id: "aws-emerging-talent",
    title: "Emerging Talent Community - AWS",
    issuer: "Amazon Web Services (AWS)",
    image:
      "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753361920/AWSEBadge_bqkjmw.png",
    verifyUrl:
      "https://www.credly.com/badges/c40e216b-918d-4feb-b9e4-db33c9175cca/linked_in?t=szw33z",
  },
];

export const experienceData = [
  {
    company: "Ceylon X Corporation",
    position: "Software Engineer Intern",
    timePeriod: "Jan 2026 – Jun 2026 · 6 mos (Remote)",
    description:
      "Engineered production healthcare mobile applications and high-throughput backend services serving international users.",
    highlights: [
      "Developed mobile features in Flutter for a production healthcare-related app serving international users.",
      "Built Node.js APIs handling requests from mobile and web clients.",
      "Integrated third-party services (payments, push notifications, maps) using REST APIs and webhooks.",
      "Participated in full-stack development across mobile frontend, backend microservices, and database design.",
      "Debugged production issues and optimized latency across mobile app and backend services.",
    ],
  },
];

export const educationData = [
  {
    degree: "Higher National Diploma in Computer Software Engineering",
    institution: "National Institute of Business Management (NIBM - Sri Lanka)",
    period: "Nov 2024 – Aug 2026",
    grade: "3.75 / 4.0 GPA (NIBM)",
    description:
      "Specialized in Software Engineering, Full-Stack Architecture, Node.js, React.js, Python, and Machine Learning Systems.",
    skills: ["Node.js", "React.js", "Python", "Full-Stack Software Engineering", "Cloud Computing"],
  },
  {
    degree: "Diploma in Computer Software Engineering",
    institution: "National Institute of Business Management (NIBM - Sri Lanka)",
    period: "Jul 2023 – Oct 2024",
    grade: "4.0 / 4.0 GPA (Dean's List / Top Honors)",
    description:
      "Graduated on the prestigious Dean's List with a perfect 4.0 GPA. Mastered Object-Oriented Programming, Database Management, and Enterprise .NET Systems.",
    skills: ["Web Development", ".NET Framework", "C#", "SQL", "OOP", "Database Design"],
  },
  {
    degree: "G.C.E. Advanced Level (Biological Science)",
    institution: "Upananda College, Galle",
    period: "2021 – 2022",
    description:
      "Completed Biological Science stream with distinction results, fostering strong analytical, mathematical, and research methodologies.",
  },
];

