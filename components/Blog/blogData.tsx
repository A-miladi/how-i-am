// components/Blog/blogData.ts

import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "GitHub: Conventional Commit",
    paragraph: `Conventional Commits provide a structured format for commit messages that makes projects easier to maintain. 
They improve collaboration by making changes understandable at a glance. 
Adopting this standard enables automated changelogs, semantic versioning, and smoother release processes.`,
    image: "/images/blog/conventional.png",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/conventional.png",
      designation: "Fullstack Developer",
    },
    tags: ["GitHub", "Commit", "Best Practices"],
    publishDate: "2025-08-01",
  },
  {
    id: 2,
    title: "Version Control Basics",
    paragraph: `Version control systems like Git help teams track project changes over time. 
They allow safe rollbacks, branching for new features, and efficient merging. 
Without version control, modern team collaboration would be nearly impossible.`,
    image: "/images/blog/vc.png",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-02.png",
      designation: "Software Engineer",
    },
    tags: ["Git", "Collaboration", "Workflow"],
    publishDate: "2025-08-02",
  },
  {
    id: 3,
    title: "React Native vs Flutter",
    paragraph: `React Native and Flutter are leading frameworks for cross-platform mobile apps. 
React Native, backed by Meta, powers WhatsApp, Telegram, and X (Twitter). 
Flutter, developed by Google, offers a powerful widget-driven UI system with great performance. 
Your choice depends on ecosystem support, performance, and developer preference.`,
    image: "/images/blog/rn-vs-fl.jpg",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-03.png",
      designation: "Mobile Developer",
    },
    tags: ["React Native", "Flutter", "Mobile Apps"],
    publishDate: "2025-08-03",
  },
  {
    id: 4,
    title: "React Native CLI vs Expo",
    paragraph: `React Native CLI gives developers full control over native modules and dependencies. 
Expo, on the other hand, simplifies the process by providing pre-configured tools and libraries. 
For production-ready complex apps, CLI is often better, but Expo is perfect for prototyping and rapid development.`,
    image: "/images/blog/expocli.jpg",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-04.png",
      designation: "Frontend Engineer",
    },
    tags: ["React Native", "Expo", "CLI"],
    publishDate: "2025-08-04",
  },
  {
    id: 5,
    title: "What is TestFlight?",
    paragraph: `TestFlight is Apple’s official tool for beta testing iOS apps. 
It allows developers to distribute apps to testers before public release. 
This helps gather feedback, find bugs, and optimize performance in real-world scenarios.`,
    image: "/images/blog/testflight.webp",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-05.png",
      designation: "iOS Developer",
    },
    tags: ["iOS", "TestFlight", "Beta Testing"],
    publishDate: "2025-08-05",
  },
  {
    id: 6,
    title: "Next.js in Real Projects",
    paragraph: `Next.js is a powerful React framework used for building production-ready apps. 
Famous companies like Snapp, Digikala, and Divar rely on Next.js for scalability and performance. 
It supports SSR, SSG, and hybrid approaches, making it one of the best frameworks for modern web apps.`,
    image: "/images/blog/nextJS.png",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-06.png",
      designation: "Web Developer",
    },
    tags: ["Next.js", "React", "Web Development"],
    publishDate: "2025-08-06",
  },
  {
    id: 7,
    title: "React: The UI Library",
    paragraph: `React is one of the most popular JavaScript libraries for building user interfaces. 
It introduced the concept of components and a virtual DOM, making development efficient. 
Its strong ecosystem, community, and reusable components make it a top choice for frontend development.`,
    image: "/images/blog/reactjs.jpg",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-07.png",
      designation: "Frontend Developer",
    },
    tags: ["React", "UI", "JavaScript"],
    publishDate: "2025-08-07",
  },
  {
    id: 8,
    title: "Tailwind CSS for Modern UI",
    paragraph: `Tailwind CSS is a utility-first CSS framework that makes styling faster and more consistent. 
Instead of writing custom CSS, developers use pre-built utility classes. 
This reduces code duplication and ensures design consistency across applications.`,
    image: "/images/blog/tailwind.png",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-08.png",
      designation: "UI/UX Engineer",
    },
    tags: ["CSS", "Tailwind", "Design"],
    publishDate: "2025-08-08",
  },
  {
    id: 9,
    title: "GSAP Animations",
    paragraph: `GSAP (GreenSock Animation Platform) is a powerful JavaScript library for animations. 
It enables smooth, high-performance animations that work across browsers. 
Developers use GSAP to create interactive UI elements, scroll animations, and dynamic effects.`,
    image: "/images/blog/gsap.jpeg",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-09.png",
      designation: "Frontend Animator",
    },
    tags: ["GSAP", "Animations", "JavaScript"],
    publishDate: "2025-08-09",
  },
  {
    id: 10,
    title: "Why Use TypeScript?",
    paragraph: `TypeScript adds static typing to JavaScript, helping developers catch bugs early. 
It improves code readability and maintainability, making large projects more reliable. 
With TypeScript, teams can scale applications with fewer runtime errors.`,
    image: "/images/blog/ts.webp",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-10.png",
      designation: "Software Engineer",
    },
    tags: ["TypeScript", "JavaScript", "Development"],
    publishDate: "2025-08-10",
  },
  {
    id: 11,
    title: "NestJS for Scalable Backends",
    paragraph: `NestJS is a progressive Node.js framework built with TypeScript. 
It follows modular architecture and makes backend development structured and scalable. 
Companies use NestJS to build reliable APIs, microservices, and server-side applications.`,
    image: "/images/blog/nestjs.png",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-11.png",
      designation: "Backend Developer",
    },
    tags: ["NestJS", "Backend", "TypeScript"],
    publishDate: "2025-08-11",
  },
  {
    id: 12,
    title: "Node.js Event Loop",
    paragraph: `Node.js is built on a non-blocking, event-driven architecture. 
The event loop allows it to handle thousands of concurrent requests efficiently. 
Understanding the event loop is key to writing performant Node.js applications.`,
    image: "/images/blog/nodejs.png",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-12.png",
      designation: "Backend Engineer",
    },
    tags: ["Node.js", "JavaScript", "Event Loop"],
    publishDate: "2025-08-12",
  },
  {
    id: 13,
    title: "MongoDB in Modern Apps",
    paragraph: `MongoDB is a NoSQL database that stores data in flexible JSON-like documents. 
It’s highly scalable and commonly used in modern applications. 
Its document-oriented design makes it easy to integrate with JavaScript-based applications.`,
    image: "/images/blog/mongo.png",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-13.png",
      designation: "Database Engineer",
    },
    tags: ["MongoDB", "Database", "NoSQL"],
    publishDate: "2025-08-13",
  },
  {
    id: 14,
    title: "PostgreSQL: The Powerful SQL DB",
    paragraph: `PostgreSQL is a powerful open-source relational database. 
It supports advanced features like JSON, full-text search, and complex queries. 
Its reliability and flexibility make it a top choice for enterprise-level applications.`,
    image: "/images/blog/post.jpg",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-14.png",
      designation: "Database Administrator",
    },
    tags: ["PostgreSQL", "Database", "SQL"],
    publishDate: "2025-08-14",
  },
  {
    id: 15,
    title: "REST API vs GraphQL",
    paragraph: `REST and GraphQL are two popular approaches to API design. 
REST is simple and widely used, while GraphQL allows clients to request exactly the data they need. 
Choosing between them depends on project requirements and data structure.`,
    image: "/images/blog/restapi.webp",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-15.png",
      designation: "API Engineer",
    },
    tags: ["REST", "GraphQL", "API"],
    publishDate: "2025-08-15",
  },
  {
    id: 16,
    title: "Docker for Developers",
    paragraph: `Docker allows developers to package applications with all dependencies into containers. 
This ensures consistent environments across development, testing, and production. 
Containers have revolutionized how software is built, shipped, and run.`,
    image: "/images/blog/docker.png",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-16.png",
      designation: "DevOps Engineer",
    },
    tags: ["Docker", "Containers", "DevOps"],
    publishDate: "2025-08-16",
  },
  {
    id: 17,
    title: "Kubernetes Essentials",
    paragraph: `Kubernetes is an open-source container orchestration system. 
It automates deployment, scaling, and management of containerized apps. 
Many companies use Kubernetes to handle production workloads efficiently.`,
    image: "/images/blog/kuber.jpg",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-17.png",
      designation: "Cloud Engineer",
    },
    tags: ["Kubernetes", "Containers", "Cloud"],
    publishDate: "2025-08-17",
  },
  {
    id: 18,
    title: "CI/CD with GitHub Actions",
    paragraph: `Continuous Integration and Deployment streamline development workflows. 
GitHub Actions allows automation of builds, tests, and deployments directly from GitHub. 
This enables faster feedback loops and reduces human error.`,
    image: "/images/blog/cicd.jpeg",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-18.png",
      designation: "DevOps Specialist",
    },
    tags: ["CI/CD", "GitHub", "Automation"],
    publishDate: "2025-08-18",
  },
  {
    id: 19,
    title: "OWASP Top 10",
    paragraph: `OWASP provides guidelines on the most critical web security risks. 
The OWASP Top 10 includes threats like SQL injection, XSS, and broken authentication. 
Following these best practices helps build secure web applications.`,
    image: "/images/blog/owasp.jpg",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-19.png",
      designation: "Security Engineer",
    },
    tags: ["OWASP", "Security", "Web Apps"],
    publishDate: "2025-08-19",
  },
  {
    id: 20,
    title: "Cybersecurity Basics",
    paragraph: `Cybersecurity is the practice of protecting systems, networks, and applications from attacks. 
It involves securing data, preventing unauthorized access, and detecting threats. 
Strong security practices are essential for both individuals and organizations.`,
    image: "/images/blog/cyber.jpg",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-20.png",
      designation: "Cybersecurity Specialist",
    },
    tags: ["Security", "Cybersecurity", "IT"],
    publishDate: "2025-08-20",
  },
  {
    id: 21,
    title: "AI in Software Development",
    paragraph: `Artificial Intelligence is transforming software engineering. 
Developers now use AI-powered tools for code generation, bug detection, and testing. 
AI accelerates productivity but also requires ethical considerations.`,
    image: "/images/blog/ai.webp",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-21.png",
      designation: "AI Engineer",
    },
    tags: ["AI", "Software", "Development"],
    publishDate: "2025-08-21",
  },
  {
    id: 22,
    title: "Machine Learning Basics",
    paragraph: `Machine Learning is a subset of AI that allows systems to learn from data. 
It powers applications like recommendation systems, fraud detection, and self-driving cars. 
Understanding ML fundamentals is crucial for modern developers.`,
    image: "/images/blog/machinelearning.avif",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-22.png",
      designation: "Data Scientist",
    },
    tags: ["Machine Learning", "AI", "Data"],
    publishDate: "2025-08-22",
  },
  {
    id: 23,
    title: "Cloud Computing Explained",
    paragraph: `Cloud computing delivers computing resources over the internet. 
Services like AWS, Azure, and GCP provide scalable infrastructure on demand. 
The cloud enables businesses to reduce costs and innovate faster.`,
    image: "/images/blog/cloud.avif",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-23.png",
      designation: "Cloud Architect",
    },
    tags: ["Cloud", "AWS", "GCP", "Azure"],
    publishDate: "2025-08-23",
  },
  {
    id: 24,
    title: "Future of Web Development",
    paragraph: `Web development is constantly evolving with new tools and frameworks. 
Trends like serverless computing, AI-driven apps, and Web3 are shaping the industry. 
Developers who adapt quickly will stay ahead in this fast-changing landscape.`,
    image: "/images/blog/webdev.jpg",
    author: {
      name: "Alireza Miladi",
      image: "/images/blog/author-24.png",
      designation: "Tech Enthusiast",
    },
    tags: ["Web", "Future", "Technology"],
    publishDate: "2025-08-24",
  },
];

export default blogData;
