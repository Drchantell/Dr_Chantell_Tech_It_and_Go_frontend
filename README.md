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

- React
- Vite
- React Router
- JavaScript
- HTML
- CSS
- Fetch API
- Git
- GitHub

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
