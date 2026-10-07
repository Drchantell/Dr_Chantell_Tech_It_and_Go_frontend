# Tech It & Go! — Live Demo Script

Keep the demo focused and calm. The goal is to show the complete workflow, not every file in the project.

## Before Class

- Open the deployed app or local frontend.
- Confirm the backend health route is working.
- Have one borrower account ready.
- Have one staff account ready.
- Keep the GitHub repositories open in separate tabs.
- Close unrelated tabs and notifications.

## Demo Order

### 1. Home Page
Say: “This is Tech It & Go!, a technology lending library. The user can start by browsing the catalog.”

### 2. Equipment Catalog
Use the search or category filter.

Say: “React updates the catalog based on what the user is searching for.”

### 3. Equipment Details + Lesson
Open one item and then its related lesson plan.

Say: “I wanted this to be more than inventory, so I connected equipment to learning content.”

### 4. Login/Register
Log in as a borrower.

Say: “The backend checks the account and returns a JWT token for protected requests.”

### 5. Create a Lending Request
Submit a request.

Say: “This is the Create part of CRUD. React sends the form to the Express API, and MongoDB saves the request.”

### 6. Read the Request
Open the dashboard.

Say: “This is Read. The dashboard requests the logged-in user’s saved requests from the backend.”

### 7. Update the Request
Edit a pending request.

Say: “This is Update. The backend checks that I own the request and that it is still pending.”

### 8. Delete the Request
Delete the request.

Say: “This is Delete. Again, the backend checks ownership and status before allowing the change.”

### 9. Staff Equipment CRUD
Log in as staff and open Manage Equipment.

Quickly show:
- Add equipment
- Edit equipment
- Delete/archive equipment

Say: “Equipment has its own full CRUD workflow, protected by the staff role.”

## Demo Safety Plan

If the live deployment has a problem:

1. Stay calm.
2. Show the frontend catalog using its demo fallback data.
3. Open GitHub and show the passing workflow.
4. Explain the API route or integration test for the feature you were going to demonstrate.

A backup explanation is much stronger than spending several minutes troubleshooting silently in front of the class.
