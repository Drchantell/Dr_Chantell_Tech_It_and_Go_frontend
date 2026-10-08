# Tech It & Go! Frontend Deployment Guide

This guide deploys the React/Vite frontend to Render and connects it to the Render backend API.

## Before You Deploy

Frontend repository:

`Drchantell/Dr_Chantell_Tech_It_and_Go_frontend`

The repository includes:

- React and Vite
- `render.yaml`
- React Router rewrite support
- `.env.example`
- GitHub Actions production build checks
- API URL support through `VITE_API_URL`

Deploy the backend first so you have its public Render URL.

## Step 1: Create the Render Static Site

1. Sign in to Render.
2. Choose **New > Blueprint**.
3. Connect GitHub if needed.
4. Select `Drchantell/Dr_Chantell_Tech_It_and_Go_frontend`.
5. Use the `main` branch.
6. Render reads `render.yaml` and creates the static site.

The site is configured with:

- Build command: `npm install && npm run build`
- Publish directory: `dist`
- React Router rewrite: `/* -> /index.html`

## Step 2: Add the Frontend Environment Variable

Set:

```env
VITE_API_URL=https://YOUR-BACKEND.onrender.com/api
```

This is the public URL for the Express API.

## Step 3: Deploy

After the deploy finishes, Render gives the frontend a public URL similar to:

```text
https://tech-it-and-go.onrender.com
```

Open the site and confirm the home page loads.

## Step 4: Update Backend CORS

Copy the final frontend URL.

In the backend Render service, set:

```env
CLIENT_URL=http://localhost:5173,https://YOUR-FRONTEND.onrender.com
```

Save the change and redeploy the backend.

## Step 5: Test the Main Routes

Test:

- `/`
- `/equipment`
- `/equipment/:id`
- `/lessons/:id`
- `/register`
- `/login`
- `/dashboard`
- `/equipment/:id/request`
- `/manage/equipment`

Refresh the browser while on a React route such as `/equipment` or `/dashboard`. The rewrite in `render.yaml` should serve `index.html` instead of returning a 404.

## Step 6: Test Full CRUD

### Borrower lending requests

- Create a request
- Read it in the dashboard
- Update it while pending
- Delete it while pending

### Staff equipment

- Create equipment
- Read it in the catalog
- Update it
- Delete or archive it

## Final Public Deployment Check

The class-ready public app should have:

- Render frontend URL loading successfully
- Render backend `/api/health` reporting `database: connected`
- MongoDB data persisting after refresh
- Registration and login working
- Borrower request CRUD working
- Staff equipment CRUD working
- Protected pages requiring login
- Borrowers blocked from staff routes
- Borrowers blocked from another user's requests
