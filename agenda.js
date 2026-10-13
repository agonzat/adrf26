const agendaData = [
  // Day 1 — 13 October 2026
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "08:30 - 09:00",
    track: "Plenary",
    type: "Opening",
    title: "State of the Union for ADR (Opening Ceremony) / Apply AI challenge framing",
    speakers:
      "António Gouveia Santos, Pedro Teixeira, João Claro, Emanuela Girardi, Roberto Viola",
    location: "Nascente 2nd floor (Plenary)"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "09:00 - 10:00",
    track: "Plenary",
    type: "Panel",
    title: "Panel 1: European Renaissance 2.0",
    speakers: "Kristina Knaving, Nicolas Schneider, João Claro",
    location: "Nascente 2nd floor (Plenary)"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "13:15 - 14:00",
    track: "Plenary",
    type: "Plenary",
    title: "Plenary 2: Pooling Capital to Scale",
    speakers: "Davide Rota, John Blankendaal, Reet Pärgmäe, Steve Smith",
    location: "Nascente 2nd floor (Plenary)"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "17:30 - 18:30",
    track: "Plenary",
    type: "Plenary",
    title:
      "Plenary 3: The geopolitics of trust: Strengthening Europe's global position",
    speakers:
      "Jung Hoon Lee, Mallory Durran, Emilia Tantar, Stephen MacDonell",
    location: "Nascente 2nd floor (Plenary)"
  },

  // Day 1 — Porto (European Strategy Track)
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "10:30 - 11:30",
    track: "Porto (European Strategy Track)",
    type: "Workshop",
    title: "GenAI4EU Central Hub",
    speakers: "",
    location: "Porto"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "11:30 - 12:30",
    track: "Porto (European Strategy Track)",
    type: "Workshop",
    title: "Building Europe's Next Technology Advantage",
    speakers: "",
    location: "Porto"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "14:00 - 15:15",
    track: "Porto (European Strategy Track)",
    type: "Workshop",
    title: "Apply AI - GenAI in Robotics and Manufacturing",
    speakers: "",
    location: "Porto"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "15:15 - 16:30",
    track: "Porto (European Strategy Track)",
    type: "Workshop",
    title:
      "Technology Foundations: Robotics and Trustworthy AI (MANiBOT, RoboSAPIENS, EXTRA-BRAIN, AIXPERT)",
    speakers: "",
    location: "Porto"
  },

  // Day 1 — Arrábida
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "10:30 - 11:30",
    track: "Arrábida",
    type: "Workshop",
    title:
      "Beyond Pick-and-Place: Advanced Robotic Manipulation in Dynamic and Unstructured Environments",
    speakers: "",
    location: "Arrábida"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "11:30 - 12:30",
    track: "Arrábida",
    type: "Workshop",
    title:
      "Measuring Europe’s ADR Capabilities: From Sovereignty Policy Actions to Observatory KPIs",
    speakers: "",
    location: "Arrábida"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "14:00 - 15:15",
    track: "Arrábida",
    type: "Workshop",
    title:
      "Data and AI for Circular Industrial Equipment: Re-use, Remanufacturing, Re-build and Upcycling",
    speakers: "",
    location: "Arrábida"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "15:15 - 16:30",
    track: "Arrábida",
    type: "Workshop",
    title:
      "AI for Circular Materials: From Hyperspectral Perception to Autonomous Sorting",
    speakers: "",
    location: "Arrábida"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "16:45 - 18:00",
    track: "Arrábida",
    type: "Workshop",
    title: "Multimodal perception: from mature technologies to industrial deployment",
    speakers: "",
    location: "Arrábida"
  },

  // Day 1 — D. Luis
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "10:30 - 11:30",
    track: "D. Luis",
    type: "Workshop",
    title:
      "European Gateway for Trusted AI in Digital Health: Orchestrating Innovation from Data to Deployment",
    speakers: "",
    location: "D. Luis"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "11:30 - 12:30",
    track: "D. Luis",
    type: "Workshop",
    title: "Beyond the Pilot: How European Robotics Reaches Certified Industrial Deployment",
    speakers: "",
    location: "D. Luis"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "14:00 - 15:15",
    track: "D. Luis",
    type: "Workshop",
    title:
      "Manufacturing-as-a-Service and Standardization Pathways in the EuroMaaS Projects Cluster",
    speakers: "",
    location: "D. Luis"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "15:15 - 16:30",
    track: "D. Luis",
    type: "Workshop",
    title:
      "A European co-design workshop on developing successful humanoid robotics projects for healthcare",
    speakers: "",
    location: "D. Luis"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "16:45 - 18:00",
    track: "D. Luis",
    type: "Workshop",
    title:
      "Digital Twins as the Operational Layer for AI, Data and Robotics in European Industry",
    speakers: "",
    location: "D. Luis"
  },

  // Day 1 — D. Maria
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "10:30 - 11:30",
    track: "D. Maria",
    type: "Workshop",
    title: "AI-Driven HMI Design for CCAM: Methods, Tools, and Human-Centred Validation",
    speakers: "",
    location: "D. Maria"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "11:30 - 12:30",
    track: "D. Maria",
    type: "Workshop",
    title:
      "Data and AI infrastructures to power a sovereign and trustworthy Physical AI in EU Manufacturing and Robotics Ecosystems",
    speakers: "",
    location: "D. Maria"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "14:00 - 15:15",
    track: "D. Maria",
    type: "Workshop",
    title:
      "Human-Robot Interaction in Europe: Building Trustworthy Collaboration from Lab to Deployment",
    speakers: "",
    location: "D. Maria"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "15:15 - 16:30",
    track: "D. Maria",
    type: "Workshop",
    title: "From Task Intentions to Reliable Multi-Robot Work in Human-Centred Environments",
    speakers: "",
    location: "D. Maria"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "16:45 - 18:00",
    track: "D. Maria",
    type: "Workshop",
    title: "From Policy to Action — Europe's Tech Sovereignty Roadmap",
    speakers: "",
    location: "D. Maria"
  },

  // Day 1 — Infante
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "10:30 - 11:30",
    track: "Infante",
    type: "Workshop",
    title:
      "Sovereign Physical AI for Europe's Energy Resilience through Autonomous Robot Inspection and Maintenance",
    speakers: "",
    location: "Infante"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "11:30 - 12:30",
    track: "Infante",
    type: "Workshop",
    title: "AI + Robotics for maintenance at scale: Turning data into actions and operational value",
    speakers: "",
    location: "Infante"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "14:00 - 15:15",
    track: "Infante",
    type: "Workshop",
    title:
      "Futuring AI Skills in the European Union: Exploring Skills Gaps in key strategic industrial domains",
    speakers: "",
    location: "Infante"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "15:15 - 16:30",
    track: "Infante",
    type: "Workshop",
    title:
      "From Lab to Industry: Scaling Highly Autonomous Robots Under Regulatory Uncertainty",
    speakers: "",
    location: "Infante"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "16:45 - 18:00",
    track: "Infante",
    type: "Workshop",
    title:
      "From Cutting Table to Finished Garment: Robotic Automation in European Apparel Manufacturing",
    speakers: "",
    location: "Infante"
  },

  // Day 1 — Exhibition / Pitching
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "10:00 - 10:30",
    track: "Exhibition / Pitching",
    type: "Sponsor session",
    title: "Qualcomm speaking session (Platinum Sponsor)",
    speakers: "Qualcomm",
    location: "Arquivo"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "12:30 - 13:30",
    track: "Exhibition / Pitching",
    type: "Sponsor session",
    title:
      "AMD / Citeve / BDVA speaking session (1x Platinum, 1x Diamond, 1x Gold)",
    speakers: "AMD, Citeve, BDVA",
    location: "Arquivo"
  },
  {
    day: "Tuesday, 13 October 2026",
    date: "2026-10-13",
    time: "16:30 - 16:40",
    track: "Exhibition / Pitching",
    type: "Sponsor session",
    title: "LOBA speaking session (Gold Sponsor)",
    speakers: "LOBA",
    location: "Arquivo"
  },

  // Day 2 — 14 October 2026
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "09:00 - 10:00",
    track: "Plenary",
    type: "Opening / Keynote / Plenary",
    title:
      "Opening Day 2 + Keynote + Plenary 4: ADR in mission-critical environments",
    speakers: "Ricardo Bento, Manuela Veloso, Francisco Marques, Luis Sarmento",
    location: "Nascente 2nd floor (Plenary)"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "13:45 - 14:30",
    track: "Plenary",
    type: "Plenary",
    title: "Plenary 5: Competitive edge: Winning the global scale-up race",
    speakers:
      "Joaquim Sérvulo Rodrigues, Piotr Mieczkowski, Rayan El Idrissi, Bernado Almada-Lobo",
    location: "Nascente 2nd floor (Plenary)"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "17:30 - 18:00",
    track: "Plenary",
    type: "Closing",
    title: "Plenary 6: The Catalyst Manifesto (Closing Fireside)",
    speakers: "Emanuela Girardi, Arlindo Oliveira",
    location: "Nascente 2nd floor (Plenary)"
  },

  // Day 2 — Porto (European Strategy Track)
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "10:00 - 11:15",
    track: "Porto (European Strategy Track)",
    type: "Workshop",
    title:
      "AI in strategic sectors: Manufacturing, Energy, Climate & Environment, Healthcare (DMaaST, COSMIC, TURING, PRIMI)",
    speakers: "",
    location: "Porto"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "11:30 - 12:45",
    track: "Porto (European Strategy Track)",
    type: "Workshop",
    title:
      "AI for impact: Human centricity, Circularity, Sustainability (AI4REALNET, AMALTEA, iBot4CRMs, MERLIN)",
    speakers: "",
    location: "Porto"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "14:30 - 15:45",
    track: "Porto (European Strategy Track)",
    type: "Workshop",
    title:
      "From Projects to Policy – Feedback Session (ADRA, European Commission, DIH Oceanopolis)",
    speakers: "",
    location: "Porto"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "16:15 - 17:30",
    track: "Porto (European Strategy Track)",
    type: "Workshop",
    title: "SRIDA - SUPPLY CHAIN",
    speakers: "",
    location: "Porto"
  },

  // Day 2 — Arrábida
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "10:00 - 11:15",
    track: "Arrábida",
    type: "Workshop",
    title:
      "When Robots Learn to Interact: Foundation Models for Human-Robot Collaboration and Dexterous Manipulation",
    speakers: "",
    location: "Arrábida"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "11:30 - 12:45",
    track: "Arrábida",
    type: "Workshop",
    title: "European Physical AI for Strategic Autonomy in Field Robotics",
    speakers: "",
    location: "Arrábida"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "14:30 - 15:45",
    track: "Arrábida",
    type: "Workshop",
    title:
      "Physical AI, Robotics and Computational Biology as a Compass for Europe Competitiveness",
    speakers: "",
    location: "Arrábida"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "16:15 - 17:30",
    track: "Arrábida",
    type: "Workshop",
    title: "What is the future of science in the world of AI?",
    speakers: "",
    location: "Arrábida"
  },

  // Day 2 — D. Luis
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "10:00 - 11:15",
    track: "D. Luis",
    type: "Workshop",
    title: "Resilient by Design: Securing Europe's Physical AI and Robotics Supply Chain",
    speakers: "",
    location: "D. Luis"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "11:30 - 12:45",
    track: "D. Luis",
    type: "Workshop",
    title: "Embodied AI - Challenges and Success Stories",
    speakers: "",
    location: "D. Luis"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "14:30 - 15:45",
    track: "D. Luis",
    type: "Workshop",
    title:
      "UAVs for Autonomous Logistics in the Factory - Deep Reinforcement Learning, Applications and Challenges",
    speakers: "",
    location: "D. Luis"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "16:15 - 17:30",
    track: "D. Luis",
    type: "Workshop",
    title:
      "Robotics and AI for Inspection of Critical Infrastructures in Extreme Underwater Environments",
    speakers: "",
    location: "D. Luis"
  },

  // Day 2 — D. Maria
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "10:00 - 11:15",
    track: "D. Maria",
    type: "Workshop",
    title: "Designing Ecosystem Governance for ADR: From Governance Gaps to Action",
    speakers: "",
    location: "D. Maria"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "11:30 - 12:45",
    track: "D. Maria",
    type: "Workshop",
    title:
      "Trustworthy and Sovereign Industrial Agentic AI: Digital Twins, Standards and Governance",
    speakers: "",
    location: "D. Maria"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "14:30 - 15:45",
    track: "D. Maria",
    type: "Workshop",
    title:
      "From Industry Needs to Research Priorities: Developing a European Defence Technology Outlook",
    speakers: "",
    location: "D. Maria"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "16:15 - 17:30",
    track: "D. Maria",
    type: "Workshop",
    title: "AI for Freight Transportation: From Predictive Models to Technology Transfer",
    speakers: "",
    location: "D. Maria"
  },

  // Day 2 — Infante
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "10:00 - 11:15",
    track: "Infante",
    type: "Workshop",
    title:
      "From Sustainability Challenges to ADRA Action Lines: Connecting Robotics, AI and Data",
    speakers: "",
    location: "Infante"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "11:30 - 12:45",
    track: "Infante",
    type: "Workshop",
    title:
      "Designing the European Hospital of the Future: A Community Roadmapping Workshop on AI, Data & Robotics for Resilient Healthcare",
    speakers: "",
    location: "Infante"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "14:30 - 15:45",
    track: "Infante",
    type: "Workshop",
    title:
      "AI, Data and Robotics for Construction 5.0: From European Pilots to Industrial Deployment",
    speakers: "",
    location: "Infante"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "16:15 - 17:30",
    track: "Infante",
    type: "Workshop",
    title:
      "Operational Robotics for Quality Control, Inspection, and Assisted Maintenance for Defense",
    speakers: "",
    location: "Infante"
  },

  // Day 2 — Exhibition / Pitching
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "11:15 - 11:25",
    track: "Exhibition / Pitching",
    type: "Sponsor session",
    title: "TNO speaking session (1x Gold Sponsor)",
    speakers: "TNO",
    location: "Arquivo"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "12:45 - 13:45",
    track: "Exhibition / Pitching",
    type: "Sponsor session",
    title:
      "AI on Demand - Deploy AI / IDENER / TUE / PAL Robotics (1x Diamond, 3x Gold)",
    speakers: "AI on Demand, IDENER, TUE, PAL Robotics",
    location: "Arquivo"
  },
  {
    day: "Wednesday, 14 October 2026",
    date: "2026-10-14",
    time: "15:55 - 16:15",
    track: "Exhibition / Pitching",
    type: "Sponsor session",
    title: "AGT Robotics & ADRA speaking session (2x Gold sponsors)",
    speakers: "AGT Robotics, ADRA",
    location: "Arquivo"
  }
];
