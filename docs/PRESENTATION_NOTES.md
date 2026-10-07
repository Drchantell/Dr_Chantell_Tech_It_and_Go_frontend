# Tech It & Go! — Simple Presentation Notes

**Author:** Dr. Chantell McDowell  
**Per Scholas Software Engineering Capstone**

These notes match the beginner-friendly presentation. They are written so I can read them almost word for word if I need to.

## Slide 1 — Tech It & Go!
“My name is Dr. Chantell McDowell. My capstone is Tech It & Go!, a technology lending library. I built it to connect my experience in libraries and makerspaces with the full-stack skills I learned at Per Scholas.”

## Slide 2 — What is Tech It & Go?
“Tech It & Go! is a full-stack technology lending library. Users can browse equipment, learn about it, and submit a request to borrow it. Staff can manage the equipment catalog.”

## Slide 3 — Why I Built It
“I built this because technology access is often limited by cost. A program may need a robotics kit, laptop, or 3D-printing tool for one project, but not be able to purchase everything. I also wanted lesson plans connected to the equipment.”

## Slide 4 — Who Uses the App?
“There are two main roles. Borrowers use the catalog and manage their own pending requests. Staff users have additional permission to manage equipment.”

## Slide 5 — The User Flow
“The main flow is browse, learn, request, and manage. I kept requests pending because borrowing equipment should still be reviewed by staff.”

## Slide 6 — Frontend Tools
“On the frontend I used HTML and CSS concepts through React, JavaScript for the logic, React for components, Vite for the project build, React Router for navigation, and Fetch to communicate with the API.”

## Slide 7 — Backend Tools
“Node.js lets me run JavaScript on the backend. Express gives me the server and routes. I use REST routes for CRUD. Middleware handles things such as authentication, JSON, CORS, and errors. dotenv keeps private values out of GitHub.”

## Slide 8 — Database Tools
“MongoDB Atlas stores the data. Mongoose helps me define the shape of that data and communicate with MongoDB from Node and Express.”

## Slide 9 — Authentication + Security
“I used bcrypt so plain passwords are not saved in the database. JWT is used after login. I also check roles and request ownership so users cannot access data that belongs to someone else.”

## Slide 10 — Full CRUD
“CRUD means Create, Read, Update, and Delete. I implemented full CRUD for equipment and lending requests. The frontend buttons connect to backend routes, and the backend saves the changes in MongoDB.”

## Slide 11 — Development + Testing Tools
“I worked in VS Code, tracked changes with Git and GitHub, used Postman while testing API routes, and added Supertest integration tests. GitHub Actions runs checks automatically when I push changes.”

## Slide 12 — Deployment Tools
“For deployment, MongoDB Atlas stores the database, Render hosts the backend API, and Vercel hosts the React frontend. Environment variables connect them without putting secrets in GitHub.”

## Slide 13 — Other Course Skills I Learned
“I also learned TypeScript, the DOM, GraphQL, OAuth, Java and Spring concepts, SQL and NoSQL concepts, Agile workflow, and AI for software engineering. I can explain those concepts, but I did not add unnecessary runtime dependencies just to make the list longer.”

## Slide 14 — Challenges I Faced
“My biggest challenges were MongoDB setup, connecting the frontend and backend, authentication, permissions, and deployment settings. Those challenges helped me understand how the complete stack works together.”

## Slide 15 — How I Worked Through Problems
“Instead of trying to fix the whole application at once, I learned to isolate the layer causing the problem. I test the database, API, and frontend separately, then reconnect the full workflow.”

## Slide 16 — Live Demo
“For my demo I will focus on the working user story instead of clicking every page. I will browse, log in, create a request, show the dashboard, and then show staff equipment management.”

## Slide 17 — What I Learned
“The biggest lesson for me is that full-stack development is about connecting layers. A button in React can eventually create a MongoDB document, but every layer in between has a job.”

## Slide 18 — Thank You
“Thank you. Tech It & Go! gave me a way to combine my professional background with the software engineering skills I learned in this course. I am happy to answer questions.”
