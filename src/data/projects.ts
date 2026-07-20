export type ProjectDetail = {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  challenges: string[];
  solutions: string[];
  architecture: string;
  techStack: string[];
  images: string[];
  liveLink?: string;
  liveLinkLabel?: string;
  githubLink?: string;
  gradient: string;
};

export const projectDetails: Record<string, ProjectDetail> = {
  "evodine": {
    id: "evodine",
    title: "EvoDine",
    category: "Flutter Mobile + Web POS",
    description: "Restaurant POS built as a cross-platform Flutter app (Android + iOS) alongside a web client, covering the full service floor from order to receipt.",
    fullDescription: "EvoDine is a restaurant point-of-sale system I built and ship commercially through Evo Solutions. The mobile client is written in Flutter for Android and iOS, and covers the modules a restaurant actually runs on: order creation, a live kitchen and bar movement board, cashier payment processing with receipt printing, order cancellation with an approval flow, and a management dashboard. It talks to a .NET backend and shares its data model with the web client.",
    challenges: [
      "Kitchen and bar staff needed order status to update across devices instantly — polling was too slow and too chatty for a busy service floor.",
      "Cashiers print receipts to Bluetooth thermal printers, which means device pairing, runtime permissions, and byte-level receipt formatting rather than a normal print dialog.",
      "The floor's Wi-Fi is unreliable, so a dropped connection could not be allowed to take the order board down mid-service.",
      "Credentials and payment traffic had to be handled safely against a backend still served over plain HTTP."
    ],
    solutions: [
      "Built a SignalR real-time layer with automatic reconnect that pushes four notification types (new order, added items, food status change, order meta update) to the movement board.",
      "Wrote a receipt builder that composes thermal-printer output, paired with Bluetooth device discovery and Android runtime permission handling.",
      "Made real-time strictly an enhancement: hub failures are swallowed, and the board stays fully usable through load plus manual refresh when the connection is down.",
      "Kept the session in memory only — the password is never persisted — added AES encryption for sensitive payloads, 30-second HTTP timeouts, and normalized error handling behind a single response envelope."
    ],
    architecture: "Flutter (Dart) client organised into config, models, services, screens, and widgets layers, with roughly twenty single-responsibility service classes wrapping the .NET API. A shared HttpService centralises the {code, description, data[]} response envelope, error mapping, and timeouts. Runtime configuration is loaded from a bundled settings file before boot, so the same build can point at different environments. Release builds are configured for the Play Store with R8 minification, resource shrinking, adaptive launcher icons, and keystore-based signing.",
    techStack: ["Flutter", "Dart", "SignalR", "Bluetooth Thermal Printing", "Firebase", "AES Encryption", "REST API", "Android", "iOS"],
    images: [
      "/images/projects/evodine/kitchen.jpg",
      "/images/projects/evodine/cashier.jpg",
      "/images/projects/evodine/order.jpg",
      "/images/projects/evodine/dashboard.jpg",
      "/images/projects/evodine/menu.jpg"
    ],
    liveLink: "https://www.evosolutions.lk/products/evodine",
    liveLinkLabel: "Request a Demo",
    gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 50%, #10b981 100%)"
  },
  "cheap-chaser": {
    id: "cheap-chaser",
    title: "Cheap Chaser",
    category: "Travel Platform",
    description: "A travel platform that simplifies trip planning for tourists visiting Sri Lanka.",
    fullDescription: "Cheap Chaser was born out of a need to consolidate the fragmented travel planning experience in Sri Lanka. The platform serves as a one-stop-shop for tourists, offering everything from itinerary building to real-time budget tracking.",
    challenges: [
      "Integrating multiple booking APIs for accommodations and activities.",
      "Handling real-time budget calculations across different currencies.",
      "Ensuring a responsive experience for travelers on the go."
    ],
    solutions: [
      "Developed a custom middleware to aggregate data from various travel APIs into a unified format.",
      "Implemented a robust client-side state management system for instant budget updates.",
      "Utilized mobile-first design principles with Tailwind CSS for seamless mobile usage."
    ],
    architecture: "The application follows a MERN (MongoDB, Express, React, Node.js) stack architecture. It utilizes a micro-services approach for handling search and booking functionalities separately to ensure high availability.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Framer Motion"],
    images: ["/images/projects/CheapChaser.png"],
    liveLink: "https://cheap-gray.vercel.app/",
    githubLink: "https://github.com/manuja003/travel-management",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)"
  },
  "udara-store": {
    id: "udara-store",
    title: "Udara Store",
    category: "E-commerce Platform",
    description: "Responsive web application for 'Udara Store,' featuring product pages and engaging UX.",
    fullDescription: "Udara Store is a modern e-commerce solution designed for a local retail shop to transition into the digital space. The focus was on creating a high-performance, SEO-friendly storefront with a clean, intuitive UI.",
    challenges: [
      "Optimizing high-resolution product images for fast load times.",
      "Creating a flexible filtering system for a diverse product catalog.",
      "Implementing a secure and user-friendly checkout flow."
    ],
    solutions: [
      "Implemented Next-gen image formats and lazy loading to achieve high Lighthouse scores.",
      "Built a dynamic filtering engine using TypeScript for type-safe product categorization.",
      "Integrated a multi-step checkout process with real-time form validation."
    ],
    architecture: "Built with React and TypeScript, the project leverages a headless CMS approach for product management, ensuring that the store owner can easily update inventory without technical knowledge.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Headless CMS", "Vite"],
    images: ["/images/projects/image.png"],
    liveLink: "https://udarastore.com/",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 50%, #10b981 100%)"
  },
  "event-ticketing": {
    id: "event-ticketing",
    title: "Event Ticketing System",
    category: "Java Full-Stack",
    description: "Full-stack event management solution with multithreaded seat allocation.",
    fullDescription: "This project is a high-concurrency event ticketing system designed to handle thousands of simultaneous booking requests. It demonstrates deep knowledge of backend synchronization and thread safety.",
    challenges: [
      "Preventing double-booking of seats during high-traffic events.",
      "Managing complex multithreaded operations in the Java backend.",
      "Designing a CLI that provides real-time status updates of the ticketing process."
    ],
    solutions: [
      "Implemented synchronized blocks and reentrant locks to ensure thread-safe seat allocation.",
      "Utilized a Producer-Consumer design pattern for handling ticket queues efficiently.",
      "Developed a custom logging system to track all concurrent transactions for audit purposes."
    ],
    architecture: "The core engine is built in Java using Object-Oriented principles. It features a separate ticketing pool management service and a reporting module for data persistence via CSV.",
    techStack: ["Java", "Multithreading", "OOP", "CSV Persistence", "JUnit"],
    images: ["/images/event.jpg"],
    githubLink: "https://github.com/manuja003/event-ticketing",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #fb923c 100%)",
    // hasCaseStudy: true,
  },
  "galle-lanka-travels": {
    id: "galle-lanka-travels",
    title: "Galle Lanka Travels",
    category: "Travel & Tours",
    description: "Trusted travel and vehicle hire service in Sri Lanka offering customizable tours.",
    fullDescription: "Galle Lanka Travels is a comprehensive travel management solution for a local tourism agency. The platform allows users to browse curated tours, book vehicles, and customize their Sri Lankan adventure.",
    challenges: [
      "Creating an intuitive tour customization engine for non-technical users.",
      "Managing complex booking schedules for a large fleet of vehicles.",
      "Ensuring the site remains performant with high-resolution travel imagery."
    ],
    solutions: [
      "Built a step-by-step wizard for tour customization using React state management.",
      "Implemented a centralized booking calendar with automated conflict detection.",
      "Utilized Cloudinary for optimized image delivery and lazy loading for gallery components."
    ],
    architecture: "A client-heavy React application with a serverless backend for handling inquiries and bookings via Firebase. It emphasizes visual storytelling through high-performance image galleries.",
    techStack: ["React", "Tailwind CSS", "Firebase", "Cloudinary", "Framer Motion"],
    images: ["/images/projects/GalleLankaTravels.png"],
    liveLink: "https://galle-lanka-explore.vercel.app",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)"
  },
  "quality-education": {
    id: "quality-education",
    title: "Quality Education",
    category: "UN SDG Project",
    description: "A web application inspired by UN SDG 'Quality Education,' featuring interactive galleries.",
    fullDescription: "This project was developed to raise awareness for the United Nations Sustainable Development Goal 4: Quality Education. It serves as an educational portal with interactive content and data visualization.",
    challenges: [
      "Presenting large amounts of educational data without overwhelming the user.",
      "Ensuring maximum accessibility (WCAG) for diverse student populations.",
      "Creating an engaging 'Sitemap' experience that simplifies navigation."
    ],
    solutions: [
      "Designed a clean, content-first layout with clear typography and spacing.",
      "Implemented semantic HTML5 and ARIA labels to ensure screen-reader compatibility.",
      "Built an interactive visual sitemap using SVG and CSS transitions."
    ],
    architecture: "A lightweight, high-performance static site built with HTML, CSS, and Vanilla JavaScript to ensure zero-lag experiences on even the lowest-bandwidth connections.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AOS Library"],
    images: ["/images/projects/QualityEdu.png"],
    liveLink: "https://education-sdg-demo.netlify.app",
    githubLink: "https://github.com/manuja003/education-sdg",
    gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #6366f1 100%)"
  },
  "grading-visualizer": {
    id: "grading-visualizer",
    title: "Grading Visualizer",
    category: "Python Data Analysis",
    description: "Dynamic grading analysis system transforming academic data into interactive histograms.",
    fullDescription: "The University Grading Visualizer is a Python-based tool designed for academic administrators to analyze student performance trends across various faculties and modules.",
    challenges: [
      "Parsing diverse academic data formats (CSVs, raw text) into a unified structure.",
      "Developing a custom graphics engine without high-level libraries like Matplotlib.",
      "Handling edge cases in data like missing grades or invalid faculty codes."
    ],
    solutions: [
      "Developed a robust data-cleaning pipeline using Python's core file handling capabilities.",
      "Built a pixel-perfect histogram generator using the 'graphics.py' module.",
      "Implemented a comprehensive error-logging system for data validation."
    ],
    architecture: "A modular Python application following the MVC (Model-View-Controller) pattern, ensuring a clean separation between data parsing and visual rendering.",
    techStack: ["Python", "Graphics.py", "Data Structures", "CSV Parsing"],
    images: ["/images/grade.jpg"],
    githubLink: "https://github.com/manuja003/university-grading",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)"
  },
  "plane-management": {
    id: "plane-management",
    title: "Plane Management",
    category: "Java CLI",
    description: "Aviation operations system using 2D arrays for seat mapping and scheduling.",
    fullDescription: "A sophisticated command-line interface (CLI) for airline staff to manage seat allocations, ticket cancellations, and flight scheduling in real-time.",
    challenges: [
      "Efficiently managing 2D array coordinates for complex plane seating charts.",
      "Implementing file persistence (CSV) that updates instantly on every transaction.",
      "Designing a user-friendly CLI that minimizes input errors for busy airline staff."
    ],
    solutions: [
      "Optimized array traversal algorithms for rapid seat lookup and allocation.",
      "Developed a transactional file writer that ensures data integrity during updates.",
      "Integrated robust input validation and helper menus for each administrative task."
    ],
    architecture: "A structured Java application utilizing Object-Oriented principles (Encapsulation, Inheritance) to manage flight and passenger data efficiently.",
    techStack: ["Java", "2D Arrays", "File I/O", "OOP"],
    images: ["/images/flight.jpg"],
    githubLink: "https://github.com/manuja003/plane-management",
    gradient: "linear-gradient(135deg, #2dd4bf 0%, #10b981 50%, #3b82f6 100%)"
  }
};
