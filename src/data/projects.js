// src/data/projects.js
import IOTImage from '../assets/images/IOT.png';
import StrokeImage from '../assets/images/F3.png';
import MobileAppImage from '../assets/images/Mobile-App.png';

export const projects = [
    {
      id: 1,
      title: "Air Quality Monitoring System",
      description: "An IoT-based system built on ESP8266 that monitors air quality and environmental parameters in real-time.",
      image: IOTImage,
      technologies: ["ESP8266", "Firebase", "Adafruit IO", "IoT", "C++"],
      features: [
        "Real-time air quality monitoring",
        "Temperature and humidity tracking",
        "CO2 level detection with alert system",
        "Cloud data storage and visualization",
        "16x2 LCD display for local monitoring"
      ],
      challenges: "Integrating multiple sensors with ESP8266, ensuring reliable data transmission to cloud platforms, and implementing real-time alerts for CO2 threshold breaches.",
      solution: "Developed a robust IoT system using ESP8266 that successfully integrates multiple sensors, provides real-time data visualization, and implements cloud storage with Firebase and Adafruit IO for comprehensive monitoring.",
      demoUrl: "https://github.com/DavidkingMazimpaka/Air-Pollution-Monitoring-System/blob/main/README.md",
      codeUrl: "https://github.com/DavidkingMazimpaka/Air-Pollution-Monitoring-System",
      fullDescription: "This project is an Air Quality Monitoring System built on the ESP8266 platform. It uses multiple sensors to monitor air quality and environmental parameters, such as temperature, humidity, CO2 levels, and various other gases. The system sends real-time data to both Firebase and Adafruit IO for cloud storage and monitoring. The data is also displayed on a 16x2 LCD screen and triggers a buzzer for CO2 concentration alerts when levels exceed a set threshold."
    },
    {
      id: 2,
      title: "Stroke Analysis and Prediction",
      description: "A machine learning system that predicts stroke risk based on patient demographics, medical history, and lifestyle factors.",
      image: StrokeImage,
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      features: [
        "Patient risk assessment based on multiple parameters",
        "Analysis of demographic and medical factors",
        "Multiple classification algorithm comparison",
        "Performance evaluation metrics",
        "Data visualization and insights"
      ],
      challenges: "Handling imbalanced dataset, selecting optimal features, and choosing the most accurate classification algorithm for stroke prediction.",
      solution: "Implemented various classification algorithms including Random Forest, SVM, and Logistic Regression, with proper data preprocessing and feature selection techniques to achieve optimal prediction accuracy.",
      demoUrl: "https://drive.google.com/file/d/1ANj0EKzx_8Xcy6GPzAvEbJ4Cc7p8ZMla/view?usp=sharing",
      codeUrl: "https://github.com/DavidkingMazimpaka/Stroke_Analysis_and_Prediction",
      fullDescription: "This project aims to predict whether a patient is likely to have a stroke based on various input parameters such as gender, age, medical conditions, and smoking status. The dataset contains information about patients, including their unique identifier, demographic details, medical history, and whether they have experienced a stroke.\n\nThe main objective of this project is to explore different classification algorithms and evaluate their performance in predicting stroke risk. The system analyzes various factors including age, gender, hypertension, heart disease, smoking status, and other medical indicators to provide accurate risk assessment."
    },
    {
      id: 3,
      title: "NOBOFA Nutrition Care",
      description: "A comprehensive nutrition care and awareness platform offering natural health products and wellness solutions.",
      image: MobileAppImage,
      technologies: ["Flutter", "Firebase", "Provider", "GetX", "Stripe"],
      features: [
        "Cross-platform mobile application for iOS and Android",
        "Product showcase for Young Look Cream and Powder",
        "NONOKA Tea and Aloe Vera tea product information",
        "Nutrition and wellness education resources",
        "Secure payment processing and order management"
      ],
      challenges: "Creating an engaging platform that effectively communicates the benefits of natural health products while providing a seamless shopping experience.",
      solution: "Developed a user-friendly e-commerce platform with detailed product information, educational resources, and secure payment processing to promote natural health and wellness.",
      demoUrl: "https://nobofastore.com",
      codeUrl: "https://github.com/DavidkingMazimpaka/NOBOFA-App",
      fullDescription: "NOBOFA is a nutrition care and awareness platform dedicated to promoting natural health and wellness. The platform offers a range of carefully selected products including Young Look Cream and Powder, NONOKA Tea, and Aloe Vera tea.\n\nThe application provides comprehensive information about each product's benefits and usage, along with educational resources about nutrition and wellness. The platform combines e-commerce functionality with educational content to help users make informed decisions about their health and wellness journey."
    }
  ];