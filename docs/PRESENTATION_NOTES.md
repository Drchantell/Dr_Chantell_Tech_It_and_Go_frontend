# Tech It & Go! — Presentation Notes

## Slide 1 — Tech It & Go!
“Hi everyone, I’m Dr. Chantell McDowell. My capstone is Tech It & Go!, a full-stack technology lending library. I built it to connect my background in libraries and makerspaces with what we learned in this course.”

## Slide 2 — Why I Built It
Explain your background in libraries, makerspaces, STEM programs, and community partnerships. Ask the class: **What technology would you borrow first?**

## Slide 3 — The Problem
Technology can be expensive, difficult to share, and hard to track. A program also needs training or lesson ideas, not just the equipment.

## Slide 4 — My Solution
Walk through the user journey: browse → learn → request → manage → staff maintenance. Emphasize that a request begins as **pending**, not an automatic reservation.

## Slide 5 — Who Can Use It?
Educators, makerspaces, nonprofits, learners, and staff. Explain the borrower and staff roles.

## Slide 6 — Technology Stack
Keep it simple: React is what users see. Express is the API. MongoDB saves the data. JWT and bcrypt handle login/security. GitHub Actions checks the project.

## Slide 7 — How the App Works
Use one example: submitting a lending request. React sends the form to Express. Express validates it and uses Mongoose to save it. MongoDB returns the record. React displays the saved request.

## Slide 8 — Database Models
Explain the four models and references between them. A request connects a user and a piece of equipment. A lesson connects to equipment.

## Slide 9 — Frontend Features
Highlight search/filter, details, lessons, registration/login, dashboard, lending form, and staff equipment management.

## Slide 10 — Backend + API
Explain that CRUD is protected by business rules. Borrowers cannot change staff equipment. Borrowers can manage only their own pending requests.

## Slide 11 — Authentication + Security
Use this easy explanation:
- Hashing protects saved passwords.
- Authentication answers: **Who are you?**
- Authorization answers: **What are you allowed to do?**

## Slide 12 — Full CRUD
This directly addresses the capstone rubric. Say: **I implemented full CRUD twice—equipment and lending requests.**

## Slide 13 — Challenges
Talk naturally about MongoDB credentials, frontend/backend communication, JWT authentication, CRUD rules, CORS/deployment, and testing.

## Slide 14 — How I Worked Through Challenges
Explain the process: read the error → isolate one layer → run a small check → reconnect the full flow → document the solution.

## Slide 15 — Testing
Explain that the backend integration test covers registration, login, permissions, ownership, MongoDB, equipment CRUD, and lending-request CRUD. The frontend also has a production build check.

## Slide 16 — Deployment
Explain the intended chain: MongoDB Atlas → Render API → Vercel frontend. Do not show real passwords or secrets.

## Slide 17 — Live Demo
Use the demo checklist in `DEMO_SCRIPT.md`.

## Slide 18 — Icebox
Show that you intentionally kept larger features out of the MVP so the core project could be completed correctly.

## Slide 19 — What This Shows About Me
Connect your professional background to your software engineering skills. This is a portfolio project, not only a class assignment.

## Slide 20 — Thank You
Close with: “This project helped me understand how all the pieces of a full-stack application work together. Thank you, and I’d love your questions or feedback.”
