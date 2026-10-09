import { readFile, writeFile, mkdir, copyFile, rm, cp } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Publish the saved narration as a public page; preserve the original files.
const here = dirname(fileURLToPath(import.meta.url));
const output = join(here, 'web');
const creativeWorldUrl = 'https://makeherspace-creative-world.drchantellmcdowell.chatgpt.site';
const frontendUrl = 'https://github.com/Drchantell/Dr_Chantell_Tech_It_and_Go_frontend';
const backendUrl = 'https://github.com/Drchantell/Dr_Chantell_Tech_It_and_Go_frontend/tree/main/backend';
let html = await readFile(join(here, 'Dr_Chantells_Tech_It_and_Go_capstone_project_Interactive.html'), 'utf8');
const embedded = html.match(/<script id="data" type="application\/json">([\s\S]*?)<\/script>/);
if (!embedded) throw new Error('Saved presentation data is missing.');
const source = JSON.parse(embedded[1]);
if (source.slides.length !== 9 || source.chapters.at(-1).end !== 420) {
  throw new Error('Expected the nine-topic, seven-minute voice presentation.');
}
await rm(output, { recursive: true, force: true });
await mkdir(join(output, 'assets'), { recursive: true });
await mkdir(join(output, 'downloads'), { recursive: true });

async function asset(value, name, expectedType) {
  const match = value.match(/^data:([^;,]+);base64,([\s\S]+)$/);
  if (!match || match[1] !== expectedType) throw new Error(`Invalid ${name} asset.`);
  await writeFile(join(output, 'assets', name), Buffer.from(match[2], 'base64'));
  return `assets/${name}`;
}
const data = {
  slides: [],
  chapters: source.chapters.map(({ index, title, start, end, duration }) => ({ index, title, start, end, duration })),
};
for (let i = 0; i < source.slides.length; i++) {
  data.slides.push(await asset(source.slides[i], `slide-${i + 1}.png`, 'image/png'));
}
data.audio = await asset(source.audio, 'narration.m4a', 'audio/mp4');
data.video = await asset(source.video, 'app-walkthrough.mp4', 'video/mp4');
data.appUrl = 'assets/demo.html';
await writeFile(join(output, data.appUrl), Buffer.from(source.app, 'base64'));
// Show the portfolio during the closing remarks, after the 30-second app video.
// The original recording remains exactly seven minutes long.
const portfolioStart = Number((data.chapters[8].start + 30).toFixed(3));
data.chapters[8] = { ...data.chapters[8], title: 'App demonstration', end: portfolioStart, duration: 30 };
data.chapters.push({ index: 9, title: 'Creative World', start: portfolioStart, end: 420, duration: Number((420 - portfolioStart).toFixed(3)) });
data.slides.push('creative-world/assets/creative-city.webp');
data.portfolioUrl = 'creative-world/index.html#creative-city';
await cp(join(here, '..', 'creative-world'), join(output, 'creative-world'), { recursive: true, filter: path => !path.endsWith('README.md') });

function replace(before, after) {
  if (!html.includes(before)) throw new Error(`Saved presentation changed: ${before.slice(0, 60)}`);
  html = html.replace(before, after);
}
// External media lets recipients stream and seek the recording normally.
html = html.replace(embedded[0], `<script id="data" type="application/json">${JSON.stringify(data)}</script>`);
replace('<p>Your capstone, in your voice.</p>', '<p>Dr. Chantell’s capstone, in her voice.</p>');
replace('<small>Follow the timed presentation or explore each topic.</small>', '<small>Tap Start to play the slides and recorded voice. Turn your sound on.</small>');
replace('Your voice · 7 minutes', 'Recorded voice · 7 minutes');
replace('<span id="chapter">', '<button id="creativeWorld" class="portfolio-link" aria-haspopup="dialog">Creative World</button><span id="chapter">');
replace('1 / 9 · Introduction', '1 / 10 · Introduction');
replace('<button id="doneTopics">Explore topics</button>', `<button id="doneTopics">Explore topics</button><button id="doneCreativeWorld" class="portfolio-link" aria-haspopup="dialog">Explore Dr. Chantell’s Creative World</button><p class="source-links"><a href="${frontendUrl}" target="_blank" rel="noopener">Frontend GitHub</a> · <a href="${backendUrl}" target="_blank" rel="noopener">Backend GitHub</a></p>`);
replace('<span class="keytip">Space: play / pause · Arrows: topics</span>', `<a id="mernGitHub" class="portfolio-link github-link" href="${frontendUrl}" target="_blank" rel="noopener" aria-label="Open the MERN frontend source on GitHub">MERN GitHub</a>`);
replace('</style>', `
.portfolio-link{display:inline-flex;align-items:center;justify-content:center;color:#26d9cf;background:#282032;border:1px solid #554064;border-radius:12px;padding:11px 14px;text-decoration:none;font-weight:700;white-space:nowrap}.portfolio-link:hover{background:#3f2b49;border-color:#26d9cf}.done-card .portfolio-link{margin:12px 0 0;white-space:normal}
.creative-frame{background:#1d102b;text-align:left}.creative-frame>img{position:absolute;left:440px;top:0;width:840px;height:720px;object-fit:cover}.creative-copy{display:block;position:absolute;inset:0 auto 0 0;width:440px;padding:46px 38px;background:#1d102b}.creative-kicker{display:block;font-size:19px;letter-spacing:2px;color:#26d9cf;font-weight:700}.creative-title{display:block;margin:24px 0;font-size:57px;line-height:1.05;font-weight:700;color:#ff52ad}.creative-description{display:block;font-size:25px;line-height:1.38;color:#eee5fa}.creative-cities{display:block;font-size:18px;line-height:1.5;margin:22px 0;color:#bfa6df}.creative-cta{display:inline-block;border:2px solid #26d9cf;border-radius:12px;padding:14px 18px;font-size:25px;font-weight:700;color:#26d9cf}.creative-hint{display:block;margin-top:20px;font-size:20px;line-height:1.4;color:#eee5fa}
#portfolioFrame{width:100%;flex:1;border:0;background:#171122;min-height:0}.portfolio-tools{padding:9px 22px;background:#15101e;font-size:13px}.portfolio-tools a{color:#26d9cf}.portfolio-tools a+a{margin-left:22px}
.source-links a{color:#26d9cf}.github-link{font-size:12px;padding:9px 11px}@media(max-width:1100px){footer{height:184px}main{bottom:184px}.controls{flex-wrap:wrap}#chapter{flex-basis:100%;order:2;margin:3px 0;font-size:13px}}
@media(max-width:800px){footer{height:184px}main{bottom:184px}.controls .portfolio-link{font-size:12px;padding:9px 11px}.portfolio-tools{padding:8px 12px}.portfolio-tools a{display:inline-block;margin:3px 10px 3px 0}.portfolio-tools a+a{margin-left:0}}
</style>`);
replace('<div id="status" aria-live="polite"></div>', `<div id="portfolioModal" class="modal" hidden role="dialog" aria-modal="true" aria-labelledby="portfolioTitle"><div class="modal-header"><div><h2 id="portfolioTitle">Dr. Chantell’s Creative World</h2><p>Drive the yellow taxi or select a gold nameplate to explore her portfolio.</p></div><button id="closePortfolio" class="primary">Back to presentation</button></div><div class="portfolio-tools"><a href="creative-world/index.html#creative-city" target="_blank" rel="noopener">Open Creative World in a new tab</a><a href="${creativeWorldUrl}" target="_blank" rel="noopener">Visit the public portfolio</a><a href="${frontendUrl}" target="_blank" rel="noopener">Frontend GitHub</a><a href="${backendUrl}" target="_blank" rel="noopener">Backend GitHub</a></div><iframe id="portfolioFrame" title="Dr. Chantell’s interactive Creative World portfolio"></iframe></div><div id="status" aria-live="polite"></div>`);
replace('</head>', '<meta name="description" content="Dr. Chantell McDowell’s seven-minute Tech It &amp; Go! capstone with her recorded voice, an interactive app demo and her Creative World portfolio."></head>');
replace('</style>', '\n#playbackNotice{position:fixed;top:86px;left:50%;transform:translateX(-50%);z-index:30;width:min(90vw,620px);padding:16px;background:#20142b;border:2px solid #ff1493;border-radius:12px;text-align:center;line-height:1.5}#playbackNotice a{color:#26d9cf;font-weight:700}\n</style>');
replace('<audio id="narration" preload="metadata"></audio>', '<audio id="narration" preload="metadata"></audio><div id="playbackNotice" role="status" aria-live="polite" hidden><span id="playbackMessage"></span> <a href="assets/narration.m4a" target="_blank" rel="noopener">Open recording</a></div>');
replace('audio.src=D.audio;', 'audio.src=D.audio;audio.muted=false;audio.volume=1;');
replace('world.appendChild(frame);return frame;', `if(i===D.slides.length-1){frame.classList.add('creative-frame');frame.setAttribute('aria-label','Creative World: explore Dr. Chantell’s interactive portfolio city');const copy=document.createElement('span');copy.className='creative-copy';copy.innerHTML='<span class="creative-kicker">DR. CHANTELL McDOWELL</span><span class="creative-title">My Creative World</span><span class="creative-description">Leadership, libraries, technology and community, connected through one interactive city.</span><span class="creative-cities">Charlotte · Brooklyn · NYC · Seoul</span><span class="creative-cta">Explore the city →</span><span class="creative-hint">Drive a yellow taxi. Open nine portfolio buildings.</span>';frame.appendChild(copy);frame.onclick=()=>{jump(i);showCreativeWorld()}}world.appendChild(frame);return frame;`);
replace("const fmt=t=>", "world.style.height=(Math.ceil(D.slides.length/3)*900-180)+'px';\nconst fmt=t=>");
replace('s=Math.min((w-45)/4280,(h-35)/2520);x=(w-4280*s)/2;y=(h-2520*s)/2', 'const gridHeight=Math.ceil(D.slides.length/3)*900-180;s=Math.min((w-45)/4280,(h-35)/gridHeight);x=(w-4280*s)/2;y=(h-gridHeight*s)/2');
replace('current=Math.max(0,Math.min(8,i))', 'current=Math.max(0,Math.min(D.chapters.length-1,i))');
replace("(current+1)+' / 9 · '", "(current+1)+' / '+D.chapters.length+' · '");
replace('if(i<0)i=8', 'if(i<0)i=D.chapters.length-1');
replace("$('appModal').hidden)focus(i)", "$('appModal').hidden&&$('portfolioModal').hidden)focus(i)");
replace("async function play(){if(overview)focus(current);$('splash').hidden=true;$('done').hidden=true;if(audio.currentTime>=419.9){audio.currentTime=0;focus(0)}try{await audio.play()}catch(e){$('status').textContent='Press Play to start the recording.'}sync();}", "async function play(){if(overview)focus(current);$('done').hidden=true;$('playbackNotice').hidden=true;if(audio.currentTime>=419.9){audio.currentTime=0;focus(0)}try{await audio.play();$('splash').hidden=true}catch(e){$('playbackMessage').textContent='Tap Start or Play to hear the recording. If playback is blocked, open this page in Safari, Chrome, or Edge.';$('playbackNotice').hidden=false}sync();}");
replace("const bytes=Uint8Array.from(atob(D.app),c=>c.charCodeAt(0));$('appFrame').srcdoc=new TextDecoder().decode(bytes);", "$('appFrame').removeAttribute('srcdoc');$('appFrame').src=D.appUrl;");
replace("$('appFrame').srcdoc='';", "$('appFrame').src='about:blank';");
replace("$('start').onclick=play;", `let portfolioReturnFocus=null,resumeAfterPortfolio=false;
function showCreativeWorld(){portfolioReturnFocus=document.activeElement;resumeAfterPortfolio=!audio.paused;pause();$('portfolioModal').hidden=false;document.querySelectorAll('body > header, body > main, body > footer').forEach(el=>el.inert=true);$('portfolioFrame').src=D.portfolioUrl;$('closePortfolio').focus()}
function closePortfolio(){const resume=resumeAfterPortfolio;$('portfolioModal').hidden=true;$('portfolioFrame').src='about:blank';document.querySelectorAll('body > header, body > main, body > footer').forEach(el=>el.inert=false);if(portfolioReturnFocus)portfolioReturnFocus.focus();if(resume)play()}
$('creativeWorld').onclick=showCreativeWorld;$('doneCreativeWorld').onclick=showCreativeWorld;$('closePortfolio').onclick=closePortfolio;$('mernGitHub').onclick=pause;
window.addEventListener('message',e=>{if(e.origin===location.origin&&e.source===$('portfolioFrame').contentWindow&&e.data?.type==='portfolio-close')closePortfolio()});
$('start').onclick=play;`);
replace("document.addEventListener('keydown',e=>{", "document.addEventListener('keydown',e=>{if(!$('portfolioModal').hidden){if(e.key==='Escape'){e.preventDefault();closePortfolio()}return}");
replace("window.addEventListener('resize',camera);focus(0);sync();", "audio.addEventListener('error',()=>{$('playbackMessage').textContent='The recording could not load. Refresh this page and tap Start again.';$('playbackNotice').hidden=false});window.addEventListener('resize',camera);focus(0);sync();");
await writeFile(join(output, 'index.html'), html);
for (const name of ['Dr_Chantells_Tech_It_and_Go_capstone_project.pptx', 'Dr_Chantells_Tech_It_and_Go_capstone_project_Extended.pptx']) {
  await copyFile(join(here, name), join(output, 'downloads', name));
}
console.log('Published ten topics, the unchanged seven-minute recording, app walkthrough, Creative World, and both PowerPoint downloads.');
