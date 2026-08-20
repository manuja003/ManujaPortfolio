# Manuja Pinsara Lankanath

**Software Engineer — Mobile (Flutter) & Full-Stack Web**
Colombo, Sri Lanka

| | |
|---|---|
| **Email** | manujalankanath@gmail.com |
| **Phone / WhatsApp** | +94 74 010 7900 |
| **Location** | Colombo, Sri Lanka (open to remote / hybrid) |
| **Portfolio** | https://manuja-portfolio.web.app/ |
| **LinkedIn** | https://www.linkedin.com/in/manuja-pinsara-lankanath-559a22294/ |
| **GitHub** | https://github.com/manuja003 |
| **Instagram** | https://www.instagram.com/_manuja_pinsara_/ |

---

## Professional Summary

Software Engineering undergraduate at the Informatics Institute of Technology (IIT) Sri Lanka, affiliated with the University of Westminster, with a completed year-long industry internship and current commercial product experience.

I build cross-platform mobile applications with Flutter and ship the full-stack web platforms behind them. My work spans the complete product lifecycle — architecture and API design, real-time communication, device hardware integration, automated testing, release engineering, and end-user documentation. I have delivered production software in two demanding domains: enterprise core banking (Angular micro-frontends over ASP.NET Core) and commercial hospitality point-of-sale (Flutter + .NET + SignalR).

I gravitate toward the messy parts of engineering — unreliable networks, Bluetooth and device hardware, concurrency, and the failure modes that only surface once real users are on the system.

### Headline Strengths

- **Cross-platform mobile** — Flutter/Dart for Android and iOS, from architecture to signed Play Store release.
- **Real-time systems** — SignalR hubs with automatic reconnect and graceful degradation under unreliable connectivity.
- **Hardware integration** — Bluetooth thermal receipt printing, device discovery, and Android runtime permission handling.
- **Enterprise front-end** — Angular 19 micro-frontends on Native Federation within a large multi-module banking platform.
- **Full-stack breadth** — React/TypeScript, Node.js, ASP.NET Core, Spring Boot, SQL Server, PostgreSQL, MongoDB, Firebase.
- **Quality engineering** — Vitest, Playwright, Flutter Test, Karma/Jasmine, JUnit; documentation and release process ownership.

---

## Professional Experience

### Software Engineer — Mobile & Web
**TagTeam Engineering** · Sri Lanka · *2025 – Present*

Building the **EvoSolutions** commercial product suite: **EvoDine** (restaurant management), **EvoInn** (hospitality), and **EvoStock** (inventory).

- Shipped **EvoDine v1.0 in April 2026** — a Flutter application for Android and iOS covering order creation, a live kitchen and bar movement board, cashier payment processing, order cancellation with an approval workflow, and a management dashboard.
- Implemented a **SignalR real-time layer with automatic reconnect**, pushing four notification types (new order, added items, food status change, order metadata update) to the kitchen movement board — replacing polling that was too slow and too chatty for a busy service floor.
- Built **Bluetooth thermal receipt printing** end to end: device discovery, pairing, Android runtime permission handling, and a byte-level receipt builder composing printer output directly.
- Designed real-time as a strict *enhancement*, not a dependency — hub failures are swallowed and the board remains fully usable via load plus manual refresh, so unreliable venue Wi-Fi never takes the floor down mid-service.
- Hardened the security posture against a backend served over plain HTTP: **in-memory-only sessions** (the password is never persisted), **AES encryption** for sensitive payloads, 30-second HTTP timeouts, and normalized error handling behind a single response envelope.
- Architected the client into config / models / services / screens / widgets layers with roughly **twenty single-responsibility service classes** wrapping the .NET API, and a shared `HttpService` centralising the `{code, description, data[]}` envelope, error mapping, and timeouts.
- Introduced **runtime configuration loading** from a bundled settings file before boot, so a single build can target multiple environments.
- Owned **release engineering and Play Store setup** — R8 minification, resource shrinking, adaptive launcher icons, and keystore-based signing.
- Delivered the accompanying **React + TypeScript web platform and product marketing site**, plus **automated testing with Vitest and Playwright** and full end-user documentation.

**Stack:** Flutter, Dart, SignalR, .NET, React, TypeScript, Firebase, AES, Vitest, Playwright, Android, iOS

---

### Software Engineer Intern
**Scienter Technologies (Pvt) Ltd** · Colombo, Sri Lanka · *June 2025 – July 2026*

Year-long industry placement on **eFinancials**, Scienter's decentralised core banking system for banks and financial institutions, spanning **17 modules** across lending, recovery, risk, and compliance.

- Built the **Business Service Partner (BSP) modules end to end**, delivered as **Angular 19 micro-frontends on Native Federation** backed by a layered **ASP.NET Core Web API over SQL Server**.
- Delivered **BSP creation and save** workflows and the **BSP 360 view**, including relationship network visualisation.
- Implemented **advanced search** across partner records.
- Built **Credit Risk Rating and profiling workflows** for compliance assessment.
- Developed **AML (Anti-Money Laundering) sanction document processing**.
- Worked within an enterprise Agile delivery team on a regulated, multi-module financial platform.

**Stack:** Angular 19, TypeScript, RxJS, PrimeNG, Native Federation micro-frontends, ASP.NET Core, C#, SQL Server, Karma/Jasmine

---

### Full Stack Developer (Freelance)
**Self-employed** · Remote · *2023 – Present*

Delivering end-to-end web applications for commercial clients including **Udara Store** and **Galle Lanka Travels**.

- Full ownership from responsive UI and database design through API integration to production deployment.
- Built with React, TypeScript, Node.js, Tailwind CSS, and Firebase.
- Handled client communication, requirements gathering, and post-launch maintenance directly.

---

## Education

### BEng (Hons) Software Engineering
**Informatics Institute of Technology (IIT) Sri Lanka** — awarded by the **University of Westminster, UK**
*2023 – Present*

Core focus: Object-Oriented Programming, Database Systems, Web Development, Algorithms and Data Structures, Software Engineering practice.

### GCE Advanced Level — Commerce Stream
**Mahinda College**, Galle, Sri Lanka · *2022*

Accounting (B) · ICT (C) · Business Studies (C)

### GCE Ordinary Level
**Mahinda College**, Galle, Sri Lanka · *2019*

High grades in Mathematics, ICT, and Drama.

---

## Technical Skills

**Mobile**
Flutter · Dart · Android · iOS · Material Design · Google Play Store release & signing · Bluetooth peripheral integration

**Languages**
Dart · Java · Python · TypeScript · JavaScript · C++ · C# · SQL

**Front-End**
React · Angular (v19) · RxJS · PrimeNG · Tailwind CSS · Framer Motion · Shadcn UI · Micro-frontends (Native Federation) · Responsive Design · HTML5 / CSS3 · Bootstrap

**Back-End & Data**
Node.js · Express · ASP.NET Core · Spring Boot · Firebase / Firestore · MongoDB · PostgreSQL · SQL Server · REST API design · SignalR / real-time communication · AES encryption

**Testing & Tooling**
Flutter Test · Vitest · Playwright · Karma / Jasmine · JUnit · Git / GitHub · Vite · Docker · Postman · CI/CD foundations

**Practice**
Agile / Scrum · System design & architecture · Technical documentation · Project management · Release engineering

---

## Selected Projects

### EvoDine — Flutter Mobile + Web POS
*Commercial product, Evo Solutions* · [Product page](https://www.evosolutions.lk/products/evodine)

A restaurant point-of-sale system shipped commercially. Flutter client for Android and iOS covering order creation, live kitchen/bar movement board, cashier payment processing with receipt printing, cancellation approval flow, and a management dashboard — backed by a .NET API and sharing its data model with a web client.

*Highlights:* SignalR real-time with automatic reconnect and graceful degradation · Bluetooth thermal receipt printing with byte-level output composition · in-memory sessions, AES-encrypted payloads, unified response envelope · layered architecture with ~20 service classes · Play Store release with R8, resource shrinking, and keystore signing.

**Tech:** Flutter, Dart, SignalR, Bluetooth Thermal Printing, Firebase, AES, REST, Android, iOS

---

### Cheap Chaser — Travel Platform
[Live](https://cheap-gray.vercel.app/) · [GitHub](https://github.com/manuja003/travel-management)

A one-stop trip-planning platform for tourists visiting Sri Lanka, consolidating a fragmented booking experience into itinerary building with real-time budget tracking.

*Highlights:* custom middleware aggregating multiple travel/booking APIs into a unified format · client-side state management for instant multi-currency budget updates · mobile-first responsive design. MERN stack with a micro-services split between search and booking for high availability.

**Tech:** React, Node.js, Express, MongoDB, Tailwind CSS, Framer Motion

---

### Udara Store — E-commerce Platform
[Live](https://udarastore.com/)

A modern storefront taking a local retailer digital, focused on performance and SEO.

*Highlights:* next-gen image formats and lazy loading for high Lighthouse scores · type-safe dynamic filtering engine in TypeScript · multi-step checkout with real-time validation · headless CMS so the owner can manage inventory without technical help.

**Tech:** React, TypeScript, Tailwind CSS, Headless CMS, Vite

---

### Galle Lanka Travels — Travel & Tours Platform
[Live](https://galle-lanka-explore.vercel.app)

Travel and vehicle-hire platform for a Sri Lankan tourism agency, with curated tours and customizable itineraries.

*Highlights:* step-by-step tour customization wizard · centralized booking calendar with automated conflict detection across a vehicle fleet · Cloudinary-optimized image delivery with lazy-loaded galleries. Client-heavy React app on a Firebase serverless backend.

**Tech:** React, Tailwind CSS, Firebase, Cloudinary, Framer Motion

---

### Event Ticketing System — Java Full-Stack
[GitHub](https://github.com/manuja003/event-ticketing)

A high-concurrency ticketing system built to handle thousands of simultaneous booking requests, demonstrating backend synchronization and thread safety.

*Highlights:* synchronized blocks and reentrant locks preventing seat double-booking · Producer-Consumer pattern for ticket queue handling · custom concurrent-transaction audit logging · CLI with real-time status reporting.

**Tech:** Java, Multithreading, OOP, CSV persistence, JUnit

---

### Quality Education — UN SDG 4 Project
[Live](https://education-sdg-demo.netlify.app) · [GitHub](https://github.com/manuja003/education-sdg)

An awareness portal for UN Sustainable Development Goal 4, built for accessibility and low-bandwidth performance.

*Highlights:* semantic HTML5 and ARIA labelling for WCAG screen-reader compatibility · interactive SVG visual sitemap · content-first layout · zero-dependency static build for lag-free access on poor connections.

**Tech:** HTML5, CSS3, JavaScript, Bootstrap, AOS

---

### University Grading Visualizer — Python Data Analysis
[GitHub](https://github.com/manuja003/university-grading)

A tool for academic administrators to analyse student performance across faculties and modules.

*Highlights:* data-cleaning pipeline handling diverse formats (CSV, raw text) · pixel-perfect histogram generator built from scratch on `graphics.py` without high-level plotting libraries · comprehensive error-logging and validation for missing grades and invalid faculty codes. MVC-structured.

**Tech:** Python, graphics.py, Data Structures, CSV parsing

---

### Plane Management System — Java CLI
[GitHub](https://github.com/manuja003/plane-management)

An aviation operations CLI for airline staff managing seat allocation, cancellations, and scheduling in real time.

*Highlights:* optimized 2D-array traversal for rapid seat lookup on complex seating charts · transactional CSV writer preserving data integrity on every update · input validation and contextual helper menus to minimise operator error.

**Tech:** Java, 2D Arrays, File I/O, OOP

---

### Personal Portfolio
[Live](https://manuja-portfolio.web.app/) · [GitHub](https://github.com/manuja003)

Animated personal portfolio built with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, and Shadcn UI, with a Firebase/Firestore-backed contact pipeline and EmailJS notification + auto-reply flow.

---

## Certifications & Professional Development

**LinkedIn Learning** *(2023 – 2024)*
- Advanced Java
- React.js Essential Training
- Python for Beginners
- React with TypeScript

---

## Competitions & Activities

- **HaExtreme 3.0** — participant *(2023–2024)*
- **Hult Prize** — participant *(2023–2024)*

---

## Leadership & Extracurricular

- **Divisional Officer**, St. John Ambulance *(through 2024)*
- **Senior Prefect**, Mahinda College, Galle
- **Cadet Leader**, Mahinda College
- **All Island Singer Cricket Tournament U13** — Runners-Up team member *(2015)*

Sustained leadership involvement from 2011 through 2024 across first-aid service, school governance, and cadet corps.

---

## Languages

- **English** — Professional working proficiency
- **Sinhala** — Native

---

## What I'm Looking For

Software engineering roles — mobile (Flutter) or full-stack — where I can own features end to end and work on systems with real operational constraints: real-time data, hardware integration, offline resilience, or regulated domains. Open to Colombo-based, hybrid, and remote positions.

---

## Referees

Available on request.

---

*Last updated: July 2026*

---

<!--
GAPS TO FILL BEFORE SUBMITTING THIS AS A CV
-------------------------------------------
The content above is fully sourced from your portfolio site. These items are
not in the codebase, so add them yourself if the target employer expects them:

1. Expected graduation date / year for the BEng (Hons) — currently "2023 – Present".
2. Current GPA or academic classification, if it is strong.
3. Exact GCE A/L year results date and Z-score, if relevant to local applications.
4. Whether the Scienter internship end date "July 2026" is correct — it reads as
   overlapping with the TagTeam role starting 2025. Clarify the overlap or fix
   the dates; recruiters will notice.
5. Referee names, titles, and contact details (or keep "available on request").
6. Nationality / work authorization, if applying internationally.
7. Any certifications with credential IDs or verification URLs.
8. Date of birth / NIC — only if required by the local application format.
-->
