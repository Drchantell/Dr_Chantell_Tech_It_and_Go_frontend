# Tech It & Go! — Project Summary

**Tagline:** Borrow the tech. Build your next big idea.

## What I Built

Tech It & Go! is my full-stack Per Scholas capstone project. I created a technology lending library for educators, makerspaces, nonprofits, and learners. Users can browse technology equipment, review related lesson plans, register and log in, submit lending requests, and manage their pending requests. Staff users have a protected equipment management area.

## Why I Chose This Project

I wanted my capstone to connect what I learned in software engineering with my professional background in libraries, makerspaces, STEM programming, and community access. Instead of creating a generic inventory application, I designed a system around a real problem: organizations may need technology without being able to purchase every tool themselves.

## Main Technologies

- React + Vite
- React Router
- JavaScript, HTML, CSS
- Node.js + Express
- MongoDB Atlas + Mongoose
- bcrypt
- JSON Web Tokens
- dotenv + CORS
- Supertest
- GitHub + GitHub Actions
- Prepared for Render + Vercel deployment

## Full CRUD

### Lending Requests
- Create a request
- Read all of my requests or one request
- Update my own pending request
- Delete my own pending request

### Equipment
- Staff can create equipment
- Anyone can read available equipment
- Staff can update equipment
- Staff can delete equipment, or archive it when lending history exists

## Database Models

- User
- Equipment
- LessonPlan
- LendingRequest

## Security

- Passwords are hashed with bcrypt
- JWT tokens are used for authenticated requests
- Protected routes check login state
- Backend authorization checks borrower/staff roles
- Borrowers can access only their own lending requests
- Private environment variables are excluded from GitHub

## Challenges I Faced

The most important challenges were understanding MongoDB Atlas credentials, connecting the React frontend to the Express API, managing JWT login state, enforcing full CRUD business rules, learning CORS for deployment, and moving from manual testing to an integration test.

## What I Learned

This project helped me understand that a full-stack application is a connected system. The frontend, backend, database, authentication, validation, testing, and deployment settings all have to work together. I also learned to debug one layer at a time instead of treating the entire application as one problem.
