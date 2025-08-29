export const PricingData = {
  serviceCategories: [
    {
      name: "Web Development",
      packages: [
        {
          packageName: "Basic Website",
          price: "500",
          subtitle: "Perfect for small businesses and portfolios",
          offers: [
            {
              text: "Responsive Design with Tailwind CSS",
              status: "active" as const,
            },
            { text: "Up to 5 pages", status: "active" as const },
            { text: "Contact Form Integration", status: "active" as const },
            { text: "SEO Optimization", status: "active" as const },
            { text: "Basic Animations", status: "active" as const },
            { text: "1 Month Technical Support", status: "active" as const },
            { text: "Hosting Setup (Additional)", status: "inactive" as const },
            { text: "Content Management System", status: "inactive" as const },
          ],
        },
        {
          packageName: "Business Website",
          price: "1200",
          subtitle: "Ideal for growing businesses",
          offers: [
            { text: "All Basic features included", status: "active" as const },
            { text: "Up to 10 pages", status: "active" as const },
            { text: "Custom UI/UX Design", status: "active" as const },
            {
              text: "Advanced Animations with GSAP",
              status: "active" as const,
            },
            { text: "Blog Integration", status: "active" as const },
            { text: "SEO Optimization", status: "active" as const },
            { text: "3 Months Technical Support", status: "active" as const },
            { text: "Basic Admin Panel", status: "active" as const },
          ],
        },
        {
          packageName: "E-commerce Platform",
          price: "2500",
          subtitle: "Complete online store solution",
          offers: [
            {
              text: "All Business features included",
              status: "active" as const,
            },
            { text: "Product Management System", status: "active" as const },
            { text: "Shopping Cart & Checkout", status: "active" as const },
            { text: "Payment Gateway Integration", status: "active" as const },
            { text: "User Authentication", status: "active" as const },
            { text: "Order Management System", status: "active" as const },
            { text: "Inventory Management", status: "active" as const },
            { text: "6 Months Technical Support", status: "active" as const },
          ],
        },
      ],
    },
    {
      name: "Mobile & AI",
      packages: [
        {
          packageName: "Mobile App",
          price: "2000",
          subtitle: "Cross-platform mobile application",
          offers: [
            { text: "React Native Development", status: "active" as const },
            { text: "iOS & Android Compatibility", status: "active" as const },
            { text: "UI/UX Design", status: "active" as const },
            { text: "API Integration", status: "active" as const },
            { text: "Push Notifications", status: "active" as const },
            { text: "App Store Deployment", status: "active" as const },
            { text: "3 Months Maintenance", status: "active" as const },
            { text: "Offline Functionality", status: "inactive" as const },
          ],
        },
        {
          packageName: "AI Integration",
          price: "1500",
          subtitle: "Add AI capabilities to your application",
          offers: [
            { text: "AI Chatbot Integration", status: "active" as const },
            { text: "Machine Learning Features", status: "active" as const },
            { text: "Real-time Data Processing", status: "active" as const },
            {
              text: "API Integration with AI Services",
              status: "active" as const,
            },
            { text: "Custom AI Model Development", status: "active" as const },
            {
              text: "Data Analysis & Visualization",
              status: "active" as const,
            },
            { text: "3 Months Technical Support", status: "active" as const },
            { text: "Training & Documentation", status: "active" as const },
          ],
        },
        {
          packageName: "Full-Stack Project",
          price: "4000",
          subtitle: "Complete web application solution",
          offers: [
            { text: "Next.js Frontend Development", status: "active" as const },
            { text: "Node.js Backend API", status: "active" as const },
            {
              text: "Database Design (MongoDB/PostgreSQL)",
              status: "active" as const,
            },
            { text: "User Authentication System", status: "active" as const },
            { text: "Admin Dashboard", status: "active" as const },
            {
              text: "Real-time Features (WebSocket)",
              status: "active" as const,
            },
            { text: "Deployment & DevOps Setup", status: "active" as const },
            { text: "6 Months Technical Support", status: "active" as const },
          ],
        },
      ],
    },
  ],
  additionalServices: [
    {
      name: "SEO Optimization",
      price: "From $300",
      description: "Improve your website's visibility and ranking",
    },
    {
      name: "Website Maintenance",
      price: "From $100/month",
      description: "Regular updates and technical support",
    },
    {
      name: "API Development",
      price: "From $800",
      description: "Custom RESTful API development",
    },
    {
      name: "Consultation",
      price: "$50/hour",
      description: "Technical advice and project planning",
    },
  ],
};
