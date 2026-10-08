# Tech It & Go! — 7-Minute Read-Along Presentation Script

**Author:** Dr. Chantell McDowell  
**Per Scholas Software Engineering Capstone**

## Slide 1 — Introduction | 0:00–0:35
My name is Dr. Chantell McDowell, and my capstone project is **Tech It & Go!** It is a full-stack technology lending library. I built it to connect my background in libraries and makerspaces with the software engineering skills I learned at Per Scholas. The idea is simple: **borrow the tech, then build your next big idea.**

## Slide 2 — What is Tech It & Go? | 0:35–1:20
I built Tech It & Go! around a problem I have seen in libraries and makerspaces. Technology equipment can be expensive, and a school, nonprofit, or learner may only need a tool for one short project. My solution is a lending library where people can browse equipment, learn how it can be used, and submit a borrowing request. I also connected lesson plans to equipment because access to a tool is more useful when people also have guidance for using it.

## Slide 3 — What Can a User Do? | 1:20–2:05
I created two main user roles. A borrower can browse the public catalog, read equipment details and lessons, register, log in, and submit a request. A borrower can also edit or delete their own pending request. A staff user has additional permissions to manage the equipment catalog. That means staff can create, update, and remove equipment records. I kept the roles separate because not every user should be able to change the catalog.

## Slide 4 — How the Full Stack Works | 2:05–3:05
The easiest way for me to explain the full stack is in three parts. First is the **frontend**. I used React, Vite, JavaScript, React Router, CSS, and the Fetch API. That is the part users see and interact with. Second is the **backend**. Node.js runs JavaScript on the server, and Express gives me my routes and REST API. Middleware handles things like authentication, CORS, JSON, and errors. Third is **MongoDB Atlas**. Mongoose helps my Node and Express backend communicate with MongoDB and validate the data. The important lesson for me was understanding that these are separate layers that work together as one application.

## Slide 5 — CRUD + Authentication | 3:05–4:05
One of the main capstone requirements is full CRUD. CRUD means **Create, Read, Update, and Delete**. I implemented full CRUD for equipment and lending requests. The React frontend sends the request, the Express backend checks the rules, and MongoDB saves the change. I also added authentication. bcrypt hashes passwords before they are saved. JWT identifies a logged-in user on protected requests. I also check user roles and request ownership, so a borrower cannot change staff-only equipment and cannot access another borrower's request.

## Slide 6 — Tools I Used and Learned | 4:05–5:00
This project let me use many of the tools from the course directly. Those include HTML and CSS concepts, JavaScript, React, Vite, React Router, Node.js, Express, REST APIs, MongoDB, Mongoose, bcrypt, JWT, dotenv, CORS, Git, GitHub, Postman, and automated testing. I also learned TypeScript, the DOM, GraphQL, OAuth, Java and Spring concepts, SQL concepts, Agile workflow, and AI for software engineering. I did not force every technology into the project just to make the list longer. I chose the tools that fit this MVP.

## Slide 7 — Challenges + Testing | 5:00–5:50
The hardest parts were MongoDB setup, connecting the frontend and backend, understanding authentication and permissions, and preparing the app for deployment. I also learned that debugging is easier when I test one layer at a time. I can check the database connection, test the API in Postman, test the frontend separately, and then test the complete workflow. I added automated integration tests and GitHub Actions so important backend and frontend checks run when I push changes.

## Slide 8 — Deployment Status | 5:50–6:25
The project is prepared for deployment, but I want to be accurate: the final live deployment is **not complete yet**. MongoDB Atlas will be the cloud database, Render will host the Node and Express backend, and Vercel will host the React frontend. The remaining work is entering the private environment variables in those services, creating the live deployments, and testing the public URLs from beginning to end.

## Slide 9 — Demo + Close | 6:25–7:00
For a live demo, I would keep it simple. I would browse the catalog, log in, submit a borrowing request, open the dashboard, and then show the staff equipment CRUD page. My biggest takeaway from this capstone is that full-stack development is really about connecting layers. A click in React can travel through an API, follow security rules, and finally create or update a MongoDB document.

I also want to end by showing that I have working GitHub commits for both parts of the project. My frontend working commit is `17d372d` and my backend working commit is `98d8906`. Both were followed by successful GitHub Actions checks. That gives me a clear working point to return to if I make another change later.

Thank you. I am happy to answer questions.

---

## Quick delivery tip
Speak naturally rather than racing the clock. The script is designed for about seven minutes at a comfortable pace. If you run long, shorten Slide 6 by naming only the main tools and saying, “I also learned several additional technologies during the course.”
