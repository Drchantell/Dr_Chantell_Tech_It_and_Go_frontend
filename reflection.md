# Tech It & Go! Frontend Reflection

I chose Tech It & Go! because it connects my background in libraries and makerspaces with what I am learning in software engineering.

The frontend is now built with React and Vite. I created a home page, equipment catalog, equipment details, lesson plans, registration, login, a personal dashboard, a borrowing request form, and a staff equipment management page. I also added my Tech It & Go! logo and used the same Arial font and color palette throughout the app.

One challenge was understanding how the frontend and backend work together. The React pages are what the user sees, but the information needs to come from the Express API and MongoDB. I learned how to use fetch requests, protected routes, localStorage for the login token, and React state to update the screen.

Another challenge was keeping the project beginner-friendly while still meeting the full-stack requirements. I kept the pages simple and separated the work into smaller components and routes. The catalog also has sample data so I can still preview the design before the backend is connected locally.

The frontend now supports the full borrowing flow. A user can register, log in, browse equipment, open a lesson, submit a request, and manage pending requests from the dashboard. Staff users also have a separate equipment management screen.

The production React build check passes in GitHub Actions. My remaining external setup is to connect the frontend to the live backend URL when I deploy the application.

After graduation, I would like to add favorites, a reservation calendar, more lesson plans, image uploads, and additional accessibility improvements.

Author: Dr. Chantell McDowell  
Per Scholas Student
