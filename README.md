Job Portal Application (Front-End)

Overview
The Job Portal Application is designed to connect job seekers with potential employers. It provides a seamless experience for users to search for jobs, apply for positions, and manage their applications. Recruiters can post job listings, review applications, and manage their recruitment process.

Features
User authentication and authorization
Job search and filtering
Job application submission and tracking
Recruiter job posting and management
Role-based access control
Responsive design for mobile and desktop
Technologies Used
Backend: Java 22, Spring Boot, Spring Data JPA, Spring Security, Lombok
Frontend: Angular
Database: PostgreSQL
Tools: Maven, Git, Docker
Getting Started
Prerequisites
JDK 22
Node.js and npm
PostgreSQL
Docker (optional for containerized deployment)
Installation
Clone the repository

git clone https://github.com/mahasha/job-portal.git
cd job-portal
Backend Setup

Navigate to the backend directory:

cd backend
Update the application.properties with your PostgreSQL configuration:

spring.datasource.url=jdbc:postgresql://localhost:5432/jobportal
spring.datasource.username=yourusername
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
Build and run the backend application:

mvn clean install
mvn spring-boot:run
Frontend Setup

Navigate to the frontend directory:

cd frontend
Install dependencies and run the Angular application:

npm install
ng serve
Access the Application

Open your browser and navigate to http://localhost:4200 for the frontend and http://localhost:8080 for the backend.
