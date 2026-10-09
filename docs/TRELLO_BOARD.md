# Tech It & Go! — Trello Capstone Board

**Dr. Chantell McDowell**

**Borrow the tech. Build your next big idea.**

[Open the live Trello board](https://trello.com/b/kTUE5MaX/)

Snapshot captured October 9, 2026. This document preserves the board’s current list placement and card descriptions; it does not automatically synchronize with Trello. List placement is copied as observed and is not an independent verification of implementation progress. Repeated description text on the source cards is shown once here.

| List | Cards |
|---|---:|
| 💗 TO DO | 19 |
| ✅ DONE | 3 |
| 🧊 ICEBOX | 8 |

## 💗 TO DO

### 01. Create frontend and backend repositories

Create separate GitHub repositories for the frontend and backend. Keep the code organized, add a clear README to each repository, and include both links in the project plan.

[Open Trello card](https://trello.com/c/djCfvgTU/)

### 02. Set up React/Vite and Express

Set up the React frontend with Vite and the Express backend with Node.js. Confirm that both applications start correctly and that the frontend can communicate with the backend.

[Open Trello card](https://trello.com/c/JInx3gwU/)

### 03. Connect MongoDB Atlas using .env

Connect the backend to MongoDB Atlas. Store the private connection string in a .env file, keep .env out of GitHub, and provide a safe .env.example file without passwords.

[Open Trello card](https://trello.com/c/Pkh0TFWE/)

### 04. Create three Mongoose models

Create Equipment, LessonPlan, and LendingRequest models. Add required fields and validation, link lessons to equipment, and give every new lending request a pending status.

[Open Trello card](https://trello.com/c/x3OH2Y1o/)

### 05. Seed sample equipment and linked lessons

Add sample robotics kits, computers, coding resources, 3D-printing tools, and entrepreneurship resources. Include related lessons, borrowing rules, software license information, quantities, and on-site-use restrictions.

[Open Trello card](https://trello.com/c/K3AVNNxI/)

### 06. Build and test equipment CRUD API

Create and test API routes to view, add, update, and delete equipment. Return clear validation and not-found messages when information is missing or a record cannot be found.

[Open Trello card](https://trello.com/c/YiQSIs83/)

### 07. Build lending request API with date validation

Create an API route that saves lending requests to MongoDB. Validate required contact information and requested dates, and make it clear that a saved request is pending rather than guaranteed.

[Open Trello card](https://trello.com/c/ol3TuERI/)

### 08. Build home and catalog pages

Create a welcoming home page and an easy-to-browse equipment catalog. Explain the purpose of Tech It & Go! and feature the message: “Borrow the tech. Build your next big idea.”

[Open Trello card](https://trello.com/c/Bq8aENVy/)

### 09. Build equipment details and lesson list

Show each item’s description, image, available quantity, borrowing rules, and related lesson plans. Clearly identify equipment that is available for on-site use only.

[Open Trello card](https://trello.com/c/I9QY5Oei/)

### 10. Build lending request form and confirmation

Create a form that collects contact information, selected equipment, requested dates, and purpose. After submission, show: “Request submitted—pending staff confirmation.”

[Open Trello card](https://trello.com/c/OSClydpZ/)

### 11. Build add/edit/delete equipment interface

Create beginner-friendly forms for adding and editing equipment. Require confirmation before deletion and verify that every change remains after the page is refreshed.

[Open Trello card](https://trello.com/c/UYmBzICz/)

### 12. Add search and category/availability filters

Let users search the catalog and filter items by category and current availability. Availability should use the quantity maintained by staff.

[Open Trello card](https://trello.com/c/Ph6YpqjU/)

### 13. Add responsive hot pink, teal, purple, and mint styling

Apply the MakeHERspace-inspired palette with hot pink, teal, purple, mint, black, and white. Keep text bold and readable, support keyboard use, and make every page responsive on phones, tablets, and computers.

[Open Trello card](https://trello.com/c/4OuxPlAC/)

### 14. Add Tech It & Go! logo

Place the transparent Tech It & Go! logo in the navigation, home page, and other appropriate project materials. Keep the proportions correct and add meaningful alt text for accessibility.

[Open Trello card](https://trello.com/c/FJsn4pMb/)

### 15. Verify end-to-end database persistence and errors

Test the complete path from the frontend to Express and MongoDB Atlas. Confirm that records persist, then test loading, empty, validation, not-found, and server-error states.

[Open Trello card](https://trello.com/c/YoPRtiWV/)

### 16. Deploy frontend and backend; configure CORS

Move the working local application to live hosting. Deploy both apps, configure private production environment variables, connect the live frontend to the live backend, allow the frontend through CORS, and test the full live experience.

[Open Trello card](https://trello.com/c/X16rofqo/)

### 17. Write README and reflection

Write a simple first-person README and reflection for both repositories. Include setup instructions, features, technology, challenges I faced, what I learned, future improvements, live links, and “Author: Dr. Chantell McDowell, Per Scholas Student.”

[Open Trello card](https://trello.com/c/P1GAyeDS/)

### 18. Prepare and rehearse class presentation

Prepare a clear presentation covering the problem, design choices, React, Express, MongoDB, and the live demo. Add a short audience activity, backup screenshots, simple speaking notes, and timed practice.

[Open Trello card](https://trello.com/c/2DQXjx35/)

### 19. Check rubric and submit project links

Compare the finished project with every capstone requirement. Test each submitted link and include the frontend repository, backend repository, live website, Trello board, and presentation.

[Open Trello card](https://trello.com/c/jFRGqlxN/)

## ✅ DONE

### Project idea and proposal drafted

The Tech It & Go! concept, intended users, MVP, technology choices, and future improvements have been drafted in clear beginner-friendly language.

[Open Trello card](https://trello.com/c/Va2nNBpX/)

### Wireframes, ERD, user stories, and REST route plan prepared

The main planning documents are prepared, including page wireframes, the database relationship diagram, user stories, and the planned REST API routes.

[Open Trello card](https://trello.com/c/qU0OXgcL/)

### Name and app name entered in mastersheet

Dr. Chantell McDowell and the Tech It & Go! application name have been entered in the class mastersheet.

[Open Trello card](https://trello.com/c/cjOIdOhv/)

## 🧊 ICEBOX

### User registration and login

Future feature: let users create an account, sign in securely, and view their own lending requests.

[Open Trello card](https://trello.com/c/Z2jF6NhQ/)

### Protected admin role and routes

Future feature: restrict equipment management and staff tools to authorized administrators.

[Open Trello card](https://trello.com/c/mnMmy9e0/)

### Staff approval workflow

Future feature: let staff approve, decline, and update the status of each lending request.

[Open Trello card](https://trello.com/c/5ncNDKEg/)

### Checkout and return tracking

Future feature: record expected and actual checkout and return dates, along with the equipment condition.

[Open Trello card](https://trello.com/c/o7JqugHQ/)

### Overdue reminders and emails

Future feature: send request updates, return reminders, and overdue notices by email.

[Open Trello card](https://trello.com/c/Nnxgb5Uf/)

### QR codes and favorites

Future feature: let a QR code open equipment details and let signed-in users save favorite items.

[Open Trello card](https://trello.com/c/l2YD0tnz/)

### Reservation calendar with date-based availability

Future feature: show borrowing dates on a calendar and calculate availability across approved reservations.

[Open Trello card](https://trello.com/c/MAgwReu4/)

### Lending analytics

Future feature: report lending activity, popular equipment, overdue items, and program usage trends.

[Open Trello card](https://trello.com/c/lKRNCjkr/)

## Project repositories

- [Frontend](https://github.com/Drchantell/Dr_Chantell_Tech_It_and_Go_frontend)
- [Backend](https://github.com/Drchantell/Tech_It_and_Go_Backend)

Author: Dr. Chantell McDowell, Per Scholas Student
