# Tech It & Go! Frontend

## About My Project

Tech It & Go! is my Per Scholas capstone project. I created it as a technology lending library where educators, makerspaces, nonprofits, and learners can browse technology, learn how it can be used, and submit borrowing requests.

I chose this project because it connects my background in libraries and makerspaces with what I am learning in full-stack software development.

This repository contains the frontend of my application. I built it with React and Vite.

## What the Frontend Does

The frontend allows a user to:

- View the home page
- Browse the equipment catalog
- Search and filter equipment
- View one equipment item
- View related lesson plans
- Create an account
- Log in
- Submit a lending request
- View saved requests in a dashboard
- Edit a pending request
- Delete a pending request

Staff users can also open the equipment management page to add, edit, and remove equipment.

## Full CRUD in the Frontend

My project includes full CRUD for the main resources.

### Lending Requests

- Create - submit a new request
- Read - view saved requests in the dashboard
- Update - edit a pending request
- Delete - remove a pending request

### Equipment for Staff

- Create - add equipment
- Read - view the equipment catalog
- Update - edit equipment information
- Delete - remove or archive equipment

## Main Pages

- Home
- Equipment Catalog
- Equipment Details
- Lesson Plan
- Register
- Login
- User Dashboard
- Lending Request Form
- Staff Equipment Management

## How the Frontend Connects to the Backend

I use the Fetch API to send requests from React to my Express backend.

For example:

1. A user fills out the lending request form.
2. React sends the information to the backend API.
3. The backend saves the request in MongoDB.
4. The dashboard requests the saved information from the backend.
5. React displays the saved request on the screen.

The API address is stored in the `VITE_API_URL` environment variable.

## Authentication

After a user registers or logs in, the backend sends back a JWT token.

The frontend stores that token in localStorage and sends it with protected requests.

Protected pages include:

- Dashboard
- Lending Request Form
- Staff Equipment Management

Staff-only pages also check the user's role.

## Design

I wanted Tech It & Go! to feel creative, bold, and connected to makerspace learning.

I used:

- Hot pink
- Teal
- Purple
- Mint
- Black
- White

I also use the Tech It & Go! logo throughout the app and Arial as the main font so the pages stay consistent.

## Technologies I Used

This capstone connects the main tools I used across the course:

- HTML5
- CSS3
- JavaScript (ES6+)
- React
- Vite
- React Router
- Fetch API
- Node.js
- Express.js
- REST APIs
- Express middleware
- MongoDB Atlas
- Mongoose
- CRUD
- bcrypt
- JSON Web Tokens (JWT)
- dotenv
- CORS
- Git
- GitHub
- Postman
- Supertest
- Node test runner
- GitHub Actions
- Render
- Vercel

I also documented additional course concepts I learned, including TypeScript, the DOM, GraphQL, OAuth 2.0, Java/Spring Boot concepts, SQL, NoSQL, Agile workflow, and AI for Software Engineering. I did not add unnecessary runtime dependencies just to make the list longer.

See `docs/COURSE_TOOLS.md` for the full breakdown of what I used directly and what I learned as a course concept.

## How to Run the Frontend

1. Open the frontend folder in VS Code.
2. Open the terminal.
3. Install the packages:

```bash
npm install
```

4. Create a file named `.env`.
5. Add:

```env
VITE_API_URL=http://localhost:5000/api
```

6. Start the React application:

```bash
npm run dev
```

7. Open the Vite address shown in the terminal.

The frontend includes sample equipment data so I can still view the catalog if the backend is not running. Registration, login, saved requests, and staff tools require the backend.

## Build Check

I can check the production build with:

```bash
npm run build
```

The project also includes a GitHub Actions build check.

## Deployment

The frontend is prepared for Vercel deployment.

I included a `vercel.json` file so React Router pages can still load when a user refreshes the browser.

Deployment instructions are in:

`DEPLOYMENT.md`

## Capstone Presentation Materials

I included presentation support files with the frontend repository so I can use the same project story for my class presentation and portfolio.

- `presentation/generate-presentation.js` - source used to build the PowerPoint presentation
- `presentation/README.md` - presentation folder guide
- `docs/PRESENTATION_NOTES.md` - slide-by-slide speaking notes
- `docs/DEMO_SCRIPT.md` - live demo order and backup plan
- `docs/PROJECT_SUMMARY.md` - short full-stack project overview
- `docs/FINAL_CHECKLIST.md` - final code, testing, documentation, and deployment checklist
- `docs/COURSE_TOOLS.md` - course tools and concepts explained in beginner-friendly language

The `Capstone Presentation` GitHub Actions workflow can build the PowerPoint and save it as a downloadable workflow artifact.

## Challenges I Faced

One of my biggest challenges was connecting the frontend to the backend and understanding how the data moves through the full application. At first, it was easier for me to think about the React pages by themselves, but this project helped me understand that the frontend has to send requests to the API and wait for the backend and MongoDB to respond.

Another challenge was authentication. I had to understand how the JWT token is created after login, stored in localStorage, and sent with protected API requests. I also had to make sure protected pages reacted correctly if the login expired.

Full CRUD was another important challenge. I wanted users to be able to create, read, update, and delete lending requests, while staff users could manage equipment. I had to make sure the forms, dashboard, and API calls stayed in sync after information was added, edited, or deleted.

I also spent time keeping the design consistent across the application. I wanted the project to look like one complete product, so I worked with the same Tech It & Go! logo, colors, font, buttons, cards, and page layouts throughout the site.

Responsive design was also something I had to think about. I needed the layout to work on different screen sizes without losing the bold makerspace style I wanted.

Preparing the frontend for deployment gave me another new challenge. I had to learn how environment variables work, how the live frontend knows the backend API address, and why React Router needs special configuration when the application is deployed.

## What I Learned

This project helped me practice how the frontend and backend work together.

I learned how to:

- Create React pages and routes
- Manage form data with state
- Use protected routes
- Work with JWT authentication
- Send API requests
- Display MongoDB data in React
- Build full CRUD features
- Create responsive styling
- Prepare a React project for deployment

## Author

Dr. Chantell McDowell  
Per Scholas Student
