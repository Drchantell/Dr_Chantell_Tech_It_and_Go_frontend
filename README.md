# Tech It & Go! Frontend

Tech It & Go! is my Per Scholas capstone project. It is a technology lending library for educators, makerspaces, nonprofits, and learners.

The frontend is built with React and Vite. Users can browse equipment, search and filter the catalog, view equipment details and lesson plans, create an account, log in, submit lending requests, and manage their own pending requests. Staff users also have an equipment management page.

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

## Design

I used my Tech It & Go! logo throughout the app where branding is helpful. The color palette includes hot pink, teal, purple, mint, black, and white. Arial is used consistently throughout the application.

## Run the Frontend

1. Open this folder in VS Code.
2. Run `npm install`.
3. Copy `.env.example` to a new file named `.env`.
4. Keep `VITE_API_URL=http://localhost:5000/api` when running the backend locally.
5. Run `npm run dev`.
6. Open the local Vite address shown in the terminal.

The frontend includes sample catalog data as a browsing fallback when the API is offline. Login, saved requests, and staff tools require the Express backend and MongoDB.

## Technology

React, Vite, React Router, JavaScript, HTML, CSS, Fetch API, Git, and GitHub.

## Author

Dr. Chantell McDowell  
Per Scholas Student
