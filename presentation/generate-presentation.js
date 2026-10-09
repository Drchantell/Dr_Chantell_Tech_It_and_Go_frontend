const path = require('path');
const pptxgen = require('pptxgenjs');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Dr. Chantell McDowell';
pptx.title = 'Tech It & Go! Capstone Presentation';
pptx.subject = 'Per Scholas Software Engineering Capstone';
pptx.company = 'Per Scholas';
pptx.lang = 'en-US';
pptx.theme = { headFontFace: 'Arial', bodyFontFace: 'Arial', lang: 'en-US' };
pptx.defineSlideMaster({
  title: 'MASTER',
  background: { color: 'FAF9FC' },
  objects: [
    { rect: { x: 0, y: 0, w: 13.333, h: 0.12, fill: { color: 'FF1493' }, line: { color: 'FF1493' } } },
    { rect: { x: 0, y: 7.38, w: 13.333, h: 0.12, fill: { color: '26D9CF' }, line: { color: '26D9CF' } } },
    { text: { text: 'Tech It & Go!  •  Dr. Chantell McDowell  •  Per Scholas Capstone', options: { x: 0.55, y: 7.01, w: 11.3, h: 0.2, fontFace: 'Arial', fontSize: 9, color: '595465', margin: 0 } } }
  ],
  slideNumber: { x: 12.25, y: 7.0, w: 0.45, h: 0.2, color: '595465', fontSize: 9 }
});

const C = { pink:'FF1493', teal:'26D9CF', purple:'9D6CFF', mint:'C8F7DF', black:'111015', white:'FFFFFF', gray:'595465', pale:'F2ECFF', yellow:'FFE66D' };
const logo = path.join(__dirname, '..', 'public', 'tech-it-go-logo.png');
const smallLogo = logo;
const out = path.join(__dirname, 'Tech_It_and_Go_Capstone_Presentation.pptx');

function title(slide, text, sub='') {
  slide.addImage({path:smallLogo,x:11.65,y:0.18,w:1.0,h:1.0});
  slide.addText(text, { x:0.65, y:0.48, w:12.0, h:0.55, fontFace:'Arial', fontSize:30, bold:true, color:C.black, margin:0 });
  if (sub) slide.addText(sub, { x:0.67, y:1.08, w:11.9, h:0.35, fontFace:'Arial', fontSize:15, color:C.gray, margin:0 });
}
function bullets(slide, items, opts={}) {
  const runs = items.map(t => ({ text:t, options:{ bullet:{indent:20}, hanging:5, breakLine:true } }));
  slide.addText(runs, { x:opts.x||1.0, y:opts.y||1.72, w:opts.w||11.2, h:opts.h||4.7, fontFace:'Arial', fontSize:opts.size||22, color:C.black, margin:0.05, breakLine:false, paraSpaceAfterPt:14, fit:'shrink' });
}
function note(slide, text) { slide.addNotes([text]); }
function bigCard(slide, x, y, w, h, heading, body, accent) {
  slide.addShape(pptx.ShapeType.roundRect, { x,y,w,h, fill:{color:C.white}, line:{color:accent, width:2}, radius:0.08 });
  slide.addText(heading, { x:x+0.25, y:y+0.22, w:w-0.5, h:0.4, fontSize:20, bold:true, color:C.black, margin:0 });
  slide.addText(body, { x:x+0.25, y:y+0.82, w:w-0.5, h:h-1.05, fontSize:17, color:C.gray, margin:0.02, fit:'shrink', valign:'mid' });
}
function footerPill(slide, text, color=C.black) {
  slide.addShape(pptx.ShapeType.roundRect, { x:2.1, y:6.35, w:9.1, h:0.5, fill:{color}, line:{color}, radius:0.08 });
  slide.addText(text, { x:2.25, y:6.48, w:8.8, h:0.23, fontSize:13, bold:true, color:C.white, align:'center', margin:0 });
}

{
  const s=pptx.addSlide(); s.background={color:C.black};
  s.addImage({path:logo,x:4.87,y:0.1,w:3.6,h:3.6});
  s.addText('FULL-STACK CAPSTONE', {x:4.5,y:4.05,w:4.3,h:0.35,fontSize:16,bold:true,color:C.teal,align:'center',charSpacing:2,margin:0});
  s.addText('Technology lending made simple.', {x:1.5,y:4.72,w:10.3,h:0.65,fontSize:30,bold:true,color:C.white,align:'center',margin:0});
  s.addText('Dr. Chantell McDowell', {x:3.3,y:5.65,w:6.7,h:0.36,fontSize:18,bold:true,color:C.pink,align:'center',margin:0});
  s.addText('Per Scholas Software Engineering', {x:3.0,y:6.08,w:7.3,h:0.3,fontSize:15,color:'E3DDEA',align:'center',margin:0});
  note(s,'My name is Dr. Chantell McDowell. My capstone is Tech It & Go!, a technology lending library. I built it to connect my experience in libraries and makerspaces with the full-stack skills I learned at Per Scholas.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'What is Tech It & Go?','One simple idea.');
  bigCard(s,1.0,1.75,11.3,3.7,'Tech It & Go!','A full-stack app where educators, makerspaces, nonprofits, and learners can browse technology, read lesson ideas, and submit borrowing requests.',C.pink);
  footerPill(s,'Borrow the tech. Build your next big idea.',C.black);
  note(s,'Tech It & Go! is a full-stack technology lending library. Users can browse equipment, learn about it, and submit a request to borrow it. Staff can manage the equipment catalog.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'Why I Built It','This project came from a real problem I have seen.');
  bullets(s,['Technology equipment can be expensive.','Schools and nonprofits may only need a tool for a short project.','Users also need simple lessons—not just equipment.']);
  note(s,'I built this because technology access is often limited by cost. A program may need a robotics kit, laptop, or 3D-printing tool for one project, but not be able to purchase everything. I also wanted lesson plans connected to the equipment.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'Who Uses the App?','I designed two main user roles.');
  bigCard(s,0.9,1.75,5.55,3.9,'Borrower','• Browse equipment\n• Read lessons\n• Submit requests\n• Edit or delete pending requests',C.teal);
  bigCard(s,6.85,1.75,5.55,3.9,'Staff','• Add equipment\n• Update equipment\n• Remove or archive equipment\n• Manage the catalog',C.purple);
  note(s,'There are two main roles. Borrowers use the catalog and manage their own pending requests. Staff users have additional permission to manage equipment.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'The User Flow','This is the main experience I built.');
  const items=[['1','Browse',C.pink],['2','Learn',C.teal],['3','Request',C.purple],['4','Manage',C.mint]];
  items.forEach((it,i)=>{const x=0.9+i*3.05; s.addShape(pptx.ShapeType.ellipse,{x:x+0.85,y:1.9,w:1.05,h:1.05,fill:{color:it[2]},line:{color:C.black,width:1.5}}); s.addText(it[0],{x:x+0.85,y:2.16,w:1.05,h:0.3,fontSize:24,bold:true,align:'center',margin:0}); s.addText(it[1],{x,y:3.3,w:2.75,h:0.45,fontSize:23,bold:true,align:'center',margin:0});});
  footerPill(s,'A request starts as PENDING. It is not automatically approved.',C.black);
  note(s,'The flow is browse, learn, request, and manage. I kept requests pending because borrowing equipment should still be reviewed by staff.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'Frontend Tools','These tools create what the user sees.');
  bullets(s,['HTML5 + CSS3 — structure and responsive design','JavaScript ES6+ — logic, events, async/await, and modules','React + Vite + React Router — components, pages, routing, and builds','Fetch API — sends requests to my backend']);
  note(s,'On the frontend I used HTML and CSS concepts through React, JavaScript for the logic, React for components, Vite for the project build, React Router for navigation, and Fetch to communicate with the API.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'Backend Tools','These tools run the server and API.');
  bullets(s,['Node.js — runs JavaScript on the server','Express.js — creates my server, routes, and API','REST API — GET, POST, PATCH, and DELETE','Middleware + CORS + dotenv — security, requests, and private settings']);
  note(s,'Node.js lets me run JavaScript on the backend. Express gives me the server and routes. I use REST routes for CRUD. Middleware handles things such as authentication, JSON, CORS, and errors. dotenv keeps private values out of GitHub.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'Database Tools','This is where the app saves real data.');
  bullets(s,['MongoDB Atlas — my hosted NoSQL database','Mongoose — schemas, models, validation, and queries','Collections store users, equipment, lessons, and lending requests']);
  note(s,'MongoDB Atlas stores the data. Mongoose helps me define the shape of that data and communicate with MongoDB from Node and Express.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'Authentication + Security','Users should only see and change what they are allowed to.');
  bullets(s,['bcrypt — hashes passwords before they are saved','JWT — identifies a logged-in user on protected requests','Role checks — separate borrower and staff permissions','Ownership checks — borrowers can only access their own requests']);
  note(s,'I used bcrypt so plain passwords are not saved in the database. JWT is used after login. I also check roles and request ownership so users cannot access data that belongs to someone else.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'Full CRUD','CRUD is one of the main requirements of my capstone.');
  bigCard(s,0.8,1.65,2.85,4.4,'CREATE','POST\nAdd equipment or submit a lending request.',C.pink);
  bigCard(s,3.8,1.65,2.85,4.4,'READ','GET\nView equipment and saved requests.',C.teal);
  bigCard(s,6.8,1.65,2.85,4.4,'UPDATE','PATCH\nEdit equipment or a pending request.',C.purple);
  bigCard(s,9.8,1.65,2.7,4.4,'DELETE','DELETE\nRemove or archive data when allowed.',C.yellow);
  note(s,'CRUD means Create, Read, Update, and Delete. I implemented full CRUD for equipment and lending requests. The frontend buttons connect to backend routes, and the backend saves the changes in MongoDB.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'Development + Testing Tools','These tools helped me build and check the project.');
  bullets(s,['VS Code + Git + GitHub — coding and version control','Postman — manual API testing','Supertest + Node test runner — automated backend integration tests','GitHub Actions — automatic frontend build and backend test checks']);
  note(s,'I worked in VS Code, tracked changes with Git and GitHub, used Postman while testing API routes, and added Supertest integration tests. GitHub Actions runs checks automatically when I push changes.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'Deployment Tools','The project is prepared to work outside my computer.');
  bullets(s,['MongoDB Atlas — cloud database','Render — backend API hosting','Vercel — frontend React hosting','Environment variables connect the three pieces safely']);
  note(s,'For deployment, MongoDB Atlas stores the database, Render hosts the backend API, and Vercel hosts the React frontend. Environment variables connect them without putting secrets in GitHub.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'Other Course Skills I Learned','I did not force every technology into the MVP.');
  bullets(s,['TypeScript, DOM, GraphQL, and OAuth 2.0','Java / Spring Boot and SQL concepts','NoSQL, Agile workflow, and AI for Software Engineering']);
  footerPill(s,'Good engineering also means choosing the right tool for the project.',C.black);
  note(s,'I also learned TypeScript, the DOM, GraphQL, OAuth, Java and Spring concepts, SQL and NoSQL concepts, Agile workflow, and AI for software engineering. I can explain those concepts, but I did not add unnecessary runtime dependencies just to make the list longer.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'Challenges I Faced','These were the areas where I learned the most.');
  bullets(s,['Connecting MongoDB Atlas correctly','Connecting the React frontend to the Express backend','Understanding JWT authentication and permissions','Preparing CORS and environment variables for deployment']);
  note(s,'My biggest challenges were MongoDB setup, connecting the frontend and backend, authentication, permissions, and deployment settings. Those challenges helped me understand how the complete stack works together.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'How I Worked Through Problems','I learned a debugging process I can reuse.');
  bullets(s,['Read the exact error message','Test one layer at a time','Use small checks such as /api/health, Postman, or automated tests','Fix the issue, test again, and document what I learned']);
  note(s,'Instead of trying to fix the whole application at once, I learned to isolate the layer causing the problem. I test the database, API, and frontend separately, then reconnect the full workflow.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'Live Demo','I will show the main user story.');
  bullets(s,['1. Browse and search the equipment catalog','2. Register or log in','3. Submit a borrowing request','4. Open the dashboard and edit or delete the pending request','5. Show staff equipment CRUD']);
  note(s,'For my demo I will focus on the working user story instead of clicking every page. I will browse, log in, create a request, show the dashboard, and then show staff equipment management.');
}
{
  const s=pptx.addSlide('MASTER'); title(s,'What I Learned','This project helped the pieces of full-stack development connect for me.');
  bullets(s,['Frontend, backend, and database work as one system','Authentication is more than a login form—it includes permissions','CRUD must be connected from the user interface all the way to the database','Testing and deployment are part of building the application']);
  note(s,'The biggest lesson for me is that full-stack development is about connecting layers. A button in React can eventually create a MongoDB document, but every layer in between has a job.');
}
{
  const s=pptx.addSlide(); s.background={color:C.black};
  s.addImage({path:logo,x:4.97,y:0.35,w:3.4,h:3.4});
  s.addText('Thank You!',{x:3.6,y:4.1,w:6.1,h:0.7,fontSize:38,bold:true,color:C.white,align:'center',margin:0});
  s.addText('Questions?',{x:4.4,y:5.0,w:4.5,h:0.5,fontSize:26,bold:true,color:C.teal,align:'center',margin:0});
  s.addText('Dr. Chantell McDowell  •  Tech It & Go!',{x:2.9,y:6.0,w:7.6,h:0.35,fontSize:16,color:C.pink,align:'center',margin:0});
  note(s,'Thank you. Tech It & Go! gave me a way to combine my professional background with the software engineering skills I learned in this course. I am happy to answer questions.');
}

pptx.writeFile({ fileName: out });
