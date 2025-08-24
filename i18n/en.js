// i18n/en.js
window.I18N = window.I18N || {};
window.I18N.en = {
  "meta.title": "Bianca Krause - Portfolio",
  "ui.langToggle": "DE",

  "header.name": "Bianca Krause",
  "contact.email": "bianca-krause@aikq.de",
  "contact.phone": "+ 49 176 6238 5445",

  "nav.about": "About Me",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.recommendations": "Recommendations",

  "disclaimer.summary": "This site was initially created as part of the IBM course \"Introduction to HTML, CSS, & JavaScript\" on Coursera.",
  "disclaimer.text1": "The foundation of this site was developed during the IBM course to practice core web development concepts. After completing the course, I independently expanded the project significantly, adding features like multi-language support, a dynamic skill grid, a modernized UI, and further improvements.",
  "disclaimer.text2": "Important: this site does not represent the full scope of my knowledge or skills. It showcases selected content from the course and was improved once to present a more professional result. For more details, please see my <a href='#certificates'>certificates</a>.",

  "about.title": "Hi, I'm Bianca!",
  "about.text": "Since <b>May</b>, I have been in a vocational retraining program at <strong>WBS Schweinfurt</strong> to become an <b>Application Developer (Fachinformatiker Anwendungsentwicklung)</b>. Previously, I was <b>part-time self-employed</b> for <b>4 years</b> with my online shop <b>Holzallerliebst.Shop</b>. For backend tasks I developed a custom tool, which I later sold multiple times — that’s what sparked my passion for <b>programming</b>. Since then I’ve been working on <b>personal projects</b> whenever possible and continuously building my skills through <b>online courses</b> and hands-on work. In my previous <b>IT support</b> role, I was valued for my <b>team spirit</b> and my <b>independent, reliable work style</b>.",

// Skills

  "skills.title": "Skills",
  "skills.legend.level5": "Extensive experience",
  "skills.legend.level4": "Advanced proficiency",
  "skills.legend.level3": "Good understanding",
  "skills.legend.level2": "Basic familiarity",
  "skills.legend.level1": "Beginner / Foundations",

  "skills.tip.teamwork": "10+ years leadership experience",
  "skills.tip.communication": "10+ years leadership experience",

  "skills.tip.html": "School knowledge (25+ yrs), reactivated via Liquid, short courses",
  "skills.tip.css": "School knowledge (25+ yrs), reactivated via Liquid, short courses",
  "skills.tip.js": "School knowledge (25+ yrs), reactivated via Liquid, short courses",

  "skills.tip.photoshop": "Photography passion (30 yrs), image editing",
  "skills.tip.ecommerce": "4 yrs side business (Holzallerliebst.Shop)",
  "skills.tip.wawi": "4 yrs shop management & inventory processes",
  "skills.tip.ai": "Content: images, texts, branding, SEO, videos",
  "skills.tip.shopify": "4 yrs theme customization, Liquid templates",
  "skills.tip.davinci": "≈3 yrs, shop videos & stock footage",

  "skills.tip.office": "Everyday use, shop admin",
  "skills.tip.word": "solid foundation",
  "skills.tip.excel": "Lists/evaluations; solid foundation",

  "skills.tip.python": "Udemy course started – self-study; shop tool; crypto bot prototype",
  "skills.tip.sql": "Udemy course started – self-study",

  "skills.tip.ts": "Project practice (Easy Tagsy AI); learning phase",
  "skills.tip.react": "Project practice (kita gallery); learning phase",
  "skills.tip.vscode": "Projects in VS Code/Visual Studio",
  "skills.tip.json": "APIs/config in projects",
  "skills.tip.ads": "Shop campaigns",
  "skills.tip.analytics": "Shop tracking + evaluations",

  "skills.tip.csharp": "Udemy course started – self-study",
  "skills.tip.ml": "Experiments with AI-driven trading bots, stacked models, live testing",
  "skills.tip.block": "Basics of crypto & blockchains through trading bot projects",

// Projects

  "projects.title": "Projects",

  "projects.holz.title": "Holzallerliebst.Shop",
  "projects.holz.time": "Part-time self-employment: 4 years",
  "projects.holz.desc": "Holzallerliebst.Shop was an online store I founded and operated independently, specializing in handcrafted wooden decorations and gifts. \
  I built the entire e-commerce platform on Shopify, including custom Liquid theme development, integration of payment and marketing tools, and connections to external marketplaces such as Etsy, Amazon, and eBay. \
  In addition to the technical implementation, I was also responsible for product photography, SEO, social media campaigns, and the overall marketing strategy.",

  "projects.holz.tech.0": "Shopify / Liquid (themes)",
  "projects.holz.tech.1": "Custom Liquid extensions / snippets",
  "projects.holz.tech.2": "Google Analytics (GA4)",
  "projects.holz.tech.3": "Google Ads",
  "projects.holz.tech.4": "Meta Pixel (FB/IG) & Ads",
  "projects.holz.tech.5": "SEO & Google ranking",
  "projects.holz.tech.6": "Social media content creation",
  "projects.holz.tech.7": "Product photography & copywriting",
  "projects.holz.tech.8": "ERP/WaWi API integrations (eBay/Etsy/Amazon/DHL)",
  "projects.holz.tech.9": "Bookkeeping & fulfillment",

  "projects.etsy.title": "Etsy Tag Helper",
  "projects.etsy.time": "Development time: 3 days + minor updates",
  "projects.etsy.desc": "The Etsy Tag Helper is a custom-built Python tool that automates the creation of optimal SEO tags for Etsy product listings. \
  Etsy allows up to 13 tags per item, each limited to ~30 characters — finding the right combination manually is time-consuming. \
  With support from ChatGPT, I developed this program in just three days to reduce the entire process to a few clicks, saving hours of manual work for each seasonal event. \
  Features include sorting keywords by frequency, filtering unwanted words, and adjusting both the length and number of generated tags. \
  Once completed, I converted the Python script into an executable, wrote a short user guide, and successfully sold the tool on Etsy.",
  "projects.etsy.tech.0": "Python",
  "projects.etsy.tech.1": "ChatGPT / AI-assisted development",
  "projects.etsy.tech.2": "Auto Py to Exe",

  "projects.kita.title": "Daycare Photo App",
  "projects.kita.time": "Development time: 2 days",
  "projects.kita.desc": "I developed a lightweight React web app for my godchild’s kindergarten to provide parents with digital access to annual photos. \
  The gallery dynamically loaded an individual number of images per child (≈90 children total) and applied watermarks, which could be toggled per image via config.json. \
  Access was secured with simple username/password logins, avoiding the need for a full backend or database. Security was handled pragmatically (robots.txt no-crawling, limited availability of ~30 days, anonymized logins). \
  The focus was a lean, practical solution balancing effort and benefit, since parents only contributed a small expense allowance.",
  "projects.kita.tech.0": "React",
  "projects.kita.tech.1": "Firebase (hosting/config)",
  "projects.kita.tech.2": "JavaScript",
  "projects.kita.tech.3": "AI-assisted coding",
  "projects.kita.tech.4": "Adobe Photoshop",
  "projects.kita.github": "View code on GitHub",

  "projects.easytagsy.title": "EasyTagsy AI",
  "projects.easytagsy.time": "Development status: ongoing since 2024",
  "projects.easytagsy.desc": "EasyTagsy AI is the redevelopment of my original Etsy Tag Helper \
  into a modern, AI-powered SaaS platform. \
  The goal is full Etsy listing optimization: \
  instead of only generating tags from keywords, the application automatically creates \
  complete, SEO-optimized product descriptions, titles, and tags — tailored for Etsy’s search algorithms. \
  The platform integrates with the ChatGPT API, features a modern responsive design, \
  and removes the limitations of the old Python EXE version, which only ran on Windows. \
  The project is currently in active development; demo access and source code are available to recruiters upon request.",
  "projects.easytagsy.tech.0": "TypeScript",
  "projects.easytagsy.tech.1": "React",
  "projects.easytagsy.tech.2": "ChatGPT API",
  "projects.easytagsy.tech.3": "Firebase Hosting",
  "projects.easytagsy.tech.4": "Google Login",
  "projects.easytagsy.tech.5": "Responsive UX/UI Design",
  "projects.easytagsy.tech.6": "JavaScript",
  "projects.easytagsy.tech.7": "AI Prompt Engineering",
  "projects.easytagsy.demo": "Go to Live Demo",
  "projects.easytagsy.access": "Demo login & code available on request for recruiters",

  "projects.trading.title": "AI Trading Bots",
  "projects.trading.time": "Project period: 2024 – 2025",
  "projects.trading.desc": "Development of several AI-powered trading bots designed to automate cryptocurrency trading via the Bybit API. \
  To build this, I learned the fundamentals of trading, completed the Udemy course “Blockchain & Crypto,” and created Python scripts \
  to fetch market data from Bybit, preprocess it, train machine learning models, and evaluate their performance. \
  The bots monitored multiple currency pairs, opened long or short positions, and closed them automatically based on price targets. \
  A key challenge was training bots on well-known trading strategies while also experimenting with unsupervised models without predefined rules. \
  Although none of the bots made it into live trading with real funds, the project was a valuable deep dive into API integration, \
  machine learning, and automated trading systems.",
  "projects.trading.tech.0": "Python",
  "projects.trading.tech.1": "Bybit API",
  "projects.trading.tech.2": "Machine Learning",
  "projects.trading.tech.3": "Pandas / NumPy",
  "projects.trading.tech.4": "ChatGPT (strategy planning & coding assistance)",



  
// Certificates

  "certs.title": "Certificates",

  "certs.intro": "Starting in October 2024 – even before beginning my retraining program as an Application Developer – I began independently and systematically expanding my knowledge in relevant IT topics. \
The initial Coursera courses provided a solid, well-structured overview of various technologies and concepts but offered less depth for long-term knowledge retention. \
For this reason, I transitioned to more hands-on Udemy courses, which focus on practical application and sustainable learning. \
Some comprehensive courses, such as '100 Days of Python', are still in progress.",


  "certs.ibm_html.title": "Coursera - IBM – Introduction to HTML, CSS, & JavaScript",
  "certs.ibm_html.meta": "Coursera - IBM • November 3, 2024 • approx. 14 hours",
  "certs.ibm_html.imgAlt": "Coursera - IBM certificate: Introduction to HTML, CSS, & JavaScript",
  "certs.ibm_html.summary": "Fundamentals of HTML, CSS and JavaScript; hands-on intro to structure, styling and client-side logic.",
  "certs.ibm_html.learn":
    "<ul>" +
      "<li>Web application ecosystem & terminology: frontend/backend, server-side, full-stack</li>" +
      "<li>Developer tools, online editors (e.g., JSFiddle) & IDEs for building and testing</li>" +
      "<li>Create and structure web pages with HTML and style them with CSS</li>" +
      "<li>Build interactive pages with JavaScript: DOM manipulation, form validation, client-side scripting</li>" +
    "</ul>",

  "certs.ibm_software.title": "Coursera - IBM – Introduction to Software Engineering",
"certs.ibm_software.meta": "Coursera - IBM • October 26, 2024 • approx. 14 hours",
"certs.ibm_software.imgAlt": "Coursera - IBM certificate: Introduction to Software Engineering",
"certs.ibm_software.summary":
  "Introduction to software development, SDLC, architecture concepts, and basic programming principles.",
"certs.ibm_software.learn":
  "<ul>" +
    "<li>Principles of software engineering & Software Development Life Cycle (SDLC)</li>" +
    "<li>Development tools, technologies, and stacks</li>" +
    "<li>Core architecture, design approaches & deployment patterns</li>" +
    "<li>Programming language types, control structures & Python basics</li>" +
    "<li>Roles, skills & career paths in software engineering</li>" +
  "</ul>",

  "certs.ibm_cloud.title": "Coursera - IBM – Introduction to Cloud Computing",
"certs.ibm_cloud.meta": "Coursera - IBM • October 29, 2024 • approx. 12 hours",
"certs.ibm_cloud.imgAlt": "Coursera - IBM certificate: Introduction to Cloud Computing",
"certs.ibm_cloud.summary":
  "Introduction to cloud computing, service models, platforms, and modern cloud technologies.",
"certs.ibm_cloud.learn":
  "<ul>" +
    "<li>Basics of cloud computing, history, use cases & emerging technologies</li>" +
    "<li>Service models: IaaS, PaaS, SaaS & deployment models: Public, Private, Hybrid</li>" +
    "<li>Trends: Hybrid/Multicloud, Microservices, Serverless, Cloud Native, DevOps</li>" +
    "<li>Overview of major platforms: AWS, Azure, Google Cloud, IBM Cloud, Alibaba Cloud, etc.</li>" +
    "<li>Cloud infrastructure & application modernization</li>" +
  "</ul>",

"certs.ibm_python.title": "Coursera - IBM – Python for Data Science, AI & Development",
"certs.ibm_python.meta": "Coursera - IBM • November 7, 2024 • approx. 25 hours",
"certs.ibm_python.imgAlt": "Coursera - IBM certificate: Python for Data Science, AI & Development",
"certs.ibm_python.summary":
  "Foundations of Python programming, data analysis, web scraping, and AI-powered development.",
"certs.ibm_python.learn":
  "<ul>" +
    "<li>Python basics: syntax, data types, variables, expressions, and string operations</li>" +
    "<li>Python logic: data structures, conditions, loops, functions, classes</li>" +
    "<li>Using libraries like Pandas & Numpy for data analysis</li>" +
    "<li>Working with Jupyter Notebooks</li>" +
    "<li>Web data extraction: REST APIs, requests & scraping using BeautifulSoup</li>" +
  "</ul>",

  "certs.ibm_react.title": "Coursera - IBM – Developing Front-End Apps with React",
"certs.ibm_react.meta": "Coursera - IBM • November 15, 2024 • approx. 14 hours",
"certs.ibm_react.imgAlt": "Coursera - IBM certificate: Developing Front-End Apps with React",
"certs.ibm_react.summary":
  "Interactive UIs with React, JSX, and ES6; component-based front-end architecture and hands-on mini projects.",
"certs.ibm_react.learn":
  "<ul>" +
    "<li>Build interactive UIs & web apps using JavaScript technologies: React, JSX, ES6</li>" +
    "<li>Create dynamic front-end apps with reusable React components</li>" +
    "<li>Core React concepts & features: props, state, hooks, forms, Redux</li>" +
    "<li>Hands-on practice via multiple mini projects (e.g., shopping cart)</li>" +
  "</ul>",

  "certs.udemy.layer2.title": "Udemy – Switches, MAC Addresses, ARP & Transmission Techniques /// OSI Layer 2 & 1",
"certs.udemy.layer2.meta": "Udemy • 29 July 2025 • approx. 2.5 hours",
"certs.udemy.layer2.imgAlt": "Certificate: OSI Layer 2 & 1 Basics",
"certs.udemy.layer2.summary":
  "Completed alongside the WBS retraining program to deepen networking fundamentals beyond the IHK curriculum.",
"certs.udemy.layer2.learn":
  "<ul>" +
    "<li>Understanding Ethernet functionality and switch operations</li>" +
    "<li>Structure and usage of MAC addresses</li>" +
    "<li>Working principles of the Address Resolution Protocol (ARP)</li>" +
    "<li>Transmission types, media, and encoding of network signals</li>" +
    "<li>Frame addressing and packet delivery</li>" +
    "<li>Key concepts of transmission capacities</li>" +
  "</ul>",

  "certs.udemy.routing.title": "Udemy – IPv4 & IPv6 Addressing, Static & Dynamic Routing with OSPF /// OSI Layer 3",
"certs.udemy.routing.meta": "Udemy • August 1, 2025 • approx. 4.5 hours",
"certs.udemy.routing.imgAlt": "Certificate: IPv4/IPv6 Addressing & Routing (OSI Layer 3)",
"certs.udemy.routing.summary":
  "Completed alongside the WBS retraining program to deepen Layer-3 topics with hands-on practice (beyond the IHK curriculum).",
"certs.udemy.routing.learn":
  "<ul>" +
    "<li>Role of the Network Layer; IPv4 & IPv6 addressing</li>" +
    "<li>Subnetting: rules, calculations, and IP network design</li>" +
    "<li>Routing basics: default gateway, routing table, packet forwarding</li>" +
    "<li>Static routing: operation and configuration</li>" +
    "<li>Dynamic routing with OSPF: benefits & basic configuration</li>" +
    "<li>Cisco router configuration; practical simulation (e.g., Packet Tracer)</li>" +
  "</ul>",

  "certs.udemy.blockchain.title": "Udemy – Introduction to Blockchain and Cryptocurrency Fundamentals",
"certs.udemy.blockchain.meta": "Udemy • August 24, 2025 • approx. 14.5 hours",
"certs.udemy.blockchain.imgAlt": "Certificate: Introduction to Blockchain and Cryptocurrency Fundamentals",
"certs.udemy.blockchain.summary":
  "Foundations of blockchain, cryptocurrencies, and smart contracts — with hands-on mini projects.",
"certs.udemy.blockchain.learn":
  "<ul>" +
    "<li>Why blockchain matters (use cases & value)</li>" +
    "<li>Build a minimal blockchain from scratch</li>" +
    "<li>Theory behind cryptocurrency transactions (e.g., account/UTXO models)</li>" +
    "<li>Core concepts: blocks, hashing, consensus</li>" +
    "<li>Basics of cryptocurrencies</li>" +
    "<li>Create a simple token/currency</li>" +
    "<li>Intro to smart contracts & simple implementations</li>" +
  "</ul>",
"certs.udemy.blockchain.github": "View project code on GitHub",

  "certs.ibm_git.title": "Coursera - IBM – Getting Started with Git and GitHub",
"certs.ibm_git.meta": "Coursera - IBM • November 7, 2024 • approx. 10 hours",
"certs.ibm_git.imgAlt": "Coursera - IBM certificate: Getting Started with Git and GitHub",
"certs.ibm_git.summary":
  "Introduction to Git and GitHub fundamentals: version control, branches, pull requests, merges, and collaborative workflows.",
"certs.ibm_git.learn":
  "<ul>" +
    "<li>Version control and its role in DevOps and collaborative development</li>" +
    "<li>Basic Git concepts: repositories, branches, PRs, merges</li>" +
    "<li>Working with GitHub: create, manage, and share repositories</li>" +
    "<li>Build a portfolio via hands-on open-source projects</li>" +
  "</ul>",

  "certs.cin_ai_content.title": "Coursera Instructor Network – Leveraging AI for Enhanced Content Creation",
"certs.cin_ai_content.meta": "Coursera Instructor Network • October 25, 2024 • approx. 4 hours",
"certs.cin_ai_content.imgAlt": "Certificate: Leveraging AI for Enhanced Content Creation",
"certs.cin_ai_content.summary":
  "Using generative AI for ideation, content production, and voiceovers; practical tools and workflows.",
"certs.cin_ai_content.learn":
  "<ul>" +
    "<li>Foundational concepts of Generative AI and its impact on content creation</li>" +
    "<li>Ideation with Google Bard; ad copy/prompts with ChatGPT</li>" +
    "<li>Visualize & create content using Bing Chat, Midjourney, and Runway</li>" +
    "<li>Integrate and enhance content with voiceovers using ElevenLabs</li>" +
  "</ul>",

  "certs.midjourney.title": "Coursera Project Network – Midjourney for Beginners: Craft an Exquisite Piece of AI Art",
"certs.midjourney.meta": "Coursera Project Network • October 22, 2024 • approx. 2 hours",
"certs.midjourney.imgAlt": "Certificate: Midjourney for Beginners",
"certs.midjourney.summary":
  "Introduction to Midjourney for creating AI-generated artworks; practical image generation and optimization.",
"certs.midjourney.learn":
  "<ul>" +
    "<li>Installing Midjourney and setting up new servers</li>" +
    "<li>Generating and optimizing images using Remix, permutation prompts, and zoom-out features</li>" +
    "<li>Adjusting and exporting digital assets in various aspect ratios</li>" +
  "</ul>",

//Demo empfehlungen

  "recs.title": "Recommendations",
  "recs.r1": "Working with Bianca has been an inspiring experience. Whether it's HTML or Shopify Liquid, Bianca has a true knack for making complex web problems look simple. Their problem-solving skills and efficiency with ChatGPT are unmatched—they're the kind of developer you absolutely want on your team.",
  "recs.r2": "Bianca is incredibly talented in web development. They redefined the experience on Holzallerliebst.Shop with seamless customizations that reflected the brand perfectly. Their mastery of JavaScript and CSS adds the magic that turns ordinary pages into impressive designs.",
  "recs.r3": "I collaborated with Bianca on a Shopify project, and their expertise in Liquid and CSS was exactly what we needed. Not only did they solve every design challenge, but they also integrated the store with Meta’s entire ecosystem—Facebook and Instagram! Bianca is the ultimate pro, and I’m thrilled to recommend them.",
  "recs.r4": "With a curious mind and endless creativity, Bianca not only developed a powerful Etsy Tag Helper in record time but also made it intuitive and effective. Their ChatGPT skills saved time and maximized productivity. I’m convinced they could teach Python to a rock.",
  "recs.r5": "Bianca has a unique gift for blending tech with creativity. They turned AI content creation into an art form and developed engaging stock images with Midjourney for AdobeStock. Their initiative and passion shine in every project they touch!",
  "recs.r6": "I’ve watched Bianca bring incredible detail to life in everything from Shopify stores to JavaScript features. Their 4+ years of HTML and CSS experience show in the precision of their work. They even created a perfectly designed book draft using ChatGPT—true innovation!",
  
  "form.legend": "Leave a Recommendation",
  "form.namePh": "Name (Optional)",
  "form.msgPh": "Message",
  "form.submit": "Submit",

  "popup.line1": "Thank you so much for leaving more recomendations for Bianca.",
  "popup.line2": "Please only write nice things!",
  "popup.ok": "Ok"
};
