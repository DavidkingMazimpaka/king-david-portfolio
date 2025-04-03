// src/data/projects.js
export const projects = [
    {
      id: 1,
      title: "NutriGuard AI",
      description: "AI-Powered EarlyMalnutrition Detection in Children under 5 years old",
      image: "/api/placeholder/600/400",
      technologies: ["Typescript", "FastAPI", "PostgreSQL"," TensorFlow", "Keras"],
      features: [
        "Detecting malnutrition Multiclass Classification",
        "Recommendation System",
        "Personalized Nutrition Plan",
        "Child Growth Monitoring"
      ],
      challenges: "Predicting the severity of malnutrition in children under 5 years old and recommending immediate intervention.",
      solution: "Created a model that can predict the severity of malnutrition in children under 5 years old and recommending immediate intervention.",
      demoUrl: "https://nutriguard-ai.onrender.com/",
      codeUrl: "https://github.com/DavidkingMazimpaka/NutriGuard_Mission_Capstone",
      fullDescription: "This project was built to address the need for early malnutrition detection in children under 5 years old in Western Province of Rwanda. The model can predict the severity of malnutrition a child and recommending immediate intervention."
    },
    {
      id: 2,
      title: "Task Management Application",
      description: "A Kanban-style project management tool with collaborative features, deadline tracking, and customizable workflows.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Firebase", "Styled-Components"],
      features: [
        "Drag-and-drop task management",
        "Team collaboration with real-time updates",
        "Customizable project workflows",
        "Task prioritization and deadline tracking"
      ],
      challenges: "Creating a seamless drag-and-drop experience across different devices with real-time updates for all team members.",
      solution: "Implemented the React DnD library with custom hooks to handle touch and mouse events, combined with Firebase real-time database for synchronization.",
      demoUrl: "https://example.com/task-app",
      codeUrl: "https://github.com/yourusername/task-manager",
      fullDescription: "This task management application was designed to streamline team workflows and improve productivity. The Kanban board interface allows for visual task tracking, while real-time updates ensure everyone stays in sync.\n\nI built this application using TypeScript to ensure type safety and reduce runtime errors. Firebase was used for authentication, database, and hosting, creating a fully integrated solution."
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      description: "A mobile-first web application for tracking workouts, nutrition, and fitness progress with personalized insights.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      features: [
        "Personalized workout plans based on user goals",
        "Nutrition tracking with macro calculations",
        "Progress visualization with interactive charts",
        "Social features for workout sharing and challenges"
      ],
      challenges: "Creating an offline-first experience that syncs data when connection is restored, while maintaining a responsive UI.",
      solution: "Implemented service workers and IndexedDB for offline data storage, with a custom synchronization system when connectivity is restored.",
      demoUrl: "https://example.com/fitness-app",
      codeUrl: "https://github.com/yourusername/fitness-tracker",
      fullDescription: "The Fitness Tracking App was built to help users maintain consistent workout routines and nutrition habits. It provides personalized recommendations based on user data and goals.\n\nThe application features a full-stack implementation with React on the frontend and a Node.js/Express backend with MongoDB for data storage. Authentication is handled through JWT with refresh token rotation for enhanced security."
    }
  ];