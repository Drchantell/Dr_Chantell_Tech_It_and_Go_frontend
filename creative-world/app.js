const $=s=>document.querySelector(s);
const link=(url,text)=>`<a class="detail-link" href="${url}" target="_blank" rel="noopener">${text}</a>`;
const nexusURL='https://makeherspace-nexus.drchantellmcdowell.chatgpt.site';
const steps=(items)=>`<div class="steps">${items.map(([t,p])=>`<div class="step"><b>${t}</b><p>${p}</p></div>`).join('')}</div>`;
const studios=[
{id:'leadership',name:'Leadership',kicker:'01 / STRATEGY & COMMUNITY',color:'#ff279b',x:-185,y:-190,type:'library',desc:'Turning a vision into programs, partnerships and lasting access.',content:`<p>My work connects organizational leadership, education, technology and community transformation. I build the strategy, teams, partnerships and systems that help people access opportunities.</p>${steps([['Worcester Public Library','As Director of Youth Services (2014–2015), I led youth-services operations, supervised managers and staff, worked with the Board of Trustees, and advanced the One City, One Library initiative with Worcester Public Schools. My previous portfolio documents planning and operations for two new branches.'],['Johnson C. Smith University','My 2016–2020 work encompassed instructional technology, collection development, makerspace management and support for library leadership. I helped secure and implement the $100,000 Making Space for Tech @ an HBCU grant.'],['Charlotte Mecklenburg','Led teen services and the 2012 systemwide Teen Summer Reading Program; supported a team of 10 professional librarians. In Charlotte-Mecklenburg Schools, I led information-literacy and instructional technology work.'],['Brooklyn Public Library','Served as Senior Librarian II and interim branch manager; recruited, trained and managed 15 employees, volunteers and teen assistants. Received the 2010 Circulation Buster Champion Award.']])}${link('https://www.jcsu.edu/news/jcsu-library-wins-100k-grant-fund-makerspace-0','Read the JCSU feature')}`},
{id:'degrees',name:'Degrees & Research',kicker:'02 / AN EDUCATION IN POSSIBILITY',color:'#b28aff',x:100,y:-260,type:'tower',desc:'Four earned degrees connecting media, information and transformational leadership.',content:`${steps([['Per Scholas · 2026','Software Engineering Program · Full-stack development, React, JavaScript, TypeScript, Node.js, Java, SQL, NoSQL, Git/GitHub, AWS and Agile.'],['Doctor of Arts · 2014','Organizational Leadership · Franklin Pierce University. My doctoral work examines librarian-led mentoring as a way to strengthen reading and technology skills for at-risk teens.'],['Master’s degree · 2008','Library and Information Science · Pratt Institute. A foundation in information access, research, literacy and library service.'],['Bachelor’s degree · 2004','Communication and Media Studies · SUNY Old Westbury. Media, storytelling and audience-centered communication.'],['Associate degree · 2000','Applied Arts in Journalism Technology · SUNY Morrisville. Journalism, reporting, editing and communication.']])}<h3>Research that moves into practice.</h3><p><em>Improving Reading and Technology Skills in At-Risk Teens Through Librarian-Led Mentoring Activities: An Action Research Study</em> · Franklin Pierce University, 2014.</p><p>My work brings research, community assessment, feedback and evaluation into program design. Continued professional development includes full-stack software engineering at Per Scholas.</p>${link('assets/Dr_Chantell_McDowell_Resume.pdf','Open résumé')}`},
{id:'author',name:'Author & Speaker',kicker:'03 / IDEAS BEYOND BORDERS',color:'#ffb746',x:330,y:-120,type:'book',desc:'Published expertise, international talks and a commitment to underserved youth.',content:`<div class="bookdetail"><img src="assets/book.jpg" alt="Serving At-Risk Teens book cover"><div><h3>Serving At-Risk Teens</h3><p>Proven Strategies and Programs for Bridging the Gap</p><p>Co-authored with Angela Craig · ALA Neal-Schuman · 2013</p></div></div><p>Our book translates library and community experience into practical strategies for reaching underserved teens. It covers outreach, partnerships, collections, technology-based programming and evaluation.</p><h3>South Korea · International speaking</h3><p>My talks in South Korea surrounding this book brought my work on serving at-risk teens into an international professional conversation. They form part of a larger commitment to helping libraries expand opportunity for young people.</p><h3>JCSU · Makerspace conference</h3><p>The April 13, 2018 Maker Conference brought together the James B. Duke Memorial Library, Discovery Place Education Studio, Makerspace Charlotte and Apple. I served as a named conference contact, connecting attendees with a day of digital fabrication, expert panels and coding experiences.</p>${link('https://alastore.ala.org/content/serving-risk-teens-proven-strategies-and-programs-bridging-gap','Explore the published book')} ${link('https://www.thehbcuadvocate.com/johnson-c-smith-university-hosts-maker-conference/','Read conference coverage')}`},
{id:'makeherspace',name:'MakeHERspace',kicker:'04 / FOUNDER & EXECUTIVE DIRECTOR',color:'#ff279b',x:-355,y:30,type:'community',desc:'A nonprofit vision for girls, women and underrepresented makers.',content:`<p>MakeHERspace Incorporated is a Charlotte-based 501(c)(3), founded in 2017, advancing access to STEM, AI, entrepreneurship and hands-on making for girls and underrepresented youth.</p><p>As Founder & Executive Director, I connect the mission to strategy, partnerships, funding, curriculum and operational systems. The organization brings technical learning together with mentorship, leadership, wellness and economic mobility.</p>${steps([['Learning & programs','Girls in AI & Coding Academy; pathways in coding, robotics, cybersecurity, game development, digital media and fabrication.'],['Mentorship & belonging','Supportive learning communities, role models, leadership development and space to experiment.'],['Workforce & enterprise','Career readiness, professional communication, entrepreneurship and pathways for older youth and women.'],['Organization & sustainability','Board roles, volunteer and staff resources, program enrollment, consent and safety policies, scholarships, partnerships and sponsorship planning.']])}<div class="tags"><span>STEM equity</span><span>Girls’ empowerment</span><span>Mentorship</span><span>Economic mobility</span></div><img class="dialog-org-logo" src="assets/makeherspace-logo.webp" alt="MakeHERspace: Dream. Plan. Create. Lead.">${link('https://makeherspace.org','Visit MakeHERspace')}${link(nexusURL,'Open MakeHERspace Nexus')}<a class="detail-link" data-close-dialog href="#tech-it-go">Tech It &amp; Go! · Technology lending project</a>`},
{id:'fabrication',name:'Fabrication Studio',kicker:'05 / FROM IDEA TO OBJECT',color:'#4ee1ce',x:0,y:25,type:'printer',desc:'Explore the making process: design, prototype, fabricate, test and share.',content:`<p>Making turns an idea into something you can hold, test and improve. My practice connects digital design with fabrication, instruction and entrepreneurial thinking.</p><div class="tags"><span>3D printing</span><span>Blender & CAD</span><span>CNC milling</span><span>Vinyl & apparel</span><span>Sublimation</span><span>Vacuum forming</span></div><h3>Inside the process</h3><p>Select a stage to follow a representative project through the studio.</p><div class="process" id="process"></div><div id="stage"></div><h3>A connected tool ecosystem</h3><p>Dremel 3D45, LulzBot and Ender 3D printers; Bantam Tools CNC; vinyl cutters; heat and mug presses; Brother S1 sublimation; and vacuum forming. Tool choice follows the material, project goal and learner’s readiness.</p><p>My JCSU makerspace work brought fabrication and coding into an academic setting through instruction, workshops and community connections.</p>${link('https://www.jcsu.edu/news/jcsu-library-wins-100k-grant-fund-makerspace-0','Read about the makerspace')}`},
{id:'nexus',name:'The Nexus',kicker:'06 / CONNECTED DIGITAL LEARNING',color:'#b28aff',x:300,y:155,type:'screen',desc:'Connecting lessons, applied labs, learner growth and maker pathways.',content:`<p>The MakeHERspace Nexus brings the organization’s learning vision into a digital environment: courses connected to applied labs, fabrication pathways, individual progress and educator support.</p><p>The platform’s development roadmap includes sample lessons, learner profiles, lesson and lab grading, individual certificates, educator resources, scholarships and enrollment workflows.</p>${steps([['Explore','Discover coding, AI, robotics, cybersecurity, entrepreneurship and creative technology pathways.'],['Practice','Apply concepts in lessons and labs, including digital design and fabrication.'],['Reflect','Use project documentation, feedback and assessment to connect practice to growth.'],['Advance','Build a portfolio and identify the next learning, career or entrepreneurial step.']])}<div class="sample"><b>A glimpse of the learning experience</b><p>Which action best improves a first prototype?</p><label><input type="radio" name="answer" value="0"> Skip testing and move straight to production</label><label><input type="radio" name="answer" value="1"> Test with users, document feedback and iterate</label><button id="check">Check your thinking</button><output id="feedback" aria-live="polite"></output></div><p class="note">This interactive sample illustrates the Nexus learning approach; it is separate from live course enrollment and student records.</p>`},
{id:'software',name:'Digital Builds',kicker:'07 / SOFTWARE WITH PURPOSE',color:'#4ee1ce',x:-210,y:255,type:'screen',desc:'Tech It & Go! connects technology lending with secure APIs and interactive experiences.',content:`<img class="dialog-tech-logo" src="assets/tech-it-go-logo.webp" alt="Tech It &amp; Go!"><h3>Tech It &amp; Go! · Featured capstone</h3><p>A technology lending library connecting my background in libraries, makerspaces and STEM programming with full-stack software development. Borrowers browse equipment, read related lessons and manage lending requests; staff have protected equipment management tools.</p><a class="detail-link" href="#tech-it-go" data-close-dialog>Read the project case study</a><a class="detail-link" href="../index.html" target="_top" data-return-presentation data-close-dialog>Return to the voice presentation</a><a class="detail-link" href="https://github.com/Drchantell/Dr_Chantell_Tech_It_and_Go_frontend/archive/refs/heads/main.zip" target="_blank" rel="noopener">Download frontend source</a><p>My software work extends a career in instructional technology and makerspaces into application development. These selected builds demonstrate how I approach structured data, access, interaction and useful digital experiences.</p>${steps([['TaskMaster Backend','Node.js, Express, MongoDB Atlas and Mongoose. A project-and-task API with bcrypt password hashing, JWT authentication and checks that keep projects and tasks connected to their owners.'],['Secure Record Storage','A notes API with owner-based authorization, protected routes, timestamps and checks against unauthorized changes.'],['Interactive front-end work','A dynamic shopping cart, registration form and task-management interface show event handling, validation, state and browser storage.'],['Development practice','Git and GitHub workflows, responsive design, REST APIs and deliberate separation of application responsibilities.']])}${link('https://github.com/Drchantell/Dr-Chantells-TaskMaster-Backend','TaskMaster source')} ${link('https://github.com/Drchantell/Dr_Chantell_Secure_Record_Storage','Secure records source')} ${link('https://github.com/Drchantell','Browse GitHub')}`},
{id:'press',name:'Press & Impact',kicker:'08 / THE PUBLIC RECORD',color:'#ffb746',x:60,y:340,type:'gallery',desc:'Reporting and institutional features documenting the work.',content:`<p>A selection of original articles and institutional announcements about my work in makerspaces, libraries and youth services.</p><div class="presslist" id="dialogpress"></div>`}
];
studios.push({id:'resume',name:'Résumé & Contact',kicker:'09 / EXPERIENCE & CONNECTION',color:'#ff279b',desc:'My original portfolio résumé, with education first, and ways to connect.',content:`<h3>Contact</h3><p><strong class="person-name">Dr. Chantell McDowell</strong><br>Charlotte, NC<br>(718) 501-1215<br><a href="mailto:drchantellmcdowell@gmail.com">drchantellmcdowell@gmail.com</a></p>${link('https://www.linkedin.com/in/drchantellmcdowell/','LinkedIn')}${link('https://github.com/Drchantell','GitHub')}${link('https://makeherspace.org','MakeHERspace')}<h3>Professional Summary</h3><p>Results-driven technology professional with 10+ years of experience leading complex projects, implementing technology initiatives, managing programs, and driving organizational transformation. Hands-on experience in full-stack development, cloud computing, responsive web development, Git/GitHub, AWS, and Agile methodologies. Skilled at translating business needs into technology solutions and delivering measurable results.</p><h3>Education</h3>${steps([['Per Scholas · 2026','Software Engineering Program · 400+ hours in full-stack development, React, JavaScript, TypeScript, Node.js, Java, SQL, NoSQL, Git/GitHub, AWS and Agile.'],['Franklin Pierce University','Doctor of Organizational & Transformational Leadership'],['Pratt Institute','Master of Information & Library Science'],['SUNY Old Westbury','Media Communications'],['SUNY Morrisville','Journalism Technology']])}<h3>Technical Skills</h3><p>HTML5, CSS3, JavaScript, TypeScript, Java, React, Node.js, Express.js, REST APIs, SQL, NoSQL, AWS, Git/GitHub and Agile.</p><h3>Résumé</h3><p>My original portfolio technical résumé connects software engineering, technology leadership, libraries, makerspaces and organizational experience.</p>${link('assets/Dr_Chantell_McDowell_Resume.pdf','Read my résumé')}<a class="detail-link" href="assets/Dr_Chantell_McDowell_Resume.pdf" download>Download résumé · PDF</a><a class="detail-link" href="assets/Dr_Chantell_McDowell_Technical_Resume.docx" download>Download résumé · Word</a>`});
const relatedWork={
 leadership:['Leadership into practice','The same work of building programs, partnerships and access guides MakeHERspace today.','#makeherspace','Explore MakeHERspace and the connected projects'],
 degrees:['Research into practice','My study of mentoring, reading and technology informs how I approach youth programs and digital learning.','#nexus','Explore the Nexus learning pathways'],
 author:['Youth services into new opportunities','The book’s focus on reaching underserved teens connects with my MakeHERspace mission and learner-centered technology work.','#makeherspace','Follow the MakeHERspace connection'],
 fabrication:['Learning with real tools','Fabrication puts lessons into practice. Tech It & Go! explores how a lending system can connect people with equipment and lesson ideas.','#tech-it-go','Explore the technology lending project'],
 nexus:['Lessons connected with tools','Nexus introduces learning pathways. My Tech It & Go! capstone explores equipment access and related lesson plans as another part of that work.','#tech-it-go','Read the Tech It & Go! case study'],
 software:['Software grounded in community experience','My software projects draw on years of work in libraries, makerspaces and community programs.','#makeherspace','See the mission behind the builds']
};
studios.forEach(s=>{const r=relatedWork[s.id];if(r)s.content+=`<div class="related-work"><h3>${r[0]}</h3><p>${r[1]}</p><a href="${r[2]}" data-close-dialog>${r[3]}</a></div>`;});
const cityPlaces={
leadership:{x:0.244,y:0.315,plateX:0.244,plateY:0.268,rect:[.17,.045,.31,.345]},
degrees:{x:0.509,y:0.225,plateX:0.507,plateY:0.185,rect:[.395,.08,.605,.26]},
author:{x:0.786,y:0.274,plateX:0.786,plateY:0.206,rect:[.715,.07,.91,.29]},
makeherspace:{x:0.209,y:0.531,plateX:0.204,plateY:0.478,rect:[.055,.33,.27,.54]},
fabrication:{x:0.506,y:0.503,plateX:0.504,plateY:0.441,rect:[.375,.305,.61,.515]},
nexus:{x:0.765,y:0.526,plateX:0.765,plateY:0.462,rect:[.69,.285,.865,.535]},
software:{x:0.249,y:0.79,plateX:0.246,plateY:0.741,rect:[.105,.555,.32,.785]},
press:{x:0.475,y:0.789,plateX:0.474,plateY:0.732,rect:[.405,.545,.65,.795]},
resume:{x:0.723,y:0.804,plateX:0.724,plateY:0.727,rect:[.67,.565,.855,.835]}
};
studios.forEach(studio=>Object.assign(studio,{place:cityPlaces[studio.id]}));
// Names are emphasized in generated content as well as in the main page.
const prominentNames=html=>html.split(/(<[^>]*>)/g).map((piece,i)=>i%2?piece:piece.replace(/Dr\. Chantell(?: L\.)? McDowell|Dr\. Chantell|Dr\. McDowell|Chantell McDowell/g,name=>`<strong class="person-name">${name}</strong>`)).join('');
const articles=[
{tag:'JCSU · 2018',title:'A $100,000 investment in making',text:'JCSU identifies Dr. McDowell as makerspace project manager and instructional technology coordinator for Making Space for Tech @ an HBCU.',url:'https://www.jcsu.edu/news/jcsu-library-wins-100k-grant-fund-makerspace-0'},
{tag:'THE HBCU ADVOCATE · 2018',title:'The Maker Conference at JCSU',text:'Coverage of the April 13 conference, its community focus and fabrication workshops; Dr. McDowell is named as a conference contact.',url:'https://www.thehbcuadvocate.com/johnson-c-smith-university-hosts-maker-conference/'},
{tag:'JCSU LIBRARY · 2019',title:'Making as a community experience',text:'A recap credits Dr. McDowell and Keisha Parris with spearheading National Library Week events, culminating in the second Mini Makerspace Conference.',url:'https://www.library.jcsu.edu/april-recap-national-library-week-exhibit-opening-and-partnerships/'},
{tag:'ALA · 2015',title:'Summer Teen Intern Grant recipient',text:'The American Library Association lists Chantell McDowell of Worcester Public Library among its 2015 grant recipients.',url:'https://www.ala.org/news/press-releases/2015/02/2015-summer-teen-intern-grant-recipients-announced'},
{tag:'WBUR · 2014',title:'Reading, smiles & Worcester',text:'WBUR’s coverage of Worcester’s World Smile Day reading initiative includes Dr. McDowell as the library’s youth-services coordinator.',url:'https://www.wbur.org/news/2014/10/03/smiley-face-50-year-old'},
{tag:'ALA NEAL-SCHUMAN · 2013',title:'Published practice. National reach.',text:'The publisher’s book page documents Serving At-Risk Teens and Dr. McDowell’s community outreach and professional background.',url:'https://alastore.ala.org/content/serving-risk-teens-proven-strategies-and-programs-bridging-gap'}
];
const pressMarkup=()=>articles.map(a=>`<a class="pressitem" href="${a.url}" target="_blank" rel="noopener"><small>${a.tag}</small><h3>${a.title} <span>↗</span></h3><p>${prominentNames(a.text)}</p></a>`).join('');
const process=[['Imagine','Start with people. Define the problem, audience and purpose. A representative studio brief: create a personalized desk organizer that supports a learner’s workspace.'],['Design','Sketch alternatives, model dimensions in Blender or CAD, and consider material, strength, accessibility and time.'],['Prototype','Make a small first version. Check scale, fit and geometry before investing in a complete fabrication run.'],['Fabricate','Prepare the machine and material, follow equipment-specific safety guidance, and produce the piece using 3D printing, CNC or another suitable process.'],['Test & refine','Check function, gather user feedback, adjust the model and repeat. Document both successful decisions and changes.'],['Share','Present the finished piece with its design story, process documentation and lessons learned. Connect the build to a portfolio or enterprise idea.']];
let discovered=new Set();
try{const saved=JSON.parse(localStorage.getItem('chantell-studios')||'[]');if(Array.isArray(saved))discovered=new Set(saved.filter(id=>studios.some(s=>s.id===id)));}catch{}
function counter(){
 $('#visited').textContent=`${discovered.size} / ${studios.length}`;
 document.querySelectorAll('.building-plate').forEach(b=>b.classList.toggle('visited',discovered.has(b.dataset.studio)));
}
const dialog=$('#detail');
function openStudio(id){
 const s=studios.find(x=>x.id===id);if(!s)return;
 discovered.add(id);try{localStorage.setItem('chantell-studios',JSON.stringify([...discovered]))}catch{}counter();
 $('#detailbody').innerHTML=`<div class="dialog-person">Dr. Chantell McDowell</div><p class="eyebrow" style="color:#a91068">${s.kicker}</p><h2>${s.name}</h2>${prominentNames(s.content)}<div class="dialognav"><button id="nextstudio">Next building</button></div>`;
 document.querySelectorAll('[data-close-dialog]').forEach(a=>a.onclick=()=>dialog.close());
 if(!dialog.open)dialog.showModal();dialog.scrollTop=0;
 $('#nextstudio').onclick=()=>openStudio(studios[(studios.indexOf(s)+1)%studios.length].id);
 if(s.id==='press')$('#dialogpress').innerHTML=pressMarkup();
 if(s.id==='fabrication'){
  $('#process').innerHTML=process.map((p,i)=>`<button data-stage="${i}" class="${i===0?'active':''}">${i+1}. ${p[0]}</button>`).join('');
  const show=i=>{$('#stage').innerHTML=`<h3>${process[i][0]}</h3><p>${process[i][1]}</p>`;document.querySelectorAll('[data-stage]').forEach(b=>b.classList.toggle('active',+b.dataset.stage===i));};
  show(0);document.querySelectorAll('[data-stage]').forEach(b=>b.onclick=()=>show(+b.dataset.stage));
 }
 if(s.id==='nexus'){
  const actions=document.createElement('div');actions.className='nexus-actions';
  actions.innerHTML=`${link(nexusURL,'Open MakeHERspace Nexus')}${link('https://makeherspace.org','Visit makeHERspace.org')}<a class="detail-link" href="#nexus" id="nexus-overview">Nexus pathways overview</a>`;
  $('#detailbody .dialognav').before(actions);
  $('#nexus-overview').onclick=()=>dialog.close();
  $('#check').onclick=()=>{
   const selected=document.querySelector('[name="answer"]:checked');
   $('#feedback').textContent=selected?(selected.value==='1'?'Exactly. Feedback turns a first version into a stronger solution.':'Try again. Testing reveals what a prototype needs before it is scaled.'):'Choose an answer first.';
  };
 }
}
$('.close').onclick=()=>dialog.close();
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
$('#cards').innerHTML=studios.map(s=>`<button class="card" data-studio="${s.id}" style="--accent:${s.color}"><small>${s.kicker}</small><h3>${s.name}</h3><p>${s.desc}</p><b>Step inside</b></button>`).join('');
$('#building-plates').innerHTML=studios.map((s,i)=>`<button class="building-plate" data-studio="${s.id}" style="left:${s.place.plateX*100}%;top:${s.place.plateY*100}%" aria-label="Open ${s.name} portfolio building"><span class="plate-number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><span>${s.name}</span></button>`).join('');
document.querySelectorAll('[data-studio]').forEach(b=>b.onclick=()=>openStudio(b.dataset.studio));
$('#pressgrid').innerHTML=pressMarkup();counter();
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
const scrollMode=()=>reducedMotion.matches?'auto':'smooth';
$('#readbtn').onclick=()=>{$('#index').scrollIntoView({behavior:scrollMode()});};
$('#mapbtn').onclick=()=>{$('.world').scrollIntoView({behavior:scrollMode()});$('#world').focus({preventScroll:true});};
$('#welcome-enter').onclick=()=>$('#mapbtn').click();


// Live people and taxis move over the original city illustration.
// Gold nameplates remain real HTML buttons for keyboard and touch access.
const canvas=$('#world'),ctx=canvas.getContext('2d');
const spriteBounds=[[104,30,305,478],[487,30,684,480],[858,30,1050,478],[1247,27,1442,481],[83,527,292,966],[445,527,689,962],[809,540,1105,933],[1148,577,1524,918]];
const atlas=new Image();atlas.src='assets/city-sprites.webp';
let W=1536,H=1024,dpr=1,elapsed=0,previous=0,lastDraw=0;
const keys=new Set();const startPosition={x:.388,y:.585};let car={...startPosition};let nearest=null;
let paused=reducedMotion.matches,visible=true,lastNear='';
const pedestrianPaths=[
 {sprite:0,a:[.35,.68],b:[.37,.79],duration:27,phase:0},
 {sprite:1,a:[.404,.510],b:[.452,.548],duration:25,phase:4},
 {sprite:2,a:[.688,.863],b:[.739,.908],duration:23,phase:12},
 {sprite:3,a:[.61,.795],b:[.68,.855],duration:26,phase:7},
 {sprite:4,a:[.289,.833],b:[.326,.852],duration:28,phase:18},
 {sprite:5,a:[.84,.30],b:[.90,.345],duration:24,phase:9},
 {sprite:6,a:[.232,.933],b:[.294,.943],duration:32,phase:14}
];
const taxiRoutes=[
 [[.02,.82],[.058,.863],[.092,.902],[.128,.943]],
 [[.558,.899],[.598,.925],[.635,.962],[.660,.983]]
];
function resize(){const r=canvas.getBoundingClientRect();W=r.width;H=r.height;dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);drawScene();}
function drawSprite(index,x,y,width,flip=false,bob=0){
 if(!ctx||!atlas.complete||!atlas.naturalWidth)return;
 const [left,top,right,bottom]=spriteBounds[index];const padding=3;
 const sx=Math.max(0,left-padding),sy=Math.max(0,top-padding);
 const sw=Math.min(atlas.naturalWidth,right+padding)-sx,sh=Math.min(atlas.naturalHeight,bottom+padding)-sy;
 const h=index===7?width*W/1536*sh/sw:width*W/1536;
 const w=h*sw/sh;
 ctx.save();ctx.translate(x*W,y*H+bob*W/1536);if(flip)ctx.scale(-1,1);
 ctx.drawImage(atlas,sx,sy,sw,sh,-w/2,-h,w,h);ctx.restore();
}
function pointOnRoute(route,fraction){
 const distances=route.slice(1).map((p,i)=>Math.hypot(p[0]-route[i][0],(p[1]-route[i][1])*2/3));
 const total=distances.reduce((a,b)=>a+b,0);let distance=fraction*total;
 for(let i=0;i<distances.length;i++){
  if(distance<=distances[i]||i===distances.length-1){const ratio=Math.min(1,distance/distances[i]);return{x:route[i][0]+(route[i+1][0]-route[i][0])*ratio,y:route[i][1]+(route[i+1][1]-route[i][1])*ratio,flip:route[i+1][0]>route[i][0]};}
  distance-=distances[i];
 }
 return{x:route[0][0],y:route[0][1],flip:false};
}
function updateNearest(){
 nearest=studios.map(s=>({studio:s,distance:Math.hypot((s.place.x-car.x),(s.place.y-car.y)*2/3)})).sort((a,b)=>a.distance-b.distance)[0];
 if(nearest.distance>.15)nearest=null;else nearest=nearest.studio;
 const next=nearest?nearest.id:'';
 if(next!==lastNear){
  $('#hint').textContent=nearest?`${nearest.name} · Press Enter or select its gold nameplate.`:'Select a gold nameplate to step inside.';
  $('#interact').textContent=nearest?`Enter ${nearest.name}`:'Portfolio index';
  document.querySelectorAll('.building-plate').forEach(b=>b.classList.toggle('nearby',b.dataset.studio===next));lastNear=next;
 }
 $('#you-marker').style.left=`${car.x*100}%`;$('#you-marker').style.top=`${(car.y-.058)*100}%`;
}
function drawScene(){
 if(!ctx)return;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);
 const actors=pedestrianPaths.map(path=>{
  const progress=(elapsed+path.phase)%path.duration/path.duration;
  const amount=progress<.5?progress*2:2-progress*2;
  const x=path.a[0]+(path.b[0]-path.a[0])*amount,y=path.a[1]+(path.b[1]-path.a[1])*amount;
  return{y,draw:()=>drawSprite(path.sprite,x,y,42,progress>.5,path.sprite===6?0:Math.sin((elapsed+path.phase)*7)*.8)};
 });
 taxiRoutes.forEach((route,i)=>{const phase=(elapsed/(36+i*11)+i*.46)%1;const location=pointOnRoute(route,phase<.5?phase*2:2-phase*2);actors.push({y:location.y,draw:()=>drawSprite(7,location.x,location.y,78,phase<.5?location.flip:!location.flip)});});
 actors.push({y:car.y,draw:()=>drawSprite(7,car.x,car.y,82,keys.has('right')||keys.has('d')||keys.has('arrowright'))});
 actors.sort((a,b)=>a.y-b.y).forEach(actor=>actor.draw());updateNearest();
}
function animate(now){
 const dt=Math.min((now-previous)/1000,.04)||.016;previous=now;
 if(visible&&!document.hidden){
  const dx=(keys.has('right')||keys.has('d')||keys.has('arrowright')?1:0)-(keys.has('left')||keys.has('a')||keys.has('arrowleft')?1:0);
  const dy=(keys.has('down')||keys.has('s')||keys.has('arrowdown')?1:0)-(keys.has('up')||keys.has('w')||keys.has('arrowup')?1:0);
  if(!dialog.open&&(dx||dy)){const length=Math.hypot(dx,dy);car.x=Math.max(.055,Math.min(.95,car.x+dx/length*.10*dt));car.y=Math.max(.22,Math.min(.975,car.y+dy/length*.15*dt));}
  if(!paused&&!dialog.open)elapsed+=dt;
  if(now-lastDraw>1000/30&&(!paused||keys.size)){drawScene();lastDraw=now;}
 }
 requestAnimationFrame(animate);
}
function updateMotion(){const button=$('#motion');button.textContent=paused?'Play city':'Pause city';button.setAttribute('aria-pressed',String(paused));drawScene();}
$('#motion').onclick=()=>{paused=!paused;updateMotion();};
reducedMotion.addEventListener('change',e=>{paused=e.matches;updateMotion();});
new ResizeObserver(resize).observe(canvas);resize();
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)drawScene();}).observe(canvas);
atlas.onload=()=>drawScene();
atlas.onerror=()=>{$('#you-marker').hidden=true;$('#motion').disabled=true;};
updateMotion();requestAnimationFrame(animate);
canvas.addEventListener('keydown',e=>{
 const key=e.key.toLowerCase();if(!['arrowup','arrowdown','arrowleft','arrowright','w','a','s','d','enter','r'].includes(key))return;
 e.preventDefault();if(key==='enter'&&nearest)openStudio(nearest.id);else if(key==='r')reset();else keys.add(key);
});
window.addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()));
window.addEventListener('blur',()=>keys.clear());document.addEventListener('visibilitychange',()=>{if(document.hidden)keys.clear();});dialog.addEventListener('close',()=>{keys.clear();drawScene();});
canvas.addEventListener('click',e=>{
 const r=canvas.getBoundingClientRect();const x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
 const hit=studios.find(s=>{const [left,top,right,bottom]=s.place.rect;return x>=left&&x<=right&&y>=top&&y<=bottom;});
 if(hit)openStudio(hit.id);else canvas.focus({preventScroll:true});
});
function reset(){car={...startPosition};keys.clear();drawScene();}
$('#reset').onclick=reset;$('#interact').onclick=()=>nearest?openStudio(nearest.id):$('#readbtn').click();
document.querySelectorAll('[data-dir]').forEach(button=>{
 button.addEventListener('pointerdown',e=>{e.preventDefault();button.setPointerCapture(e.pointerId);keys.add(button.dataset.dir);});
 for(const event of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(event,()=>keys.delete(button.dataset.dir));
});

// Return to the paused recording without reloading the presentation.
document.addEventListener('click',e=>{if(e.target.closest('[data-return-presentation]')&&window.parent!==window){e.preventDefault();window.parent.postMessage({type:'portfolio-close'},window.location.origin)}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!dialog.open&&window.parent!==window){e.preventDefault();window.parent.postMessage({type:'portfolio-close'},window.location.origin)}});
