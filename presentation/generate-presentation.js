const path = require("path");
const pptxgen = require("pptxgenjs");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "Dr. Chantell McDowell";
pptx.title = "Tech It & Go! Capstone Presentation";
pptx.subject = "Per Scholas Software Engineering Capstone";
pptx.company = "Per Scholas";
pptx.lang = "en-US";
pptx.theme = { headFontFace: "Arial", bodyFontFace: "Arial", lang: "en-US" };

const logo = path.join(__dirname, "..", "public", "Tech&Gologo.svg");
const output = path.join(__dirname, "Tech_It_and_Go_Capstone_Presentation.pptx");
const C = {
  pink: "FF1B8D",
  teal: "20D5C2",
  purple: "8B5CF6",
  mint: "A7F3D0",
  black: "101018",
  dark: "201C2B",
  white: "FFFFFF",
  gray: "5A5566",
  light: "F8F7FC",
  pale: "F1EDFA",
  yellow: "FFD84D"
};

pptx.defineSlideMaster({
  title: "MASTER",
  background: { color: C.light },
  objects: [
    { rect: { x: 0, y: 0, w: 13.333, h: 0.12, fill: { color: C.pink }, line: { color: C.pink } } },
    { rect: { x: 0, y: 7.38, w: 13.333, h: 0.12, fill: { color: C.teal }, line: { color: C.teal } } },
    { text: { text: "Tech It & Go! • Dr. Chantell McDowell • Per Scholas Capstone", options: { x: 0.55, y: 7.02, w: 10.9, h: 0.2, fontFace: "Arial", fontSize: 8, color: C.gray, margin: 0 } } }
  ],
  slideNumber: { x: 12.3, y: 7.0, w: 0.4, h: 0.2, color: C.gray, fontSize: 8 }
});

function heading(slide, title, subtitle = "") {
  slide.addText(title, { x: 0.62, y: 0.42, w: 12, h: 0.48, fontFace: "Arial", fontSize: 26, bold: true, color: C.black, margin: 0 });
  if (subtitle) slide.addText(subtitle, { x: 0.64, y: 0.94, w: 11.7, h: 0.32, fontFace: "Arial", fontSize: 12, color: C.gray, margin: 0 });
}

function addBullets(slide, items, x = 0.95, y = 1.55, w = 11.3, h = 4.9, size = 18) {
  const runs = items.map(text => ({ text, options: { bullet: { indent: 18 }, hanging: 4, breakLine: true } }));
  slide.addText(runs, { x, y, w, h, fontFace: "Arial", fontSize: size, color: C.dark, margin: 0.04, fit: "shrink", paraSpaceAfterPt: 10 });
}

function pill(slide, text, x, y, w, color = C.black) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h: 0.5, fill: { color }, line: { color }, radius: 0.08 });
  slide.addText(text, { x: x + 0.08, y: y + 0.13, w: w - 0.16, h: 0.22, fontFace: "Arial", fontSize: 12, bold: true, color: C.white, align: "center", margin: 0 });
}

function card(slide, x, y, w, h, title, body, accent) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h, fill: { color: C.white }, line: { color: "DDD7EA" }, radius: 0.1 });
  slide.addShape(pptx.ShapeType.rect, { x, y, w: 0.08, h, fill: { color: accent }, line: { color: accent } });
  slide.addText(title, { x: x + 0.25, y: y + 0.22, w: w - 0.45, h: 0.35, fontFace: "Arial", fontSize: 17, bold: true, color: C.black, margin: 0 });
  slide.addText(body, { x: x + 0.25, y: y + 0.72, w: w - 0.45, h: h - 0.95, fontFace: "Arial", fontSize: 12, color: C.dark, margin: 0.03, fit: "shrink" });
}

function note(slide, text) { slide.addNotes([text]); }

// 1 — title
{
  const s = pptx.addSlide();
  s.background = { color: C.black };
  s.addImage({ path: logo, x: 1.0, y: 0.55, w: 11.3, h: 3.35 });
  s.addText("FULL-STACK CAPSTONE", { x: 4.55, y: 4.25, w: 4.2, h: 0.32, fontSize: 14, bold: true, color: C.teal, align: "center", charSpacing: 2, margin: 0 });
  s.addText("A technology lending library for makers, educators, nonprofits, and learners", { x: 1.25, y: 4.85, w: 10.85, h: 0.6, fontSize: 22, bold: true, color: C.white, align: "center", margin: 0 });
  s.addText("Dr. Chantell McDowell • Per Scholas Software Engineering", { x: 2.2, y: 5.72, w: 8.9, h: 0.3, fontSize: 15, color: "DDD8E7", align: "center", margin: 0 });
  pill(s, "Borrow the tech. Build your next big idea.", 4.0, 6.25, 5.3, C.pink);
  note(s, "Opening: My capstone is Tech It & Go!, a full-stack technology lending library that connects my background in libraries and makerspaces with what I learned in this course.");
}

// 2
{
  const s = pptx.addSlide("MASTER");
  heading(s, "Why I Built Tech It & Go!", "The idea came from a real need I have seen in libraries, makerspaces, and community programs.");
  card(s, 0.75, 1.55, 3.75, 4.4, "My Background", "Libraries\nMakerspaces\nSTEM programs\nCommunity partnerships\nTechnology access", C.pink);
  card(s, 4.8, 1.55, 3.75, 4.4, "The Gap", "Great tools exist, but many schools and nonprofits cannot afford to own every technology kit they need.", C.teal);
  card(s, 8.85, 1.55, 3.75, 4.4, "My Capstone Idea", "Build one place to browse equipment, learn how to use it, and request to borrow it.", C.purple);
  pill(s, "Audience prompt: What piece of technology would YOU borrow?", 3.4, 6.3, 6.55, C.black);
  note(s, "Ask the class what they would borrow first. Use their answers to connect the idea to real technology-access needs.");
}

const bulletSlides = [
  ["The Problem", "Access to emerging technology is often limited by cost, storage, training, and availability.", ["Equipment can be expensive to purchase for occasional use.", "Programs may not know what resources are available.", "Borrowing a tool is not enough—users also need lessons and instructions.", "Staff need a consistent way to manage equipment and requests."], "Explain that this is not a generic inventory app; it solves an access problem."],
  ["Who Can Use It?", "I designed the app around community technology access.", ["Educators borrowing technology for lessons and projects", "Makerspaces and nonprofits sharing limited equipment", "Learners requesting tools", "Staff managing the equipment catalog"], "Explain the borrower and staff roles."],
  ["Frontend Features", "What the user can actually see and do in React.", ["Home page with Tech It & Go! branding", "Equipment catalog with search and filters", "Equipment details and related lesson plans", "Registration and login", "Protected borrower dashboard", "Create, edit, and delete pending lending requests", "Staff-only equipment management", "Responsive styling"], "This is a good transition into the live demo."],
  ["Backend + API Features", "The backend protects data and handles the business rules.", ["Authentication routes for register, login, and current user", "Equipment routes for full CRUD", "Lesson routes for reading lesson plans", "Lending-request routes for full CRUD", "Ownership checks so borrowers see only their own requests", "Staff authorization for equipment changes"], "CRUD is not just buttons; the backend protects the data."],
  ["Challenges I Faced", "These were the parts that pushed me beyond building individual pages.", ["MongoDB Atlas users, connection strings, and environment variables", "Connecting React requests to the Express API", "JWT authentication, protected routes, and expired sessions", "Keeping CRUD actions aligned with ownership and pending-status rules", "Learning CORS for deployment", "Moving from manual testing to an integration test"], "Talk naturally about the real challenges and how your understanding changed."],
  ["How I Worked Through Challenges", "My process became: isolate the problem, test one layer, then reconnect the full flow.", ["Read the exact error message", "Test one layer at a time: database, API, or React", "Use small checks such as /api/health, API calls, console output, or tests", "Reconnect the real user workflow", "Document the fix in the README, deployment guide, or reflection"], "Debugging became easier when I stopped treating the whole stack as one giant problem."],
  ["Icebox / What I Would Build Next", "I kept the MVP focused, but the project can grow into a larger lending system.", ["Automatic checkout and returns", "Date-based inventory and reservation conflicts", "Email reminders", "QR-code checkout", "Favorites", "Calendar view", "Usage analytics", "Image uploads"], "Explain that deciding what not to build yet protected the MVP and deadline."],
  ["What This Capstone Shows About Me", "Tech It & Go! connects my previous professional experience with my new software engineering skills.", ["Problem solving based on a real community need", "Full-stack development across React, Express, MongoDB, auth, CRUD, and testing", "Technology leadership rooted in libraries, makerspaces, and STEM access", "A portfolio project I can continue building after class"], "Connect the project to your professional portfolio."],
];

for (const [t, sub, items, n] of bulletSlides) {
  const s = pptx.addSlide("MASTER");
  heading(s, t, sub);
  addBullets(s, items);
  note(s, n);
}

// Solution journey
{
  const s = pptx.addSlide("MASTER");
  heading(s, "My Solution", "A simple borrowing journey from discovery to request management.");
  const steps = [
    ["1", "Browse", "Search and filter technology", C.pink],
    ["2", "Learn", "Read details and related lessons", C.teal],
    ["3", "Request", "Choose dates and purpose", C.purple],
    ["4", "Manage", "View, edit, or delete pending requests", C.mint],
    ["5", "Staff", "Add, edit, archive, or remove equipment", C.yellow]
  ];
  steps.forEach((st, i) => {
    const x = 0.7 + i * 2.5;
    s.addShape(pptx.ShapeType.ellipse, { x: x + 0.63, y: 1.65, w: 0.9, h: 0.9, fill: { color: st[3] }, line: { color: C.black } });
    s.addText(st[0], { x: x + 0.63, y: 1.86, w: 0.9, h: 0.25, fontSize: 20, bold: true, color: C.black, align: "center", margin: 0 });
    s.addText(st[1], { x, y: 2.82, w: 2.15, h: 0.3, fontSize: 17, bold: true, color: C.black, align: "center", margin: 0 });
    s.addText(st[2], { x, y: 3.3, w: 2.15, h: 1.0, fontSize: 12, color: C.dark, align: "center", margin: 0.04, fit: "shrink" });
    if (i < 4) s.addShape(pptx.ShapeType.chevron, { x: x + 2.08, y: 1.9, w: 0.45, h: 0.4, fill: { color: "D9D2E6" }, line: { color: "D9D2E6" } });
  });
  pill(s, "A request starts as PENDING — it is not automatically a confirmed reservation.", 2.1, 5.55, 9.1, C.black);
  note(s, "Walk left to right and explain why pending requests keep the MVP realistic.");
}

// Stack
{
  const s = pptx.addSlide("MASTER");
  heading(s, "Technology Stack", "This capstone brings together the full workflow we practiced in class.");
  const rows = [
    ["Frontend", "React + Vite", "Pages, forms, routing, state, responsive interface", C.pink],
    ["API", "Node.js + Express", "Routes, validation, authorization, API responses", C.teal],
    ["Database", "MongoDB Atlas + Mongoose", "Users, equipment, lessons, lending requests", C.purple],
    ["Security", "bcrypt + JWT", "Password hashing, login tokens, protected routes", C.black],
    ["Quality", "Supertest + GitHub Actions", "Integration tests and build checks", C.pink],
    ["Deployment", "Vercel + Render", "Frontend hosting and backend API hosting", C.teal]
  ];
  rows.forEach((r, i) => {
    const y = 1.45 + i * 0.83;
    s.addShape(pptx.ShapeType.roundRect, { x: 0.8, y, w: 11.7, h: 0.63, fill: { color: i % 2 ? C.white : C.pale }, line: { color: "DDD7EA" }, radius: 0.05 });
    s.addText(r[0], { x: 1.05, y: y + 0.17, w: 1.4, h: 0.22, fontSize: 13, bold: true, color: r[3], margin: 0 });
    s.addText(r[1], { x: 2.55, y: y + 0.17, w: 2.6, h: 0.22, fontSize: 13, bold: true, color: C.black, margin: 0 });
    s.addText(r[2], { x: 5.15, y: y + 0.17, w: 6.45, h: 0.22, fontSize: 12, color: C.dark, margin: 0 });
  });
  note(s, "React is what users see; Express is the API; MongoDB stores data; JWT and bcrypt handle security; GitHub Actions checks the project.");
}

// Architecture
{
  const s = pptx.addSlide("MASTER");
  heading(s, "How the App Works", "The frontend, API, and database each have a different job.");
  const boxes = [
    [0.75, "React Frontend", "Forms\nCatalog\nDashboard\nStaff tools", C.pink],
    [4.7, "Express API", "Routes\nValidation\nAuthentication\nAuthorization", C.teal],
    [8.65, "MongoDB", "Users\nEquipment\nLesson plans\nRequests", C.purple]
  ];
  boxes.forEach(b => {
    s.addShape(pptx.ShapeType.roundRect, { x: b[0], y: 2.05, w: 3, h: 2.8, fill: { color: C.white }, line: { color: b[3], width: 2.5 }, radius: 0.12 });
    s.addText(b[1], { x: b[0] + 0.2, y: 2.35, w: 2.6, h: 0.4, fontSize: 19, bold: true, color: b[3], align: "center", margin: 0 });
    s.addText(b[2], { x: b[0] + 0.35, y: 3.05, w: 2.3, h: 1.25, fontSize: 14, color: C.dark, align: "center", margin: 0.03 });
  });
  s.addShape(pptx.ShapeType.chevron, { x: 3.83, y: 3.05, w: 0.7, h: 0.75, fill: { color: "CBC3D8" }, line: { color: "CBC3D8" } });
  s.addShape(pptx.ShapeType.chevron, { x: 7.78, y: 3.05, w: 0.7, h: 0.75, fill: { color: "CBC3D8" }, line: { color: "CBC3D8" } });
  pill(s, "User action → API request → database response → updated screen", 3.15, 5.7, 7.0, C.black);
  note(s, "Use the lending-request form as the example of how data moves through the stack.");
}

// Models
{
  const s = pptx.addSlide("MASTER");
  heading(s, "My Database Models", "I separated the data into four Mongoose models so each piece has a clear purpose.");
  card(s, 0.85, 1.55, 5.65, 2.05, "User", "name • email • passwordHash • role", C.pink);
  card(s, 6.8, 1.55, 5.65, 2.05, "Equipment", "name • category • quantity • safety • onSite • archived", C.teal);
  card(s, 0.85, 4.0, 5.65, 2.05, "LessonPlan", "equipment reference • title • objectives • materials • steps", C.purple);
  card(s, 6.8, 4.0, 5.65, 2.05, "LendingRequest", "user + equipment references • dates • purpose • status", C.mint);
  note(s, "Explain references briefly: a request connects a user and equipment; a lesson points to equipment.");
}

// Auth
{
  const s = pptx.addSlide("MASTER");
  heading(s, "Authentication + Security", "I added multiple layers so protected actions are not controlled only by the interface.");
  card(s, 0.8, 1.55, 3.55, 4.55, "1. Passwords", "bcrypt hashes passwords before they are stored. The plain password is not saved in MongoDB.", C.pink);
  card(s, 4.9, 1.55, 3.55, 4.55, "2. Login Token", "After login, the API returns a JWT. The frontend sends it with protected requests.", C.teal);
  card(s, 9.0, 1.55, 3.55, 4.55, "3. Authorization", "The backend checks borrower vs. staff roles and request ownership before allowing changes.", C.purple);
  note(s, "Hashing protects stored passwords. Authentication asks who are you? Authorization asks what are you allowed to do?");
}

// CRUD
{
  const s = pptx.addSlide("MASTER");
  heading(s, "Full CRUD — The Capstone Requirement", "I implemented Create, Read, Update, and Delete for equipment and lending requests.");
  const verbs = [
    ["CREATE", "POST", "New equipment / new request", C.pink],
    ["READ", "GET", "Catalog, details, dashboards", C.teal],
    ["UPDATE", "PATCH", "Edit equipment / pending request", C.purple],
    ["DELETE", "DELETE", "Delete request / remove or archive equipment", C.mint]
  ];
  verbs.forEach((v, i) => {
    const x = 0.72 + i * 3.1;
    s.addShape(pptx.ShapeType.roundRect, { x, y: 1.7, w: 2.65, h: 3.7, fill: { color: C.white }, line: { color: v[3], width: 2.5 }, radius: 0.12 });
    s.addText(v[0], { x: x + 0.2, y: 2.05, w: 2.25, h: 0.4, fontSize: 20, bold: true, color: v[3], align: "center", margin: 0 });
    pill(s, v[1], x + 0.67, 2.75, 1.3, C.black);
    s.addText(v[2], { x: x + 0.35, y: 3.55, w: 1.95, h: 1.15, fontSize: 13, color: C.dark, align: "center", margin: 0.04, fit: "shrink" });
  });
  pill(s, "Equipment with lending history is archived instead of destroying the record.", 2.25, 5.85, 8.85, C.black);
  note(s, "Say: I implemented full CRUD twice—equipment and lending requests.");
}

// Testing
{
  const s = pptx.addSlide("MASTER");
  heading(s, "Testing + Quality Checks", "I added repeatable checks so I am not relying only on a successful browser click.");
  card(s, 0.85, 1.55, 3.6, 4.45, "Frontend Build", "GitHub Actions installs dependencies and runs the Vite production build.", C.pink);
  card(s, 4.85, 1.55, 3.6, 4.45, "Backend Integration Test", "Registration, login, permissions, equipment CRUD, request CRUD, ownership, lessons, and MongoDB operations.", C.teal);
  card(s, 8.85, 1.55, 3.6, 4.45, "API Health Check", "/api/health reports whether the server is running and whether MongoDB is connected.", C.purple);
  pill(s, "The automated frontend build and backend test workflow have passed.", 3.15, 6.2, 7.05, C.black);
  note(s, "Explain why repeatable automated checks are stronger than only clicking through the browser manually.");
}

// Deployment
{
  const s = pptx.addSlide("MASTER");
  heading(s, "Deployment Architecture", "The project is configured for MongoDB Atlas, Render, and Vercel.");
  const boxes = [
    [0.9, "MongoDB Atlas", "Data", C.purple],
    [4.2, "Render", "Express API", C.teal],
    [7.5, "Vercel", "React frontend", C.pink],
    [10.8, "Users", "Browser", C.mint]
  ];
  boxes.forEach((b, i) => {
    s.addShape(pptx.ShapeType.roundRect, { x: b[0], y: 2.1, w: 1.65, h: 1.85, fill: { color: C.white }, line: { color: b[3], width: 2.4 }, radius: 0.1 });
    s.addText(b[1], { x: b[0] + 0.12, y: 2.55, w: 1.4, h: 0.42, fontSize: 15, bold: true, color: b[3], align: "center", margin: 0 });
    s.addText(b[2], { x: b[0] + 0.15, y: 3.25, w: 1.35, h: 0.3, fontSize: 11, color: C.dark, align: "center", margin: 0 });
    if (i < 3) s.addShape(pptx.ShapeType.chevron, { x: b[0] + 1.9, y: 2.72, w: 0.6, h: 0.55, fill: { color: "D3CCDF" }, line: { color: "D3CCDF" } });
  });
  pill(s, "Private values stay outside GitHub: MONGO_URI • MongoDB password • JWT_SECRET", 1.8, 5.05, 9.7, C.pink);
  note(s, "Do not show real secrets. Private environment values belong in .env or hosting-provider settings.");
}

// Demo
{
  const s = pptx.addSlide("MASTER");
  heading(s, "Live Demo Roadmap", "A smooth demo sequence keeps the presentation focused on the user experience.");
  addBullets(s, ["Open the home page and explain the purpose", "Browse and filter the equipment catalog", "Open one item and its lesson plan", "Register or log in as a borrower", "Submit a lending request", "Show the saved request in the dashboard", "Edit and delete a pending request", "Switch to staff and show equipment CRUD"], 0.95, 1.45, 11.2, 4.9, 16);
  pill(s, "Explain WHAT you are doing, then one sentence about HOW the code makes it happen.", 2.1, 6.25, 9.15, C.black);
  note(s, "Use this slide as the live-demo checklist. Do not narrate every line of code.");
}

// Closing
{
  const s = pptx.addSlide();
  s.background = { color: C.black };
  s.addImage({ path: logo, x: 1.05, y: 0.7, w: 11.2, h: 3.25 });
  s.addText("Thank you!", { x: 3.55, y: 4.35, w: 6.2, h: 0.7, fontSize: 34, bold: true, color: C.white, align: "center", margin: 0 });
  s.addText("Questions • Feedback • What would you borrow first?", { x: 2.4, y: 5.28, w: 8.6, h: 0.4, fontSize: 18, color: C.teal, align: "center", margin: 0 });
  pill(s, "Dr. Chantell McDowell • Tech It & Go!", 4.0, 6.15, 5.35, C.pink);
  note(s, "Close by saying the project helped you understand how the pieces of a full-stack application work together.");
}

pptx.writeFile({ fileName: output });
