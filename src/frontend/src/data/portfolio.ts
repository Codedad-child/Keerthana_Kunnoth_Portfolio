export const SKILLS = [
  {
    id: "mes",
    title: "MES Platforms",
    icon: "⚙️",
    items: ["Opera MES", "Sky MES", "Aveva MES", "HydraX MES (MPDV)"],
    description:
      "End-to-end MES implementation across semiconductor, solar, pipe, paper, and pump manufacturing — from requirement gathering to post-deployment support.",
  },
  {
    id: "erp",
    title: "SAP / ERP Integration",
    icon: "🔗",
    items: [
      "SSIS",
      "Direct Database Integration",
      "File-Based Interfaces",
      "Node-RED",
    ],
    description:
      "Two-way MES–ERP integration using SSIS, direct DB links, file-based interfaces, and Node-RED CRUD APIs for synchronized work orders and material transactions.",
  },
  {
    id: "comm-tools",
    title: "Communication Tools",
    icon: "🛰️",
    items: [
      "KepServerEX",
      "Omni Server",
      "Emerson Connext",
      "ModScan",
      "Matrikon OPC",
      "RSLinx Classic",
    ],
    description:
      "OPC server configuration and diagnostic tools for bridging PLC/device data into SCADA and MES layers.",
  },
  {
    id: "protocols",
    title: "Communication Protocols",
    icon: "📡",
    items: ["OPC UA", "OPC DA", "Modbus TCP/IP"],
    description:
      "Real-time data acquisition from PLCs, sensors, and field devices to SCADA and MES platforms.",
  },
  {
    id: "reporting",
    title: "Reporting Tools",
    icon: "📊",
    items: ["DevExpress", "Telerik Reporting", "Crystal Reports"],
    description:
      "Automated dashboards and production KPI reports for operational and executive visibility.",
  },
  {
    id: "db",
    title: "Databases",
    icon: "🗄️",
    items: ["Microsoft SQL Server", "PostgreSQL", "T-SQL / Stored Procs"],
    description:
      "Database design, ETL pipelines, and automated production reporting with SQL stored procedures.",
  },
  {
    id: "dev",
    title: "Programming & Dev",
    icon: "💻",
    items: ["SQL", "JavaScript", "HTML & CSS", "Ladder Logic"],
    description:
      "Custom web-based shopfloor dashboards, MES modules, and PLC ladder logic programming.",
  },
  {
    id: "hw",
    title: "Hardware & Integration",
    icon: "🔧",
    items: [
      "Physical Device Integration",
      "MES Software Configuration",
      "Electrical Maintenance",
      "CNC / Robot Operation",
      "Post-Deployment Support",
    ],
    description:
      "Physical integration of industrial devices, on-site installation and configuration of MES software, and ongoing performance monitoring.",
  },
  {
    id: "scada",
    title: "SCADA",
    icon: "🖥️",
    items: ["Emerson Movicon"],
    description:
      "SCADA system installation, configuration, screen design, reporting, and real-time visualization for industrial processes.",
  },
  {
    id: "bms",
    title: "BMS — Schneider EcoStruxure",
    icon: "🏢",
    items: [
      "Graphics & Visualization",
      "Equipment & System Graphics",
      "Floorplan Visualization",
      "Summary & Alarm Screens",
      "Backup & Replication",
      "Multi-Site Management",
      "Reporting Layouts",
    ],
    description:
      "BMS architecture design, HVAC/VAV/AHU graphics, multi-level floorplans, and multi-site management in Schneider EcoStruxure.",
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    icon: "🔒",
    items: ["Waterfall Cybersecurity"],
    description:
      "Industrial cybersecurity architecture for OT environments, unidirectional security gateways.",
  },
  {
    id: "plc-tools",
    title: "PLC Programming Tools",
    icon: "🔌",
    items: ["Siemens TIA Portal", "RSLogix 500", "KV Studio"],
    description:
      "PLC programming, configuration, and diagnostics using industry-leading tools for Siemens, Allen-Bradley, and Keyence platforms.",
  },
];

export const PROJECTS = [
  {
    id: "p0",
    title: "MES — Semiconductor Manufacturing (Infineon Technologies, Germany)",
    subtitle: "HydraX MES (MPDV) · Capgemini · Global",
    gradient: "from-violet-900/40 to-purple-900/20",
    tags: ["HydraX MES", "MPDV", "Semiconductor", "URS", "FRS"],
    technologies: [
      { category: "MES Platform", items: "HydraX MES (MPDV)" },
      { category: "Client", items: "Infineon Technologies, Germany" },
      { category: "Engagement", items: "Capgemini, Pune (Hybrid)" },
      {
        category: "Modules Configured",
        items:
          "Order Management, MIP Administration, Shopfloor Pages, Resource Management, Advanced Planning",
      },
      {
        category: "Documentation",
        items:
          "User Requirement Specifications (URS), Functional Requirement Specifications (FRS)",
      },
      {
        category: "Focus Areas",
        items:
          "Quality, Traceability, Data Accuracy, Semiconductor Process Compliance",
      },
    ],
    challenge:
      "Infineon Technologies, a global semiconductor leader, required a robust MES implementation to support their highly regulated and precision-driven semiconductor manufacturing processes. The key challenges included configuring a complex MES platform (MPDV HydraX) to meet stringent quality and traceability requirements, aligning system functionality with client-specific process flows, and ensuring that all documentation — including URS and FRS — accurately captured operational and compliance needs across a globally distributed team.",
    solution:
      "Working as part of the Capgemini MES consulting team, contributed to the end-to-end implementation and configuration of the MPDV HydraX MES platform. Participated in requirement gathering sessions and prepared detailed URS and FRS documentation aligned with client process requirements. Handled installation and deployment of HydraX MES in client environments and configured core modules including Order Management, MIP Administration, Shopfloor Pages, Resource Management, and Advanced Planning. Collaborated with cross-functional stakeholders to ensure system configuration matched the semiconductor production workflow and met quality and traceability standards.",
    result:
      "Successfully progressed through key implementation milestones, with MES modules configured and validated against documented requirements. Contributed to building a traceable, data-accurate manufacturing environment supporting Infineon's semiconductor production goals. Gained hands-on expertise in semiconductor MES processes, compliance documentation, and HydraX platform capabilities — strengthening the foundation for further rollout phases.",
    accentColor: "#8B5CF6",
  },
  {
    id: "p1",
    title: "MES — Solar Panel Production (Swelect Energy Systems Ltd.)",
    subtitle: "Opera MES / Sky MES · Chennai",
    gradient: "from-yellow-900/40 to-orange-900/20",
    tags: ["Opera MES", "Sky MES", "OPC UA", "SQL", "OEE"],
    technologies: [
      { category: "MES Platforms", items: "Opera MES, Sky MES" },
      { category: "Database", items: "Microsoft SQL Server" },
      {
        category: "Communication Protocols",
        items: "OPC UA, OPC DA, Modbus TCP/IP",
      },
      { category: "Communication Tools", items: "OmniServer, KepServerEX" },
      {
        category: "Automation & Integration",
        items: "PLC Integration (Siemens / Rockwell), Barcode Scanners",
      },
      {
        category: "Reporting Tools",
        items: "DevExpress, Telerik Reports, Crystal Reports",
      },
      {
        category: "Programming & Scripting",
        items: "SQL (Stored Procedures, Triggers), Basic JavaScript",
      },
      {
        category: "Monitoring & Analytics",
        items: "OEE (Overall Equipment Effectiveness) Dashboards",
      },
    ],
    challenge:
      "Swelect Energy Systems Ltd. in Chennai required a complete MES solution to digitize and streamline their solar panel manufacturing process. The key challenges included lack of real-time production visibility, limited traceability of materials, manual quality tracking, and absence of an effective system to measure Overall Equipment Effectiveness (OEE) across multiple production stages.",
    solution:
      "Designed and implemented a comprehensive MES solution covering end-to-end production workflows. Developed modules for production tracking, in-process and final quality checks, and barcode-based material traceability to ensure complete visibility of each panel. Integrated shopfloor equipment such as PLCs, scanners, and machines using OPC UA and Modbus TCP/IP for real-time data acquisition. Built SQL-based procedures and workflows to handle production logic and data processing. Implemented automated reporting and dashboards using DevExpress and Telerik to provide live production insights. Additionally, configured OEE dashboards to monitor availability, performance, and quality metrics across the production line.",
    result:
      "Achieved real-time visibility across the shopfloor, enabling better monitoring and control of production processes. Improved traceability and quality compliance through digital tracking of materials and processes. OEE dashboards enabled data-driven decision-making, helping identify bottlenecks, reduce machine downtime, and improve overall production efficiency and throughput.",
    accentColor: "#F59E0B",
  },
  {
    id: "p2",
    title: "MES — Pipe Manufacturing (Polyhose Pvt. Ltd.)",
    subtitle: "Sky MES · Chennai",
    gradient: "from-teal-900/40 to-cyan-900/20",
    tags: ["Sky MES", "OPC UA", "PostgreSQL", "OEE"],
    technologies: [
      { category: "MES Platforms", items: "Sky MES" },
      { category: "Database", items: "PostgreSQL" },
      { category: "Communication Protocols", items: "OPC UA" },
      { category: "Communication Tools", items: "OmniServer" },
      {
        category: "Automation & Integration",
        items: "PLC Integration (Siemens / Rockwell), Barcode Scanners",
      },
      { category: "Reporting Tools", items: "Telerik Reports" },
      {
        category: "Programming & Scripting",
        items: "SQL (Stored Procedures, Triggers)",
      },
      {
        category: "Monitoring & Analytics",
        items: "Production Tracking, OEE Monitoring",
      },
    ],
    challenge:
      "Polyhose Pvt. Ltd. required an MES solution to digitize their pipe manufacturing process and improve visibility across multiple production stages. The key challenges included lack of real-time production tracking, difficulty in tracking raw materials and finished goods, limited traceability, and manual reporting processes that affected decision-making and efficiency.",
    solution:
      "Implemented a complete MES solution to manage and monitor the end-to-end pipe manufacturing lifecycle. Designed workflows for production tracking, material consumption, and finished goods handling within the MES system. Integrated shopfloor machines and PLCs using OPC UA and Modbus TCP/IP to capture real-time production data. Enabled barcode-based tracking to ensure traceability of materials and products throughout the process. Developed SQL-based logic and procedures to automate production transactions and validations. Built automated reports and dashboards using DevExpress and Crystal Reports to provide insights into production performance and operational status.",
    result:
      "Achieved real-time tracking of production activities and improved visibility across the manufacturing process. Enhanced material traceability and reduced manual errors through barcode-based tracking. Automated reporting reduced dependency on manual data entry and improved accuracy. Overall efficiency improved through better monitoring, faster decision-making, and streamlined production operations.",
    accentColor: "#19C6C3",
  },
  {
    id: "p3",
    title: "MES — Paper Production Line (WESCO, Dandeli)",
    subtitle: "Opera MES · West Coast Paper Mills",
    gradient: "from-emerald-900/40 to-green-900/20",
    tags: ["Opera MES", "OPC DA", "SQL", "SCADA", "OEE"],
    technologies: [
      { category: "MES Platform", items: "Opera MES" },
      { category: "Database", items: "Microsoft SQL Server" },
      { category: "Communication Protocols", items: "OPC DA" },
      { category: "Communication Tools", items: "OmniServer, Matrikon OPC" },
      {
        category: "Automation & Integration",
        items: "PLC Integration (Siemens PLC), Shopfloor Devices",
      },
      { category: "Reporting Tools", items: "Crystal Reports, DevExpress" },
      {
        category: "Programming & Scripting",
        items: "SQL (Stored Procedures, Triggers)",
      },
      {
        category: "Monitoring & Analytics",
        items: "Production Tracking, OEE Monitoring",
      },
      { category: "SCADA", items: "Movicon" },
    ],
    challenge:
      "WESCO (West Coast Paper Mills) required an MES solution to digitize and monitor their paper production line. The key challenges included lack of real-time visibility into production processes, difficulty in tracking production output across different stages, limited monitoring of machine performance, and dependency on manual reporting systems.",
    solution:
      "Implemented an MES solution using Opera MES to track and manage the complete paper production workflow. Developed SQL-based procedures and workflows to handle production transactions, data validation, and process logic. Integrated PLCs and shopfloor equipment using OPC UA/DA to capture real-time machine and production data. Enabled production tracking across multiple stages to monitor output and process flow. Developed automated reports and dashboards using Crystal Reports and DevExpress to provide real-time insights into production status. Configured monitoring systems to capture machine performance and downtime data, enabling OEE calculation and analysis.",
    result:
      "Achieved real-time visibility of the paper production line, improving monitoring and control of operations. Reduced dependency on manual reporting through automated report generation. Enabled better tracking of production output and machine performance, helping identify inefficiencies and downtime. Improved overall operational efficiency and decision-making through data-driven insights.",
    accentColor: "#22C55E",
  },
  {
    id: "p4",
    title: "MES — Water Pump Assembly Line (Devendra Autocom Pvt. Ltd.)",
    subtitle: "SkyMES · Chennai",
    gradient: "from-blue-900/40 to-sky-900/20",
    tags: ["SkyMES", "OPC UA", "PostgreSQL", "Node-RED", "OEE"],
    technologies: [
      { category: "MES Platform", items: "SkyMES" },
      { category: "Database", items: "PostgreSQL" },
      { category: "Communication Protocols", items: "OPC UA" },
      { category: "Communication Tools", items: "OmniServer, Node-Red" },
      { category: "Automation & Integration", items: "Barcode Scanners" },
      { category: "Reporting Tools", items: "Crystal Reports, DevExpress" },
      {
        category: "Programming & Scripting",
        items: "SQL (Stored Procedures, Triggers)",
      },
      {
        category: "Monitoring & Analytics",
        items: "Production Tracking, OEE Monitoring",
      },
    ],
    challenge:
      "Devendra Autocom Pvt. Ltd. required an MES solution to digitize and streamline their water pump assembly line. The key challenges included lack of real-time tracking of assembly processes, limited traceability of components, manual data entry, and difficulty in monitoring production efficiency and line performance.",
    solution:
      "Implemented an MES solution using SkyMES to manage and monitor the complete assembly workflow. Designed workflows for tracking each stage of the assembly process, ensuring proper sequencing and validation of operations. Integrated PLCs and shopfloor devices using OPC UA/DA to capture real-time production data. Enabled barcode-based tracking to maintain traceability of components and finished products across the assembly line. Developed SQL-based procedures to handle process logic, validations, and production transactions. Built automated reports and dashboards using Crystal Reports and DevExpress to provide real-time visibility into production status and performance.",
    result:
      "Achieved real-time tracking of the assembly line, improving process visibility and control. Enhanced traceability of components, reducing errors and improving product quality. Automated reporting reduced manual effort and improved data accuracy. Improved monitoring of production performance enabled better decision-making, resulting in increased efficiency and smoother assembly operations.",
    accentColor: "#0EA5E9",
  },
  {
    id: "p5",
    title: "Mt. Sinai Hospital — BMS Upgrade",
    subtitle: "Continuum to Schneider EcoStruxure Migration · New York",
    gradient: "from-indigo-900/40 to-violet-900/20",
    tags: ["Schneider EcoStruxure", "BMS", "HVAC", "Multi-Site"],
    technologies: [
      { category: "BMS Platform", items: "Schneider EcoStruxure" },
      { category: "Systems", items: "HVAC, VAV, AHU, Exhaust Fans" },
      {
        category: "Scope",
        items: "Multi-floor, Multi-site, Alarm Screens, Floorplan Graphics",
      },
    ],
    challenge:
      "Mt. Sinai Hospital in New York required a full BMS upgrade from legacy Continuum to Schneider EcoStruxure across complex multi-floor hospital environments with critical uptime requirements.",
    solution:
      "Designed and executed the full migration including equipment graphics, multi-level floorplans (HVAC, VAV, AHU, exhaust fans), alarm screens, navigation links, and QC verification. Managed backup and replication to ensure consistency across all controllers.",
    result:
      "Successful cutover with zero downtime to critical hospital systems. All graphics, bindings, and alarm screens validated and signed off by the client engineering team.",
    accentColor: "#6366F1",
  },
];

export const EXPERIENCE = [
  {
    id: "e0",
    company: "Capgemini",
    role: "MES Consultant",
    period: "Nov 2025 – Present",
    location: "Pune, India (Hybrid)",
    bullets: [
      "Working as part of the MES consulting team for a global semiconductor project (Infineon Technologies, Germany).",
      "Involved in end-to-end implementation and configuration of the MPDV HydraX MES platform.",
      "Prepared and supported documentation including User Requirement Specifications (URS) and Functional Requirement Specifications (FRS).",
      "Handled installation and deployment of HydraX MES software in client environments.",
      "Configured key MES modules: Order Management, MIP Administration, Shopfloor Pages, Resource Management, and Advanced Planning.",
      "Gaining experience in semiconductor manufacturing processes with focus on quality, traceability, and data accuracy.",
    ],
  },
  {
    id: "e1",
    company: "Protocol Automation Technologies Pvt. Ltd.",
    role: "Team Lead — MES",
    period: "Aug 2022 – Present",
    location: "Bangalore, India (Hybrid)",
    bullets: [
      "Lead engineer for complete end-to-end MES implementations across solar, pipe, paper, and pump manufacturing sectors.",
      "Installed and configured SQL Server, PostgreSQL, MES applications, and communication tools on production servers.",
      "Established OPC UA/DA, Modbus TCP/IP communication bridges integrating MES with PLCs, scanners, and RFID systems.",
      "Designed MES modules for production tracking, quality checks, inventory, barcode-based traceability, OEE dashboards, and planning & scheduling.",
      "Integrated MES with ERP/SAP using Node-RED CRUD APIs, SSIS, and direct database integration.",
      "Built custom takt dashboards (JavaScript, HTML, CSS, SQL) showing real-time cycle times, shift performance, and planned vs actual output.",
      "Implemented alarms and notification systems (screen pop-ups, email, WhatsApp) for critical production alerts.",
      "Worked on Movicon SCADA for screen design, reporting, and real-time visualization.",
      "Designed monitoring screens for Schneider BMS including ventilation, sensors, and utility layouts.",
    ],
  },
  {
    id: "e2",
    company: "BFG International",
    role: "Mechatronics Technician",
    period: "Jul 2017 – Jun 2019",
    location: "Bahrain (Onsite)",
    bullets: [
      "Maintained and repaired CNC machines (Bellotti, FlexiCAM) and KUKA robots.",
      "Performed daily electrical maintenance tasks and operated CNC machines and robotic systems.",
      "Performed preventive and breakdown maintenance on air compressors, vacuum pumps, overhead cranes, motors, chillers, and AC units.",
      "Worked with 3-phase power supply and electrical distribution.",
    ],
  },
  {
    id: "e3",
    company: "Mektronik Solutions Pvt. Ltd.",
    role: "Jr. Electrical Engineer",
    period: "May 2016 – Jun 2017",
    location: "Bangalore, India (Hybrid)",
    bullets: [
      "Carried out electrical wiring and panel assembly for sensors, PLCs, and actuators.",
      "Programmed PLCs for automating custom machines and production lines.",
      "Troubleshot and maintained electrical systems and automated equipment.",
      "Created and updated documentation such as wiring diagrams and maintenance logs.",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    id: "c1",
    title: "AVEVA™ MES — Operations eLearning Curriculum",
    issuer: "AVEVA",
    year: "2024",
    icon: "🏆",
    description:
      "Comprehensive eLearning curriculum covering AVEVA Manufacturing Execution System operations and configuration.",
    pdfUrl:
      "/assets/uploads/adarsh-p-aveva-mes-certificate-019d3b29-2517-7712-a0c7-8e4209b2b78f-1.pdf",
  },
  {
    id: "c2",
    title: "AVEVA™ Work Tasks: Exploring Work Tasks Features",
    issuer: "AVEVA",
    year: "2024",
    icon: "⚙️",
    description:
      "Certification in AVEVA Work Tasks module, covering work order management and task execution features.",
    pdfUrl:
      "/assets/uploads/adarsh-p-aveva-work_tasks-certificate-019d3b29-2517-778d-8af8-f7ad11033b8a-6.pdf",
  },
  {
    id: "c3",
    title: "Waterfall Cyber Security Sale Certificate",
    issuer: "Waterfall Security Solutions",
    year: "2023",
    icon: "🔒",
    description:
      "Certified in Waterfall unidirectional security gateway solutions for OT/ICS environments.",
    pdfUrl:
      "/assets/uploads/adarsh_p_cyber_security_sale-019d3b29-2530-736d-9786-fc08acaf3af1-4.pdf",
  },
  {
    id: "c4",
    title: "Waterfall Cyber Security Pre-Sale Certificate",
    issuer: "Waterfall Security Solutions",
    year: "2023",
    icon: "🛡️",
    description:
      "Pre-sales certification in Waterfall industrial cybersecurity architecture and product portfolio.",
    pdfUrl:
      "/assets/uploads/adarsh_pcyber_security_pre_sale-019d3b29-2573-7361-babb-a3cd88566962-3.pdf",
  },
  {
    id: "c5",
    title: "SQL Server Stored Procedures",
    issuer: "Online Certification",
    year: "2023",
    icon: "🗄️",
    description:
      "Certification covering SQL Server stored procedures, triggers, and advanced database programming.",
    pdfUrl:
      "/assets/uploads/certificate_for_sql_server_procedures-019d3b29-2521-7038-8b8e-c87622364323-2.pdf",
  },
  {
    id: "c6",
    title: "JavaScript Development Course",
    issuer: "Online Certification",
    year: "2023",
    icon: "💻",
    description:
      "Certification in JavaScript programming, covering core concepts and practical web development applications.",
    pdfUrl:
      "/assets/uploads/js_course-019d3b29-2573-75f0-a9e4-85e662818dab-5.pdf",
  },
  {
    id: "c7",
    title: "Node-RED Fundamentals",
    issuer: "Online Certification",
    year: "2023",
    icon: "🔗",
    description:
      "Certification in Node-RED flow-based programming for industrial IoT and MES–ERP integration use cases.",
    pdfUrl:
      "/assets/uploads/certificate-node-red-fundamentals-678e616a37ba03daa406638f-019d3b29-26d0-7278-9f68-c0f709f6ae94-7.pdf",
  },
];

export const BLOG_PLACEHOLDERS = [
  {
    slug: "mes-team-lead-lessons",
    title: "Leading MES Implementations: Key Lessons from the Shop Floor",
    summary:
      "Practical lessons from leading end-to-end MES rollouts across solar, pipe, paper, and pump manufacturing — from requirement gathering to post-deployment support.",
    tags: ["MES", "Team Leadership", "Manufacturing"],
    publishedAt: BigInt(Date.now()) * BigInt(1_000_000),
    author: "Adarsh P",
    content: "",
  },
  {
    slug: "opc-ua-mes-integration",
    title: "OPC UA as the Backbone of Modern MES Integration",
    summary:
      "How OPC UA's secure, platform-agnostic architecture enables true connectivity between PLCs, SCADA, and MES layers in modern manufacturing environments.",
    tags: ["OPC UA", "MES", "Industry 4.0"],
    publishedAt: BigInt(Date.now() - 7 * 86400 * 1000) * BigInt(1_000_000),
    author: "Adarsh P",
    content: "",
  },
  {
    slug: "mes-erp-integration-approaches",
    title: "MES–ERP Integration: SSIS vs Node-RED vs Direct Database",
    summary:
      "A practical comparison of integration approaches for synchronising work orders and material transactions between MES and SAP/ERP systems.",
    tags: ["MES", "ERP", "SAP", "Node-RED"],
    publishedAt: BigInt(Date.now() - 14 * 86400 * 1000) * BigInt(1_000_000),
    author: "Adarsh P",
    content: "",
  },
];
