# Tech It & Go! Frontend Deployment Guide

This guide deploys the React/Vite frontend to Vercel and connects it to the Render API.

## Before You Deploy

Make sure the frontend repository is on GitHub:

Drchantell/Dr_Chantell_Tech_It_and_Go_frontend

The repository already includes:

- React and Vite
- `vercel.json` for React Router page refreshes
- `.env.example`
- production build checks in GitHub Actions
- API URL support through `VITE_API_URL`

Deploy the backend first so you have the Render API URL.

## Step 1: Import the GitHub Repository

1. Sign in to Vercel.
2. Choose Add New > Project.
3. Connect GitHub if needed.
4. Import `Drchantell/Dr_Chantell_Tech_It_and_Go_frontend`.

Vercel should recognize the Vite project.

## Step 2: Confirm Build Settings

Use:

- Framework Preset: Vite
- Root Directory: `./`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

The project already passes `npm run build` in GitHub Actions.

## Step 3: Add the Frontend Environment Variable

Before deploying, add:

### VITE_API_URL

Value:

`https://YOUR-RENDER-API.onrender.com/api`

Example:

`https://tech-it-and-go-api.onrender.com/api`

This is a public API base URL, not a password.

Apply it to Production. You may also apply it to Preview if you want preview deployments to use the same API.

## Step 4: Deploy

Choose Deploy.

Vercel gives you a URL similar to:

`https://tech-it-and-go.vercel.app`

Open the site and make sure the home page loads.

## Step 5: Update Render CORS

Copy the final Vercel URL.

In Render, change `CLIENT_URL` to:

`http://localhost:5173,https://YOUR-FRONTEND.vercel.app`

Save the environment change and redeploy the API.

This step allows the deployed React app to call the deployed Express API.

## Step 6: Test Every Main Route

Open the deployed site and test:

- Home
- Catalog
- Equipment Details
- Lesson Plan
- Register
- Login
- Dashboard
- Lending Request
- Staff Manage Equipment

Refresh the browser while on a route such as `/equipment` or `/dashboard`.

The page should still load instead of showing a 404. The included `vercel.json` handles the React Router rewrite.

## Step 7: Test Full CRUD

### Equipment - Staff

Create:
Add a new equipment item.

Read:
Confirm it appears in the catalog and detail page.

Update:
Edit its quantity or description.

Delete:
Remove it. If it already has lending history, the backend safely archives it instead.

### Lending Requests - Borrower

Create:
Submit a borrowing request.

Read:
Confirm it appears in the dashboard.

Update:
Edit dates or purpose while it is pending.

Delete:
Delete the pending request.

## Final Deployment Check

The project is ready for a class demonstration when:

- frontend loads from Vercel
- backend health endpoint reports connected
- MongoDB data persists after refresh
- registration and login work
- full equipment CRUD works
- full lending-request CRUD works
- protected pages require login
- borrower cannot use staff equipment routes
- borrower cannot access another borrower's requests
