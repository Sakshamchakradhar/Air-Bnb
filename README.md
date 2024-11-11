# Project Airbnb 🚀

### A Full Stack Web Application for Property Listings and Reviews

Visit the live demo: (https://air-bnb-pymg.onrender.com)
---

### Project Overview
**Project Airbnb** is a comprehensive platform designed for property listings and reviews, created using the Model-View-Controller (MVC) architecture to ensure a clean separation of data, interface, and business logic. The application integrates user authentication, role-based access control, dynamic content management, and interactive reviews for a seamless user experience.

---

## Key Features

### 1. MVC Architecture
- **Separation of Concerns**: Developed following the MVC framework to streamline the codebase and enhance maintainability. Clear separation between data models, user interfaces, and business logic enables easy updates and scalability.

### 2. User Authentication & Authorization
- **Secure Access**: Integrated Passport.js to handle user authentication, ensuring secure sign-up, login, and role-based access. Route protection safeguards critical functionalities for property owners and reviewers.
- **Authorization Roles**: Configured role-based access, distinguishing between regular users and property owners, ensuring controlled access to listing and review functions.

---

## Features in Detail

### 3. Listings Management (CRUD)
- **Property Listings**: Developed a complete CRUD system for property listings, allowing property owners to create, view, update, and delete listings.
- **Image Uploads**: Utilized Multer for seamless image uploads, with cloud storage through MongoDB Atlas for scalable and secure data handling.
- **Enhanced Listings**: Listings include descriptions, amenities, and images for a richer user experience.

### 4. Reviews & Ratings
- **User Reviews**: Integrated a review system that allows authenticated users to post, update, and delete reviews on property listings.
- **Ownership Checks**: Prevents unauthorized modifications to reviews, ensuring only the review owner can edit or delete their content.
- **Rating System**: Added a star-rating functionality for users to evaluate properties based on their experiences.

### 5. Data Validation & Error Handling
- **Data Validation**: Leveraged Joi for robust schema-based validation, ensuring all data inputs meet the necessary requirements.
- **Error Handling Middleware**: Created custom middleware to manage and display error messages via flash notifications, enhancing user feedback and guiding interactions.

### 6. Responsive UI Design
- **Device Compatibility**: Built with Bootstrap to create a responsive, intuitive interface that adapts to a variety of screen sizes and devices.
- **User-Friendly Navigation**: Designed an easy-to-navigate layout, providing clear paths for users to explore listings, post reviews, and manage their profiles.

### 7. MongoDB Database Integration
- **Database Design**: Designed and managed schemas for property listings and reviews, ensuring data is efficiently organized for quick access and relationships are well-defined.
- **Mongoose ORM**: Used Mongoose for smooth interactions with MongoDB, allowing for streamlined querying and data manipulation.

### 8. Custom Middleware
- **Session Management**: Implemented middleware for managing user sessions and authentication status.
- **Authorization & Validation**: Developed middleware to handle role-based access control and data validation checks, ensuring only authorized users can access or modify content.

### 9. Version Control & Deployment
- **Git & GitHub**: Managed source code with Git and GitHub, ensuring version control and collaborative development.
- **Deployment on Render**: Deployed the application on Render, with environment variables for secure integration of cloud storage and MongoDB Atlas, enhancing security.

### 10. Future Enhancements
- **Search Functionality**: Currently in development, the search feature will allow users to quickly find properties based on location, amenities, and ratings.
- **Enhanced Responsiveness**: Continued improvements to optimize the UI for all devices, providing a consistent and enjoyable user experience.

---

## Technologies Used
- **Frontend**: Bootstrap, JavaScript, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas), Mongoose
- **Authentication**: Passport.js
- **Image Uploads**: Multer
- **Data Validation**: Joi
- **Version Control**: Git, GitHub
- **Deployment**: Render

---

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/username/project-airbnb.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables for MongoDB and cloud storage.
4. Start the application:
   ```bash
   npm start
   ```

### Requirements
- Node.js and npm
- MongoDB (Atlas or Local)
- Git

---

## Contributing
We welcome contributions to Project Airbnb! Please fork the repository, create a new branch, and submit a pull request with your changes. 

---
